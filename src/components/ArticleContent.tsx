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
    <article className="prose prose-invert max-w-none mt-16">
      <h1 className="text-3xl font-bold text-center mb-4">{content.mainTitle}</h1>
      <h2 className="text-xl text-center text-gray-400 mb-8">{content.subtitle}</h2>
      
      <div className="mb-12">
        <p className="mb-4">{content.introText}</p>
        <ul className="list-disc pl-6 space-y-2">
          {content.introList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-emerald-400">{content.howItWorksTitle}</h2>
        <p className="mb-4">{content.howItWorksText}</p>
        <ul className="list-disc pl-6 space-y-2">
          {content.howItWorksList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-emerald-400">{content.keyFeaturesTitle}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2 text-emerald-400">{content.features.realTime.title}</h3>
            <p>{content.features.realTime.description}</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2 text-emerald-400">{content.features.multiLanguage.title}</h3>
            <p>{content.features.multiLanguage.description}</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2 text-emerald-400">{content.features.scalability.title}</h3>
            <p>{content.features.scalability.description}</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2 text-emerald-400">{content.features.analytics.title}</h3>
            <p>{content.features.analytics.description}</p>
          </div>
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-emerald-400">{content.industriesTitle}</h2>
        <p className="mb-6">{content.industriesText}</p>
        <div className="grid md:grid-cols-3 gap-4">
          {content.industries.map((industry, index) => (
            <div key={index} className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-emerald-400">{industry.name}</h3>
              <p className="text-sm">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-emerald-400">{content.conclusionTitle}</h2>
        <p className="mb-4">{content.conclusionText}</p>
        <ul className="list-disc pl-6 space-y-2">
          {content.conclusionList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-emerald-400">{content.topReasonsTitle}</h2>
        <div className="space-y-6">
          {content.reasonList.map((reason, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-2 text-emerald-400">{index + 1}. {reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-gray-800/50 p-6 rounded-lg text-center mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-emerald-400">{content.finalConclusion.title}</h2>
        <p>{content.finalConclusion.text}</p>
      </div>
    </article>
  );
}; 