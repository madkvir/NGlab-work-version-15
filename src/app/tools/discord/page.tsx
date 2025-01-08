import React from "react";
import { Metadata } from "next";
import ToolPageTemplate from "../../../components/ToolPageTemplate";
import { MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Discord Integration | NeuroGen Lab - Community Management Solution",
  description:
    "Transform your Discord community with our intelligent integration. Automate moderation, enhance engagement, and streamline server management with AI-powered tools.",
  keywords: ["discord integration", "community management", "discord bot", "server automation"],
  openGraph: {
    title: "Discord Integration - Smart Community Management | NeuroGen Lab",
    description: "Enhance your Discord community with AI-powered moderation",
    url: "https://neurogenlab.de/tools/discord",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  twitter: {
    title: "Discord Integration - Community Management",
    description: "Intelligent Discord server management and automation",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/discord",
  },
};
const Discord = () => {
  return (
    <ToolPageTemplate
      title="Discord Integration"
      description="Enhance your community engagement with our powerful Discord integration that brings AI-powered moderation and automated interactions to your server."
      icon={<MessageSquare className="w-8 h-8 text-emerald-400" />}
      features={[
        "Automated Moderation",
        "Custom Bot Development",
        "Role Management",
        "Event Automation",
        "Community Analytics",
        "Interactive Commands",
        "Multi-Server Support",
      ]}
      benefits={[
        "Enhanced Community Management",
        "Reduced Moderation Workload",
        "Improved User Engagement",
        "Automated Workflows",
        "Better Server Organization",
        "Real-time Analytics",
        "Seamless Integration",
      ]}
      integrations={[
        "Discord API",
        "Webhook System",
        "Bot Framework",
        "Analytics Tools",
        "Custom Commands",
        "Role Management",
      ]}
      metaTitle="Discord Integration | NeuroGen Lab - Community Management Solution"
      metaDescription="Transform your Discord community with our intelligent integration. Automate moderation, enhance engagement, and streamline server management with AI-powered tools."
    />
  );
};

export default Discord;
