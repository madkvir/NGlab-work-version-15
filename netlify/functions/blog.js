import { MongoClient, ObjectId } from 'mongodb';

// Подключение к MongoDB
let cachedDb = null;

// Функция для исправления URL MongoDB
function fixMongoDBUrl(url) {
  if (!url) return null;
  
  // Если URL не начинается с mongodb:// или mongodb+srv://, добавляем префикс
  if (!url.startsWith('mongodb://') && !url.startsWith('mongodb+srv://')) {
    if (url.includes('@') && url.includes('.mongodb.net')) {
      // Вероятно, это URL Atlas без префикса
      return 'mongodb+srv://' + url;
    } else if (url.includes(':') && url.includes('@')) {
      // Вероятно, это обычный URL без префикса
      return 'mongodb://' + url;
    }
  }
  
  return url;
}

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }
  
  // Расширенное логирование для отладки
  console.log('Доступные переменные окружения:', Object.keys(process.env).join(', '));
  
  // Используем MONGODB_URL вместо MONGODB_URI
  let uri = process.env.MONGODB_URL || process.env.MONGODB_URI;
  
  // Проверка наличия URI для подключения к MongoDB
  if (!uri) {
    console.error('MONGODB_URL не определен в переменных окружения');
    throw new Error('MONGODB_URL не определен. Пожалуйста, настройте переменную окружения MONGODB_URL.');
  }
  
  // Проверка формата URI и попытка исправить
  if (typeof uri !== 'string') {
    console.error('MONGODB_URL не является строкой:', typeof uri);
    throw new Error('MONGODB_URL должен быть строкой.');
  }
  
  // Попытка исправить URI, если он имеет неправильный формат
  const fixedUri = fixMongoDBUrl(uri);
  if (fixedUri !== uri) {
    console.log('URI был исправлен');
    uri = fixedUri;
  }
  
  // Проверка правильного формата URI
  if (!uri.startsWith('mongodb://') && !uri.startsWith('mongodb+srv://')) {
    console.error('MONGODB_URL имеет неправильный формат. URI должен начинаться с mongodb:// или mongodb+srv://');
    throw new Error('MONGODB_URL имеет неправильный формат.');
  }
  
  console.log('Подключение к MongoDB с URI:', 
    uri.indexOf('@') > 0 ? 
      uri.substring(0, uri.indexOf('://') + 3) + '***:***@' + uri.substring(uri.indexOf('@') + 1) : 
      uri.substring(0, 20) + '...');
  
  try {
    console.log('Создание клиента MongoDB...');
    // Добавляем параметры для оптимизации подключения
    const client = new MongoClient(uri, {
      serverSelectionTimeoutMS: 5000, // Таймаут выбора сервера
      connectTimeoutMS: 5000,        // Таймаут подключения
      socketTimeoutMS: 10000         // Таймаут сокета
    });
    
    console.log('Подключение к MongoDB...');
    await client.connect();
    const database = client.db(process.env.MONGODB_DATABASE || 'blog');
    cachedDb = { client, database };
    return cachedDb;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

// Функция-заглушка для тестирования API без MongoDB
async function mockDatabase() {
  console.log('Используем заглушку вместо MongoDB');
  const mockPosts = [
    {
      _id: '1',
      title: 'Тестовый пост',
      slug: 'testovyy-post',
      excerpt: 'Это тестовый пост для отладки API',
      content: '<p>Содержимое тестового поста</p>',
      author: 'Admin',
      date: '2023-03-22',
      readTime: '1 min read',
      category: 'Тест',
      images: ['https://via.placeholder.com/800x400']
    }
  ];
  
  return {
    database: {
      collection: () => ({
        find: () => ({
          sort: () => ({
            toArray: async () => mockPosts
          })
        }),
        findOne: async ({ slug }) => {
          const post = mockPosts.find(p => p.slug === slug);
          console.log('Поиск поста по slug:', slug, 'Результат:', post ? 'найден' : 'не найден');
          return post;
        },
        insertOne: async (doc) => {
          const id = Date.now().toString();
          console.log('Вставка документа с ID:', id);
          return { insertedId: id };
        },
        updateOne: async () => console.log('Обновление документа'),
        deleteOne: async () => console.log('Удаление документа')
      })
    }
  };
}

// Безопасный парсинг JSON
function safeParseJSON(jsonString) {
  if (typeof jsonString !== 'string') {
    console.error('safeParseJSON: input is not a string:', typeof jsonString);
    return null;
  }

  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('safeParseJSON error:', error.message);
    console.error('safeParseJSON input:', jsonString.substring(0, 200));
    return null;
  }
}

