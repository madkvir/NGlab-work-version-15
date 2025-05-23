import React from "react";
import { Trello } from "lucide-react";
import ToolPageTemplate from "../../../../components/ToolPageTemplate";
import { jiraTranslations } from "../../../../locales/translations";
import Image from "next/image";
import getServerPageLang from "../../../../utils/getServerPageLang";
import getCommonTranslations from "../../../../utils/getCommonTranslations";

const JiraPage = async ({ params }) => {
  const language = await getServerPageLang(params);
  const t = jiraTranslations[language] || jiraTranslations.en;
  const commonT = await getCommonTranslations(params);

  return (
    <ToolPageTemplate
      title={t.title}
      description={t.description}
      icon={<Trello className="w-8 h-8 text-blue-500" />}
      features={t.features}
      benefits={t.benefits}
      integrations={t.integrations}
      sectionTitles={t.sectionTitles}
      metaTitle={t.metaTitle}
      metaDescription={t.metaDescription}
      isComingSoon={false}
      commonT={commonT}
      imageComponent={
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300">
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src="/assets/tools/jira.jpg"
                alt="Jira Integration Interface"
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

export default JiraPage;
