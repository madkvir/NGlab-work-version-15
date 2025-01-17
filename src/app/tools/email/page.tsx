'use client';

import React from "react";
import type { FC } from 'react';
import { MailCheck } from "lucide-react";
import ToolPageTemplate from "../../../components/ToolPageTemplate";

const Email: FC = () => {
  return (
    <ToolPageTemplate
      title="Email Integration"
      description="Enhance your email communications with our intelligent email integration solution that streamlines messaging and automates responses."
      icon={<MailCheck className="w-8 h-8 text-emerald-400" />}
      features={[
        "Smart Email Routing",
        "Automated Response System",
        "Template Management",
        "Email Analytics",
        "Priority Inbox",
        "Multi-account Support",
        "Advanced Filtering",
      ]}
      benefits={[
        "Improved Response Time",
        "Enhanced Email Organization",
        "Reduced Manual Work",
        "Better Communication Flow",
        "Increased Productivity",
        "Data-driven Insights",
        "Streamlined Workflows",
      ]}
      integrations={[
        "Gmail",
        "Microsoft Outlook",
        "CRM Systems",
        "Marketing Platforms",
        "Help Desk Software",
        "Analytics Tools",
      ]}
      sectionTitles={{
        features: "Features",
        benefits: "Benefits",
        integrations: "Integrations"
      }}
      metaTitle="Email Integration | NeuroGen Lab - Intelligent Email Solution"
      metaDescription="Optimize your email communications with our intelligent integration solution. Automate responses, manage templates, and gain valuable insights from your email interactions."
    />
  );
};

export default Email;
