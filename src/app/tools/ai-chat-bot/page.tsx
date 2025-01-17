'use client';

import React from "react";
import { MessagesSquare } from "lucide-react";
import ToolPageTemplate from"../../../components/ToolPageTemplate";
import { useLanguage } from '../../../context/LanguageContext';
import { aiChatBotTranslations } from '../../../locales/translations';

const AIChatBot = () => {
  const { language } = useLanguage();
  const t = aiChatBotTranslations[language] || aiChatBotTranslations.en;

  const articleContent = {
    mainTitle: t.articleContent.mainTitle,
    subtitle: t.articleContent.subtitle,
    introText: t.articleContent.introText,
    introList: t.articleContent.introList,
    howItWorksTitle: t.articleContent.howItWorksTitle,
    howItWorksText: t.articleContent.howItWorksText,
    howItWorksList: t.articleContent.howItWorksList,
    keyFeaturesTitle: t.articleContent.keyFeaturesTitle,
    features: t.articleContent.features,
    industriesTitle: t.articleContent.industriesTitle,
    industriesText: t.articleContent.industriesText,
    industries: t.articleContent.industries,
    conclusionTitle: t.articleContent.conclusionTitle,
    conclusionText: t.articleContent.conclusionText,
    conclusionList: t.articleContent.conclusionList,
    topReasonsTitle: t.articleContent.topReasonsTitle,
    reasonList: t.articleContent.reasonList,
    finalConclusion: t.articleContent.finalConclusion
  };

  return (
    <ToolPageTemplate
      title={t.title}
      description={t.description}
      icon={<MessagesSquare className="w-8 h-8 text-emerald-400" />}
      features={t.features}
      benefits={t.benefits}
      integrations={t.integrations}
      sectionTitles={t.sectionTitles}
      metaTitle={t.metaTitle}
      metaDescription={t.metaDescription}
      isComingSoon={false}
      articleContent={articleContent}
    />
  );
};

export default AIChatBot;
