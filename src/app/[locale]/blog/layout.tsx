import React from "react";
import HreflangTags from '../../../components/HreflangTags';

export default function BlogLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <HreflangTags path="blog" currentLocale={params.locale} />
      {children}
    </>
  );
}
