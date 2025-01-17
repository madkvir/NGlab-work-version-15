'use client';

import React from "react";
import type { FC } from 'react';
import { MessagesSquare } from "lucide-react";
import ToolPageTemplate from "../../../components/ToolPageTemplate";

const MicrosoftTeams: FC = () => {
  return (
    <ToolPageTemplate
      title="Microsoft Teams Integration"
      description="Enhance your team collaboration with our Microsoft Teams integration that brings AI-powered communication and workflow automation to your workspace."
      icon={<MessagesSquare className="w-8 h-8 text-emerald-400" />}
      features={[
        "Intelligent Chat Automation",
        "Meeting Management",
        "Document Collaboration",
        "Task Automation",
        "Channel Integration",
        "Custom Bot Development",
        "Workflow Automation",
      ]}
      benefits={[
        "Enhanced Team Collaboration",
        "Streamlined Communication",
        "Improved Productivity",
        "Better Resource Management",
        "Efficient File Sharing",
        "Automated Workflows",
        "Seamless Integration",
      ]}
      integrations={[
        "Microsoft 365",
        "SharePoint",
        "OneDrive",
        "Power Automate",
        "Azure Services",
        "Third-party Apps",
      ]}
      sectionTitles={{
        features: "Features",
        benefits: "Benefits",
        integrations: "Integrations"
      }}
      metaTitle="Microsoft Teams Integration | NeuroGen Lab - Collaboration Solution"
      metaDescription="Optimize your team collaboration with our Microsoft Teams integration. Enable intelligent communication, automate workflows, and enhance productivity through AI-powered tools."
    />
  );
};

export default MicrosoftTeams;
