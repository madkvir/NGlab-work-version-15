import React, { useCallback, useEffect, useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import BlogPostEditor from "./BlogPostEditor";
import type { BlogPost } from "../../types/blog";
import axios from "axios";
import LoadingSpinner from "../chat/LoadingSpinner";

const AdminDashboard: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState<BlogPost | Partial<BlogPost> | null>(null);
  const [posts, setPosts] = useState<BlogPost[] | []>([]);
  const [fetchingBlog, setFetchingBlog] = useState(true);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  const fetchPosts = useCallback(async () => {
    try {
      setFetchingBlog(true);
      const response = await axios.get(`${apiUrl}/api/blog-api`);
      setPosts(response.data);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setFetchingBlog(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleNewPost = () => {
    setCurrentPost({
      // id: crypto.randomUUID(),
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      category: "",
      author: "",
      date: new Date().toISOString().split("T")[0],
    });
    setIsEditing(true);
  };

  const handleEditPost = (post: BlogPost) => {
    setCurrentPost({ ...post, _id: post._id });
    setIsEditing(true);
  };

  const handleDeletePost = async (postId: string) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      await axios.delete(`${apiUrl}/api/blog`, { data: { id: postId } });
      const response = await axios.get(`${apiUrl}/api/blog-api`);
      setPosts(response.data);
    }
  };

  const handleSavePost = (post: BlogPost) => {
    console.log("Post saved:", post);
    setIsEditing(false);
    setCurrentPost(null);
    fetchPosts();
  };

  if (fetchingBlog) {
    return <LoadingSpinner />;
  }

  return (
    <div className="space-y-8">
      {isEditing ? (
        <BlogPostEditor
          post={currentPost}
          onSave={handleSavePost}
          onCancel={() => {
            setIsEditing(false);
            setCurrentPost(null);
          }}
        />
      ) : (
        <>
          <div className="flex justify-end">
            <button
              onClick={handleNewPost}
              className="bg-gradient-to-r from-emerald-400 to-green-300 hover-gradient text-white px-4 py-2 rounded-lg transition-all hover:animate-glow flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              New Post
            </button>
          </div>

          <div className="grid gap-6">
            {posts &&
              posts.map((post) => (
                <div
                  key={post._id}
                  className="bg-gray-900/50 rounded-xl p-6 flex items-center justify-between"
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-400">{post.excerpt}</p>
                    <div className="mt-2 text-sm text-gray-500">
                      {post.date} | {post.author} | {post.category}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleEditPost(post)}
                      className="p-2 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-colors"
                    >
                      <Pencil className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDeletePost(post._id)}
                      className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}

            {posts.length === 0 && (
              <div className="text-center py-12 text-gray-400">
                No blog posts yet. Create your first post!
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
