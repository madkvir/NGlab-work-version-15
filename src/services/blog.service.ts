import axios from "axios";
import type { BlogPost } from "../types/blog";

// Получение правильного API URL в зависимости от домена
function getApiUrl() {
  // На клиенте
  if (typeof window !== 'undefined') {
    // Если на домене netlify.app - используем API без изменений
    if (window.location.hostname.includes('netlify.app')) {
      console.log('Использование netlify домена для API');
      return `${window.location.origin}/api/blog`;
    }
    
    // Если на кастомном домене - используем напрямую функции Netlify
    console.log('Использование кастомного домена для API');
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
 * Сервис для работы с блогом
 */
export const BlogService = {
  /**
   * Получить все статьи блога
   */
  async getPosts() {
    const apiUrl = getApiUrl();
    console.log('Использую API URL для получения постов:', apiUrl);
    
    try {
      const response = await axios.get(apiUrl, {
        headers: apiRequestHeaders,
        timeout: 10000 // 10 секунд таймаут
      });
      return response.data;
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
    
    try {
      const response = await axios.get(`${apiUrl}/${slug}`, {
        headers: apiRequestHeaders,
        timeout: 10000
      });
      return response.data;
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
    
    try {
      const response = await axios.post(apiUrl, post, {
        headers: apiRequestHeaders,
        timeout: 15000 // 15 секунд для создания
      });
      return response.data;
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
    
    try {
      // Создаем объект с ID для отправки в теле запроса
      const postWithId = { 
        _id: id,
        ...post 
      };
      
      console.log('Отправляемые данные:', JSON.stringify(postWithId).substring(0, 100) + '...');
      
      // Отправляем на общий эндпоинт
      const response = await axios.put(apiUrl, postWithId, {
        headers: apiRequestHeaders,
        timeout: 15000 // 15 секунд для обновления
      });
      
      console.log('Ответ сервера:', response.status, response.statusText);
      return response.data;
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
    
    try {
      const response = await axios.delete(`${apiUrl}/${id}`, {
        headers: apiRequestHeaders,
        timeout: 10000
      });
      return response.data;
    } catch (error) {
      console.error(`Ошибка при удалении поста ${id}:`, error.response || error.message);
      throw error;
    }
  }
};
