import React from "react";
import { Metadata } from "next";
import ToolPageTemplate from "../../../components/ToolPageTemplate";
import { Cloud } from "lucide-react";

export const metadata: Metadata = {
  title: "Salesforce Integration | NeuroGen Lab - CRM Enhancement Solution",
  description:
    "Enhance your Salesforce CRM with our intelligent integration solution. Automate workflows, improve data management, and gain valuable insights through AI-powered analytics.",
  keywords: [
    "salesforce integration",
    "CRM automation",
    "sales automation",
    "business intelligence",
  ],
  openGraph: {
    title: "Salesforce Integration - Smart CRM Enhancement | NeuroGen Lab",
    description: "Transform your CRM with intelligent Salesforce automation",
    url: "https://neurogenlab.de/tools/salesforce",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  twitter: {
    title: "Salesforce Integration - CRM Enhancement",
    description: "Enhance CRM with smart Salesforce integration",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/salesforce",
  },
};
const Salesforce = () => {
  return (
    <ToolPageTemplate
      title="Salesforce Integration"
      description="Transform your CRM experience with our powerful Salesforce integration that seamlessly connects your business processes with AI-driven automation."
      icon={<Cloud className="w-8 h-8 text-emerald-400" />}
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
      metaTitle="Salesforce Integration | NeuroGen Lab - CRM Enhancement Solution"
      metaDescription="Enhance your Salesforce CRM with our intelligent integration solution. Automate workflows, improve data management, and gain valuable insights through AI-powered analytics."
    />
  );
};

export default Salesforce;
