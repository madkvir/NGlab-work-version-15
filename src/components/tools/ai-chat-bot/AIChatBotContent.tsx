import React from 'react';
import { Store, Briefcase, GraduationCap, ShoppingCart, DollarSign, Car, ChevronDown } from 'lucide-react';

interface ContentProps {
  content: {
    industriesTitle: string;
    industriesText: string;
    industries: ReadonlyArray<{
      readonly icon: string;
      readonly name: string;
      readonly description: string;
    }>;
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

// Функция для получения иконки по названию отрасли
const getIndustryIcon = (iconName: string, name: string) => {
  // Мапинг эмодзи на компоненты Lucide React
  switch (true) {
    case /retail|розничн|einzelhandel|minorista/i.test(name):
      return <Store className="w-10 h-10 text-emerald-400" />;
    case /services|услуг|послуг|dienstleistungen|servicios/i.test(name):
      return <Briefcase className="w-10 h-10 text-emerald-400" />;
    case /education|образован|освіт|bildung|educación/i.test(name):
      return <GraduationCap className="w-10 h-10 text-emerald-400" />;
    case /e-commerce|электрон|електрон|commerce/i.test(name):
      return <ShoppingCart className="w-10 h-10 text-emerald-400" />;
    case /financ|финанс|фінанс|finanzen/i.test(name):
      return <DollarSign className="w-10 h-10 text-emerald-400" />;
    case /auto|авто|automobil/i.test(name):
      return <Car className="w-10 h-10 text-emerald-400" />;
    default:
      return <div className="text-4xl text-emerald-400">{iconName}</div>;
  }
};

export const AIChatBotContent: React.FC<ContentProps> = ({ content }) => {
  return (
    <article className="prose prose-invert max-w-none">
      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">{content.industriesTitle}</h3>
        <p className="mb-6">{content.industriesText}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.industries.map((industry, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg p-6 relative">
              <div className="mb-4">
                {getIndustryIcon(industry.icon, industry.name)}
              </div>
              <h4 className="text-xl font-semibold mb-2">{industry.name}</h4>
              <p className="text-gray-300">{industry.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-6">{content.topReasonsTitle}</h3>
        <div className="space-y-4">
          {content.reasonList.map((reason, index) => (
            <details 
              key={index} 
              className="bg-gray-800/50 rounded-lg overflow-hidden group cursor-pointer" 
            >
              <summary className="flex items-center justify-between p-6 relative hover:bg-gray-800/70 transition-colors duration-200">
                <div className="flex items-center gap-3">
                  <h4 className="text-xl font-semibold">{reason.title}</h4>
                </div>
                <ChevronDown className="w-5 h-5 text-emerald-400 transform group-open:rotate-180 transition-transform duration-200" />
              </summary>
              
              {/* Контент аккордеона доступен для поисковых ботов, даже когда свёрнут */}
              <div className="p-6 pt-0">
                <p className="mb-4 text-gray-300">{reason.content.text}</p>
                <ul className="list-disc pl-6 space-y-2">
                  {reason.content.list.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300">{item}</li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </section>

      {content.finalConclusion && (
        <section className="mb-6">
          <h3 className="text-2xl font-bold mb-4">{content.finalConclusion.title}</h3>
          <p className="text-gray-300">{content.finalConclusion.text}</p>
        </section>
      )}
    </article>
  );
}; 