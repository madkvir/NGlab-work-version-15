import React from "react";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import ScrollToTop from "../../../../components/ScrollToTop";
import Link from "next/link";
import { notFound } from "next/navigation";
import axios from "axios";
import dbConnect from "../../../../lib/mongodb";
import Post from "../../../../server/models/Post";

export async function generateStaticParams() {
  try {
    await dbConnect();
    const posts = await Post.find({});
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    if (error.code === "ECONNREFUSED") {
      console.error("Connection refused, make sure the API server is running:", error);
    } else {
      console.error("Error fetching blog posts during generateStaticParams:", error);
    }
    return [];
  }
}

const BlogPost = async ({ params }) => {
  const { slug, locale } = await params;
  const apiUrl = typeof window !== 'undefined' 
    ? window.location.origin 
    : process.env.NEXT_PUBLIC_API_URL || 'https://neurogenlab.de';

  try {
    console.log(`Fetching blog post with slug: ${slug}, locale: ${locale}`);
    
    // Получаем данные поста
    const response = await axios.get(`${apiUrl}/api/blog/${slug}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    
    console.log("Post data received successfully");
    const post = response.data;

    // Получаем все посты для related posts
    console.log("Fetching all posts for related content");
    const { data: allPosts } = await axios.get(`${apiUrl}/api/blog`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    
    console.log(`Found ${allPosts.length} total posts`);

    const relatedPosts = allPosts
      .filter((p) => p.category === post.category && p._id !== post._id)
      .slice(0, 2);

    console.log(`Found ${relatedPosts.length} related posts`);

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
                {post.images.length > 0 &&
                  post.images.map((image) => (
                    <img key={image} src={image} alt={post.title} className="w-full h-auto" />
                  ))}
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
  } catch (error) {
    console.error("Error in BlogPost component:", error);
    console.error("Error details:", {
      name: error.name,
      message: error.message,
      response: error.response?.data
    });

    if (error.response?.status === 404) {
      console.log("Post not found, redirecting to 404");
      notFound();
    }

    // Для остальных ошибок выбрасываем их для обработки глобальным error boundary
    throw new Error(`Failed to load blog post: ${error.message}`);
  }
};

export default BlogPost;
