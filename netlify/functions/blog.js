import { Handler } from '@netlify/functions';
import { createClient } from '@libsql/client';

const client = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN
});

export const handler = async (event, context) => {
  const { httpMethod, path, body } = event;

  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle OPTIONS request for CORS preflight
  if (httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers
    };
  }

  try {
    // POST new blog post
    if (httpMethod === 'POST') {
      const { title, excerpt, content, image, category, author } = JSON.parse(body);
      const date = new Date().toISOString().split('T')[0];
      const readTime = `${Math.ceil(content.length / 1000)} min read`;
      const slug = title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');

      const result = await client.execute({
        sql: `INSERT INTO posts (title, slug, excerpt, content, image, category, author, date, readTime) 
              VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        args: [title, slug, excerpt, content, image, category, author, date, readTime]
      });

      return {
        statusCode: 201,
        headers,
        body: JSON.stringify({ 
          id: result.lastInsertRowid,
          title,
          slug,
          excerpt,
          content,
          image,
          category,
          author,
          date,
          readTime
        })
      };
    }

    // GET all posts
    if (httpMethod === 'GET' && !event.pathParameters?.slug) {
      const result = await client.execute('SELECT * FROM posts ORDER BY date DESC');
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(result.rows)
      };
    }

    // GET single post by slug
    if (httpMethod === 'GET' && event.pathParameters?.slug) {
      const { slug } = event.pathParameters;
      const result = await client.execute({
        sql: 'SELECT * FROM posts WHERE slug = ?',
        args: [slug]
      });
      
      if (!result.rows[0]) {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ error: 'Post not found' })
        };
      }

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(result.rows[0])
      };
    }

    // PUT update blog post
    if (httpMethod === 'PUT' && event.pathParameters?.id) {
      const { id } = event.pathParameters;
      const { title, excerpt, content, image, category, author } = JSON.parse(body);
      const readTime = `${Math.ceil(content.length / 1000)} min read`;
      const slug = title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');

      await client.execute({
        sql: `UPDATE posts 
              SET title = ?, slug = ?, excerpt = ?, content = ?, 
                  image = ?, category = ?, author = ?, readTime = ?
              WHERE id = ?`,
        args: [title, slug, excerpt, content, image, category, author, readTime, id]
      });

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ message: 'Post updated successfully' })
      };
    }

    // DELETE blog post
    if (httpMethod === 'DELETE' && event.pathParameters?.id) {
      const { id } = event.pathParameters;
      
      await client.execute({
        sql: 'DELETE FROM posts WHERE id = ?',
        args: [id]
      });

      return {
        statusCode: 204,
        headers
      };
    }

    return {
      statusCode: 404,
      headers,
      body: JSON.stringify({ error: 'Not found' })
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message })
    };
  }
};