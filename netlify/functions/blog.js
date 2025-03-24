import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URL;
const dbName = process.env.MONGODB_DATABASE;

let cachedClient = null;

async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = await MongoClient.connect(uri);
  cachedClient = client;
  return client;
}

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
    const client = await connectToDatabase();
    const db = client.db(dbName);
    const collection = db.collection('posts');

    // POST new blog post
    if (httpMethod === 'POST') {
      const { title, excerpt, content, image, category, author } = JSON.parse(body);
      const date = new Date().toISOString().split('T')[0];
      const readTime = `${Math.ceil(content.length / 1000)} min read`;
      const slug = title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');

      const result = await collection.insertOne({
        title,
        slug,
        excerpt,
        content,
        image,
        category,
        author,
        date,
        readTime
      });

      return {
        statusCode: 201,
        headers,
        body: JSON.stringify({
          id: result.insertedId,
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
      const posts = await collection.find({}).sort({ date: -1 }).toArray();
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(posts)
      };
    }

    // GET single post by slug
    if (httpMethod === 'GET' && event.pathParameters?.slug) {
      const { slug } = event.pathParameters;
      const post = await collection.findOne({ slug });
      
      if (!post) {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ error: 'Post not found' })
        };
      }

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(post)
      };
    }

    // PUT update blog post
    if (httpMethod === 'PUT' && event.pathParameters?.id) {
      const { id } = event.pathParameters;
      const { title, excerpt, content, image, category, author } = JSON.parse(body);
      const readTime = `${Math.ceil(content.length / 1000)} min read`;
      const slug = title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');

      const result = await collection.updateOne(
        { _id: id },
        {
          $set: {
            title,
            slug,
            excerpt,
            content,
            image,
            category,
            author,
            readTime
          }
        }
      );

      if (result.matchedCount === 0) {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ error: 'Post not found' })
        };
      }

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ message: 'Post updated successfully' })
      };
    }

    // DELETE blog post
    if (httpMethod === 'DELETE' && event.pathParameters?.id) {
      const { id } = event.pathParameters;
      
      const result = await collection.deleteOne({ _id: id });

      if (result.deletedCount === 0) {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ error: 'Post not found' })
        };
      }

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