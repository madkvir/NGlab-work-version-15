'use client';

import React from "react";
import { BarChart3 } from "lucide-react";
import ToolPageTemplate from "../../../components/ToolPageTemplate";
import { useLanguage } from "../../../context/LanguageContext";
import { salesforceTranslations } from "../../../locales/translations";

const SalesforcePage = () => {
  const { language } = useLanguage();
  const t = salesforceTranslations[language] || salesforceTranslations.en;

  return (
    <ToolPageTemplate
      title={t.title}
      description={t.description}
      icon={<BarChart3 className="w-8 h-8 text-blue-500" />}
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

export default SalesforcePage;
