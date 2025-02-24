"use client";
import React from "react";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import ScrollToTop from "../../../../components/ScrollToTop";
import { useBlog } from "../../../../context/BlogContext";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";

// export async function generateStaticParams() {
//   const { posts } = useBlog();

//   if (!posts || posts.length === 0) {
//     return [];
//   }

//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }

const BlogPost = () => {
  const { slug } = useParams();
  const { posts } = useBlog();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    redirect("/404");
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = posts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <article>
            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span>{post.readTime}</span>
              </div>

              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

              <div className="flex items-center gap-6 text-sm text-gray-400">
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

            {/* Featured Image */}
            <div className="rounded-xl overflow-hidden mb-8">
              <img src={post.image} alt={post.title} className="w-full h-auto" />
            </div>

            {/* Article Content */}
            <div
              className="prose prose-invert prose-emerald max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.id}`}
                    className="group bg-gray-900/50 rounded-xl overflow-hidden hover:bg-gray-900/70 transition-all duration-300"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-emerald-400 transition-colors">
                        {relatedPost.title}
                      </h3>

                      <p className="text-gray-400 mb-4 line-clamp-2">{relatedPost.excerpt}</p>

                      <div className="flex items-center text-sm text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        {relatedPost.date}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default BlogPost;
