'use client';

import React from "react";
import type { FC } from 'react';
import { MessagesSquare } from "lucide-react";
import ToolPageTemplate from "../../../components/ToolPageTemplate";

const FacebookMessenger: FC = () => {
  return (
    <ToolPageTemplate
      title="Facebook Messenger Integration"
      description="Connect with your customers seamlessly through Facebook Messenger with our intelligent AI-powered integration solution."
      icon={<MessagesSquare className="w-8 h-8 text-emerald-400" />}
      features={[
        "Automated Message Handling",
        "Smart Response System",
        "Customer Data Integration",
        "Multi-language Support",
        "Rich Media Messaging",
        "Analytics Dashboard",
        "Custom Bot Flows",
      ]}
      benefits={[
        "Instant Customer Engagement",
        "24/7 Availability",
        "Reduced Response Time",
        "Increased Customer Satisfaction",
        "Seamless CRM Integration",
        "Enhanced Customer Experience",
        "Valuable Insights Generation",
      ]}
      integrations={[
        "Facebook Business Suite",
        "CRM Systems",
        "Analytics Platforms",
        "E-commerce Platforms",
        "Customer Support Tools",
        "Marketing Automation",
      ]}
      sectionTitles={{
        features: "Features",
        benefits: "Benefits",
        integrations: "Integrations"
      }}
      metaTitle="Enhance Messaging with Facebook Messenger Integration"
      metaDescription="Enhance your customer communication with our Facebook Messenger integration. Provide instant, intelligent responses and seamless customer support through social messaging."
    />
  );
};

export default FacebookMessenger;
