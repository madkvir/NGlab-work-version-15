'use client';

import React from "react";
import ToolPageTemplate from "../../../components/ToolPageTemplate";
import { Mic } from "lucide-react";
import { useLanguage } from '../../../context/LanguageContext';
import { aiVoiceBotTranslations } from '../../../locales/translations';

const AIVoiceBot = () => {
  const { language } = useLanguage();
  const t = aiVoiceBotTranslations[language];

  return (
    <ToolPageTemplate
      title={t.title}
      description={t.description}
      icon={<Mic className="w-8 h-8 text-emerald-400" />}
      features={t.features}
      benefits={t.benefits}
      integrations={t.integrations}
      sectionTitles={t.sectionTitles}
      metaTitle="AI Voice Bot | NeuroGen Lab - Voice Assistant Solutions"
      metaDescription="Enhance your customer service with our AI Voice Bot. Automate customer interactions and provide 24/7 voice support with advanced AI technology."
    />
  );
};

export default AIVoiceBot;
