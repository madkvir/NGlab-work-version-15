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

  return (
    <ToolPageTemplate
      title={t?.title}
      description={t?.description}
      icon={<BarChart3 className="w-8 h-8 text-blue-500" />}
      features={t?.features}
      benefits={t?.benefits}
      integrations={t?.integrations}
      sectionTitles={t?.sectionTitles}
      metaTitle={t?.metaTitle}
      metaDescription={t?.metaDescription}
      isComingSoon={false}
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

export default SalesforcePage;
