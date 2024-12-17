import React from 'react';
import { Building2 } from 'lucide-react';
import ToolPageTemplate from './ToolPageTemplate';

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
        "Lead Nurturing Workflows"
      ]}
      benefits={[
        "Improved Marketing ROI",
        "Enhanced Lead Quality",
        "Automated Customer Journey",
        "Better Sales Alignment",
        "Data-Driven Marketing",
        "Personalized Engagement",
        "Streamlined Operations"
      ]}
      integrations={[
        "HubSpot CRM",
        "Marketing Hub",
        "Sales Hub",
        "Service Hub",
        "CMS Hub",
        "Operations Hub"
      ]}
      metaTitle="HubSpot Integration | NeuroGen Lab - Marketing Automation Solution"
      metaDescription="Transform your marketing and sales with our HubSpot integration. Implement intelligent automation, enhance customer engagement, and improve ROI through AI-powered tools."
      metaKeywords="hubspot integration, marketing automation, sales automation, CRM"
      ogTitle="HubSpot Integration - Smart Marketing | NeuroGen Lab"
      ogDescription="Transform your marketing with intelligent HubSpot automation"
      ogUrl="https://neurogenlab.de/tools/hubspot"
      ogImage=""
      twitterTitle="HubSpot Integration - Marketing Automation"
      twitterDescription="Enhance marketing with smart HubSpot integration"
      twitterImage=""
      author="NeuroGen Lab"
      canonical="https://neurogenlab.de/tools/hubspot"
      favicon=""
    />
  );
};

export default HubSpot;