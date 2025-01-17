'use client';

import React from "react";
import type { FC } from 'react';
import { CloudIcon } from "lucide-react";
import ToolPageTemplate from "../../../components/ToolPageTemplate";

const Salesforce: FC = () => {
  return (
    <ToolPageTemplate
      title="Salesforce Integration"
      description="Transform your CRM experience with our powerful Salesforce integration that seamlessly connects your business processes with AI-driven automation."
      icon={<CloudIcon className="w-8 h-8 text-emerald-400" />}
      features={[
        "Automated Data Synchronization",
        "Custom Workflow Automation",
        "Lead Scoring and Management",
        "AI-Powered Analytics",
        "Real-time Data Updates",
        "Advanced Reporting",
        "Custom Object Integration",
      ]}
      benefits={[
        "Enhanced CRM Efficiency",
        "Improved Sales Process",
        "Better Customer Insights",
        "Streamlined Operations",
        "Data-Driven Decisions",
        "Increased Productivity",
        "Seamless Integration",
      ]}
      integrations={[
        "Salesforce Sales Cloud",
        "Salesforce Service Cloud",
        "Marketing Automation",
        "Analytics Platforms",
        "Communication Tools",
        "Custom Applications",
      ]}
      sectionTitles={{
        features: "Features",
        benefits: "Benefits",
        integrations: "Integrations"
      }}
      metaTitle="Salesforce Integration | NeuroGen Lab - CRM Enhancement Solution"
      metaDescription="Enhance your Salesforce CRM with our intelligent integration solution. Automate workflows, improve data management, and gain valuable insights through AI-powered analytics."
    />
  );
};

export default Salesforce;
