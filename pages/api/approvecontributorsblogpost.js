import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  try {
    const { id, status } = req.body;

    // Construct the SQL query with placeholders for each non-empty field
    let query = 'UPDATE informatioblog SET ';
    const values = [id];

    if (status) {
      query += 'status = $' + (values.length + 1) + ', ';
      values.push(status);
    }

    // Remove the trailing comma
    query = query.slice(0, -2);

    // Add the WHERE clause
    query += ' WHERE id = $1';

    await sql.query(query, values);

    res.status(200).json({ message: 'Blog post approved successfully' });
    console.log('Blog post approved successfully');
  } catch (error) {
    console.error('Error updating data in PostgreSQL:', error);
    res
      .status(500)
      .json({ error: 'Error updating data in PostgreSQL', details: error.message });
  }
}
