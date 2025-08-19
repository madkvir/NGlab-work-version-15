import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import HowItWorks from "../../components/HowItWorks";
import Pricing from "../../components/Pricing";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import React from "react";
import getServerPageLang from "../../utils/getServerPageLang";
import { generatePageMetadata } from "../../utils/metadata";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

export const metadata: Metadata = generatePageMetadata(
  '',
  'NeuroGen Lab - AI-Powered Business Solutions',
  'Transform your business with cutting-edge AI solutions and intelligent automation. NeuroGen Lab provides innovative tools and integrations for enhanced productivity.',
  `${baseUrl}/assets/images/og-hero.jpg`,
  'NeuroGen Lab - AI Solutions'
);

const Home = async ({ params }) => {
  const language = await getServerPageLang(params);
  
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />
      <Hero />
      <HowItWorks language={language} />
      <Pricing />
      <FAQ language={language} />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Home;
