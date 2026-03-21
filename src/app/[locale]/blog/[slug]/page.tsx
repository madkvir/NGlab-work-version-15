export const dynamic = "force-dynamic";

import React from "react";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import ScrollToTop from "../../../../components/ScrollToTop";
import { notFound } from "next/navigation";
import { Link } from "../../../../i18n/routing";
import {
  getAllPostsSerialized,
  getPostBySlugSerialized,
  getRelatedPostsSerialized,
} from "@/lib/blog/posts";
import type { BlogPost } from "@/types/blog";

export async function generateStaticParams() {
  try {
    const posts = await getAllPostsSerialized();
    return posts.map((post: BlogPost) => ({
      slug: post.slug,
    }));
  } catch (error) {
    const err = error as NodeJS.ErrnoException;
    if (err.code === "ECONNREFUSED") {
      console.error("Connection refused, make sure the API server is running:", error);
    } else {
      console.error("Error fetching blog posts during generateStaticParams:", error);
    }
    return [];
  }
}

type PageProps = { params: Promise<{ slug: string; locale: string }> };

const BlogPostPage = async ({ params }: PageProps) => {
  const { slug, locale } = await params;

  const post = await getPostBySlugSerialized(slug);
  if (!post) {
    notFound();
  }

  const translation = post.translations?.find((t) => t.locale === locale);

  let relatedPosts: BlogPost[] = [];
  try {
    relatedPosts = await getRelatedPostsSerialized(post.category, post._id as string, 2);
  } catch (e) {
    console.error("Related posts:", e);
  }

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <article>
            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full">
                  {translation?.category || post.category}
                </span>
                <span>{post.readTime}</span>
              </div>

              <h1 className="text-4xl font-bold mb-4">{translation?.title || post.title}</h1>

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

            <div className="rounded-xl overflow-hidden mb-8">
              {post.images?.length ? (
                <img
                  src={post.images[0]}
                  alt={post.title}
                  className="w-3/5 h-auto"
                />
              ) : null}
            </div>

            <div
              className="prose prose-invert prose-emerald max-w-none"
              dangerouslySetInnerHTML={{ __html: translation?.content || post.content }}
            />
          </article>

          {relatedPosts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost) => {
                  const relT = relatedPost.translations?.find((t) => t.locale === locale);
                  const title = relT?.title || relatedPost.title;
                  const excerpt = relT?.excerpt || relatedPost.excerpt;
                  const thumb = relatedPost.images?.[0];
                  return (
                    <Link
                      key={relatedPost._id as string}
                      href={`/blog/${relatedPost.slug}`}
                      className="block p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors"
                    >
                      {thumb ? (
                        <div className="aspect-video overflow-hidden rounded-md mb-4">
                          <img
                            src={thumb}
                            alt={title}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ) : null}

                      <div className="p-6 pt-0">
                        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-emerald-400 transition-colors">
                          {title}
                        </h3>

                        <p className="text-gray-400 mb-4 line-clamp-2">{excerpt}</p>

                        <div className="flex items-center text-sm text-gray-400">
                          <Calendar className="w-4 h-4 mr-2" />
                          {relatedPost.date}
                        </div>
                      </div>
                    </Link>
                  );
                })}
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

export default BlogPostPage;
