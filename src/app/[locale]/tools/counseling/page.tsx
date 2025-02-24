"use client";
import React from "react";
import { HeartHandshake } from "lucide-react";
import ToolPageTemplate from "../../../../components/ToolPageTemplate";
import { counselingTranslations } from "../../../../locales/translations";
import Image from "next/image";
import getPageLangUnit from "../../../../utils/getPageLangUnit";

const Counseling = () => {
  const language = getPageLangUnit(counselingTranslations);
  const t = counselingTranslations[language] || counselingTranslations.en;

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
      features: {
        realTime: {
          title: t.articleContent.features.realTime.title,
          description: t.articleContent.features.realTime.description,
        },
        multiLanguage: {
          title: t.articleContent.features.multiLanguage.title,
          description: t.articleContent.features.multiLanguage.description,
        },
        scalability: {
          title: t.articleContent.features.scalability.title,
          description: t.articleContent.features.scalability.description,
        },
        analytics: {
          title: t.articleContent.features.analytics.title,
          description: t.articleContent.features.analytics.description,
        },
      },
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
      icon={<HeartHandshake className="w-8 h-8 text-purple-400" />}
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
            className="bg-purple-900/50 rounded-xl p-6 hover:bg-purple-900/70 transition-all duration-300"
            role="presentation"
          >
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src="/assets/tools/counseling.jpg"
                alt={t.imageAlt || "AI Counseling Interface"}
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

export default Counseling;
