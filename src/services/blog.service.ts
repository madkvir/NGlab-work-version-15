import axios from "axios";
import type { BlogPost } from "../types/blog";

// Получаем базовый URL в зависимости от среды
function getApiUrl() {
  // В браузере
  if (typeof window !== 'undefined') {
    const currentOrigin = window.location.origin;
    return `${currentOrigin}/api/blog`;
  }
  
  // На сервере используем относительный путь
  return "/api/blog";
}

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  const apiUrl = getApiUrl();
  console.log(`Получение постов блога с URL: ${apiUrl}`);
  
  try {
    const response = await axios.get(apiUrl);
    console.log(`Получено ${response.data.length} постов блога`);
    return response.data;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    
    // Пробуем через относительный URL если происходит ошибка с полным URL
    if (typeof window !== 'undefined' && apiUrl.startsWith(window.location.origin)) {
      console.log("Повторная попытка с относительным URL...");
      try {
        const fallbackResponse = await axios.get("/api/blog");
        return fallbackResponse.data;
      } catch (fallbackError) {
        console.error("Fallback request also failed:", fallbackError);
      }
    }
    
    throw error;
  }
};

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost> => {
  const apiUrl = getApiUrl();
  const response = await axios.get(`${apiUrl}/${slug}`);
  return response.data;
};

export const createBlogPost = async (
  post: Omit<BlogPost, "id" | "slug" | "date" | "readTime">
): Promise<BlogPost> => {
  try {
    const apiUrl = getApiUrl();
    const response = await axios.post(apiUrl, post, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating blog post:", error);
    throw new Error(error instanceof Error ? error.message : "Failed to create blog post");
  }
};

export const updateBlogPost = async (id: string, post: Partial<BlogPost>): Promise<BlogPost> => {
  try {
    const apiUrl = getApiUrl();
    console.log('Отправка запроса на обновление поста:', id);
    console.log('URL API:', apiUrl);
    console.log('Данные для обновления:', JSON.stringify(post, null, 2).substring(0, 200));
    
    // Включаем ID в тело запроса
    const postWithId = { ...post, _id: id };
    
    const response = await axios.put(apiUrl, postWithId, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-Requested-With": "XMLHttpRequest"
      },
      timeout: 10000, // 10 секунд таймаут
    });
    
    console.log('Ответ сервера:', response.status);
    return response.data;
  } catch (error) {
    console.error("Error updating blog post:", error);
    
    // Детальный лог ошибки
    if (error.response) {
      // Ответ получен, но с ошибкой
      console.error('Error response:', {
        status: error.response.status,
        data: error.response.data
      });
    } else if (error.request) {
      // Запрос отправлен, но ответ не получен
      console.error('No response received:', error.request);
    }
    
    throw new Error(error instanceof Error ? error.message : "Failed to update blog post");
  }
};

export const deleteBlogPost = async (id: number): Promise<void> => {
  try {
    const apiUrl = getApiUrl();
    await axios.delete(`${apiUrl}/${id}`);
  } catch (error) {
    console.error("Error deleting blog post:", error);
    throw new Error(error instanceof Error ? error.message : "Failed to delete blog post");
  }
};
