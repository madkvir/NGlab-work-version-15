import React from 'react';
import { Mail } from 'lucide-react';
import ToolPageTemplate from './ToolPageTemplate';

const Email = () => {
  return (
    <ToolPageTemplate
      title="Email Integration"
      description="Enhance your email communications with our intelligent email integration solution that streamlines messaging and automates responses."
      icon={<Mail className="w-8 h-8 text-emerald-400" />}
      features={[
        "Smart Email Routing",
        "Automated Response System",
        "Template Management",
        "Email Analytics",
        "Priority Inbox",
        "Multi-account Support",
        "Advanced Filtering"
      ]}
      benefits={[
        "Improved Response Time",
        "Enhanced Email Organization",
        "Reduced Manual Work",
        "Better Communication Flow",
        "Increased Productivity",
        "Data-driven Insights",
        "Streamlined Workflows"
      ]}
      integrations={[
        "Gmail",
        "Microsoft Outlook",
        "CRM Systems",
        "Marketing Platforms",
        "Help Desk Software",
        "Analytics Tools"
      ]}
      metaTitle="Email Integration | NeuroGen Lab - Intelligent Email Solution"
      metaDescription="Optimize your email communications with our intelligent integration solution. Automate responses, manage templates, and gain valuable insights from your email interactions."
      metaKeywords="email integration, email automation, smart email, communication tools"
      ogTitle="Email Integration - Smart Communication | NeuroGen Lab"
      ogDescription="Streamline your email communications with AI automation"
      ogUrl="https://neurogenlab.de/tools/email"
      ogImage=""
      twitterTitle="Email Integration - Intelligent Communication"
      twitterDescription="Enhance email efficiency with smart automation"
      twitterImage=""
      author="NeuroGen Lab"
      canonical="https://neurogenlab.de/tools/email"
      favicon=""
    />
  );
};

export default Email;