'use client';

import React from "react";
import ToolPageTemplate from "../../../components/ToolPageTemplate";
import { Brain } from "lucide-react";
import { useLanguage } from '../../../context/LanguageContext';
import { aiAssistantTranslations } from '../../../locales/translations';
import Image from 'next/image';

const AIAssistant = () => {
  const { language } = useLanguage();
  const t = aiAssistantTranslations[language];

  return (
    <ToolPageTemplate
      title={t.title}
      description={t.description}
      icon={<Brain className="w-8 h-8 text-emerald-400" />}
      features={t.features}
      benefits={t.benefits}
      integrations={t.integrations}
      sectionTitles={t.sectionTitles}
      metaTitle="AI Assistant for Business | NeuroGen Lab - Automate and Innovate"
      metaDescription="Optimize your business operations with our AI Assistant. Automate tasks, enhance productivity, and make data-driven decisions with advanced artificial intelligence."
      isComingSoon={false}
      imageComponent={
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300">
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src="/assets/tools/ai-assistant.jpg"
                alt="AI Assistant Interface"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      }
    />
  );
};

export default AIAssistant;
