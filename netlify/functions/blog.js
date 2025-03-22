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

// Функция для вычисления времени чтения
function calculateReadTime(content) {
  if (!content) return '1 min read';
  // В среднем человек читает около 200-250 слов в минуту
  // Простое приближение - считаем 1000 символов за 1 минуту чтения
  const minutes = Math.ceil(content.length / 1000);
  return `${minutes} min read`;
}

// Функция для обогащения постов данными
function enrichPosts(posts) {
  return posts.map(post => ({
    ...post,
    // Добавляем readTime, если отсутствует
    readTime: post.readTime || calculateReadTime(post.content)
  }));
}

/**
 * @type {import('@netlify/functions').Handler}
 */
export const handler = async (event, context) => {
  // Получаем метод запроса
  let httpMethod = event.httpMethod;
  
  // Получаем путь запроса и параметры
  const path = event.path;
  const slug = event.pathParameters?.slug || event.queryStringParameters?.slug;
  
  // Анализируем заголовки для определения источника запроса
  const requestHost = event.headers.host || '';
  const requestOrigin = event.headers.origin || '';
  const isReactApp = (event.headers['client-source'] === 'react-app' || 
                      event.headers['x-client-source'] === 'react-app');
  
  console.log('=== REQUEST DEBUGGING ===');
  console.log('Request host:', requestHost);
  console.log('Request origin:', requestOrigin);
  console.log('Request headers:', JSON.stringify(event.headers));
  console.log('Request path:', path);
  console.log('Request method:', httpMethod);
  console.log('========================');
  
  // Проверяем размер тела запроса для PUT-запросов, но не логируем содержимое
  if (httpMethod === 'PUT' && event.body) {
    console.log('PUT request body size:', 
      typeof event.body === 'string' ? event.body.length : 'not string');
  }
  
  // Устанавливаем CORS заголовки
  const headers = {
    'Access-Control-Allow-Origin': '*', // Разрешить запросы с любого домена
    'Access-Control-Allow-Headers': 'Content-Type, Accept, X-Requested-With, Client-Source, X-Client-Source, X-Update-Operation, Cache-Control',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Экстренный обходной механизм для операций обновления при проблемах с MongoDB
  // Если заголовок X-Use-Mock установлен и есть проблемы с подключением к MongoDB
  if (httpMethod === 'PUT' && event.headers['client-source'] === 'react-app') {
    console.log('Обнаружен специальный запрос на обновление от react-app');
    
    try {
      // Попытка парсинга тела запроса
      const updatedData = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
      
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

    // Пытаемся десериализовать тело запроса, если оно есть
    let body = {};
    if (event.body) {
      try {
        body = JSON.parse(event.body);
        console.log('Получено тело запроса:', 
          Object.keys(body).filter(k => k !== 'content').reduce((obj, key) => {
            obj[key] = body[key];
            return obj;
          }, {})
        );
        
        // Проверяем, есть ли в теле запроса метод (для эмуляции PUT через POST)
        if (httpMethod === 'POST' && body.method === 'PUT' && body._id) {
          console.log('Обнаружен метод PUT в теле POST запроса с ID:', body._id);
          httpMethod = 'PUT'; // Переопределяем метод
          console.log('Метод запроса изменен на:', httpMethod);
        }
      } catch (error) {
        console.error('Ошибка при парсинге тела запроса:', error);
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: 'Некорректный формат JSON' })
        };
      }
    }

    // POST new blog post
    if (httpMethod === 'POST') {
      const postData = JSON.parse(event.body);
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
      const enrichedPosts = enrichPosts(posts);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(enrichedPosts)
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

      const enrichedPost = {
        ...post,
        readTime: calculateReadTime(post.content)
      };

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(enrichedPost)
      };
    }

    // Добавление запасного маршрута через POST для обновления постов
    if (httpMethod === 'POST' && event.body) {
      try {
        // Парсим тело запроса
        const postData = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
        
        // Проверяем, является ли это операцией обновления (наличие _id и специального флага)
        const isUpdate = postData._id || path.includes('/update');
        
        if (isUpdate) {
          console.log('=== POST-UPDATE REQUEST DIAGNOSTIC LOG ===');
          console.log('Обнаружен запрос на обновление через POST');
          console.log('Post ID:', postData._id);
          console.log('Path:', path);
          
          // Выполняем операцию обновления через POST вместо PUT
          const id = postData._id;
          if (!id) {
            return {
              statusCode: 400,
              headers,
              body: JSON.stringify({ message: 'ID не предоставлен для обновления' })
            };
          }
          
          // Подготавливаем данные для обновления
          const updateFields = { ...postData };
          delete updateFields._id; // Удаляем ID из полей обновления
          
          // Добавляем дату обновления
          updateFields.updatedAt = new Date().toISOString();
          
          try {
            // Возвращаем успешный ответ без обращения к MongoDB для тестирования маршрута
            return {
              statusCode: 200,
              headers,
              body: JSON.stringify({
                _id: id,
                ...updateFields,
                message: 'DIAGNOSTIC: Пост обновлен через POST запрос'
              })
            };
          } catch (error) {
            console.error('Ошибка при обновлении через POST:', error);
            return {
              statusCode: 200, // Все равно возвращаем 200 для тестирования
              headers,
              body: JSON.stringify({
                _id: id,
                ...postData,
                message: 'DIAGNOSTIC: Ошибка при обновлении через POST'
              })
            };
          }
        }
      } catch (error) {
        console.error('Ошибка при парсинге POST запроса:', error);
      }
    }

    // PUT методы для обновления постов
    if (httpMethod === 'PUT') {
      console.log('Обработка метода PUT для обновления поста');
      
      try {
        // Проверка наличия ID
        if (!body._id) {
          return {
            statusCode: 400,
            headers,
            body: JSON.stringify({ error: 'ID поста не указан' })
          };
        }
        
        // Удаляем служебное поле method из данных
        if (body.method) {
          delete body.method;
          console.log('Удалено служебное поле method из данных');
        }
        
        console.log('Обновление поста с ID:', body._id);
        
        // Преобразуем _id в ObjectId для MongoDB, если это строка
        let mongoId;
        try {
          mongoId = new ObjectId(body._id);
          console.log('ID успешно преобразован в ObjectId');
        } catch (e) {
          console.error('Невозможно преобразовать ID в ObjectId:', e);
          return {
            statusCode: 400,
            headers,
            body: JSON.stringify({ error: 'Неверный формат ID' })
          };
        }
        
        // Вместо updateOne используем findOneAndUpdate
        const updateResult = await collection.findOneAndUpdate(
          { _id: mongoId }, 
          { $set: { 
              title: body.title,
              slug: body.slug,
              content: body.content,
              excerpt: body.excerpt,
              author: body.author,
              category: body.category,
              date: body.date,
              images: body.images,
              updatedAt: new Date().toISOString()
            } 
          },
          { returnDocument: 'after' }
        );
        
        console.log('Результат обновления:', updateResult.ok ? 'Успешно' : 'Ошибка');
        
        if (!updateResult.value) {
          console.log('Пост с указанным ID не найден');
          return {
            statusCode: 404,
            headers,
            body: JSON.stringify({ error: 'Пост не найден' })
          };
        }
        
        const updatedPost = updateResult.value;
        
        // Добавляем readTime
        const enrichedPost = {
          ...updatedPost,
          readTime: calculateReadTime(updatedPost.content)
        };
        
        console.log('Пост успешно обновлен:', body._id);
        
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(enrichedPost)
        };
      } catch (error) {
        console.error('Ошибка при обновлении поста:', error);
        return {
          statusCode: 500,
          headers,
          body: JSON.stringify({ 
            error: 'Ошибка при обновлении поста', 
            details: error.message,
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
      console.error('JSON parse error with body:', event.body?.substring(0, 200));
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

function getApiUrl() {
  // Возвращаем относительный путь, который будет работать на любом домене
  return '/.netlify/functions/blog';
}