"use client";
import React from "react";
import { Book, CheckCircle, ArrowRight } from "lucide-react";
import { guideTranslations } from "../../locales/translations";
import { useLanguage } from "../../context/LanguageContext";
import BackToHome from "../BackToHome";

const GuideContent = () => {
  const { language } = useLanguage();
  const t = guideTranslations[language];

  return (
    <main className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-8">
          <BackToHome />
          
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-emerald-500/10 mb-6">
              <Book className="w-8 h-8 text-emerald-400" />
            </div>
            <h1 className="text-4xl font-bold mb-4">{t.header.title}</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t.header.description}
            </p>
          </div>

          {/* Guide Sections */}
          <div className="grid md:grid-cols-3 gap-8">
            {t.sections.map((section, index) => (
              <div
                key={index}
                className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300"
              >
                <h2 className="text-2xl font-semibold text-emerald-400 mb-4">{section.title}</h2>
                <p className="text-gray-400 mb-6 min-h-[3rem]">{section.description}</p>
                <ul className="space-y-4 mb-6">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full group bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                  {t.learnMore}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default GuideContent; 