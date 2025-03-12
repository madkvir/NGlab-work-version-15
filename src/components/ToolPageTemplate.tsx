"use client";
import React, { useState } from "react";
import { ArrowRight, HelpCircle } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import GlowingButton from "./common/GlowingButton";
import { ArticleContent } from "./ArticleContent";
import BackToHome from "./BackToHome";
import { commonTranslations } from "../locales/commonTranslations";
import getPageLangUnit from "../utils/getPageLangUnit";

interface ToolPageProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: (string | { key: string; text: string })[];
  benefits: (string | { key: string; text: string })[];
  integrations?: (string | { name: string; description: string })[];
  metaTitle: string;
  metaDescription: string;
  isComingSoon?: boolean;
  articleContent?:
    | {
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
        howItWorks?: { title: string; points: string[] }[];
      }
    | React.ReactNode;
  sectionTitles: {
    features: string;
    benefits: string;
    integrations: string;
  };
  imageComponent?: React.ReactNode;
  commonT?: any;
}

const ToolPageTemplate: React.FC<ToolPageProps> = ({
  title,
  description,
  icon,
  features,
  benefits,
  integrations,
  metaTitle,
  metaDescription,
  isComingSoon = false,
  articleContent,
  sectionTitles,
  imageComponent,
  commonT,
}) => {
  const language = !commonT ? getPageLangUnit(commonTranslations) : "";
  const t = commonT || (language ? commonTranslations[language] : commonTranslations.en);

  React.useEffect(() => {
    document.title = metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", metaDescription);
    }
  }, [metaTitle, metaDescription]);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-8">
            <BackToHome />
          </div>

          <div className="text-center mb-12">
            <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-emerald-500/10 mb-6">
              {icon}
            </div>
            <h1 className="text-4xl font-bold mb-4">
              {title}
              {isComingSoon && (
                <span className="ml-3 inline-block bg-purple-500 text-white text-sm px-3 py-1 rounded-full transform rotate-2">
                  Coming Soon
                </span>
              )}
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">{description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Features */}
            <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-6 text-emerald-400">
                {sectionTitles.features}
              </h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-emerald-400">•</span>
                    <span className="text-gray-300">
                      {typeof feature === 'string' ? (
                        feature
                      ) : (
                        <>
                          <strong className="font-semibold text-emerald-300">{feature.key}</strong> – {feature.text}
                        </>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-6 text-emerald-400">
                {sectionTitles.benefits}
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-emerald-400">•</span>
                    <span className="text-gray-300">
                      {typeof benefit === 'string' ? (
                        benefit
                      ) : (
                        <>
                          <strong className="font-semibold text-emerald-300">{benefit.key}</strong> – {benefit.text}
                        </>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {integrations && (
            <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300 mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-emerald-400">
                {sectionTitles.integrations}
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {integrations.map((integration, index) => {
                  const [showTooltip, setShowTooltip] = useState(false);
                  
                  return (
                    <div key={index} className="bg-gray-800/50 rounded-lg p-4 text-center relative group">
                      <div className="flex items-center justify-center gap-2">
                        {typeof integration === 'string' ? (
                          integration
                        ) : (
                          <>
                            <span>{integration.name}</span>
                            <div 
                              className="relative"
                              onMouseEnter={() => setShowTooltip(true)}
                              onMouseLeave={() => setShowTooltip(false)}
                            >
                              <HelpCircle className="w-4 h-4 text-emerald-400 cursor-help" />
                              {showTooltip && (
                                <div className="absolute z-10 w-64 p-3 text-sm bg-gray-900 border border-gray-700 rounded-md shadow-lg text-left -right-2 bottom-full mb-2">
                                  <div className="text-gray-300">{integration.description}</div>
                                  <div className="absolute w-3 h-3 bg-gray-900 border-r border-b border-gray-700 transform rotate-45 -bottom-1.5 right-3"></div>
                                </div>
                              )}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Кнопка Get Started */}
          <div className="text-center space-y-4 mb-12">
            <GlowingButton
              to={isComingSoon ? "#" : "/contacts"}
              size="lg"
              icon={
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              }
              className={isComingSoon ? "cursor-not-allowed opacity-75" : ""}
            >
              {isComingSoon ? "Coming Soon" : t.getStarted}
            </GlowingButton>
          </div>

          {/* HowItWorks Section with Cards */}
          {articleContent &&
            typeof articleContent === "object" &&
            "mainTitle" in articleContent &&
            articleContent.howItWorks && (
            <div className="mb-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">{articleContent.mainTitle}</h2>
                {articleContent.subtitle && (
                  <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                    {articleContent.subtitle}
                  </p>
                )}
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {articleContent.howItWorks.map((step, index) => (
                  <div key={index} className="relative group h-full">
                    <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-1 border border-gray-700/50 h-full flex flex-col">
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-xl font-bold text-white z-10">
                        {index + 1}
                      </div>
                      
                      <div className="h-24 mb-6 overflow-hidden rounded-lg flex items-center justify-center relative">
                        {index === 0 && (
                          <div className="w-full h-full bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{
                              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                              backgroundSize: '10px 10px'
                            }}></div>
                          </div>
                        )}
                        
                        {index === 1 && (
                          <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                          </div>
                        )}
                        
                        {index === 2 && (
                          <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                          </div>
                        )}
                        
                        {index === 3 && (
                          <div className="w-full h-full bg-gradient-to-br from-pink-500/20 to-emerald-500/20 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                          </div>
                        )}
                        
                        <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-emerald-500/20"></div>
                        <div className="absolute bottom-2 left-2 w-3 h-3 rounded-full bg-blue-500/20"></div>
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-3 text-emerald-400">
                        {step.title}
                      </h3>
                      
                      <div className="flex-grow min-h-[150px]">
                        <ul className="space-y-2 text-sm text-gray-300">
                          {step.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start">
                              <span className="mr-2 mt-1 text-emerald-500">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Изображение */}
          {imageComponent && <div className="mb-12">{imageComponent}</div>}

          {/* Контент статьи */}
          {articleContent &&
            typeof articleContent === "object" &&
            "mainTitle" in articleContent && (
              <ArticleContent content={articleContent} />
            )}

          {/* Блок "Нужна дополнительная информация? Свяжитесь с отделом продаж" */}
          <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800/50 mt-12">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">
                {t.contactBlock.title}
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                {t.contactBlock.description}
              </p>
              <GlowingButton
                to="/contacts"
                size="md"
                icon={
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                }
              >
                {t.contactBlock.buttonText}
              </GlowingButton>
            </div>
          </div>
        </div>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default ToolPageTemplate;
