import React from "react";
import { Metadata } from "next";
import { MessageSquare } from "lucide-react";
import ToolPageTemplate from "../../../components/ToolPageTemplate";

export const metadata: Metadata = {
  title: "Microsoft Teams Integration | NeuroGen Lab - Collaboration Solution",
  description:
    "Optimize your team collaboration with our Microsoft Teams integration. Enable intelligent communication, automate workflows, and enhance productivity through AI-powered tools.",
  keywords: ["microsoft teams integration", "team collaboration", "workflow automation"],
  openGraph: {
    title: "Microsoft Teams Integration - Smart Collaboration | NeuroGen Lab",
    description: "Enhance team collaboration with AI-powered automation",
    url: "https://neurogenlab.de/tools/microsoft-teams",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  twitter: {
    title: "Microsoft Teams Integration - Collaboration Solution",
    description: "Transform teamwork with intelligent Teams integration",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/microsoft-teams",
  },
};

const MicrosoftTeams = () => {
  return (
    <ToolPageTemplate
      title="Microsoft Teams Integration"
      description="Enhance your team collaboration with our Microsoft Teams integration that brings AI-powered communication and workflow automation to your workspace."
      icon={<MessageSquare className="w-8 h-8 text-emerald-400" />}
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
      metaTitle="Microsoft Teams Integration | NeuroGen Lab - Collaboration Solution"
      metaDescription="Optimize your team collaboration with our Microsoft Teams integration. Enable intelligent communication, automate workflows, and enhance productivity through AI-powered tools."
    />
  );
};

export default MicrosoftTeams;
