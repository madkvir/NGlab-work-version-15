'use client';

import React from "react";
import { Search } from "lucide-react";
import ToolPageTemplate from "../../../components/ToolPageTemplate";
import { useLanguage } from '../../../context/LanguageContext';
import { bestSearchTranslations } from '../../../locales/translations';

const BestSearch = () => {
  const { language } = useLanguage();
  const t = bestSearchTranslations[language] || bestSearchTranslations.en;

  return (
    <ToolPageTemplate
      title={t.title}
      description={t.description}
      icon={<Search className="w-8 h-8 text-blue-400" />}
      features={t.features}
      benefits={t.benefits}
      integrations={t.integrations}
      sectionTitles={t.sectionTitles}
      metaTitle={t.metaTitle}
      metaDescription={t.metaDescription}
      isComingSoon={false}
    />
  );
};

export default BestSearch;
