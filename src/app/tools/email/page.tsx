import React from "react";
import { Metadata } from "next";
import ToolPageTemplate from "../../../components/ToolPageTemplate";
import { Mail } from "lucide-react";

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

const Email = () => {
  return (
    <ToolPageTemplate
      title="Email Integration"
      description="Enhance your email communications with our intelligent email integration solution that streamlines messaging and automates responses."
      icon={<Mail className="w-8 h-8 text-emerald-400" />}
      features={[
        "Smart Email Routing",
        "Automated Response System",
        "Template Management",
        "Email Analytics",
        "Priority Inbox",
        "Multi-account Support",
        "Advanced Filtering",
      ]}
      benefits={[
        "Improved Response Time",
        "Enhanced Email Organization",
        "Reduced Manual Work",
        "Better Communication Flow",
        "Increased Productivity",
        "Data-driven Insights",
        "Streamlined Workflows",
      ]}
      integrations={[
        "Gmail",
        "Microsoft Outlook",
        "CRM Systems",
        "Marketing Platforms",
        "Help Desk Software",
        "Analytics Tools",
      ]}
      metaTitle="Email Integration | NeuroGen Lab - Intelligent Email Solution"
      metaDescription="Optimize your email communications with our intelligent integration solution. Automate responses, manage templates, and gain valuable insights from your email interactions."
    />
  );
};

export default Email;
