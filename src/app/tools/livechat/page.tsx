import React from "react";
import { Metadata } from "next";
import ToolPageTemplate from "../../../components/ToolPageTemplate";
import { Headphones } from "lucide-react";

export const metadata: Metadata = {
  title: "LiveChat Integration | NeuroGen Lab - Customer Support Solution",
  description:
    "Transform your customer support with our LiveChat integration. Combine human interaction with AI assistance for exceptional customer service and improved engagement.",
  keywords: ["livechat integration", "customer support", "live chat", "customer service"],
  openGraph: {
    title: "LiveChat Integration - Smart Customer Support | NeuroGen Lab",
    description: "Enhance customer support with AI-powered live chat",
    url: "https://neurogenlab.de/tools/livechat",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  twitter: {
    title: "LiveChat Integration - Customer Support Solution",
    description: "Transform support with intelligent live chat",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/livechat",
  },
};

const LiveChat = () => {
  return (
    <ToolPageTemplate
      title="LiveChat Integration"
      description="Provide exceptional customer support with our LiveChat integration that combines human interaction with AI-powered assistance."
      icon={<Headphones className="w-8 h-8 text-emerald-400" />}
      features={[
        "Real-time Chat Support",
        "AI-powered Assistance",
        "Visitor Tracking",
        "Chat Analytics",
        "Custom Chat Widgets",
        "Automated Greetings",
        "File Sharing",
      ]}
      benefits={[
        "Improved Customer Support",
        "Increased Conversion Rates",
        "Better Customer Insights",
        "Reduced Response Time",
        "Enhanced User Experience",
        "24/7 Availability",
        "Personalized Interactions",
      ]}
      integrations={[
        "CRM Systems",
        "Help Desk Software",
        "E-commerce Platforms",
        "Analytics Tools",
        "Social Media",
        "Email Marketing",
      ]}
      metaTitle="LiveChat Integration | NeuroGen Lab - Customer Support Solution"
      metaDescription="Transform your customer support with our LiveChat integration. Combine human interaction with AI assistance for exceptional customer service and improved engagement."
    />
  );
};

export default LiveChat;
