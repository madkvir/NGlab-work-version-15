'use client';

import React from "react";
import { Trello } from "lucide-react";
import ToolPageTemplate from "../../../components/ToolPageTemplate";
import { useLanguage } from "../../../context/LanguageContext";
import { jiraTranslations } from "../../../locales/translations";

const JiraPage = () => {
  const { language } = useLanguage();
  const t = jiraTranslations[language] || jiraTranslations.en;

  return (
    <ToolPageTemplate
      title={t.title}
      description={t.description}
      icon={<Trello className="w-8 h-8 text-blue-500" />}
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

export default JiraPage;
