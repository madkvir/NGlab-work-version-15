import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Search | NeuroGen Lab - Intelligent Search Solution",
  description:
    "Boost data discovery with AI search. Accurate results, semantic search, NLP, and advanced indexing for superior user experience.",
  keywords: ["AI search", "semantic search", "intelligent search", "data discovery"],
  openGraph: {
    title: "Best Search - Smart Data Discovery | NeuroGen Lab",
    description: "Transform data discovery with AI-powered intelligent search",
    url: "https://neurogenlab.de/tools/best-search",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  twitter: {
    title: "Best Search - Intelligent Search Solution",
    description: "Enhance data discovery with AI-powered search",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/best-search",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 