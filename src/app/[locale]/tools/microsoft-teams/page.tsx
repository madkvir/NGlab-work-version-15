"use client";
import React from "react";
import { Users } from "lucide-react";
import ToolPageTemplate from "../../../../components/ToolPageTemplate";
import { teamsTranslations } from "../../../../locales/translations";
import Image from "next/image";
import getServerPageLang from "../../../../utils/getServerPageLang";
import getPageLangUnit from "../../../../utils/getPageLangUnit";

const TeamsPage = () => {
  const language = getPageLangUnit(teamsTranslations);
  const t = teamsTranslations[language] || teamsTranslations.en;

  return (
    <ToolPageTemplate
      title={t?.title}
      description={t?.description}
      icon={<Users className="w-8 h-8 text-purple-500" />}
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
            className="bg-purple-900/50 rounded-xl p-6 hover:bg-purple-900/70 transition-all duration-300"
            role="presentation"
          >
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src="/assets/tools/microsoft-teams.jpg"
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

export default TeamsPage;
