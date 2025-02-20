import React from "react";
import { Metadata } from "next";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ScrollToTop from "../../../components/ScrollToTop";
import ContactContent from "../../../components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | NeuroGen Lab",
  description: "Get in touch with our team for any questions or inquiries",
};

export const dynamic = 'force-dynamic'; // Предотвращает некорректное кеширование

const Contacts = async () => {
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
