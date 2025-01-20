'use client';

import React from "react";
import { Users } from "lucide-react";
import ToolPageTemplate from "../../../components/ToolPageTemplate";
import { useLanguage } from "../../../context/LanguageContext";
import { teamsTranslations } from "../../../locales/translations";

const TeamsPage = () => {
  const { language } = useLanguage();
  const t = teamsTranslations[language] || teamsTranslations.en;

  return (
    <ToolPageTemplate
      title={t.title}
      description={t.description}
      icon={<Users className="w-8 h-8 text-purple-500" />}
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

export default TeamsPage;
