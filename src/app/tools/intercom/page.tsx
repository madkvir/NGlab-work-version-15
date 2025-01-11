import React from "react";
import { Metadata } from "next";
import ToolPageTemplate from "../../../components/ToolPageTemplate";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Intercom Integration | NeuroGen Lab - Customer Messaging Solution",
  description:
    "Optimize your customer messaging with our Intercom integration. Automate support, engage customers intelligently, and improve conversion rates through targeted communication.",
  keywords: [
    "intercom integration",
    "customer messaging",
    "support automation",
    "customer engagement",
  ],
  openGraph: {
    title: "Intercom Integration - Smart Customer Support | NeuroGen Lab",
    description: "Enhance customer messaging with intelligent automation",
    url: "https://neurogenlab.de/tools/intercom",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  twitter: {
    title: "Intercom Integration - Customer Messaging",
    description: "Optimize support with smart Intercom automation",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/intercom",
  },
};

const Intercom = () => {
  return (
    <ToolPageTemplate
      title="Intercom Integration"
      description="Enhance your customer messaging with our Intercom integration that provides intelligent customer engagement and support automation."
      icon={<MessageCircle className="w-8 h-8 text-emerald-400" />}
      features={[
        "Automated Customer Support",
        "Targeted Messaging",
        "Customer Segmentation",
        "Engagement Analytics",
        "Custom Bots",
        "Product Tours",
        "Help Center Integration",
      ]}
      benefits={[
        "Improved Customer Engagement",
        "Automated Support Workflows",
        "Better Customer Understanding",
        "Increased Conversion Rates",
        "Streamlined Communication",
        "Personalized Experiences",
        "Efficient Support Process",
      ]}
      integrations={[
        "CRM Systems",
        "Marketing Platforms",
        "Analytics Tools",
        "Help Desk Software",
        "E-commerce Platforms",
        "Product Analytics",
      ]}
      metaTitle="Intercom Integration | NeuroGen Lab - Customer Messaging Solution"
      metaDescription="Optimize your customer messaging with our Intercom integration. Automate support, engage customers intelligently, and improve conversion rates through targeted communication."
    />
  );
};

export default Intercom;
