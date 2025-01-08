import React from "react";
import { Metadata } from "next";
import { Shield } from "lucide-react";
import ToolPageTemplate from "../../../components/ToolPageTemplate";

export const metadata: Metadata = {
  title: "Anti-Spam Protection | NeuroGen Lab - Advanced Security Solution",
  description:
    "Secure your business communications with our AI-powered anti-spam solution. Implement intelligent filtering and real-time threat detection for clean messaging channels.",
  keywords: ["anti-spam", "email security", "spam protection", "AI security"],
  openGraph: {
    title: "Anti-Spam Protection - Secure Communications | NeuroGen Lab",
    description: "Protect your business from spam with AI-powered filtering",
    url: "https://neurogenlab.de/tools/anti-spam",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  twitter: {
    title: "Anti-Spam Protection - AI Security Solution",
    description: "Advanced spam protection for business communications",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/anti-spam",
  },
};

const AntiSpam = () => {
  return (
    <ToolPageTemplate
      title="Anti-Spam Protection"
      description="Protect your business communications with our advanced AI-powered anti-spam solution that ensures clean and secure messaging channels."
      icon={<Shield className="w-8 h-8 text-emerald-400" />}
      features={[
        "AI-Powered Spam Detection",
        "Real-time Threat Analysis",
        "Machine Learning Filters",
        "Pattern Recognition",
        "Automated Blocking System",
        "Custom Rule Creation",
        "Multi-channel Protection",
      ]}
      benefits={[
        "Enhanced Email Security",
        "Reduced False Positives",
        "Protected Business Communications",
        "Improved Productivity",
        "Regulatory Compliance",
        "Resource Optimization",
        "Comprehensive Reporting",
      ]}
      integrations={[
        "Email Servers",
        "Communication Platforms",
        "CRM Systems",
        "Cloud Services",
        "Security Tools",
        "Monitoring Systems",
      ]}
      metaTitle="Anti-Spam Protection | NeuroGen Lab - Advanced Security Solution"
      metaDescription="Secure your business communications with our AI-powered anti-spam solution. Implement intelligent filtering and real-time threat detection for clean messaging channels."
    />
  );
};

export default AntiSpam;
