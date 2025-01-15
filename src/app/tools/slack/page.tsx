import React from "react";
import { Metadata } from "next";
import ToolPageTemplate from "../../../components/ToolPageTemplate";
import { MessageSquareMore } from "lucide-react";

export const metadata: Metadata = {
  title: "Slack Integration | NeuroGen Lab - Team Communication Solution",
  description:
    "Enhance your team collaboration with our Slack integration. Automate workflows, manage communications, and improve productivity through intelligent integration.",
  keywords: ["slack integration", "team communication", "workflow automation", "collaboration"],
  openGraph: {
    title: "Slack Integration - Smart Team Communication | NeuroGen Lab",
    description: "Enhance team collaboration with intelligent Slack automation",
    url: "https://neurogenlab.de/tools/slack",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  twitter: {
    title: "Slack Integration - Team Communication Solution",
    description: "Transform team communication with smart Slack integration",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/slack",
  },
};

const Slack = () => {
  return (
    <ToolPageTemplate
      title="Slack Integration"
      description="Connect your team communications with our powerful Slack integration that enhances collaboration and automates workflows."
      icon={<MessageSquareMore className="w-8 h-8 text-emerald-400" />}
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
      metaTitle="Slack Integration | NeuroGen Lab - Team Communication Solution"
      metaDescription="Enhance your team collaboration with our Slack integration. Automate workflows, manage communications, and improve productivity through intelligent integration."
    />
  );
};

export default Slack;
