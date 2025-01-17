'use client';

import React from "react";
import { ShieldCheck } from "lucide-react";
import ToolPageTemplate from "../../../components/ToolPageTemplate";
import { useLanguage } from '../../../context/LanguageContext';
import { antiSpamTranslations } from '../../../locales/translations';

const AntiSpam = () => {
  const { language } = useLanguage();
  const t = antiSpamTranslations[language] || antiSpamTranslations.en;

  return (
    <ToolPageTemplate
      title={t.title}
      description={t.description}
      icon={<ShieldCheck className="w-8 h-8 text-blue-400" />}
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

export default AntiSpam;
