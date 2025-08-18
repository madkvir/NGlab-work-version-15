import React from "react";
import HreflangTags from '../../../../components/HreflangTags';

export default function CounselingLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <HreflangTags path="tools/counseling" currentLocale={params.locale} />
      {children}
    </>
  );
}
