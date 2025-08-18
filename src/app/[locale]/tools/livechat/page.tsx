"use client";
import React from "react";
import { MessageCircle } from "lucide-react";
import ToolPageTemplate from "../../../../components/ToolPageTemplate";
import { livechatTranslations } from "../../../../locales/translations";
import Image from "next/image";
import getPageLangUnit from "../../../../utils/getPageLangUnit";

const LiveChatPage = () => {
  const language = getPageLangUnit(livechatTranslations);
  const t = livechatTranslations[language] || livechatTranslations.en;

  return (
    <ToolPageTemplate
      title={t?.title}
      description={t?.description}
      icon={<MessageCircle className="w-8 h-8 text-green-500" />}
      features={t?.features}
      benefits={t?.benefits}
      integrations={t?.integrations}
      sectionTitles={t?.sectionTitles}
      metaTitle={t?.metaTitle}
      metaDescription={t?.metaDescription}
      isComingSoon={false}
      imageComponent={
        <div className="max-w-7xl mx-auto">
          <div
            className="bg-green-900/50 rounded-xl p-6 hover:bg-green-900/70 transition-all duration-300"
            role="presentation"
          >
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src="/assets/tools/livechat.jpg"
                alt={t?.imageAlt || t?.title}
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
