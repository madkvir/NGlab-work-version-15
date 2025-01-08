import React from "react";
import { Metadata } from "next";
import ToolPageTemplate from "../../../components/ToolPageTemplate";
import { Users } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Implementation Counseling | NeuroGen Lab - Expert Guidance",
  description:
    "Get expert guidance for your AI implementation journey. Our counseling services ensure successful integration of artificial intelligence into your business operations.",
  keywords: [
    "AI counseling",
    "implementation guidance",
    "AI consulting",
    "business transformation",
  ],
  openGraph: {
    title: "AI Implementation Counseling - Expert Guidance | NeuroGen Lab",
    description: "Expert guidance for successful AI implementation in business",
    url: "https://neurogenlab.de/tools/counseling",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  twitter: {
    title: "AI Implementation Counseling - Expert Support",
    description: "Professional guidance for AI business integration",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/counseling",
  },
};

const Counseling = () => {
  return (
    <ToolPageTemplate
      title="AI Implementation Counseling"
      description="Get expert guidance on implementing AI solutions in your business with our comprehensive counseling services."
      icon={<Users className="w-8 h-8 text-emerald-400" />}
      features={[
        "Strategic AI Planning",
        "Technology Assessment",
        "Implementation Roadmap",
        "Risk Analysis",
        "Change Management",
        "Training Programs",
        "Performance Monitoring",
      ]}
      benefits={[
        "Expert Guidance",
        "Risk Mitigation",
        "Optimized Implementation",
        "Cost-effective Solutions",
        "Smooth Transition",
        "Knowledge Transfer",
        "Long-term Success",
      ]}
      integrations={[
        "Project Management",
        "Training Platforms",
        "Documentation Systems",
        "Collaboration Tools",
        "Analytics Platforms",
        "Resource Planning",
      ]}
      metaTitle="AI Implementation Counseling | NeuroGen Lab - Expert Guidance"
      metaDescription="Get expert guidance for your AI implementation journey. Our counseling services ensure successful integration of artificial intelligence into your business operations."
    />
  );
};

export default Counseling;
