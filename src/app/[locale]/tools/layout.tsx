import React from "react";

export default async function ToolsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return (
    <>
      {children}
    </>
  );
}
