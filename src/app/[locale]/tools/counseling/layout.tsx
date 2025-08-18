import React from "react";

export default async function CounselingLayout({
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
