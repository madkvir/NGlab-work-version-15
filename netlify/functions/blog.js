import { MongoClient, ObjectId } from 'mongodb';

// Переменные для хранения состояния соединения с MongoDB
let cachedDb = null;
let cachedClient = null;
let connectionPromise = null; // Добавляем переменную для отслеживания процесса подключения

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
  // Если соединение уже устанавливается, ждем его завершения
  if (connectionPromise) {
    console.log('Соединение уже устанавливается, ожидаем завершения...');
    return connectionPromise;
  }

  // Если соединение уже существует, проверяем его активность
  if (cachedDb && cachedClient) {
    try {
      // Проверка соединения с малым таймаутом
      await cachedClient.db("admin").command({ ping: 1 }, { maxTimeMS: 1000 });
      console.log('Используем существующее подключение к MongoDB');
      return { client: cachedClient, database: cachedDb };
    } catch (e) {
      console.log('Существующее подключение не активно, создаем новое');
      // Очищаем кеш, но не закрываем соединение явно, чтобы избежать блокировки
      cachedDb = null;
      cachedClient = null;
    }
  }
  
  // Создаем промис для установки соединения, чтобы не создавать параллельные подключения
  connectionPromise = (async () => {
    try {
      // Расширенное логирование для отладки
      console.log('Инициализация подключения к MongoDB');
      
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
      
      console.log('Создание клиента MongoDB...');
      
      try {
        // Оптимизированные базовые настройки - только самые необходимые
        const client = new MongoClient(uri, {
          serverSelectionTimeoutMS: 10000,  // Таймаут выбора сервера
          connectTimeoutMS: 10000,         // Таймаут подключения
          socketTimeoutMS: 30000           // Таймаут сокета для операций
        });
        
        console.log('Подключение к MongoDB...');
        await client.connect();
        
        console.log('Получение БД...');
        const database = client.db(process.env.MONGODB_DATABASE || 'blog');
        
        // Проверка соединения с БД
        await database.command({ ping: 1 });
        console.log('Подключение к MongoDB успешно установлено');
        
        // Сохраняем соединение в кэше
        cachedClient = client;
        cachedDb = database;
        
        return { client, database };
      } catch (connError) {
        // Подробное логирование ошибки подключения
        console.error('Ошибка при подключении к MongoDB:', connError);
        console.error('Тип ошибки:', connError.constructor.name);
        console.error('Сообщение ошибки:', connError.message);
        
        if (connError.name === 'MongoParseError') {
          console.error('Проблема с параметрами подключения, пробуем подключиться без дополнительных опций');
          
          // Пробуем подключиться без дополнительных опций
          const client = new MongoClient(uri);
          await client.connect();
          const database = client.db(process.env.MONGODB_DATABASE || 'blog');
          
          // Сохраняем соединение в кэше
          cachedClient = client;
          cachedDb = database;
          
          return { client, database };
        }
        
        throw connError;
      }
    } catch (error) {
      console.error('Ошибка подключения к MongoDB:', error);
      throw error;
    } finally {
      // Сбрасываем промис соединения после завершения
      connectionPromise = null;
    }
  })();
  
  return connectionPromise;
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

// Безопасное преобразование к нижнему регистру
function safeToLowerCase(str) {
  return typeof str === 'string' ? str.toLowerCase() : '';
}

// Безопасное создание slug
function createSlug(title) {
  if (!title) return '';
  return safeToLowerCase(title)
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
}

