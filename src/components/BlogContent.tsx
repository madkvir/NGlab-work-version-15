"use client";
export const dynamic = "force-dynamic";

import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { Search, Calendar, User } from "lucide-react";
import axios from "axios";
import { BlogPost } from "../types/blog";
import LoadingSpinner from "./chat/LoadingSpinner";
import { Link } from "../i18n/routing";
import { useLocale } from "next-intl";

const BlogContent = () => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [fetchingBlog, setFetchingBlog] = useState(true);
  const postsPerPage = 6;
  const locale = useLocale();

  const apiUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : process.env.NEXT_PUBLIC_API_URL || "https://neurogenlab.de";

  const categories = Array.from(new Set(posts.map((post: BlogPost) => post.category)))
    .filter(Boolean)
    .map((category) => ({
      id: category.toLowerCase(),
      name: category,
      count: posts.filter((post: BlogPost) => post.category === category).length,
    }));

  const filteredPosts = posts.filter((post: BlogPost) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const getTranslPosts = (posts) => {
    return posts.map((post: BlogPost) => {
      const translation = post.translations?.find((t) => t.locale === locale);
      return {
        ...post,
        locale: translation?.locale || "en",
        title: translation?.title || post.title,
        excerpt: translation?.excerpt || post.excerpt,
        content: translation?.content || post.content,
        category: translation?.category || post.category,
      };
    });
  };

  const fetchPosts = useCallback(async () => {
    try {
      setFetchingBlog(true);
      const response = await axios.get(`${apiUrl}/api/blog`);
      const { data } = response;

      const translPosts = getTranslPosts(data);

      setPosts(translPosts);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setFetchingBlog(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-900/50 text-white px-4 py-3 pl-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
          />
          <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-12 flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="lg:w-1/4">
          <div className="space-y-2">
            <button
              onClick={() => {
                setSelectedCategory("all");
                setCurrentPage(1);
              }}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === "all"
                  ? "bg-emerald-500/20 text-emerald-400"
                  : "hover:bg-gray-900/50"
              }`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setCurrentPage(1);
                }}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "hover:bg-gray-900/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{category.name}</span>
                  <span className="text-sm text-gray-400">{category.count}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        {fetchingBlog ? (
          <LoadingSpinner />
        ) : (
          <div className="lg:w-3/4">
            <div className="grid md:grid-cols-2 gap-8">
              {currentPosts &&
                currentPosts.map((post: BlogPost) => (
                  <Link
                    key={post._id}
                    href={`/blog/${post.slug}`}
                    className="group bg-gray-900/50 rounded-xl overflow-hidden hover:bg-gray-900/70 transition-all duration-300"
                  >
                    <div className="aspect-video overflow-hidden">
                      {post.images.length > 0 &&
                        post.images.map((image) => (
                          <img
                            key={image}
                            src={image}
                            alt={post.title}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                          />
                        ))}
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                        <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full text-xs">
                          {post.category}
                        </span>
                        <span>{post.readTime}</span>
                      </div>

                      <h2 className="text-xl font-semibold mb-3 text-white group-hover:text-emerald-400 transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>

                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {post.date}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>

            {/* No Results Message */}
            {!fetchingBlog && filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400">No articles found matching your criteria.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default BlogContent;
