'use client';

import React from "react";
import type { FC } from 'react';
import { Table } from "lucide-react";
import ToolPageTemplate from "../../../components/ToolPageTemplate";

const Tables: FC = () => {
  return (
    <ToolPageTemplate
      title="Tables Processing Solution"
      description="Process and analyze large datasets efficiently with our advanced table processing and management system."
      icon={<Table className="w-8 h-8 text-emerald-400" />}
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
      sectionTitles={{
        features: "Features",
        benefits: "Benefits",
        integrations: "Integrations"
      }}
      metaTitle="Tables Processing | NeuroGen Lab - Data Management Solution"
      metaDescription="Transform your data processing with our advanced table management solution. Handle large datasets efficiently with intelligent processing and analysis tools."
    />
  );
};

export default Tables;
