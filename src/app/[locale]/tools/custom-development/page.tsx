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

  const articleContent = React.useMemo(() => t?.articleContent, [language, t]);

  return (
    <ToolPageTemplate
      title={t?.title}
      description={t?.description}
      icon={<Code2 className="w-8 h-8 text-emerald-500" />}
      features={t?.features}
      benefits={t?.benefits}
      integrations={t?.integrations}
      sectionTitles={t?.sectionTitles}
      metaTitle={t?.metaTitle}
      metaDescription={t?.metaDescription}
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

export default CustomDevelopmentPage;