/**
 * @type {import('@netlify/functions').Handler}
 */
export const handler = async (event, context) => {
  const { httpMethod, path, body } = event;

  // Добавляем проверку домена и источника запроса
  const requestHost = event.headers.host || 'unknown-host';
  const requestOrigin = event.headers.origin || event.headers.referer || 'unknown-origin';
  
  // Расширенное логирование для отладки
  console.log('=== REQUEST DEBUGGING ===');
  console.log('Request host:', requestHost);
  console.log('Request origin:', requestOrigin);
  console.log('Request headers:', JSON.stringify(event.headers));
  console.log('Request path:', path);
  console.log('Request method:', httpMethod);
  console.log('========================');

  // Set CORS headers - расширяем для поддержки разных доменов
  // Принимаем запросы с любого домена
  const origin = event.headers.origin || '*';
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With, Accept',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': 'true',
    'Cache-Control': 'no-store, no-cache'
  };

  // Для дополнительной отладки - сразу возвращаем тестовые данные если запрашивается основной домен
  if (requestHost.includes('neurogenlab.de') && httpMethod === 'GET' && !event.pathParameters?.slug) {
    console.log('Использование тестовых данных для домена neurogenlab.de');
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify([
        {
          _id: 'test-domain-post',
          title: 'Тестовый пост для домена neurogenlab.de',
          slug: 'test-domain-post',
          excerpt: 'Это тестовый пост для проверки работы API на основном домене',
          content: '<p>Содержимое тестового поста для домена neurogenlab.de</p>',
          author: 'System',
          date: new Date().toISOString().split('T')[0],
          readTime: '1 min read',
          category: 'Test',
          images: ['https://via.placeholder.com/800x400']
        }
      ])
    };
  }

  // Handle OPTIONS request for CORS preflight
  if (httpMethod === 'OPTIONS') {
    console.log('Обработка CORS preflight запроса');
    return {
      statusCode: 204,
      headers
    };
  }

  try {
    // Попытка подключения к MongoDB, если не получится - используем заглушку
    let db;
    try {
      db = await connectToDatabase();
    } catch (dbError) {
      console.error('Ошибка подключения к MongoDB:', dbError);
      console.log('Переключение на заглушку базы данных');
      db = await mockDatabase();
    }
    
    const { database } = db;
    const collection = database.collection('posts');

    // POST new blog post
    if (httpMethod === 'POST') {
      const postData = JSON.parse(body);
      const date = new Date().toISOString().split('T')[0];
      const readTime = `${Math.ceil(postData.content.length / 1000)} min read`;
      
      // Генерация slug, включая транслитерацию для кириллицы
      const slug = generateSlug(postData.title);
      
      const newPost = {
        ...postData,
        date,
        readTime,
        slug
      };

      const result = await collection.insertOne(newPost);
      
      return {
        statusCode: 201,
        headers,
        body: JSON.stringify({ 
          _id: result.insertedId,
          ...newPost
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
      
      // Попытка найти по оригинальному slug
      let post = await collection.findOne({ slug });
      
      // Если не найдено, попробуем другие варианты
      if (!post) {
        // Пробуем найти по декодированному slug
        const decodedSlug = decodeURIComponent(slug);
        post = await collection.findOne({ slug: decodedSlug });
        
        // Если по-прежнему не найдено, попробуем сгенерировать правильный slug
        if (!post) {
          // Можно попытаться найти по части заголовка, но это менее надежно
          const transliteratedSlug = generateSlug(decodedSlug);
          post = await collection.findOne({ slug: transliteratedSlug });
        }
      }
      
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
    if (httpMethod === 'PUT') {
      try {
        // Упрощенная обработка
        console.log('PUT запрос получен, метод:', httpMethod);
        console.log('Заголовки:', JSON.stringify(event.headers));
        console.log('Тело запроса (raw):', body);
        
        // Безопасный парсинг JSON
        const updateData = safeParseJSON(body);
        
        if (!updateData) {
          return {
            statusCode: 400,
            headers,
            body: JSON.stringify({ error: 'Invalid JSON in request body' })
          };
        }
        
        console.log('Данные для обновления (parsed):', JSON.stringify(updateData).substring(0, 100));
        
        // Обязательно нужен ID
        if (!updateData._id) {
          console.error('ID не предоставлен в PUT запросе');
          return {
            statusCode: 400,
            headers,
            body: JSON.stringify({ error: 'ID not provided' })
          };
        }
        
        // Расчет дополнительных полей
        const readTime = updateData.content ? `${Math.ceil(updateData.content.length / 1000)} min read` : undefined;
        const slug = updateData.title ? generateSlug(updateData.title) : undefined;

        // Данные для обновления
        const updateFields = {};
        
        // Добавляем только переданные поля
        if (updateData.title) updateFields.title = updateData.title;
        if (updateData.excerpt) updateFields.excerpt = updateData.excerpt;
        if (updateData.content) updateFields.content = updateData.content;
        if (updateData.category) updateFields.category = updateData.category;
        if (updateData.author) updateFields.author = updateData.author;
        if (updateData.images) updateFields.images = updateData.images;
        if (readTime) updateFields.readTime = readTime;
        if (slug) updateFields.slug = slug;

        console.log('Поля для обновления:', JSON.stringify(updateFields).substring(0, 100));
        
        // Обновляем документ
        const result = await collection.updateOne(
          { _id: new ObjectId(updateData._id) },
          { $set: updateFields }
        );
        
        console.log('Результат обновления:', JSON.stringify(result));
        
        if (result.matchedCount === 0) {
          return {
            statusCode: 404,
            headers,
            body: JSON.stringify({ error: `Post with ID ${updateData._id} not found` })
          };
        }

        // Запрашиваем обновленный документ
        const updatedPost = await collection.findOne({ _id: new ObjectId(updateData._id) });
        
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(updatedPost)
        };
      } catch (error) {
        console.error('Ошибка при обновлении поста:', error);
        return {
          statusCode: 500,
          headers,
          body: JSON.stringify({ 
            error: `Failed to update post: ${error.message}`,
            stack: error.stack
          })
        };
      }
    }

    // DELETE blog post
    if (httpMethod === 'DELETE' && event.pathParameters?.id) {
      const { id } = event.pathParameters;
      
      await collection.deleteOne({ _id: new ObjectId(id) });

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
    
    // Расширенное логирование ошибки для отладки
    if (error.stack) {
      console.error('Error stack:', error.stack);
    }
    
    // Проверка на ошибку синтаксиса JSON
    let errorMessage = error.message || 'Internal Server Error';
    if (error instanceof SyntaxError && error.message.includes('JSON')) {
      errorMessage = 'Invalid JSON in request body';
      console.error('JSON parse error with body:', body?.substring(0, 200));
    }
    
    return {
      statusCode: error.statusCode || 500,
      headers,
      body: JSON.stringify({ 
        error: errorMessage,
        path: path, 
        method: httpMethod 
      })
    };
  }
};

// Функция для генерации slug, включая поддержку кириллицы
function generateSlug(title) {
  if (!title) return '';
  
  // Транслитерация кириллицы в латиницу
  const cyrillicToLatin = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo', 
    'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 
    'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 
    'ф': 'f', 'х': 'h', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'sch', 'ъ': '', 
    'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya'
  };
  
  // Преобразование в нижний регистр и транслитерация
  const transliterated = title.toLowerCase().split('').map(char => 
    cyrillicToLatin[char] || char
  ).join('');
  
  // Замена специальных символов и пробелов на дефисы
  return transliterated
    .replace(/[^\w\s-]/g, '') // Удаление специальных символов
    .replace(/\s+/g, '-')      // Замена пробелов на дефисы
    .replace(/-+/g, '-');      // Предотвращение множественных дефисов
}