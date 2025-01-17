'use client';

import React from "react";
import type { FC } from 'react';
import { HeadphonesIcon } from "lucide-react";
import ToolPageTemplate from "../../../components/ToolPageTemplate";

const LiveChat: FC = () => {
  return (
    <ToolPageTemplate
      title="LiveChat Integration"
      description="Provide exceptional customer support with our LiveChat integration that combines human interaction with AI-powered assistance."
      icon={<HeadphonesIcon className="w-8 h-8 text-emerald-400" />}
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
      sectionTitles={{
        features: "Features",
        benefits: "Benefits",
        integrations: "Integrations"
      }}
      metaTitle="LiveChat Integration | NeuroGen Lab - Customer Support Solution"
      metaDescription="Transform your customer support with our LiveChat integration. Combine human interaction with AI assistance for exceptional customer service and improved engagement."
    />
  );
};

export default LiveChat;
