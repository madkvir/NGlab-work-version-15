import React from "react";
import { Metadata } from "next";
import ToolPageTemplate from "../../../components/ToolPageTemplate";
import { Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Search | NeuroGen Lab - Intelligent Search Solution",
  description:
    "Boost data discovery with AI search. Accurate results, semantic search, NLP, and advanced indexing for superior user experience.",
  keywords: ["AI search", "semantic search", "intelligent search", "data discovery"],
  openGraph: {
    title: "Best Search - Smart Data Discovery | NeuroGen Lab",
    description: "Transform data discovery with AI-powered intelligent search",
    url: "https://neurogenlab.de/tools/best-search",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  twitter: {
    title: "Best Search - Intelligent Search Solution",
    description: "Enhance data discovery with AI-powered search",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/best-search",
  },
};

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
      metaTitle="Best Search | NeuroGen Lab - Intelligent Search Solution"
      metaDescription="Boost data discovery with AI search. Accurate results, semantic search, NLP, and advanced indexing for superior user experience."
    />
  );
};

export default BestSearch;
