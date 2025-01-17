import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Integration | NeuroGen Lab - Intelligent Email Solution",
  description:
    "Optimize your email communications with our intelligent integration solution. Automate responses, manage templates, and gain valuable insights from your email interactions.",
  keywords: ["email integration", "email automation", "smart email", "communication tools"],
  openGraph: {
    title: "Email Integration - Smart Communication | NeuroGen Lab",
    description: "Streamline your email communications with AI automation",
    url: "https://neurogenlab.de/tools/email",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  twitter: {
    title: "Email Integration - Intelligent Communication",
    description: "Enhance email efficiency with smart automation",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/email",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 