import { sql } from '@vercel/postgres';

export default async function handler(req, res) {

  try {
    const { full_name, email, phone, password, country, gender } = req.body;

    // Check if the email already exists
    const emailCheckQuery = 'SELECT * FROM informatiocontributors WHERE email = $1';
    const emailCheckResult = await sql.query(emailCheckQuery, [email]);

    if (emailCheckResult.rows.length > 0) {
      // If the email already exists, return an error response
      return res.status(400).json({ error: 'Admin already registered' });
    }

    // If the email is not already registered, proceed with the insertion
    const insertQuery = 'INSERT INTO informatiocontributors (full_name, email, phone, password, country, gender) VALUES ($1, $2, $3, $4, $5, $6)';
    const values = [full_name, email, phone, password, country, gender];

    const result = await sql.query(insertQuery, values);

    res.status(200).json({ message: 'Registered successfully' });
    console.log("Registered successfully", result);
  } catch (error) {
    console.error('Error registering in PostgreSQL:', error);
    res.status(500).json({ error: 'Error registering in PostgreSQL' });
  } 
}
