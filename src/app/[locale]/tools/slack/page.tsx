"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import ToolPageTemplate from "../../../../components/ToolPageTemplate";
import { slackTranslations } from "../../../../locales/translations";
import Image from "next/image";
import getServerPageLang from "../../../../utils/getServerPageLang";
import getPageLangUnit from "../../../../utils/getPageLangUnit";

const SlackPage = () => {
  const language = getPageLangUnit(slackTranslations);
  const t = slackTranslations[language] || slackTranslations.en;

  // Добавляем значения по умолчанию
  const defaultContent = {
    mainTitle: "Slack Integration",
    subtitle: "Enhance Your Team Communication",
    introText: "Transform your team communication with AI-powered features",
    introList: [],
    howItWorksTitle: "How It Works",
    howItWorksText: "Seamless integration with your Slack workspace",
    howItWorksList: [],
    keyFeaturesTitle: "Key Features",
    features: {
      realTime: {
        title: "Real-time Processing",
        description: "Instant message processing and responses",
      },
      multiLanguage: {
        title: "Multi-language Support",
        description: "Communication across different languages",
      },
      scalability: {
        title: "Scalable Solution",
        description: "Grows with your team",
      },
      analytics: {
        title: "Advanced Analytics",
        description: "Insights into your communication patterns",
      },
    },
    industriesTitle: "Industries",
    industriesText: "Suitable for various industries",
    industries: [],
    conclusionTitle: "Conclusion",
    conclusionText: "Enhance your team communication today",
    conclusionList: [],
    topReasonsTitle: "Top Reasons",
    reasonList: [],
    finalConclusion: {
      title: "Get Started",
      text: "Transform your team communication today",
    },
  };

  const articleContent = React.useMemo(
    () => ({
      mainTitle: t?.articleContent?.mainTitle || defaultContent.mainTitle,
      subtitle: t?.articleContent?.subtitle || defaultContent.subtitle,
      introText: t?.articleContent?.introText || defaultContent.introText,
      introList: t?.articleContent?.introList || defaultContent.introList,
      howItWorksTitle: t?.articleContent?.howItWorksTitle || defaultContent.howItWorksTitle,
      howItWorksText: t?.articleContent?.howItWorksText || defaultContent.howItWorksText,
      howItWorksList: t?.articleContent?.howItWorksList || defaultContent.howItWorksList,
      keyFeaturesTitle: t?.articleContent?.keyFeaturesTitle || defaultContent.keyFeaturesTitle,
      features: {
        realTime: {
          title:
            t?.articleContent?.features?.realTime?.title || defaultContent.features.realTime.title,
          description:
            t?.articleContent?.features?.realTime?.description ||
            defaultContent.features.realTime.description,
        },
        multiLanguage: {
          title:
            t?.articleContent?.features?.multiLanguage?.title ||
            defaultContent.features.multiLanguage.title,
          description:
            t?.articleContent?.features?.multiLanguage?.description ||
            defaultContent.features.multiLanguage.description,
        },
        scalability: {
          title:
            t?.articleContent?.features?.scalability?.title ||
            defaultContent.features.scalability.title,
          description:
            t?.articleContent?.features?.scalability?.description ||
            defaultContent.features.scalability.description,
        },
        analytics: {
          title:
            t?.articleContent?.features?.analytics?.title ||
            defaultContent.features.analytics.title,
          description:
            t?.articleContent?.features?.analytics?.description ||
            defaultContent.features.analytics.description,
        },
      },
      industriesTitle: t?.articleContent?.industriesTitle || defaultContent.industriesTitle,
      industriesText: t?.articleContent?.industriesText || defaultContent.industriesText,
      industries: t?.articleContent?.industries || defaultContent.industries,
      conclusionTitle: t?.articleContent?.conclusionTitle || defaultContent.conclusionTitle,
      conclusionText: t?.articleContent?.conclusionText || defaultContent.conclusionText,
      conclusionList: t?.articleContent?.conclusionList || defaultContent.conclusionList,
      topReasonsTitle: t?.articleContent?.topReasonsTitle || defaultContent.topReasonsTitle,
      reasonList: t?.articleContent?.reasonList || defaultContent.reasonList,
      finalConclusion: t?.articleContent?.finalConclusion || defaultContent.finalConclusion,
    }),
    [language, t]
  );

  return (
    <ToolPageTemplate
      title={t?.title || "Slack Integration"}
      description={t?.description || "Enhance your team communication"}
      icon={<MessageSquare className="w-8 h-8 text-blue-500" />}
      features={t?.features || []}
      benefits={t?.benefits || []}
      integrations={t?.integrations || []}
      sectionTitles={t?.sectionTitles || {}}
      metaTitle={t?.metaTitle || "Slack Integration"}
      metaDescription={t?.metaDescription || "Enhance your team communication"}
      isComingSoon={false}
      articleContent={articleContent}
      imageComponent={
        <div className="max-w-7xl mx-auto">
          <div
            className="bg-blue-900/50 rounded-xl p-6 hover:bg-blue-900/70 transition-all duration-300"
            role="presentation"
          >
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src="/assets/tools/slack.jpg"
                alt={t?.imageAlt || "Slack Integration Interface"}
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

export default SlackPage;
