import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Counseling | NeuroGen Lab - Professional Support Solutions",
  description: "Experience personalized AI-powered counseling. Get professional guidance and support with our advanced artificial intelligence technology.",
  keywords: [
    "ai counseling",
    "mental health support",
    "digital therapy",
    "ai support",
    "counseling solutions",
    "personal growth",
    "emotional support"
  ],
  openGraph: {
    title: "AI Counseling - Professional Support Solutions | NeuroGen Lab",
    description: "Experience personalized AI-powered counseling support",
    url: "https://neurogenlab.de/tools/counseling",
    images: [
      {
        url: "/images/tools/counseling.jpg",
        alt: "AI Counseling by NeuroGen Lab",
      },
    ],
  },
  twitter: {
    title: "AI Counseling - Professional Support",
    description: "Experience personalized AI-powered support",
    images: [
      {
        url: "/images/tools/counseling.jpg",
        alt: "AI Counseling by NeuroGen Lab",
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/counseling",
    languages: {
      'en': '/tools/counseling',
      'de': '/de/tools/counseling',
      'es': '/es/tools/counseling',
      'ru': '/ru/tools/counseling'
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