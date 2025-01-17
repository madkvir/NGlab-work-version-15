import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tables Processing | NeuroGen Lab - Data Management Solution",
  description:
    "Transform your data processing with our advanced table management solution. Handle large datasets efficiently with intelligent processing and analysis tools.",
  keywords: ["table processing", "data management", "data analysis", "dataset handling"],
  openGraph: {
    title: "Tables Processing - Smart Data Management | NeuroGen Lab",
    description: "Process large datasets with intelligent table management",
    url: "https://neurogenlab.de/tools/tables",
    images: [
      {
        url: "", // TODO: add url and alt
        alt: "",
      },
    ],
  },
  twitter: {
    title: "Tables Processing - Data Management Solution",
    description: "Transform data processing with smart table management",
    images: [
      {
        url: "", // TODO: add url and alt
        alt: "",
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/tables",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 