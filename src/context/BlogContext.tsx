"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime?: string;
  slug: string;
}

interface BlogContextType {
  posts: BlogPost[];
  addPost: (post: BlogPost) => void;
  updatePost: (post: BlogPost) => void;
  deletePost: (id: number) => void;
  setPosts: (posts: BlogPost[]) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  // Load posts from localStorage on mount
  useEffect(() => {
    const savedPosts = localStorage.getItem("blogPosts");
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  // Save posts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("blogPosts", JSON.stringify(posts));
  }, [posts]);

  const addPost = (post: BlogPost) => {
    setPosts((prev) => [
      ...prev,
      { ...post, readTime: `${Math.ceil(post.content.length / 1000)} min read` },
    ]);
  };

  const updatePost = (post: BlogPost) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === post.id
          ? { ...post, readTime: `${Math.ceil(post.content.length / 1000)} min read` }
          : p
      )
    );
  };

  const deletePost = (id: number) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <BlogContext.Provider value={{ posts, addPost, updatePost, deletePost, setPosts }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error("useBlog must be used within a BlogProvider");
  }
  return context;
};
