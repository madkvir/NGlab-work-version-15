'use client';

import React from "react";
import type { FC } from 'react';
import { PuzzleIcon } from "lucide-react";
import ToolPageTemplate from "../../../components/ToolPageTemplate";

const Zapier: FC = () => {
  return (
    <ToolPageTemplate
      title="Zapier Integration"
      description="Connect and automate your business tools with our powerful Zapier integration platform."
      icon={<PuzzleIcon className="w-8 h-8 text-emerald-400" />}
      features={[
        "Multi-app Workflow Automation",
        "Custom Trigger Creation",
        "Data Mapping and Transformation",
        "Error Handling and Retry Logic",
        "Conditional Logic Implementation",
        "Schedule-based Automation",
        "Real-time Monitoring",
      ]}
      benefits={[
        "Seamless App Integration",
        "Time-saving Automation",
        "Reduced Manual Errors",
        "Improved Workflow Efficiency",
        "Enhanced Data Accuracy",
        "Cost-effective Operations",
        "Scalable Integration Solution",
      ]}
      integrations={[
        "CRM Systems",
        "Marketing Tools",
        "Project Management Apps",
        "Communication Platforms",
        "E-commerce Solutions",
        "Analytics Tools",
      ]}
      sectionTitles={{
        features: "Features",
        benefits: "Benefits",
        integrations: "Integrations"
      }}
      metaTitle="Zapier Integration | NeuroGen Lab - Workflow Automation Solution"
      metaDescription="Automate your business processes with our Zapier integration. Connect multiple applications and create efficient workflows with intelligent automation."
    />
  );
};

export default Zapier;
