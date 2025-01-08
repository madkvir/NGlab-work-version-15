"use client";
import { ReactNode, useState } from "react";
import { ChevronDown } from "lucide-react";
import React from "react";

interface TopReasonsProps {
  reasonList: { title: string; content: ReactNode }[];
}

const TopReasons = ({ reasonList }: TopReasonsProps) => {
  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setOpenSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  return (
    <div className="space-y-4">
      {reasonList.map((r, idx) => (
        <div key={idx} className="border-b border-gray-800">
          <button
            onClick={() => toggleSection(idx)}
            className="w-full text-left py-4 flex justify-between items-center"
          >
            <h3 className="text-xl font-semibold text-emerald-400">{r.title}</h3>
            <ChevronDown
              className={`w-5 h-5 text-gray-400 transition-transform ${
                openSections.includes(idx) ? "transform rotate-180" : ""
              }`}
            />
          </button>
          {openSections.includes(idx) && <div className="pb-6 animate-slideDown">{r.content}</div>}
        </div>
      ))}
    </div>
  );
};

export default TopReasons;
