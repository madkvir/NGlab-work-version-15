"use client";

import React from "react";
import { Code2 } from "lucide-react";
import ToolPageTemplate from "../../../../components/ToolPageTemplate";
import { customDevelopmentTranslations } from "../../../../locales/translations";
import Image from "next/image";
import getPageLangUnit from "../../../../utils/getPageLangUnit";

const CustomDevelopmentPage = () => {
  const language = getPageLangUnit(customDevelopmentTranslations);
  const t = customDevelopmentTranslations[language] || customDevelopmentTranslations.en;

  // Добавляем значения по умолчанию
  const defaultContent = {
    mainTitle: "Custom Development",
    subtitle: "Tailored Software Solutions",
    introText: "Transform your business with custom software development",
    introList: [] as string[],
    howItWorksTitle: "How It Works",
    howItWorksText: "Our development process",
    howItWorksList: [] as string[],
    keyFeaturesTitle: "Key Features",
    features: {
      realTime: {
        title: "Agile Development",
        description: "Flexible and iterative development process",
      },
      multiLanguage: {
        title: "Multi-platform Support",
        description: "Solutions for all platforms and devices",
      },
      scalability: {
        title: "Scalable Architecture",
        description: "Built to grow with your business",
      },
      analytics: {
        title: "Advanced Integration",
        description: "Seamless integration with existing systems",
      },
    },
    industriesTitle: "Industries",
    industriesText: "Solutions for all industries",
    industries: [] as string[],
    conclusionTitle: "Conclusion",
    conclusionText: "Transform your business today",
    conclusionList: [] as string[],
    topReasonsTitle: "Top Reasons",
    reasonList: [] as string[],
    finalConclusion: {
      title: "Get Started",
      text: "Begin your digital transformation journey",
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
      title={t?.title || "Custom Development"}
      description={t?.description || "Tailored software solutions"}
      icon={<Code2 className="w-8 h-8 text-emerald-500" />}
      features={t?.features || []}
      benefits={t?.benefits || []}
      integrations={t?.integrations || []}
      sectionTitles={t?.sectionTitles || {}}
      metaTitle={t?.metaTitle || "Custom Development"}
      metaDescription={t?.metaDescription || "Tailored software solutions"}
      isComingSoon={false}
      articleContent={articleContent}
      imageComponent={
        <div className="max-w-7xl mx-auto">
          <div
            className="bg-emerald-900/50 rounded-xl p-6 hover:bg-emerald-900/70 transition-all duration-300"
            role="presentation"
          >
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src="/assets/tools/custom-development.jpg"
                alt={t?.imageAlt || "Custom Development Solutions"}
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

export default CustomDevelopmentPage;
