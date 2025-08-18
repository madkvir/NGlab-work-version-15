import React from "react";
import HreflangTags from '../../../components/HreflangTags';

export default function ToolsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <HreflangTags path="tools" currentLocale={params.locale} />
      {children}
    </>
  );
}
