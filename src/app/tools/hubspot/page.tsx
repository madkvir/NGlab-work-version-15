'use client';

import React from "react";
import { Database } from "lucide-react";
import ToolPageTemplate from "../../../components/ToolPageTemplate";
import { useLanguage } from "../../../context/LanguageContext";
import { hubspotTranslations } from "../../../locales/translations";

const Hubspot = () => {
  const { language } = useLanguage();
  const t = hubspotTranslations[language] || hubspotTranslations.en;

  return (
    <ToolPageTemplate
      title={t.title}
      description={t.description}
      icon={<Database className="w-8 h-8 text-orange-500" />}
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

export default Hubspot;
