import axios from "axios";
import type { BlogPost } from "../types/blog";

const API_URL = "/api/blog";

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost> => {
  const response = await axios.get(`${API_URL}/${slug}`);
  return response.data;
};

export const createBlogPost = async (
  post: Omit<BlogPost, "id" | "slug" | "date" | "readTime">
): Promise<BlogPost> => {
  try {
    const response = await axios.post(API_URL, post, {
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
    console.log('Отправка запроса на обновление поста:', id);
    console.log('Данные для обновления:', JSON.stringify(post, null, 2).substring(0, 200));
    
    // Включаем ID в тело запроса
    const postWithId = { ...post, _id: id };
    
    const response = await axios.put(`${API_URL}`, postWithId, {
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
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting blog post:", error);
    throw new Error(error instanceof Error ? error.message : "Failed to delete blog post");
  }
};
