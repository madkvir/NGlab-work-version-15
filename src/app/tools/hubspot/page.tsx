'use client';

import React from "react";
import type { FC } from 'react';
import { Building } from "lucide-react";
import ToolPageTemplate from "../../../components/ToolPageTemplate";

const HubSpot: FC = () => {
  return (
    <ToolPageTemplate
      title="HubSpot Integration"
      description="Elevate your marketing and sales operations with our comprehensive HubSpot integration featuring AI-powered automation and analytics."
      icon={<Building className="w-8 h-8 text-emerald-400" />}
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
      sectionTitles={{
        features: "Features",
        benefits: "Benefits",
        integrations: "Integrations"
      }}
      metaTitle="HubSpot Integration | NeuroGen Lab - Marketing Automation Solution"
      metaDescription="Transform your marketing and sales with our HubSpot integration. Implement intelligent automation, enhance customer engagement, and improve ROI through AI-powered tools."
    />
  );
};

export default HubSpot;
