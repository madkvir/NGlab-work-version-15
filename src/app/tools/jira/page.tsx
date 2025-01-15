import React from "react";
import { Metadata } from "next";
import ToolPageTemplate from "../../../components/ToolPageTemplate";
import { Ticket } from "lucide-react";

export const metadata: Metadata = {
  title: "Intercom Integration | NeuroGen Lab - Customer Messaging Solution",
  description:
    "Optimize your customer messaging with our Intercom integration. Automate support, engage customers intelligently, and improve conversion rates through targeted communication.",
  keywords: [
    "intercom integration",
    "customer messaging",
    "support automation",
    "customer engagement",
  ],
  openGraph: {
    title: "Intercom Integration - Smart Customer Support | NeuroGen Lab",
    description: "Enhance customer messaging with intelligent automation",
    url: "https://neurogenlab.de/tools/intercom",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  twitter: {
    title: "Intercom Integration - Customer Messaging",
    description: "Optimize support with smart Intercom automation",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/intercom",
  },
};
const Jira = () => {
  return (
    <ToolPageTemplate
      title="Jira Integration"
      description="Streamline your project management and issue tracking with our intelligent Jira integration solution."
      icon={<Ticket className="w-8 h-8 text-emerald-400" />}
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
      metaTitle="Jira Integration | NeuroGen Lab - Project Management Solution"
      metaDescription="Optimize your project management with our Jira integration. Automate workflows, enhance collaboration, and improve productivity with intelligent issue tracking."
    />
  );
};

export default Jira;
