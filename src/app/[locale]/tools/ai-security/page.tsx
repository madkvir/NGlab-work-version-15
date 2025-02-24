import React from "react";
import { ShieldCheck } from "lucide-react";
import ToolPageTemplate from "../../../../components/ToolPageTemplate";
import TopReasons from "../../../../components/TopReasons";

const AISecurity = () => {
  const reasonList = [
    {
      title: "1. Advanced Threat Detection",
      content: (
        <p className="text-gray-300 mb-4">
          Our AI security system continuously monitors and identifies potential threats in
          real-time, providing immediate alerts and responses to security incidents.
        </p>
      ),
    },
    {
      title: "2. Automated Response System",
      content: (
        <p className="text-gray-300 mb-4">
          Automatically respond to and mitigate security threats without human intervention,
          ensuring rapid protection against emerging threats.
        </p>
      ),
    },
    {
      title: "3. Predictive Analysis",
      content: (
        <p className="text-gray-300 mb-4">
          Utilize machine learning algorithms to predict and prevent potential security breaches
          before they occur.
        </p>
      ),
    },
    {
      title: "4. Compliance Management",
      content: (
        <p className="text-gray-300 mb-4">
          Ensure your security measures meet industry standards and regulatory requirements with
          automated compliance monitoring and reporting.
        </p>
      ),
    },
    {
      title: "5. Cost-Effective Protection",
      content: (
        <p className="text-gray-300 mb-4">
          Reduce security management costs while improving protection through AI-powered automation
          and efficient resource allocation.
        </p>
      ),
    },
  ];

  const articleContent = (
    <article className="prose prose-lg prose-emerald mx-auto text-white">
      <h1 className="text-4xl font-bold text-white mb-8">
        AI Security Solutions – Protect Your Business with NeuroGen Lab
      </h1>

      <p className="text-gray-300 mb-6">
        In today's digital landscape, protecting your business from cyber threats is more crucial
        than ever. Our AI-powered security solutions provide comprehensive protection against
        evolving security challenges.
      </p>

      <h2 className="text-3xl font-bold text-white mt-12 mb-6">Why Choose AI Security?</h2>

      <TopReasons reasonList={reasonList} />

      <div className="mt-12 pt-8">
        <h3 className="text-2xl font-bold text-white mb-4">Get Started Today</h3>
        <p className="text-gray-300">
          Protect your business with our advanced AI security solutions. Contact us to learn more
          about how we can help secure your digital assets and maintain compliance.
        </p>
      </div>
    </article>
  );

  return (
    <ToolPageTemplate
      title="AI Security"
      description="Protect your business with advanced AI-powered security solutions that detect and prevent threats in real-time."
      icon={<ShieldCheck className="w-8 h-8 text-emerald-400" />}
      features={[
        "Real-time Threat Detection",
        "Automated Response System",
        "Behavioral Analysis",
        "Network Protection",
        "Data Encryption",
        "Access Control",
        "Security Monitoring",
      ]}
      benefits={[
        "Enhanced Security",
        "Proactive Protection",
        "Reduced Risk",
        "Compliance Management",
        "Cost Efficiency",
        "24/7 Monitoring",
        "Quick Response",
      ]}
      integrations={[
        "Firewall Systems",
        "SIEM Platforms",
        "Cloud Services",
        "VPN Solutions",
        "Authentication Systems",
        "Monitoring Tools",
      ]}
      sectionTitles={{
        features: "Features",
        benefits: "Benefits",
        integrations: "Integrations",
      }}
      metaTitle="AI Security | NeuroGen Lab - Advanced Protection Solutions"
      metaDescription="Secure your business with AI-powered protection. Detect and prevent threats in real-time with our advanced security solutions."
      articleContent={articleContent}
    />
  );
};

export default AISecurity;
