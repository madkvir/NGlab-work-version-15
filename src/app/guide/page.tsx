import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import GuideContent from "../../components/guide/GuideContent";

const Guide = () => {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />
      <GuideContent />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Guide;
