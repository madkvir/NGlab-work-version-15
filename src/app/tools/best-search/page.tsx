'use client';

import React from "react";
import { Search } from "lucide-react";
import ToolPageTemplate from "../../../components/ToolPageTemplate";

const BestSearch = () => {
  return (
    <ToolPageTemplate
      title="Best Search Solution"
      description="Enhance your data discovery with our intelligent search solution that delivers accurate and relevant results through advanced AI algorithms."
      icon={<Search className="w-8 h-8 text-emerald-400" />}
      features={[
        "Natural Language Processing",
        "Semantic Search Capability",
        "Auto-suggestion System",
        "Multi-language Support",
        "Faceted Search Options",
        "Real-time Indexing",
        "Advanced Filtering",
      ]}
      benefits={[
        "Improved Search Accuracy",
        "Faster Information Discovery",
        "Enhanced User Experience",
        "Increased Productivity",
        "Better Decision Making",
        "Reduced Search Time",
        "Comprehensive Results",
      ]}
      integrations={[
        "Content Management Systems",
        "Document Repositories",
        "Knowledge Bases",
        "Enterprise Systems",
        "Analytics Platforms",
        "Custom Applications",
      ]}
      sectionTitles={{
        features: "Features",
        benefits: "Benefits",
        integrations: "Integrations"
      }}
      metaTitle="Best Search | NeuroGen Lab - Intelligent Search Solution"
      metaDescription="Boost data discovery with AI search. Accurate results, semantic search, NLP, and advanced indexing for superior user experience."
    />
  );
};

export default BestSearch;
