import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import ContactContent from "../../components/contact/ContactContent";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />
      <ContactContent />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Contacts;