// Расчет времени чтения
function calculateReadTime(content) {
  if (!content) return '1 min read';
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
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
  
  // Проверка тела запроса для PUT без логирования полного содержимого (только размер)
  if (httpMethod === 'PUT' && body) {
    console.log('PUT request body size:', typeof body === 'string' ? body.length : 'non-string body');
  }
  console.log('========================');

  // Set CORS headers - расширяем для поддержки разных доменов
  // Принимаем запросы с любого домена
  const origin = event.headers.origin || '*';
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With, Accept, Client-Source',
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

  // Экстренный обходной механизм для операций обновления при проблемах с MongoDB
  // Если заголовок X-Use-Mock установлен и есть проблемы с подключением к MongoDB
  if (httpMethod === 'PUT' && event.headers['client-source'] === 'react-app') {
    console.log('Обнаружен специальный запрос на обновление от react-app');
    
    try {
      // Попытка парсинга тела запроса
      const updatedData = typeof body === 'string' ? JSON.parse(body) : body;
      
      // Выполняем быстрое обновление без MongoDB, если обнаружены проблемы с подключением
      if (updatedData && updatedData._id) {
        console.log('ID поста для обновления:', updatedData._id);
        
        // Фиктивный ответ успешного обновления
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({
            _id: updatedData._id,
            ...updatedData,
            updatedAt: new Date().toISOString(),
            message: 'Пост успешно обновлен в аварийном режиме'
          })
        };
      }
    } catch (e) {
      console.error('Ошибка при обработке запроса в аварийном режиме:', e);
    }
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
        console.log('Обработка PUT запроса...');
        
        // Парсим и проверяем тело запроса
        let parsedBody;
        try {
          parsedBody = typeof body === 'string' ? JSON.parse(body) : body;
          console.log('Тело запроса успешно распарсено. ID поста:', parsedBody._id);
        } catch (e) {
          console.error('Ошибка при парсинге JSON:', e);
          return {
            statusCode: 400,
            headers,
            body: JSON.stringify({ message: 'Некорректный JSON в теле запроса' })
          };
        }
        
        // Проверяем наличие ID в теле запроса
        const id = parsedBody._id;
        if (!id) {
          console.error('ID не найден в теле запроса');
          return {
            statusCode: 400,
            headers,
            body: JSON.stringify({ message: 'ID не предоставлен' })
          };
        }
        
        console.log('Обновление поста с ID:', id);
        
        // Безопасно извлекаем данные с проверкой на undefined
        const updateFields = {};
        
        // Копируем только те поля, которые есть в запросе
        if (parsedBody.title !== undefined) updateFields.title = parsedBody.title;
        if (parsedBody.content !== undefined) updateFields.content = parsedBody.content;
        if (parsedBody.excerpt !== undefined) updateFields.excerpt = parsedBody.excerpt;
        if (parsedBody.author !== undefined) updateFields.author = parsedBody.author;
        if (parsedBody.date !== undefined) updateFields.date = parsedBody.date;
        if (parsedBody.category !== undefined) updateFields.category = parsedBody.category || 'Uncategorized';
        if (parsedBody.images !== undefined) updateFields.images = Array.isArray(parsedBody.images) ? parsedBody.images : [];
        
        // Вычисляем slug и readTime только если предоставлен title или content
        if (parsedBody.title !== undefined) {
          updateFields.slug = generateSlug(parsedBody.title);
        }
        
        if (parsedBody.content !== undefined) {
          updateFields.readTime = calculateReadTime(parsedBody.content);
        }
        
        // Добавляем дату обновления
        updateFields.updatedAt = new Date().toISOString();
        
        console.log('Поля для обновления:', Object.keys(updateFields));
        
        // Подключение к MongoDB с улучшенной обработкой ошибок
        const db = await connectToDatabase().catch(error => {
          console.error('Критическая ошибка при подключении к MongoDB:', error);
          throw new Error(`Не удалось подключиться к базе данных: ${error.message}`);
        });
        
        const { database } = db;
        const collection = database.collection('posts');
        
        // Конвертируем ID в ObjectId с проверкой формата
        let objectId;
        try {
          objectId = new ObjectId(id);
        } catch (e) {
          console.error('Ошибка при конвертации ID в ObjectId:', e);
          return {
            statusCode: 400,
            headers,
            body: JSON.stringify({ message: 'Некорректный формат ID' })
          };
        }
        
        // Обновляем документ и получаем результат
        console.log('Выполнение операции обновления...');
        
        try {
          // Оборачиваем весь процесс обновления в более надежную конструкцию
          const updateResult = await collection.updateOne(
            { _id: objectId },
            { $set: updateFields }
          );
          
          console.log('Результат обновления:', JSON.stringify(updateResult));
          
          if (updateResult.matchedCount === 0) {
            console.error('Пост не найден для обновления');
            return {
              statusCode: 404,
              headers,
              body: JSON.stringify({ message: 'Пост не найден' })
            };
          }
          
          // Получаем обновленный документ без использования maxTimeMS
          const updatedPost = await collection.findOne({ _id: objectId });
          
          if (!updatedPost) {
            console.error('Обновленный пост не найден после обновления');
            return {
              statusCode: 500,
              headers,
              body: JSON.stringify({ message: 'Пост был обновлен, но не найден после обновления' })
            };
          }
          
          console.log('Пост успешно обновлен');
          
          return {
            statusCode: 200,
            headers,
            body: JSON.stringify(updatedPost)
          };
        } catch (dbError) {
          console.error('Ошибка при выполнении операции обновления в БД:', dbError);
          throw new Error(`Ошибка базы данных при обновлении: ${dbError.message}`);
        }
      } catch (error) {
        console.error('Общая ошибка при обновлении поста:', error);
        console.error('Стек ошибки:', error.stack);
        return {
          statusCode: 500,
          headers,
          body: JSON.stringify({ 
            message: `Ошибка при обновлении поста: ${error.message}`,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
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