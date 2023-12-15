import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  try {
    const {
      id,
      image_link,
      video_link,
      title,
      date,
      description,
      category,
    } = req.body;

    // Construct the SQL query with placeholders for each non-empty field
    let query = 'UPDATE informatioblog SET ';
    const values = [id];

    if (image_link) {
      query += 'image_link = $' + (values.length + 1) + ', ';
      values.push(image_link);
    }

    if (video_link) {
      query += 'video_link = $' + (values.length + 1) + ', ';
      values.push(video_link);
    }

    if (title) {
      query += 'title = $' + (values.length + 1) + ', ';
      values.push(title);
    }

    if (date) {
      query += 'date = $' + (values.length + 1) + ', ';
      values.push(date);
    }

    if (description) {
      query += 'description = $' + (values.length + 1) + ', ';
      values.push(description);
    }

    if (category) {
      query += 'category = $' + (values.length + 1) + ', ';
      values.push(category);
    }

    // Remove the trailing comma
    query = query.slice(0, -2);

    // Add the WHERE clause
    query += ' WHERE id = $1';

    await sql.query(query, values);

    res.status(200).json({ message: 'Data updated successfully' });
    console.log('Data updated successfully');
  } catch (error) {
    console.error('Error updating data in PostgreSQL:', error);
    res
      .status(500)
      .json({ error: 'Error updating data in PostgreSQL', details: error.message });
  }
}
