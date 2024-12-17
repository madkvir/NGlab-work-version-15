import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import CookieConsent from '../components/CookieConsent';
import ChatWidget from '../components/ChatWidget';
import SEO from '../components/SEO';

const Home = () => {
  // SEO мета-теги
  const seoData = {
    title: "NeuroGen Lab - Advanced AI Solutions for Business",
    description: "Transform your business with NeuroGen Lab's cutting-edge AI solutions. We offer powerful, easy-to-implement artificial intelligence tools for content generation, data analysis, and automation.",
    keywords: "AI solutions, artificial intelligence, machine learning, neural networks, business automation, AI tools, content generation, data analysis",
    ogTitle: "NeuroGen Lab | Leading AI Solutions Provider",
    ogDescription: "Discover how NeuroGen Lab's AI solutions can revolutionize your business operations. Advanced artificial intelligence made simple and accessible.",
    ogImage: "",
    ogUrl: "https://neurogenlab.de",
    twitterTitle: "NeuroGen Lab - AI Solutions for Modern Business",
    twitterDescription: "Empower your business with state-of-the-art AI solutions. From content generation to data analysis, NeuroGen Lab has you covered.",
    twitterImage: "",
    author: "NeuroGen Lab",
    canonical: "https://neurogenlab.de",
    favicon: ""
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      <SEO {...seoData} />
      <Navbar />
      <Hero />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <ScrollToTop />
      <Footer />
      <CookieConsent />
      <ChatWidget />
    </div>
  );
};

export default Home;