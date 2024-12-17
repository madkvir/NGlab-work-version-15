import React from 'react';
import { Search } from 'lucide-react';
import ToolPageTemplate from './ToolPageTemplate';

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
        "Advanced Filtering"
      ]}
      benefits={[
        "Improved Search Accuracy",
        "Faster Information Discovery",
        "Enhanced User Experience",
        "Increased Productivity",
        "Better Decision Making",
        "Reduced Search Time",
        "Comprehensive Results"
      ]}
      integrations={[
        "Content Management Systems",
        "Document Repositories",
        "Knowledge Bases",
        "Enterprise Systems",
        "Analytics Platforms",
        "Custom Applications"
      ]}
      metaTitle="Best Search | NeuroGen Lab - Intelligent Search Solution"
      metaDescription="Transform your data discovery with our AI-powered search solution. Experience accurate and relevant results with advanced natural language processing and semantic search capabilities."
      metaKeywords="AI search, semantic search, intelligent search, data discovery"
      ogTitle="Best Search - Smart Data Discovery | NeuroGen Lab"
      ogDescription="Transform data discovery with AI-powered intelligent search"
      ogUrl="https://neurogenlab.de/tools/best-search"
      ogImage=""
      twitterTitle="Best Search - Intelligent Search Solution"
      twitterDescription="Enhance data discovery with AI-powered search"
      twitterImage=""
      author="NeuroGen Lab"
      canonical="https://neurogenlab.de/tools/best-search"
      favicon=""
    />
  );
};

export default BestSearch;