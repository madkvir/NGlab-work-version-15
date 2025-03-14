"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";
import GlowingButton from "../../../../components/common/GlowingButton";
import { integrationSetupTranslations } from "../../../../locales/integrationSetupTranslations";
import Link from "next/link";

interface IntegrationSetupStepsProps {
  language: string;
}

const IntegrationSetupSteps: React.FC<IntegrationSetupStepsProps> = ({ language = 'ua' }) => {
  const t = integrationSetupTranslations[language] || integrationSetupTranslations.ua;

  return (
    <div className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">{t.title}</h2>
        <p className="text-xl text-gray-400 max-w-4xl mx-auto">
          {t.subtitle}
        </p>
      </div>
      
      {t.steps.map((step) => (
        <div key={step.number} className="bg-gray-900/50 rounded-xl p-8 mb-8 hover:bg-gray-900/70 transition-all duration-300 border border-gray-800/50">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0 bg-emerald-500 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white">
              {step.number}
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-semibold mb-4 text-emerald-400">{step.title}</h3>
              <div className="prose prose-invert max-w-none">
                {step.description && (
                  <p className="mb-4">
                    {step.description}
                  </p>
                )}
                
                {step.points && (
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    {step.points.map((point, index) => (
                      <li key={index}>
                        {point.includes("Контакти") || point.includes("Contacts") ? (
                          <>
                            {point.split(/Контакти|Contacts/)[0]}
                            <Link href="/contacts" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                              {language === 'ua' ? 'Контакти' : language === 'ru' ? 'Контакты' : 'Contacts'}
                            </Link>
                            {point.split(/Контакти|Contacts/)[1]}
                          </>
                        ) : (
                          point
                        )}
                      </li>
                    ))}
                  </ul>
                )}
                
                {step.important && (
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                    <p className="text-amber-400 font-semibold mb-2">{step.important.title}</p>
                    <p className="text-sm">
                      {step.important.text}
                    </p>
                  </div>
                )}
                
                {step.sections && (
                  <div className="space-y-8">
                    {step.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="bg-gray-800/30 rounded-lg p-6 border border-gray-700/30">
                        <h4 className="text-xl font-medium mb-3 text-emerald-300">{section.title}</h4>
                        <p className="mb-4">
                          {section.description}
                        </p>
                        
                        {section.image && (
                          <div className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-700/50 mb-2">
                            <div className="aspect-[16/9] relative">
                              <ImageWithFallback 
                                src={section.image.src}
                                alt={section.image.alt}
                                fallbackText={section.image.fallbackText}
                              />
                            </div>
                          </div>
                        )}
                        
                        {section.tip && (
                          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                            <p className="text-amber-400 font-semibold mb-2">{section.tip.title}</p>
                            <p className="text-sm">
                              {section.tip.text}
                            </p>
                          </div>
                        )}
                        
                        {section.important && (
                          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                            <p className="text-amber-400 font-semibold mb-2">{section.important.title}</p>
                            <p className="text-sm">
                              {section.important.text}
                            </p>
                          </div>
                        )}
                        
                        {section.checkItems && (
                          <div className="flex flex-col sm:flex-row gap-4 mt-6">
                            <div className="flex-1 bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                              <p className="text-amber-400 font-semibold mb-2">{section.checkItems.title}</p>
                              <ul className="list-disc pl-6 space-y-2 text-sm text-gray-300">
                                {section.checkItems.items.map((item, itemIndex) => (
                                  <li key={itemIndex}>{item}</li>
                                ))}
                              </ul>
                            </div>
                            {section.tip && (
                              <div className="flex-1 bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                                <p className="text-emerald-400 font-semibold mb-2">{section.tip.title}</p>
                                <p className="text-sm text-gray-300">
                                  {section.tip.text}
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                        
                        {section.techTip && (
                          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                            <p className="text-amber-400 font-semibold mb-2">{section.techTip.title}</p>
                            <p className="text-sm">
                              {section.techTip.text}
                            </p>
                          </div>
                        )}
                        
                        {section.success && (
                          <div className="mt-6 bg-emerald-900/30 p-4 rounded-lg border border-emerald-700/30">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <p className="font-medium text-emerald-300">
                                {section.success.title}
                              </p>
                            </div>
                            <p className="mt-2 text-sm text-gray-300 pl-12">
                              {section.success.text}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Кнопка Get Started */}
      <div className="text-center space-y-4 mt-16">
        <GlowingButton
          to="/contacts"
          size="lg"
          icon={
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          }
        >
          {t.buttonText}
        </GlowingButton>
      </div>
    </div>
  );
};

export default IntegrationSetupSteps; 