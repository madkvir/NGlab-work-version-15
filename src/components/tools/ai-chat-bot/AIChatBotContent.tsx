import React from 'react';

interface ContentProps {
  content: {
    mainTitle: string;
    subtitle: string;
    introText: string;
    introList: readonly string[];
    howItWorksTitle: string;
    howItWorksText: string;
    howItWorksList: readonly string[];
    keyFeaturesTitle: string;
    features: {
      realTime: { title: string; description: string };
      multiLanguage: { title: string; description: string };
      scalability: { title: string; description: string };
      analytics: { title: string; description: string };
    };
    industriesTitle: string;
    industriesText: string;
    industries: ReadonlyArray<{
      readonly icon: string;
      readonly name: string;
      readonly description: string;
    }>;
    conclusionTitle: string;
    conclusionText: string;
    conclusionList: readonly string[];
    topReasonsTitle: string;
    reasonList: ReadonlyArray<{
      readonly title: string;
      readonly content: {
        readonly text: string;
        readonly list: readonly string[];
      };
    }>;
    finalConclusion: {
      readonly title: string;
      readonly text: string;
    };
  };
}

export const AIChatBotContent: React.FC<ContentProps> = ({ content }) => {
  return (
    <article className="prose prose-invert max-w-none">
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">{content.mainTitle}</h2>
        <p className="text-xl text-gray-400 mb-8">{content.subtitle}</p>
        <p className="mb-4">{content.introText}</p>
        <ul className="list-disc pl-6 mb-8">
          {content.introList.map((item, index) => (
            <li key={index} className="text-gray-300">{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">{content.howItWorksTitle}</h3>
        <p className="mb-4">{content.howItWorksText}</p>
        <ul className="list-disc pl-6 mb-8">
          {content.howItWorksList.map((item, index) => (
            <li key={index} className="text-gray-300">{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-6">{content.keyFeaturesTitle}</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(content.features).map(([key, feature]) => (
            <div key={key} className="bg-gray-800/50 rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-3 text-emerald-400">{feature.title}</h4>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">{content.industriesTitle}</h3>
        <p className="mb-6">{content.industriesText}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.industries.map((industry, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg p-6">
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{industry.name}</h4>
              <p className="text-gray-300">{industry.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">{content.conclusionTitle}</h3>
        <p className="mb-4">{content.conclusionText}</p>
        <ul className="list-disc pl-6 mb-8">
          {content.conclusionList.map((item, index) => (
            <li key={index} className="text-gray-300">{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-6">{content.topReasonsTitle}</h3>
        <div className="space-y-8">
          {content.reasonList.map((reason, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-4">{reason.title}</h4>
              <p className="mb-4">{reason.content.text}</p>
              <ul className="list-disc pl-6">
                {reason.content.list.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-4">{content.finalConclusion.title}</h3>
        <p className="text-gray-300">{content.finalConclusion.text}</p>
      </section>
    </article>
  );
}; 