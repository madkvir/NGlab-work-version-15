'use client';

import React from "react";
import { Instagram } from "lucide-react";
import ToolPageTemplate from "../../../components/ToolPageTemplate";
import { useLanguage } from "../../../context/LanguageContext";
import { instagramTranslations } from "../../../locales/translations";

const InstagramPage = () => {
  const { language } = useLanguage();
  const t = instagramTranslations[language] || instagramTranslations.en;

  return (
    <ToolPageTemplate
      title={t.title}
      description={t.description}
      icon={<Instagram className="w-8 h-8 text-pink-500" />}
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

export default InstagramPage;
