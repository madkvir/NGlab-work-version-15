import React from 'react';
import { MessageSquare } from 'lucide-react';
import ToolPageTemplate from './ToolPageTemplate';

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
        "Workflow Automation"
      ]}
      benefits={[
        "Enhanced Team Collaboration",
        "Streamlined Communication",
        "Improved Productivity",
        "Better Resource Management",
        "Efficient File Sharing",
        "Automated Workflows",
        "Seamless Integration"
      ]}
      integrations={[
        "Microsoft 365",
        "SharePoint",
        "OneDrive",
        "Power Automate",
        "Azure Services",
        "Third-party Apps"
      ]}
      metaTitle="Microsoft Teams Integration | NeuroGen Lab - Collaboration Solution"
      metaDescription="Optimize your team collaboration with our Microsoft Teams integration. Enable intelligent communication, automate workflows, and enhance productivity through AI-powered tools."
      metaKeywords="microsoft teams integration, team collaboration, workflow automation"
      ogTitle="Microsoft Teams Integration - Smart Collaboration | NeuroGen Lab"
      ogDescription="Enhance team collaboration with AI-powered automation"
      ogUrl="https://neurogenlab.de/tools/microsoft-teams"
      ogImage=""
      twitterTitle="Microsoft Teams Integration - Collaboration Solution"
      twitterDescription="Transform teamwork with intelligent Teams integration"
      twitterImage=""
      author="NeuroGen Lab"
      canonical="https://neurogenlab.de/tools/microsoft-teams"
      favicon=""
    />
  );
};

export default MicrosoftTeams;