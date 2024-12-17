import React from 'react';
import { Headphones } from 'lucide-react';
import ToolPageTemplate from './ToolPageTemplate';

const LiveChat = () => {
  return (
    <ToolPageTemplate
      title="LiveChat Integration"
      description="Provide exceptional customer support with our LiveChat integration that combines human interaction with AI-powered assistance."
      icon={<Headphones className="w-8 h-8 text-emerald-400" />}
      features={[
        "Real-time Chat Support",
        "AI-powered Assistance",
        "Visitor Tracking",
        "Chat Analytics",
        "Custom Chat Widgets",
        "Automated Greetings",
        "File Sharing"
      ]}
      benefits={[
        "Improved Customer Support",
        "Increased Conversion Rates",
        "Better Customer Insights",
        "Reduced Response Time",
        "Enhanced User Experience",
        "24/7 Availability",
        "Personalized Interactions"
      ]}
      integrations={[
        "CRM Systems",
        "Help Desk Software",
        "E-commerce Platforms",
        "Analytics Tools",
        "Social Media",
        "Email Marketing"
      ]}
      metaTitle="LiveChat Integration | NeuroGen Lab - Customer Support Solution"
      metaDescription="Transform your customer support with our LiveChat integration. Combine human interaction with AI assistance for exceptional customer service and improved engagement."
      metaKeywords="livechat integration, customer support, live chat, customer service"
      ogTitle="LiveChat Integration - Smart Customer Support | NeuroGen Lab"
      ogDescription="Enhance customer support with AI-powered live chat"
      ogUrl="https://neurogenlab.de/tools/livechat"
      ogImage=""
      twitterTitle="LiveChat Integration - Customer Support Solution"
      twitterDescription="Transform support with intelligent live chat"
      twitterImage=""
      author="NeuroGen Lab"
      canonical="https://neurogenlab.de/tools/livechat"
      favicon=""
    />
  );
};

export default LiveChat;