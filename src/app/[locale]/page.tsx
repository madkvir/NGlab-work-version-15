import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import HowItWorks from "../../components/HowItWorks";
import Pricing from "../../components/Pricing";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import React from "react";
import getServerPageLang from "../../utils/getServerPageLang";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

const Home = async ({ params }) => {
  const language = await getServerPageLang(params);
  
  return (
    <>
      {/* Hreflang теги для главной страницы */}
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/en`} />
      <link rel="alternate" hrefLang="en" href={`${baseUrl}/en`} />
      <link rel="alternate" hrefLang="de" href={`${baseUrl}/de`} />
      <link rel="alternate" hrefLang="es" href={`${baseUrl}/es`} />
      <link rel="alternate" hrefLang="ru" href={`${baseUrl}/ru`} />
      <link rel="alternate" hrefLang="uk" href={`${baseUrl}/uk`} />
      
      <div className="min-h-screen bg-[#0B0F19] text-white">
        <Navbar />
        <Hero />
        <HowItWorks language={language} />
        <Pricing />
        <FAQ language={language} />
        <ScrollToTop />
        <Footer />
      </div>
    </>
  );
};

export default Home;
