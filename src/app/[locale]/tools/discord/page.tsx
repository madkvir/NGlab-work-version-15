import React from "react";
import { MessageSquare } from "lucide-react";
import ToolPageTemplate from "../../../../components/ToolPageTemplate";
import { discordTranslations } from "../../../../locales/translations";
import Image from "next/image";
import getServerPageLang from "../../../../utils/getServerPageLang";

const Discord = async ({ params }) => {
  const language = await getServerPageLang(params);
  const t = discordTranslations[language] || discordTranslations.en;

  return (
    <ToolPageTemplate
      title={t.title}
      description={t.description}
      icon={<MessageSquare className="w-8 h-8 text-indigo-400" />}
      features={t.features}
      benefits={t.benefits}
      integrations={t.integrations}
      sectionTitles={t.sectionTitles}
      metaTitle={t.metaTitle}
      metaDescription={t.metaDescription}
      isComingSoon={false}
      imageComponent={
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300">
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src="/assets/tools/discord.jpg"
                alt="Discord Integration Interface"
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

export default Discord;
