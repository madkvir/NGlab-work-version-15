import axios from "axios";
import type { BlogPost } from "../types/blog";

// Получение правильного API URL в зависимости от домена
function getApiUrl() {
  // На клиенте
  if (typeof window !== 'undefined') {
    // Всегда используем прямой URL к функциям Netlify для стабильности
    console.log('Использование прямой ссылки на Netlify функцию');
    return `${window.location.origin}/.netlify/functions/blog`;
  }
  
  // На сервере (SSR) - используем относительный путь
  return '/.netlify/functions/blog';
}

// Добавляем больше отладочной информации
const apiRequestHeaders = {
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
  'Accept': 'application/json',
  'Client-Source': 'react-app',
  'Cache-Control': 'no-cache, no-store'
};

/**
 * Функция для повторных попыток
 */
async function retryFetch(fn, maxRetries = 3, delay = 1000) {
  let lastError;
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      console.error(`Попытка ${i + 1} из ${maxRetries} не удалась:`, error);
      lastError = error;
      
      // Ждем перед следующей попыткой, увеличивая время ожидания
      if (i < maxRetries - 1) {
        const waitTime = delay * Math.pow(2, i);
        console.log(`Ожидание ${waitTime}мс перед следующей попыткой...`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
      }
    }
  }
  // Если все попытки неудачны, выбрасываем последнюю ошибку
  throw lastError;
}

/**
 * Сервис для работы с блогом
 */
export const BlogService = {
  /**
   * Получить все статьи блога
   */
  async getPosts() {
    const apiUrl = getApiUrl();
    console.log('Использую API URL для получения постов:', apiUrl);
    
    const fetchPosts = async () => {
      const response = await axios.get(apiUrl, {
        headers: apiRequestHeaders,
        timeout: 15000 // 15 секунд таймаут
      });
      return response.data;
    };
    
    try {
      return await retryFetch(fetchPosts);
    } catch (error) {
      console.error('Ошибка при получении постов блога:', error.response || error.message);
      return [];
    }
  },

  /**
   * Получить статью по slug
   */
  async getPostBySlug(slug: string) {
    const apiUrl = getApiUrl();
    console.log(`Использую API URL для получения поста по slug ${slug}:`, apiUrl);
    
    const fetchPostBySlug = async () => {
      const response = await axios.get(`${apiUrl}/${slug}`, {
        headers: apiRequestHeaders,
        timeout: 15000
      });
      return response.data;
    };
    
    try {
      return await retryFetch(fetchPostBySlug);
    } catch (error) {
      console.error(`Ошибка при получении поста по slug ${slug}:`, error.response || error.message);
      throw error;
    }
  },

  /**
   * Создать новую статью
   */
  async createBlogPost(post: any) {
    const apiUrl = getApiUrl();
    console.log('Использую API URL для создания поста:', apiUrl);
    
    const createPost = async () => {
      const response = await axios.post(apiUrl, post, {
        headers: apiRequestHeaders,
        timeout: 30000 // 30 секунд для создания
      });
      return response.data;
    };
    
    try {
      return await retryFetch(createPost);
    } catch (error) {
      console.error('Ошибка при создании поста блога:', error.response || error.message);
      throw error;
    }
  },

  /**
   * Обновить статью
   */
  async updateBlogPost(id: string, post: any) {
    const apiUrl = getApiUrl();
    console.log(`Использую API URL для обновления поста ${id}:`, apiUrl);
    
    // Создаем объект с ID для отправки в теле запроса
    const postWithId = { 
      _id: id,
      ...post 
    };
    
    console.log('Отправляемые данные:', JSON.stringify(postWithId).substring(0, 100) + '...');
    
    const updatePost = async () => {
      // Отправляем на общий эндпоинт
      const response = await axios.put(apiUrl, postWithId, {
        headers: apiRequestHeaders,
        timeout: 30000 // 30 секунд для обновления (лимит Netlify Functions)
      });
      
      console.log('Ответ сервера:', response.status, response.statusText);
      return response.data;
    };
    
    try {
      return await retryFetch(updatePost);
    } catch (error) {
      console.error(`Ошибка при обновлении поста ${id}:`, error.response || error.message);
      throw error;
    }
  },

  /**
   * Удалить статью
   */
  async deleteBlogPost(id: string) {
    const apiUrl = getApiUrl();
    console.log(`Использую API URL для удаления поста ${id}:`, apiUrl);
    
    const deletePost = async () => {
      const response = await axios.delete(`${apiUrl}/${id}`, {
        headers: apiRequestHeaders,
        timeout: 15000
      });
      return response.data;
    };
    
    try {
      return await retryFetch(deletePost);
    } catch (error) {
      console.error(`Ошибка при удалении поста ${id}:`, error.response || error.message);
      throw error;
    }
  },

  async updatePost(post: any): Promise<any> {
    try {
      // Обязательно копируем ID поста для операции обновления
      const postWithId = {
        _id: post._id,
        ...post
      };
      
      // Прямой URL к функции Netlify для обеспечения стабильности
      const apiUrl = '/.netlify/functions/blog';
      
      console.log('Обновляю пост через сервис блогов, ID:', post._id);
      console.log('Используемый URL:', apiUrl);
      
      // Заголовки для идентификации запроса
      const apiRequestHeaders = {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store',
        'Client-Source': 'react-app'
      };
      
      // Отправляем на общий эндпоинт
      const response = await axios.put(apiUrl, postWithId, {
        headers: apiRequestHeaders,
        timeout: 30000 // 30 секунд для обновления (лимит Netlify Functions)
      });
      
      console.log('Успешный ответ от сервера:', response.status);
      return response.data;
    } catch (error) {
      console.error('Ошибка при обновлении поста в сервисе:', error);
      
      // Сохраняем локально на случай сбоя API
      try {
        localStorage.setItem(`local_post_${post._id}`, JSON.stringify(post));
        console.log('Локальная копия поста сохранена');
      } catch (localError) {
        console.error('Не удалось сохранить локально:', localError);
      }
      
      throw error;
    }
  }
};
