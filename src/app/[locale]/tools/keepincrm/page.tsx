import React from "react";
import { Building2 } from "lucide-react";
import ToolPageTemplate from "../../../../components/ToolPageTemplate";
import { keepinCrmTranslations } from "../../../../locales/keepinCRMTranslations";
import getServerPageLang from "../../../../utils/getServerPageLang";
import getCommonTranslations from "../../../../utils/getCommonTranslations";
import IntegrationSetupSteps from "./IntegrationSetupSteps";

const KeepinCRMPage = async ({ params }) => {
  const language = await getServerPageLang(params);
  const t = keepinCrmTranslations[language] || keepinCrmTranslations.en;
  const commonT = await getCommonTranslations(params);

  return (
    <ToolPageTemplate
      title={t.title}
      description={t.description}
      icon={<Building2 className="w-8 h-8 text-blue-500" />}
      features={t.features}
      benefits={t.benefits}
      integrations={t.integrations}
      sectionTitles={t.sectionTitles}
      metaTitle={t.metaTitle}
      metaDescription={t.metaDescription}
      isComingSoon={false}
      articleContent={t.articleContent}
      commonT={commonT}
      imageComponent={
        <>
          <IntegrationSetupSteps language={language} />
        </>
      }
    />
  );
};

export default KeepinCRMPage; 