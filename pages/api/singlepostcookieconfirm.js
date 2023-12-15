import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import cookie from "cookie"
import jwt from 'jsonwebtoken';


const app = express();

app.use(express.json());
app.use(cookieParser());

export default async function handler(req, res) {
    const cookietoken = req.cookies.blogpostcookie;

    if (!cookietoken) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    try {
      const decodedToken = jwt.verify(cookietoken, process.env.BLOGCOOKIE);
      res.status(200).json({ singlepost: decodedToken });
    } catch (error) {
      res.status(401).json({ message: 'Unauthorized' });
    }
}
