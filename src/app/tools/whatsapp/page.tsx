'use client';

import React from "react";
import type { FC } from 'react';
import { MessagesSquare } from "lucide-react";
import ToolPageTemplate from "../../../components/ToolPageTemplate";

const WhatsApp: FC = () => {
  return (
    <ToolPageTemplate
      title="WhatsApp Business Integration"
      description="Leverage the power of WhatsApp Business API with our intelligent integration solution for enhanced customer communication."
      icon={<MessagesSquare className="w-8 h-8 text-emerald-400" />}
      features={[
        "Business API Integration",
        "Automated Messaging",
        "Template Message Support",
        "Interactive Buttons",
        "File and Media Sharing",
        "Contact Management",
        "Broadcast Messaging",
      ]}
      benefits={[
        "Global Customer Reach",
        "Instant Response Capability",
        "Reduced Support Costs",
        "Enhanced Customer Experience",
        "Secure Communication",
        "Business Process Automation",
        "Improved Conversion Rates",
      ]}
      integrations={[
        "WhatsApp Business API",
        "CRM Systems",
        "Payment Gateways",
        "E-commerce Platforms",
        "Customer Support Tools",
        "Analytics Platforms",
      ]}
      sectionTitles={{
        features: "Features",
        benefits: "Benefits",
        integrations: "Integrations"
      }}
      metaTitle="WhatsApp Business Integration | NeuroGen Lab - Messaging Solution"
      metaDescription="Optimize your business communication with our WhatsApp integration. Enable automated responses, secure messaging, and enhanced customer engagement through WhatsApp Business API."
    />
  );
};

export default WhatsApp;
