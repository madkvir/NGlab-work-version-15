import React from 'react';
import { MessageCircle } from 'lucide-react';
import ToolPageTemplate from './ToolPageTemplate';

const Intercom = () => {
  return (
    <ToolPageTemplate
      title="Intercom Integration"
      description="Enhance your customer messaging with our Intercom integration that provides intelligent customer engagement and support automation."
      icon={<MessageCircle className="w-8 h-8 text-emerald-400" />}
      features={[
        "Automated Customer Support",
        "Targeted Messaging",
        "Customer Segmentation",
        "Engagement Analytics",
        "Custom Bots",
        "Product Tours",
        "Help Center Integration"
      ]}
      benefits={[
        "Improved Customer Engagement",
        "Automated Support Workflows",
        "Better Customer Understanding",
        "Increased Conversion Rates",
        "Streamlined Communication",
        "Personalized Experiences",
        "Efficient Support Process"
      ]}
      integrations={[
        "CRM Systems",
        "Marketing Platforms",
        "Analytics Tools",
        "Help Desk Software",
        "E-commerce Platforms",
        "Product Analytics"
      ]}
      metaTitle="Intercom Integration | NeuroGen Lab - Customer Messaging Solution"
      metaDescription="Optimize your customer messaging with our Intercom integration. Automate support, engage customers intelligently, and improve conversion rates through targeted communication."
      metaKeywords="intercom integration, customer messaging, support automation, customer engagement"
      ogTitle="Intercom Integration - Smart Customer Support | NeuroGen Lab"
      ogDescription="Enhance customer messaging with intelligent automation"
      ogUrl="https://neurogenlab.de/tools/intercom"
      ogImage=""
      twitterTitle="Intercom Integration - Customer Messaging"
      twitterDescription="Optimize support with smart Intercom automation"
      twitterImage=""
      author="NeuroGen Lab"
      canonical="https://neurogenlab.de/tools/intercom"
      favicon=""
    />
  );
};

export default Intercom;