import { sql } from '@vercel/postgres';

export default async function handler(req, res) {

  try {
    const { id, contributor, image_link, video_link, title, date, description, category, status } = req.body;
    const query = 'INSERT INTO informatioblog (contributor, image_link, video_link, title, date, description, category) VALUES ($1, $2, $3, $4, $5, $6, $7)';
    const values = [contributor, image_link, video_link, title, date, description, category];

    await sql.query(query, values);

    res.status(200).json({ message: 'Blog post added successfully' });
    console.log("Blog post added successfully")
  } catch (error) {
    console.error('Error adding blog data in postgres datase:', error);
    res.status(500).json({ error: 'Error adding blog data in postgres database' });
  } 
}

