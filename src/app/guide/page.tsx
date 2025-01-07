import { Metadata } from "next";
import { Book, CheckCircle, ArrowRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import BackToHome from "../../components/BackToHome";

export const metadata: Metadata = {
  title: "User Guide - NeuroGen Lab | AI Implementation Guide",
  description:
    "Comprehensive guide to using NeuroGen Lab's AI solutions. Learn about getting started, advanced features, and best practices for optimal AI implementation.",
  keywords: [
    "AI guide",
    "user manual",
    "getting started",
    "AI implementation",
    "best practices",
    "neural networks",
    "machine learning tutorial",
    "AI optimization",
  ],
  openGraph: {
    title: "Complete User Guide for NeuroGen Lab AI Solutions",
    description:
      "Step-by-step instructions and comprehensive guidance for implementing and optimizing AI solutions with NeuroGen Lab. From basics to advanced features.",
    url: "https://neurogenlab.de/guide",
    images: [
      {
        url: "", // TODO: add url and alt
        alt: "",
      },
    ],
  },
  twitter: {
    title: "NeuroGen Lab User Guide: Master AI Implementation",
    description:
      "Learn how to effectively implement and optimize AI solutions with our comprehensive user guide. Expert tips and best practices included.",
    images: [
      {
        url: "", // TODO: add url and alt
        alt: "",
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab Technical Team" }],
  alternates: {
    canonical: "https://neurogenlab.de/guide",
  },
  icons: {
    icon: "/favicon.ico", // Replace with your favicon path
  },
};

const Guide = () => {
  const sections = [
    {
      title: "Getting Started",
      description: "Learn the basics of NeuroGen Lab and set up your first AI project",
      items: [
        "Create your account",
        "Configure your AI preferences",
        "Import your data",
        "Start generating content",
      ],
    },
    {
      title: "Advanced Features",
      description: "Explore advanced AI capabilities and customization options",
      items: [
        "Custom model training",
        "API integration",
        "Workflow automation",
        "Performance analytics",
      ],
    },
    {
      title: "Best Practices",
      description: "Optimize your AI implementation for best results",
      items: [
        "Data preparation guidelines",
        "Model optimization tips",
        "Security best practices",
        "Performance tuning",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-8">
            <BackToHome />
          </div>

          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-emerald-500/10 mb-6">
              <Book className="w-8 h-8 text-emerald-400" />
            </div>
            <h1 className="text-4xl font-bold mb-4">User Guide</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Everything you need to know about using NeuroGen Lab effectively
            </p>
          </div>

          {/* Guide Sections */}
          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300"
              >
                <h2 className="text-2xl font-semibold text-emerald-400 mb-4">{section.title}</h2>
                <p className="text-gray-400 mb-6 min-h-[3rem]">{section.description}</p>
                <ul className="space-y-4 mb-6">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full group bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Guide;
