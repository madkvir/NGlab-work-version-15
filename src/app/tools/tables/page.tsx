import React from "react";
import { Metadata } from "next";
import ToolPageTemplate from "../../../components/ToolPageTemplate";
import { Table2 } from "lucide-react";

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
const Tables = () => {
  return (
    <ToolPageTemplate
      title="Tables Processing Solution"
      description="Process and analyze large datasets efficiently with our advanced table processing and management system."
      icon={<Table2 className="w-8 h-8 text-emerald-400" />}
      features={[
        "Advanced Data Processing",
        "Intelligent Column Recognition",
        "Automated Data Validation",
        "Smart Data Extraction",
        "Format Conversion Support",
        "Real-time Data Analysis",
        "Custom Template Creation",
      ]}
      benefits={[
        "Faster Data Processing",
        "Improved Data Accuracy",
        "Reduced Manual Work",
        "Enhanced Data Quality",
        "Efficient Data Management",
        "Scalable Processing",
        "Cost-effective Solution",
      ]}
      integrations={[
        "Excel and CSV Files",
        "Database Systems",
        "Business Intelligence Tools",
        "Data Visualization Platforms",
        "Analytics Software",
        "Cloud Storage Solutions",
      ]}
      metaTitle="Tables Processing | NeuroGen Lab - Data Management Solution"
      metaDescription="Transform your data processing with our advanced table management solution. Handle large datasets efficiently with intelligent processing and analysis tools."
    />
  );
};

export default Tables;
