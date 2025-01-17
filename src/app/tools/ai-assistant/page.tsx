'use client';

import React from "react";
import ToolPageTemplate from "../../../components/ToolPageTemplate";
import { Brain } from "lucide-react";
import { useLanguage } from '../../../context/LanguageContext';
import { aiAssistantTranslations } from '../../../locales/translations';

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
    />
  );
};

export default AIAssistant;
