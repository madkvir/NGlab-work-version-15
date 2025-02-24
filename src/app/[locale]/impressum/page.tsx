import { Metadata } from "next";
import React from "react";
import { Building, Mail, MapPin, Scale, FileText } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Divider from "../../../components/Divider";
import ScrollToTop from "../../../components/ScrollToTop";
import BackToHome from "../../../components/BackToHome";

export const metadata: Metadata = {
  title: "Legal Notice (Impressum) - NeuroGen Lab",
  description:
    "Official legal information and company details for NeuroGen Lab GmbH. Find our contact information, registration details, and regulatory compliance information.",
  keywords: [
    "impressum",
    "legal notice",
    "company information",
    "contact details",
    "business registration",
    "VAT ID",
    "regulatory compliance",
  ],
  openGraph: {
    title: "Legal Notice | NeuroGen Lab GmbH - Official Company Information",
    description:
      "Access NeuroGen Lab's official company information, registration details, and contact information. Find all legally required business details here.",
    url: "https://neurogenlab.de/impressum",
    images: [
      {
        url: "", // TODO: add url and alt
        alt: "",
      },
    ],
  },
  twitter: {
    title: "NeuroGen Lab - Legal Notice (Impressum)",
    description:
      "Official company information and legal details for NeuroGen Lab GmbH. Registration number, VAT ID, and contact information.",
    images: [
      {
        url: "", // TODO: add url and alt
        alt: "",
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab Legal Department" }],
  alternates: {
    canonical: "https://neurogenlab.de/impressum",
  },
};

const Impressum = () => {
  const sections = [
    {
      title: "Company Information",
      icon: <Building className="w-6 h-6" />,
      content: [
        "NeuroGen Lab",
        "Registered in the Commercial Register",
        "Registration Court: Amtsgericht Berlin-Charlottenburg",
        "Registration Number: HRB XXXXXX",
        "VAT ID: DE XXXXXXXXX",
      ],
    },
    {
      title: "Contact Details",
      icon: <Mail className="w-6 h-6" />,
      content: [
        <span className="flex items-center gap-2">
          <span>Email: </span>
          <a
            href="mailto:office@neurogenlab.de"
            className="text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            office@neurogenlab.de
          </a>
        </span>,
        <span className="flex items-center gap-2">
          <span>Phone: </span>
          <a
            href="tel:+4930123456789"
            className="text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            +49 (0) 30 123456789
          </a>
        </span>,
        <span className="flex items-center gap-2">
          <span>Website: </span>
          <a
            href="https://www.neurogenlab.de"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            www.neurogenlab.de
          </a>
        </span>,
      ],
    },
    {
      title: "Address",
      icon: <MapPin className="w-6 h-6" />,
      content: ["Musterstraße 123", "10115 Berlin", "Germany"],
    },
    {
      title: "Responsible for Content",
      icon: <FileText className="w-6 h-6" />,
      content: ["According to § 55 Abs. 2 RStV:", "Sarah Johnson", "Address same as above"],
    },
    {
      title: "Legal Notices",
      icon: <Scale className="w-6 h-6" />,
      content: [
        "All content on this website is protected by copyright law.",
        "Unauthorized use or reproduction is prohibited.",
        "All trademarks mentioned belong to their respective owners.",
      ],
    },
    {
      title: "Online Dispute Resolution",
      icon: <Scale className="w-6 h-6" />,
      content: [
        <span>
          The European Commission provides a platform for online dispute resolution (OS) which is
          available at{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            https://ec.europa.eu/consumers/odr
          </a>
        </span>,
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <BackToHome />

          <div className="text-center mb-12">
            <Building className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Impressum</h1>
            <p className="text-gray-400">Legal Information</p>
          </div>

          <Divider />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-emerald-400">{section.icon}</div>
                  <h2 className="text-xl font-semibold text-emerald-400">{section.title}</h2>
                </div>
                <ul className="space-y-2">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
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

export default Impressum;
