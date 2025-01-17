'use client';

import React from "react";
import type { FC } from 'react';
import { MessagesSquare } from "lucide-react";
import ToolPageTemplate from "../../../components/ToolPageTemplate";

const Intercom: FC = () => {
  return (
    <ToolPageTemplate
      title="Intercom Integration"
      description="Enhance your customer messaging with our Intercom integration that provides intelligent customer engagement and support automation."
      icon={<MessagesSquare className="w-8 h-8 text-emerald-400" />}
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
      sectionTitles={{
        features: "Features",
        benefits: "Benefits",
        integrations: "Integrations"
      }}
      metaTitle="Intercom Integration | NeuroGen Lab - Customer Messaging Solution"
      metaDescription="Optimize your customer messaging with our Intercom integration. Automate support, engage customers intelligently, and improve conversion rates through targeted communication."
    />
  );
};

export default Intercom;
