'use client';

import React from "react";
import { Mail } from "lucide-react";
import ToolPageTemplate from "../../../components/ToolPageTemplate";
import { useLanguage } from "../../../context/LanguageContext";
import { emailTranslations } from "../../../locales/translations";

const Email = () => {
  const { language } = useLanguage();
  const t = emailTranslations[language] || emailTranslations.en;

  return (
    <ToolPageTemplate
      title={t.title}
      description={t.description}
      icon={<Mail className="w-8 h-8 text-blue-400" />}
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

export default Email;
