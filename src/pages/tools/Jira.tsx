import React from 'react';
import { Ticket } from 'lucide-react';
import ToolPageTemplate from './ToolPageTemplate';

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
        "Intelligent Status Updates"
      ]}
      benefits={[
        "Improved Project Visibility",
        "Streamlined Workflow Management",
        "Enhanced Team Collaboration",
        "Reduced Manual Tasks",
        "Better Resource Allocation",
        "Increased Productivity",
        "Data-Driven Decision Making"
      ]}
      integrations={[
        "Atlassian Suite",
        "Version Control Systems",
        "CI/CD Tools",
        "Development Environments",
        "Communication Platforms",
        "Documentation Tools"
      ]}
      metaTitle="Jira Integration | NeuroGen Lab - Project Management Solution"
      metaDescription="Optimize your project management with our Jira integration. Automate workflows, enhance collaboration, and improve productivity with intelligent issue tracking."
      metaKeywords="jira integration, project management, issue tracking, workflow automation"
      ogTitle="Jira Integration - Smart Project Management | NeuroGen Lab"
      ogDescription="Streamline project management with intelligent Jira automation"
      ogUrl="https://neurogenlab.de/tools/jira"
      ogImage=""
      twitterTitle="Jira Integration - Project Management Solution"
      twitterDescription="Enhance project workflows with smart Jira integration"
      twitterImage=""
      author="NeuroGen Lab"
      canonical="https://neurogenlab.de/tools/jira"
      favicon=""
    />
  );
};

export default Jira;