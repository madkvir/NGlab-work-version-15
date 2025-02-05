import React from "react";
import ToolPageTemplate from "../../../../components/ToolPageTemplate";
import { Mic } from "lucide-react";

import { aiVoiceBotTranslations } from "../../../../locales/translations";
import Image from "next/image";
import getServerPageLang from "../../../../utils/getServerPageLang";

const AIVoiceBot = async ({ params }) => {
  const language = await getServerPageLang(aiVoiceBotTranslations, params);
  const t = aiVoiceBotTranslations[language];

  return (
    <ToolPageTemplate
      title={t.title}
      description={t.description}
      icon={<Mic className="w-8 h-8 text-emerald-400" />}
      features={t.features}
      benefits={t.benefits}
      integrations={t.integrations}
      sectionTitles={t.sectionTitles}
      metaTitle="AI Voice Bot | NeuroGen Lab - Voice Assistant Solutions"
      metaDescription="Enhance your customer service with our AI Voice Bot. Automate customer interactions and provide 24/7 voice support with advanced AI technology."
      isComingSoon={false}
      imageComponent={
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300">
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src="/assets/tools/ai-voice-bot.jpg"
                alt="AI Voice Bot Interface"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      }
    />
  );
};

export default AIVoiceBot;
