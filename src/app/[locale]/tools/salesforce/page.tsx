"use client";
import React from "react";
import { BarChart3 } from "lucide-react";
import ToolPageTemplate from "../../../../components/ToolPageTemplate";
import { salesforceTranslations } from "../../../../locales/translations";
import { commonTranslations } from "../../../../locales/commonTranslations";
import Image from "next/image";
import getPageLangUnit from "../../../../utils/getPageLangUnit";

const SalesforcePage = () => {
  const language = getPageLangUnit(salesforceTranslations);
  const t = salesforceTranslations[language] || salesforceTranslations.en;
  // Получаем переводы для общих компонентов
  const commonT = commonTranslations[language] || commonTranslations.en;

  // Добавляем значения по умолчанию
  const defaultContent = {
    mainTitle: "Salesforce Integration",
    subtitle: "Enhance Your CRM Management",
    introText: "Transform your CRM with AI-powered features",
    introList: [] as string[],
    howItWorksTitle: "How It Works",
    howItWorksText: "Seamless integration with Salesforce",
    howItWorksList: [] as string[],
    keyFeaturesTitle: "Key Features",
    features: {
      realTime: {
        title: "Real-time Analytics",
        description: "Instant insights and data analysis",
      },
      multiLanguage: {
        title: "Multi-language Support",
        description: "Global sales team support",
      },
      scalability: {
        title: "Scalable Solution",
        description: "Grows with your sales team",
      },
      analytics: {
        title: "Advanced Analytics",
        description: "Deep insights into sales patterns",
      },
    },
    industriesTitle: "Industries",
    industriesText: "Suitable for various industries",
    industries: [] as string[],
    conclusionTitle: "Conclusion",
    conclusionText: "Enhance your CRM today",
    conclusionList: [] as string[],
    topReasonsTitle: "Top Reasons",
    reasonList: [] as string[],
    finalConclusion: {
      title: "Get Started",
      text: "Transform your CRM management today",
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
      title={t?.title || "Salesforce Integration"}
      description={t?.description || "Enhance your CRM management"}
      icon={<BarChart3 className="w-8 h-8 text-blue-500" />}
      features={t?.features || []}
      benefits={t?.benefits || []}
      integrations={t?.integrations || []}
      sectionTitles={t?.sectionTitles || {}}
      metaTitle={t?.metaTitle || "Salesforce Integration"}
      metaDescription={t?.metaDescription || "Enhance your CRM management"}
      isComingSoon={false}
      articleContent={articleContent}
      commonT={commonT}
      imageComponent={
        <div className="max-w-7xl mx-auto">
          <div
            className="bg-blue-900/50 rounded-xl p-6 hover:bg-blue-900/70 transition-all duration-300"
            role="presentation"
          >
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src="/assets/tools/salesforce.jpg"
                alt={t?.imageAlt || "Salesforce Integration Interface"}
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

export default SalesforcePage;
