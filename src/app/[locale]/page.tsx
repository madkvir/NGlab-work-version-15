import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import HowItWorks from "../../components/HowItWorks";
import Pricing from "../../components/Pricing";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Home;
