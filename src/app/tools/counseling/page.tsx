'use client';

import React from "react";
import { HeartHandshake } from "lucide-react";
import ToolPageTemplate from"../../../components/ToolPageTemplate";
import { useLanguage } from '../../../context/LanguageContext';
import { counselingTranslations } from '../../../locales/translations';

const Counseling = () => {
  const { language } = useLanguage();
  const t = counselingTranslations[language] || counselingTranslations.en;

  return (
    <ToolPageTemplate
      title={t.title}
      description={t.description}
      icon={<HeartHandshake className="w-8 h-8 text-pink-400" />}
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

export default Counseling;
