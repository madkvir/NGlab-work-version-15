import { Metadata } from "next";
import { Lock } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import BackToHome from "../../components/BackToHome";
import React from "react";
import { PrivacyAccordion } from "../../components/PrivacyAccordion";

export const metadata: Metadata = {
  title: "Privacy Policy - NeuroGen Lab | Data Protection Notice",
  description:
    "Learn how NeuroGen Lab protects and handles your personal data. Detailed information about our privacy practices, data collection, processing, and your rights under GDPR.",
  keywords: [
    "privacy policy",
    "data protection",
    "GDPR",
    "personal data",
    "data processing",
    "privacy rights",
    "data security",
    "cookies",
    "user privacy",
  ],
  openGraph: {
    title: "Privacy Policy | NeuroGen Lab - Your Data Protection Rights",
    description:
      "Comprehensive information about how we collect, process, and protect your personal data. Understanding your privacy rights and our commitment to data protection.",
    url: "https://neurogenlab.de/privacy",
    images: [
      {
        url: "", // TODO: add url and alt
        alt: "",
      },
    ],
  },
  twitter: {
    title: "NeuroGen Lab Privacy Policy - Data Protection Commitment",
    description:
      "Discover how we protect your privacy and handle your personal information. Complete overview of our data protection practices and your rights.",
    images: [
      {
        url: "", // TODO: add url and alt
        alt: "",
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab Data Protection Officer" }],
  alternates: {
    canonical: "https://neurogenlab.de/privacy",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const Privacy = () => {
  const introContent = (
    <div className="mb-8">
      <p className="text-gray-300 leading-relaxed">
        This Privacy Notice for NeuroGen Lab ("we," "us," or "our"), describes how and why we might
        access, collect, store, use, and/or share ("process") your personal information when you use
        our services ("Services"), including when you:
      </p>
      <ul className="list-disc list-inside text-gray-300 leading-relaxed mt-4">
        <li>
          Visit our website at{" "}
          <a href="https://neurogenlab.de/privacy" className="text-emerald-400 hover:underline">
            https://neurogenlab.de/privacy
          </a>
          , or any website of ours that links to this Privacy Notice
        </li>
        <li>Engage with us in other related ways, including any sales, marketing, or events</li>
      </ul>
      <p className="text-gray-300 leading-relaxed mt-4">
        Questions or concerns? Reading this Privacy Notice will help you understand your privacy
        rights and choices. We are responsible for making decisions about how your personal
        information is processed. If you do not agree with our policies and practices, please do not
        use our Services. If you still have any questions or concerns, please contact us at{" "}
        <a href="mailto:office@neurogenlab.de" className="text-emerald-400 hover:underline">
          office@neurogenlab.de
        </a>
        .
      </p>
    </div>
  );

  const summaryContent = (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-emerald-400 mb-4">Summary of Key Points</h2>
      <p className="text-gray-300 leading-relaxed">
        This summary provides key points from our Privacy Notice, but you can find out more details
        about any of these topics by clicking the link following each key point or by using our
        table of contents below to find the section you are looking for.
      </p>
      <ul className="list-disc list-inside text-gray-300 leading-relaxed mt-4">
        <li>
          What personal information do we process? We may process personal information depending on
          how you interact with us and the Services, the choices you make, and the products and
          features you use. Learn more about{" "}
          <a href="#" className="text-emerald-400 hover:underline">
            personal information you disclose to us
          </a>
          .
        </li>
        <li>
          Do we process any sensitive personal information? Some of the information may be
          considered "special" or "sensitive" in certain jurisdictions. Learn more about{" "}
          <a href="#" className="text-emerald-400 hover:underline">
            sensitive information we process
          </a>
          .
        </li>
        <li>
          Do we collect any information from third parties? We do not collect any information from
          third parties.
        </li>
        <li>
          How do we process your information? We process your information to provide, improve, and
          administer our Services, communicate with you, for security and fraud prevention, and to
          comply with law. Learn more about{" "}
          <a href="#" className="text-emerald-400 hover:underline">
            how we process your information
          </a>
          .
        </li>
        <li>
          In what situations and with which types of parties do we share personal information? We
          may share information in specific situations and with specific categories of third
          parties. Learn more about{" "}
          <a href="#" className="text-emerald-400 hover:underline">
            when and with whom we share your personal information
          </a>
          .
        </li>
        <li>
          How do we keep your information safe? We have adequate organizational and technical
          processes and procedures in place to protect your personal information. Learn more about{" "}
          <a href="#" className="text-emerald-400 hover:underline">
            how we keep your information safe
          </a>
          .
        </li>
        <li>
          What are your rights? Depending on where you are located geographically, the applicable
          privacy law may mean you have certain rights regarding your personal information. Learn
          more about{" "}
          <a href="#" className="text-emerald-400 hover:underline">
            your privacy rights
          </a>
          .
        </li>
        <li>
          How do you exercise your rights? The easiest way to exercise your rights is by submitting
          a data subject access request, or by contacting us. Learn more about{" "}
          <a href="#" className="text-emerald-400 hover:underline">
            how to exercise your rights
          </a>
          .
        </li>
      </ul>
      <p className="text-gray-300 leading-relaxed mt-4">
        Want to learn more about what we do with any information we collect? Review the Privacy
        Notice in full.
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-8">
            <BackToHome />
          </div>

          <div className="text-center mb-12">
            <Lock className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Privacy Notice</h1>
            <p className="text-gray-400">Last updated: March 15, 2024</p>
          </div>

          {introContent}
          {summaryContent}

          <PrivacyAccordion />
        </div>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Privacy;
