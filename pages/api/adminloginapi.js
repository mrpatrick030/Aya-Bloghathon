import { sql } from '@vercel/postgres';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import cookie from "cookie"
import jwt from 'jsonwebtoken';

const allowedOrigins = ['http://localhost:3000', 'https://informatio.vercel.app'];
const app = express();
app.use(cors({
  origin: allowedOrigins,
  methods: ['POST', 'GET'],
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

export default async function handler(req, res) {
  try {
    // Extract the email, password and secretkey from the request body
    const { email, password, secretkey } = req.body;

    // Define the SQL query with placeholders for email and password
    const query = 'SELECT * FROM informatioadmin WHERE email=$1 AND password=$2 AND secretkey=$3';
    const values = [email, password, secretkey];

    // Use sql.query() to execute the SQL query and fetch the data
    const data = await sql.query(query, values);

    // Check if data was retrieved
    if (data.rows.length > 0) {
      const admininfo = {
        // admin data
        full_name: data.rows[0].full_name,
        email: data.rows[0].email,
        gender: data.rows[0].gender,
      };

          // Create a JWT token
          const jwttoken = jwt.sign(admininfo, process.env.ADMINSIGNINCOOKIE);

          // Set the JWT token as a cookie using the 'cookie' package
          res.setHeader('Set-Cookie', cookie.serialize('admincookie', jwttoken, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            maxAge: 60 * 60 * 100, 
            sameSite: 'strict',
            path: '/',
          }));
    
      // If data is found, send it as a JSON response
      res.status(200).json(data.rows); // Extract rows from the data object
      console.log(data.rows);
    } else {
      // If no data is found, log an error message to the console
      console.log('Data not found in PostgreSQL');
      res.status(404).json({ message: 'Data not found in PostgreSQL' });
    }
  } catch (error) {
    // Handle errors and send an error response
    console.error('Error retrieving data from PostgreSQL database:', error);
    res.status(500).json({ error: 'Error retrieving data from PostgreSQL database' });
  }
}
