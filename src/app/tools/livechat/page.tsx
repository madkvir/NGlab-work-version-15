'use client';

import React from "react";
import { MessageCircle } from "lucide-react";
import ToolPageTemplate from "../../../components/ToolPageTemplate";
import { useLanguage } from "../../../context/LanguageContext";
import { livechatTranslations } from "../../../locales/translations";
import Image from 'next/image';

const LiveChatPage = () => {
  const { language } = useLanguage();
  const t = livechatTranslations[language] || livechatTranslations.en;

  // Добавляем значения по умолчанию
  const defaultContent = {
    mainTitle: 'LiveChat Integration',
    subtitle: 'Enhance Your Customer Support',
    introText: 'Transform your customer support with AI-powered chat',
    introList: [] as string[],
    howItWorksTitle: 'How It Works',
    howItWorksText: 'Seamless integration with your website',
    howItWorksList: [] as string[],
    keyFeaturesTitle: 'Key Features',
    features: {
      realTime: {
        title: 'Real-time Support',
        description: 'Instant customer communication',
      },
      multiLanguage: {
        title: 'Multi-language Support',
        description: 'Chat in multiple languages',
      },
      scalability: {
        title: 'Scalable Solution',
        description: 'Grows with your support team',
      },
      analytics: {
        title: 'Advanced Analytics',
        description: 'Deep insights into customer interactions',
      },
    },
    industriesTitle: 'Industries',
    industriesText: 'Support for all industries',
    industries: [] as string[],
    conclusionTitle: 'Conclusion',
    conclusionText: 'Enhance your customer support today',
    conclusionList: [] as string[],
    topReasonsTitle: 'Top Reasons',
    reasonList: [] as string[],
    finalConclusion: {
      title: 'Get Started',
      text: 'Transform your customer support today',
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
      title={t?.title || 'LiveChat Integration'}
      description={t?.description || 'Enhance your customer support'}
      icon={<MessageCircle className="w-8 h-8 text-green-500" />}
      features={t?.features || []}
      benefits={t?.benefits || []}
      integrations={t?.integrations || []}
      sectionTitles={t?.sectionTitles || {}}
      metaTitle={t?.metaTitle || 'LiveChat Integration'}
      metaDescription={t?.metaDescription || 'Enhance your customer support'}
      isComingSoon={false}
      articleContent={articleContent}
      imageComponent={
        <div className="max-w-7xl mx-auto">
          <div className="bg-green-900/50 rounded-xl p-6 hover:bg-green-900/70 transition-all duration-300" 
               role="presentation">
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src="/assets/tools/livechat.jpg"
                alt={t?.imageAlt || "LiveChat Integration Interface"}
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

export default LiveChatPage;
