import { Metadata } from "next";
import { Scale } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Divider from "../../components/Divider";
import ScrollToTop from "../../components/ScrollToTop";
import BackToHome from "../../components/BackToHome";
import CookiePolicyList from "../../components/CookiePolicyList";

export const metadata: Metadata = {
  title: "Cookie Policy - NeuroGen Lab",
  description:
    "Learn about how NeuroGen Lab uses cookies and similar technologies on our website. Understand your rights and how to control your cookie preferences.",
  keywords: [
    "cookie policy",
    "privacy",
    "GDPR",
    "cookies",
    "tracking technologies",
    "targeted advertising",
    "browser settings",
  ],
  openGraph: {
    title: "Cookie Policy | NeuroGen Lab - Understanding Our Cookie Usage",
    description:
      "Detailed information about cookies and tracking technologies used on NeuroGen Lab website, including how to manage your preferences and opt-out options.",
    url: "https://neurogenlab.de/cookie-policy",
    images: [
      {
        url: "", // TODO: add url and alt
        alt: "",
      },
    ],
  },
  twitter: {
    title: "NeuroGen Lab Cookie Policy",
    description:
      "Everything you need to know about cookies and tracking technologies used on NeuroGen Lab website.",
    images: [
      {
        url: "", // TODO: add url and alt
        alt: "",
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab Legal Team" }],
  alternates: {
    canonical: "https://neurogenlab.de/cookie-policy",
  },
  icons: {
    icon: "/favicon.ico", // Replace with your favicon path
  },
};

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-8">
            {" "}
            <BackToHome />{" "}
          </div>

          <div className="text-center mb-12">
            <Scale className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">COOKIE POLICY</h1>
            <p className="text-gray-400">Last updated: December 15, 2024</p>
          </div>

          <div className="text-gray-300 mb-8 space-y-4">
            <p>
              This Cookie Policy explains how NeuroGen Lab ("Company," "we," "us," and "our") uses
              cookies and similar technologies to recognize you when you visit our website at{" "}
              <a href="https://neurogenlab.de" className="text-emerald-400 hover:underline">
                https://neurogenlab.de
              </a>{" "}
              ("Website"). It explains what these technologies are and why we use them, as well as
              your rights to control our use of them.
            </p>

            <p>
              In some cases we may use cookies to collect personal information, or that becomes
              personal information if we combine it with other information.
            </p>
          </div>

          <Divider />
          <CookiePolicyList />
        </div>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default CookiePolicy;
