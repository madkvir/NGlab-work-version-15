import React from "react";
import { Metadata } from "next";
import ToolPageTemplate from "../../../components/ToolPageTemplate";
import { Brain } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Assistant for Business | NeuroGen Lab - Automate and Innovate",
  description:
    "Optimize your business operations with our AI Assistant. Automate tasks, enhance productivity, and make data-driven decisions with advanced artificial intelligence.",
  keywords: [
    "AI assistant",
    "business automation",
    "productivity tools",
    "artificial intelligence",
  ],
  openGraph: {
    title: "AI Assistant - Intelligent Business Automation | NeuroGen Lab",
    description:
      "Transform your business operations with our AI Assistant. Automate tasks and boost productivity with advanced AI technology.",
    url: "https://neurogenlab.de/tools/ai-assistant",
    images: [
      {
        url: "", // TODO: add url and alt
        alt: "",
      },
    ],
  },
  twitter: {
    title: "AI Assistant - Smart Business Automation",
    description: "Enhance your business efficiency with our AI Assistan",
    images: [
      {
        url: "", // TODO: add url and alt
        alt: "",
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/ai-assistant",
  },
};

const AIAssistant = () => {
  return (
    <ToolPageTemplate
      title="AI Assistant"
      description="Empower your business with an intelligent AI assistant that streamlines operations and enhances productivity through smart automation."
      icon={<Brain className="w-8 h-8 text-emerald-400" />}
      features={[
        "Advanced Task Automation",
        "Natural Language Processing",
        "Contextual Understanding",
        "Predictive Analytics",
        "Multi-platform Integration",
        "Personalized Recommendations",
        "Adaptive Learning Capabilities",
      ]}
      benefits={[
        "Increased Productivity",
        "Streamlined Workflows",
        "Reduced Manual Tasks",
        "Improved Decision Making",
        "Enhanced Team Collaboration",
        "Time and Cost Savings",
        "Scalable Business Operations",
      ]}
      integrations={[
        "Project Management Tools",
        "Communication Platforms",
        "CRM Systems",
        "Calendar Applications",
        "Email Clients",
        "Document Management Systems",
      ]}
      metaTitle="AI Assistant for Business | NeuroGen Lab - Automate and Innovate"
      metaDescription="Optimize your business operations with our AI Assistant. Automate tasks, enhance productivity, and make data-driven decisions with advanced artificial intelligence."
    />
  );
};

export default AIAssistant;
