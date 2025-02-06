import { Metadata } from "next";
import React from "react";
import { Scale } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Divider from "../../../components/Divider";
import ScrollToTop from "../../../components/ScrollToTop";
import BackToHome from "../../../components/BackToHome";

export const metadata: Metadata = {
  title: "Disclaimer - NeuroGen Lab",
  description:
    "Read our disclaimer to understand the terms of use, limitations of liability, and important legal information regarding the use of NeuroGen Lab's website and services.",
  keywords: [
    "disclaimer",
    "legal notice",
    "liability",
    "website disclaimer",
    "external links",
    "legal information",
  ],
  openGraph: {
    title: "Legal Disclaimer | NeuroGen Lab - Important Notice",
    description:
      "Important legal information and disclaimers regarding the use of NeuroGen Lab's website, content, and external links. Understand your rights and our limitations of liability.",
    url: "https://neurogenlab.de/disclaimer",
    images: [
      {
        url: "", // TODO: add url and alt
        alt: "",
      },
    ],
  },
  twitter: {
    title: "NeuroGen Lab Legal Disclaimer",
    description:
      "Essential legal information about using NeuroGen Lab's website and services. Read our full disclaimer and terms of use.",
    images: [
      {
        url: "", // TODO: add url and alt
        alt: "",
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab Legal Team" }],
  alternates: {
    canonical: "https://neurogenlab.de/disclaimer",
  },
};

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-8">
            <BackToHome />
          </div>

          <div className="text-center mb-12">
            <Scale className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Disclaimer</h1>
            <p className="text-gray-400">Last updated: March 15, 2024</p>
          </div>

          <div className="text-gray-300 mb-8 space-y-4">
            <h2 className="text-xl font-bold text-emerald-400 mb-4">WEBSITE DISCLAIMER</h2>
            <p>
              The information provided by NeuroGen Lab ("we," "us," or "our") on{" "}
              <a href="https://neurogenlab.de" className="text-emerald-400 hover:underline">
                https://neurogenlab.de
              </a>{" "}
              (the "Site") is for general informational purposes only. All information on the Site
              is provided in good faith, however, we make no representation or warranty of any kind,
              express or implied, regarding the accuracy, adequacy, validity, reliability,
              availability, or completeness of any information on the Site. UNDER NO CIRCUMSTANCE
              SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A
              RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE.
              YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT
              YOUR OWN RISK.
            </p>

            <h2 className="text-xl font-bold text-emerald-400 mb-4">EXTERNAL LINKS DISCLAIMER</h2>
            <p>
              The Site may contain (or you may be sent through the Site) links to other websites or
              content belonging to or originating from third parties or links to websites and
              features in banners or other advertising. Such external links are not investigated,
              monitored, or checked for accuracy, adequacy, validity, reliability, availability, or
              completeness by us. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY
              FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES
              LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER
              ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY
              TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
            </p>
          </div>

          <Divider />
        </div>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Disclaimer;
