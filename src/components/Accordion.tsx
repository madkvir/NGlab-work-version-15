"use client";
import React, { ReactNode, useState } from "react";

type AccordionSection = {
  title: string;
  icon: ReactNode;
  content: ReactNode;
};

interface AccordionProps {
  sections: AccordionSection[];
}

const Accordion = ({ sections }: AccordionProps) => {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  return (
    <>
      {sections.map((section: AccordionSection, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => setActiveSection(activeSection === index ? null : index)}
            className="w-full flex items-center justify-between p-4 bg-gray-800/30 hover:bg-gray-800/50 rounded-lg transition-all duration-300"
          >
            <div className="flex items-center space-x-3">
              <div className="text-emerald-400">{section.icon}</div>
              <span className="font-medium text-emerald-400">{section.title}</span>
            </div>
            <div
              className={`transform transition-transform duration-300 ${
                activeSection === index ? "rotate-180" : ""
              }`}
            >
              <svg
                className="w-5 h-5 text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>

          {activeSection === index && (
            <div className="mt-2 p-4 bg-gray-800/20 rounded-lg">
              <div className="text-gray-300 leading-relaxed">{section.content}</div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Accordion;
