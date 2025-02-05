"use client";
import React from "react";
import { MessagesSquare } from "lucide-react";
import ToolPageTemplate from "../../../../components/ToolPageTemplate";
import { aiChatBotTranslations } from "../../../../locales/translations";
import Image from "next/image";
import getPageLangUnit from "../../../../utils/getPageLangUnit";

const AIChatBot = () => {
  const language = getPageLangUnit(aiChatBotTranslations);
  const t = aiChatBotTranslations[language] || aiChatBotTranslations.en;

  const articleContent = React.useMemo(
    () => ({
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
      finalConclusion: t.articleContent.finalConclusion,
    }),
    [language]
  );

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
      imageComponent={
        <div className="max-w-7xl mx-auto">
          <div
            className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300"
            role="presentation"
          >
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src="/assets/tools/ai-chat-bot.jpg"
                alt={t.imageAlt || "AI Chat Bot Interface"}
                fill
                className="object-cover"
                priority
                loading="eager"
              />
            </div>
          </div>
        </div>
      }
    />
  );
};

export default AIChatBot;
