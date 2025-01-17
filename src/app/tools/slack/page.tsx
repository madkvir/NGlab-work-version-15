'use client';

import React from "react";
import type { FC } from 'react';
import { MessagesSquare } from "lucide-react";
import ToolPageTemplate from "../../../components/ToolPageTemplate";

const Slack: FC = () => {
  return (
    <ToolPageTemplate
      title="Slack Integration"
      description="Connect your team communications with our powerful Slack integration that enhances collaboration and automates workflows."
      icon={<MessagesSquare className="w-8 h-8 text-emerald-400" />}
      features={[
        "Channel Management",
        "Automated Notifications",
        "Custom Bot Creation",
        "Workflow Automation",
        "Message Threading",
        "File Sharing",
        "Search Integration",
      ]}
      benefits={[
        "Enhanced Team Collaboration",
        "Streamlined Communication",
        "Automated Updates",
        "Improved Productivity",
        "Better Information Flow",
        "Centralized Notifications",
        "Efficient File Management",
      ]}
      integrations={[
        "Project Management Tools",
        "Development Tools",
        "CRM Systems",
        "Help Desk Software",
        "Analytics Platforms",
        "Cloud Storage",
      ]}
      sectionTitles={{
        features: "Features",
        benefits: "Benefits",
        integrations: "Integrations"
      }}
      metaTitle="Slack Integration | NeuroGen Lab - Team Communication Solution"
      metaDescription="Enhance your team collaboration with our Slack integration. Automate workflows, manage communications, and improve productivity through intelligent integration."
    />
  );
};

export default Slack;
