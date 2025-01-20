'use client';

import React from "react";
import { Workflow } from "lucide-react";
import ToolPageTemplate from "../../../components/ToolPageTemplate";
import { useLanguage } from "../../../context/LanguageContext";
import { zapierTranslations } from "../../../locales/translations";

const ZapierPage = () => {
  const { language } = useLanguage();
  const t = zapierTranslations[language] || zapierTranslations.en;

  return (
    <ToolPageTemplate
      title={t.title}
      description={t.description}
      icon={<Workflow className="w-8 h-8 text-orange-500" />}
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

export default ZapierPage;
