'use client';

import React from "react";
import { UserSquare2 } from "lucide-react";
import ToolPageTemplate from "../../../components/ToolPageTemplate";

const Counseling = () => {
  return (
    <ToolPageTemplate
      title="AI Implementation Counseling"
      description="Get expert guidance on implementing AI solutions in your business with our comprehensive counseling services."
      icon={<UserSquare2 className="w-8 h-8 text-emerald-400" />}
      features={[
        "Strategic AI Planning",
        "Technology Assessment",
        "Implementation Roadmap",
        "Risk Analysis",
        "Change Management",
        "Training Programs",
        "Performance Monitoring",
      ]}
      benefits={[
        "Expert Guidance",
        "Risk Mitigation",
        "Optimized Implementation",
        "Cost-effective Solutions",
        "Smooth Transition",
        "Knowledge Transfer",
        "Long-term Success",
      ]}
      integrations={[
        "Project Management",
        "Training Platforms",
        "Documentation Systems",
        "Collaboration Tools",
        "Analytics Platforms",
        "Resource Planning",
      ]}
      sectionTitles={{
        features: "Features",
        benefits: "Benefits",
        integrations: "Integrations"
      }}
      metaTitle="AI Implementation Counseling | NeuroGen Lab - Expert Guidance"
      metaDescription="Get expert guidance for your AI implementation journey. Our counseling services ensure successful integration of artificial intelligence into your business operations."
    />
  );
};

export default Counseling;
