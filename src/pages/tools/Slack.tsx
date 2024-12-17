import React from 'react';
import { MessageSquareMore } from 'lucide-react';
import ToolPageTemplate from './ToolPageTemplate';

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
        "Search Integration"
      ]}
      benefits={[
        "Enhanced Team Collaboration",
        "Streamlined Communication",
        "Automated Updates",
        "Improved Productivity",
        "Better Information Flow",
        "Centralized Notifications",
        "Efficient File Management"
      ]}
      integrations={[
        "Project Management Tools",
        "Development Tools",
        "CRM Systems",
        "Help Desk Software",
        "Analytics Platforms",
        "Cloud Storage"
      ]}
      metaTitle="Slack Integration | NeuroGen Lab - Team Communication Solution"
      metaDescription="Enhance your team collaboration with our Slack integration. Automate workflows, manage communications, and improve productivity through intelligent integration."
      metaKeywords="slack integration, team communication, workflow automation, collaboration"
      ogTitle="Slack Integration - Smart Team Communication | NeuroGen Lab"
      ogDescription="Enhance team collaboration with intelligent Slack automation"
      ogUrl="https://neurogenlab.de/tools/slack"
      ogImage=""
      twitterTitle="Slack Integration - Team Communication Solution"
      twitterDescription="Transform team communication with smart Slack integration"
      twitterImage=""
      author="NeuroGen Lab"
      canonical="https://neurogenlab.de/tools/slack"
      favicon=""
    />
  );
};

export default Slack;