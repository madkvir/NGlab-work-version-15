'use client';

import React from "react";
import { Code2 } from "lucide-react";
import ToolPageTemplate from"../../../components/ToolPageTemplate";
import { useLanguage } from '../../../context/LanguageContext';
import { customDevelopmentTranslations } from '../../../locales/translations';

const CustomDevelopment = () => {
  const { language } = useLanguage();
  const t = customDevelopmentTranslations[language] || customDevelopmentTranslations.en;

  return (
    <ToolPageTemplate
      title={t.title}
      description={t.description}
      icon={<Code2 className="w-8 h-8 text-emerald-400" />}
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

export default CustomDevelopment;
