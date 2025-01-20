'use client';

import React from "react";
import { MessageSquare } from "lucide-react";
import ToolPageTemplate from "../../../components/ToolPageTemplate";
import { useLanguage } from "../../../context/LanguageContext";
import { slackTranslations } from "../../../locales/translations";

const SlackPage = () => {
  const { language } = useLanguage();
  const t = slackTranslations[language] || slackTranslations.en;

  return (
    <ToolPageTemplate
      title={t.title}
      description={t.description}
      icon={<MessageSquare className="w-8 h-8 text-purple-500" />}
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

export default SlackPage;
