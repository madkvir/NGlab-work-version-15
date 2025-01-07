import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import CookieConsent from "../components/CookieConsent";
import ChatWidget from "../components/ChatWidget";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NeuroGen Lab - Advanced AI Solutions for Business",
  description:
    "Boost your business with NeuroGen Lab's advanced AI tools for content generation, data analysis, and automation. Visit us for a transformation.",
  keywords: [
    "AI solutions",
    "artificial intelligence",
    "machine learning",
    "neural networks",
    "business automation",
    "AI tools",
    "content generation",
    "data analysis",
  ],
  openGraph: {
    title: "NeuroGen Lab | Leading AI Solutions Provider",
    description:
      "Discover how NeuroGen Lab's AI solutions can revolutionize your business operations. Advanced artificial intelligence made simple and accessible.",
    url: "https://neurogenlab.de",
    images: [
      {
        url: "", // TODO: add url and alt
        alt: "",
      },
    ],
  },
  twitter: {
    title: "NeuroGen Lab - AI Solutions for Modern Business",
    description:
      "Empower your business with state-of-the-art AI solutions. From content generation to data analysis, NeuroGen Lab has you covered.",
    images: [
      {
        url: "", // TODO: add url and alt
        alt: "",
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de",
  },
  icons: {
    icon: "/favicon.ico", // Replace with your favicon path
  },
};

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
      <CookieConsent />
      <ChatWidget />
    </div>
  );
};

export default Home;
