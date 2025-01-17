import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Chat Bot | NeuroGen Lab - Intelligent Customer Service Solution",
  description:
    "Transform your customer service with our AI-powered chatbot. Provide 24/7 support, reduce costs, and deliver exceptional customer experiences.",
  keywords: ["AI chatbot", "customer service", "automated support", "virtual assistant", "chatbot"],
  openGraph: {
    title: "AI Chat Bot - Intelligent Customer Support | NeuroGen Lab",
    description: "Transform your customer service with 24/7 AI-powered support",
    url: "https://neurogenlab.de/tools/ai-chatbot",
    images: [
      {
        url: "", // TODO: add url and alt
        alt: "",
      },
    ],
  },
  twitter: {
    title: "AI Chat Bot - Smart Customer Support",
    description: "Enhance customer service with AI-powered chat support",
    images: [
      {
        url: "", // TODO: add url and alt
        alt: "",
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/ai-chatbot",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 