'use client';

import React from "react";
import type { FC } from 'react';
import { TicketCheck } from "lucide-react";
import ToolPageTemplate from "../../../components/ToolPageTemplate";

const Jira: FC = () => {
  return (
    <ToolPageTemplate
      title="Jira Integration"
      description="Streamline your project management and issue tracking with our intelligent Jira integration solution."
      icon={<TicketCheck className="w-8 h-8 text-emerald-400" />}
      features={[
        "Automated Issue Creation and Updates",
        "Smart Task Assignment",
        "Priority Management",
        "Custom Workflow Automation",
        "Real-time Synchronization",
        "Advanced Search and Filtering",
        "Intelligent Status Updates",
      ]}
      benefits={[
        "Improved Project Visibility",
        "Streamlined Workflow Management",
        "Enhanced Team Collaboration",
        "Reduced Manual Tasks",
        "Better Resource Allocation",
        "Increased Productivity",
        "Data-Driven Decision Making",
      ]}
      integrations={[
        "Atlassian Suite",
        "Version Control Systems",
        "CI/CD Tools",
        "Development Environments",
        "Communication Platforms",
        "Documentation Tools",
      ]}
      sectionTitles={{
        features: "Features",
        benefits: "Benefits",
        integrations: "Integrations"
      }}
      metaTitle="Jira Integration | NeuroGen Lab - Project Management Solution"
      metaDescription="Optimize your project management with our Jira integration. Automate workflows, enhance collaboration, and improve productivity with intelligent issue tracking."
    />
  );
};

export default Jira;
