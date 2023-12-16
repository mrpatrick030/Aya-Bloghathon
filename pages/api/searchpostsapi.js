import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  try {
    const { query } = req.query;
    const searchTerm = `%${query}%`;

    const searchQuery =
      'SELECT * FROM informatioblog WHERE status=$1 AND (contributor ILIKE $2 OR title ILIKE $3 OR description ILIKE $4 OR category ILIKE $5) ORDER BY id DESC';
    const values = ['approved', searchTerm, searchTerm, searchTerm, searchTerm];

    // Use sql.query() and directly destructure the data property
    const data = await sql.query(searchQuery, values);

    if (data.rows.length > 0) {
      res.status(200).json(data.rows);
      console.log(data.rows);
    } else {
      res.status(404).json({ message: 'No results found' });
    }
  } catch (error) {
    console.error('Error querying data from PostgreSQL:', error);
    res.status(500).json({ error: 'Error querying data from PostgreSQL' });
  }
}
