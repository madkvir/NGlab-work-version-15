'use client';

import React from "react";
import { Users } from "lucide-react";
import ToolPageTemplate from "../../../components/ToolPageTemplate";
import { useLanguage } from "../../../context/LanguageContext";
import { teamsTranslations } from "../../../locales/translations";
import Image from 'next/image';

const TeamsPage = () => {
  const { language } = useLanguage();
  const t = teamsTranslations[language] || teamsTranslations.en;

  // Добавляем значения по умолчанию
  const defaultContent = {
    mainTitle: 'Microsoft Teams Integration',
    subtitle: 'Enhance Your Team Collaboration',
    introText: 'Transform your team collaboration with AI-powered features',
    introList: [] as string[],
    howItWorksTitle: 'How It Works',
    howItWorksText: 'Seamless integration with Microsoft Teams',
    howItWorksList: [] as string[],
    keyFeaturesTitle: 'Key Features',
    features: {
      realTime: {
        title: 'Real-time Collaboration',
        description: 'Instant communication and collaboration',
      },
      multiLanguage: {
        title: 'Multi-language Support',
        description: 'Break down language barriers in your team',
      },
      scalability: {
        title: 'Scalable Solution',
        description: 'Grows with your team',
      },
      analytics: {
        title: 'Advanced Analytics',
        description: 'Insights into team collaboration patterns',
      },
    },
    industriesTitle: 'Industries',
    industriesText: 'Suitable for various industries',
    industries: [] as string[],
    conclusionTitle: 'Conclusion',
    conclusionText: 'Enhance your team collaboration today',
    conclusionList: [] as string[],
    topReasonsTitle: 'Top Reasons',
    reasonList: [] as string[],
    finalConclusion: {
      title: 'Get Started',
      text: 'Transform your team collaboration today',
    }
  };

  const articleContent = React.useMemo(() => ({
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
        title: t?.articleContent?.features?.realTime?.title || defaultContent.features.realTime.title,
        description: t?.articleContent?.features?.realTime?.description || defaultContent.features.realTime.description,
      },
      multiLanguage: {
        title: t?.articleContent?.features?.multiLanguage?.title || defaultContent.features.multiLanguage.title,
        description: t?.articleContent?.features?.multiLanguage?.description || defaultContent.features.multiLanguage.description,
      },
      scalability: {
        title: t?.articleContent?.features?.scalability?.title || defaultContent.features.scalability.title,
        description: t?.articleContent?.features?.scalability?.description || defaultContent.features.scalability.description,
      },
      analytics: {
        title: t?.articleContent?.features?.analytics?.title || defaultContent.features.analytics.title,
        description: t?.articleContent?.features?.analytics?.description || defaultContent.features.analytics.description,
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
    finalConclusion: t?.articleContent?.finalConclusion || defaultContent.finalConclusion
  }), [language, t]);

  return (
    <ToolPageTemplate
      title={t?.title || 'Microsoft Teams Integration'}
      description={t?.description || 'Enhance your team collaboration'}
      icon={<Users className="w-8 h-8 text-purple-500" />}
      features={t?.features || []}
      benefits={t?.benefits || []}
      integrations={t?.integrations || []}
      sectionTitles={t?.sectionTitles || {}}
      metaTitle={t?.metaTitle || 'Microsoft Teams Integration'}
      metaDescription={t?.metaDescription || 'Enhance your team collaboration'}
      isComingSoon={false}
      articleContent={articleContent}
      imageComponent={
        <div className="max-w-7xl mx-auto">
          <div className="bg-purple-900/50 rounded-xl p-6 hover:bg-purple-900/70 transition-all duration-300" 
               role="presentation">
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src="/assets/tools/microsoft-teams.jpg"
                alt={t?.imageAlt || "Microsoft Teams Integration Interface"}
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

export default TeamsPage;
