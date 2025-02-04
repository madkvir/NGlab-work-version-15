import React from 'react';

interface ArticleContentProps {
  content: {
    mainTitle: string;
    subtitle: string;
    introText: string;
    introList: string[];
    howItWorksTitle: string;
    howItWorksText: string;
    howItWorksList: string[];
    keyFeaturesTitle: string;
    features: {
      realTime: { title: string; description: string };
      multiLanguage: { title: string; description: string };
      scalability: { title: string; description: string };
      analytics: { title: string; description: string };
    };
    industriesTitle: string;
    industriesText: string;
    industries: any[];
    conclusionTitle: string;
    conclusionText: string;
    conclusionList: string[];
    topReasonsTitle: string;
    reasonList: any[];
    finalConclusion: { title: string; text: string };
  };
}

export const ArticleContent: React.FC<ArticleContentProps> = ({ content }) => {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>{content.mainTitle}</h1>
      {/* Отрендерите остальной контент здесь */}
    </article>
  );
}; 