'use client';

import React from "react";
import { MessageSquare } from "lucide-react";
import ToolPageTemplate from"../../../components/ToolPageTemplate";
import { useLanguage } from '../../../context/LanguageContext';
import { discordTranslations } from '../../../locales/translations';

const Discord = () => {
  const { language } = useLanguage();
  const t = discordTranslations[language] || discordTranslations.en;

  return (
    <ToolPageTemplate
      title={t.title}
      description={t.description}
      icon={<MessageSquare className="w-8 h-8 text-indigo-400" />}
      features={t.features}
      benefits={t.benefits}
      integrations={t.integrations}
      sectionTitles={t.sectionTitles}
      metaTitle={t.metaTitle}
      metaDescription={t.metaDescription}
      isComingSoon={false}
      articleContent={t.articleContent}
    />
  );
};

export default Discord;
