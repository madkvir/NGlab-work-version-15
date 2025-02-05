import { Metadata } from "next";
import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ScrollToTop from "../../../components/ScrollToTop";
import BackToHome from "../../../components/BackToHome";
import BlogContent from "../../../components/BlogContent";

export const metadata: Metadata = {
  title: "Blog - Latest Insights on AI Technology",
  description:
    "Stay updated with the latest insights about AI technology and implementation. Explore our blog for articles, tips, and trends.",
  keywords: ["AI", "technology", "blog", "insights", "articles"],
  openGraph: {
    title: "Blog - Latest Insights on AI Technology",
    description:
      "Stay updated with the latest insights about AI technology and implementation. Explore our blog for articles, tips, and trends.",
    url: "https://neurogenlab.de/blog",
    images: [
      {
        url: "", // TODO: add url and alt
        alt: "",
      },
    ],
  },
  twitter: {
    title: "Blog - Latest Insights on AI Technology",
    description:
      "Stay updated with the latest insights about AI technology and implementation. Explore our blog for articles, tips, and trends.",
    images: [
      {
        url: "", // TODO: add url and alt
        alt: "",
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/blog",
  },
};

const Blog = () => {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-8">
            <BackToHome />
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Stay updated with the latest insights about AI technology and implementation
            </p>
          </div>
          <BlogContent />
        </div>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Blog;
