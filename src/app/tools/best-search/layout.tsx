import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Search | NeuroGen Lab - Intelligent Search Solution",
  description:
    "Boost data discovery with AI search. Accurate results, semantic search, NLP, and advanced indexing for superior user experience.",
  keywords: [
    "ai search",
    "semantic search",
    "intelligent search",
    "data discovery",
    "nlp search",
    "enterprise search",
    "advanced search solution"
  ],
  openGraph: {
    title: "Best Search - Intelligent Search Solution | NeuroGen Lab",
    description: "Enhance your data discovery with intelligent search",
    url: "https://neurogenlab.de/tools/best-search",
    images: [
      {
        url: "/images/tools/best-search.jpg",
        alt: "Best Search by NeuroGen Lab",
      },
    ],
  },
  twitter: {
    title: "Best Search - Intelligent Solution",
    description: "Enhance data discovery with AI search",
    images: [
      {
        url: "/images/tools/best-search.jpg",
        alt: "Best Search by NeuroGen Lab",
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/best-search",
    languages: {
      'en': '/tools/best-search',
      'de': '/de/tools/best-search',
      'es': '/es/tools/best-search',
      'ru': '/ru/tools/best-search'
    }
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 