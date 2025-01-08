import React from "react";
import { Metadata } from "next";
import ToolPageTemplate from "../../../components/ToolPageTemplate";
import { Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "HubSpot Integration | NeuroGen Lab - Marketing Automation Solution",
  description:
    "Transform your marketing and sales with our HubSpot integration. Implement intelligent automation, enhance customer engagement, and improve ROI through AI-powered tools.",
  keywords: ["hubspot integration", "marketing automation", "sales automation", "CRM"],
  openGraph: {
    title: "HubSpot Integration - Smart Marketing | NeuroGen Lab",
    description: "Transform your marketing with intelligent HubSpot automation",
    url: "https://neurogenlab.de/tools/hubspot",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  twitter: {
    title: "HubSpot Integration - Marketing Automation",
    description: "Enhance marketing with smart HubSpot integration",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/hubspot",
  },
};
const HubSpot = () => {
  return (
    <ToolPageTemplate
      title="HubSpot Integration"
      description="Elevate your marketing and sales operations with our comprehensive HubSpot integration featuring AI-powered automation and analytics."
      icon={<Building2 className="w-8 h-8 text-emerald-400" />}
      features={[
        "Marketing Automation",
        "Sales Pipeline Management",
        "Contact Intelligence",
        "Smart Content Creation",
        "Analytics Dashboard",
        "Email Campaign Automation",
        "Lead Nurturing Workflows",
      ]}
      benefits={[
        "Improved Marketing ROI",
        "Enhanced Lead Quality",
        "Automated Customer Journey",
        "Better Sales Alignment",
        "Data-Driven Marketing",
        "Personalized Engagement",
        "Streamlined Operations",
      ]}
      integrations={[
        "HubSpot CRM",
        "Marketing Hub",
        "Sales Hub",
        "Service Hub",
        "CMS Hub",
        "Operations Hub",
      ]}
      metaTitle="HubSpot Integration | NeuroGen Lab - Marketing Automation Solution"
      metaDescription="Transform your marketing and sales with our HubSpot integration. Implement intelligent automation, enhance customer engagement, and improve ROI through AI-powered tools."
    />
  );
};

export default HubSpot;
