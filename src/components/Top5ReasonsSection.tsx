"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import React from "react";

const Top5ReasonsSection = () => {
  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setOpenSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  return (
    <>
      <h2 className="text-3xl font-bold text-emerald-400 mt-12 mb-6">
        5 Top Reasons Why Your Business Needs an AI Chat Bot
      </h2>
      <div className="space-y-4">
        {/* Section 1 */}
        <div className="border-b border-gray-800">
          <button
            onClick={() => toggleSection(0)}
            className="w-full text-left py-4 flex justify-between items-center"
          >
            <h3 className="text-xl font-semibold text-emerald-400">
              1. 24/7 Automated Customer Support
            </h3>
            <ChevronDown
              className={`w-5 h-5 text-gray-400 transition-transform ${
                openSections.includes(0) ? "transform rotate-180" : ""
              }`}
            />
          </button>

          {openSections.includes(0) && (
            <div className="pb-6 animate-slideDown">
              <p className="text-gray-300 mb-4">
                An AI Chat Bot works round-the-clock, providing instant responses to customer
                inquiries. This helps to:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Increase customer satisfaction with fast response times.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Reduce wait times for answers.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Resolve repetitive and common queries without human intervention.</span>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Section 2 */}
        <div className="border-b border-gray-800">
          <button
            onClick={() => toggleSection(1)}
            className="w-full text-left py-4 flex justify-between items-center"
          >
            <h3 className="text-xl font-semibold text-emerald-400">2. Reduce Operational Costs</h3>
            <ChevronDown
              className={`w-5 h-5 text-gray-400 transition-transform ${
                openSections.includes(1) ? "transform rotate-180" : ""
              }`}
            />
          </button>

          {openSections.includes(1) && (
            <div className="pb-6 animate-slideDown">
              <p className="text-gray-300 mb-4">
                Implementing an AI Chat Bot significantly lowers expenses related to manual support:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Automates routine tasks, freeing up your employees' time.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Reduces the workload for call centers and support teams.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Cuts costs on hiring, training, and maintaining support staff.</span>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Section 3 */}
        <div className="border-b border-gray-800">
          <button
            onClick={() => toggleSection(2)}
            className="w-full text-left py-4 flex justify-between items-center"
          >
            <h3 className="text-xl font-semibold text-emerald-400">
              3. Increase Sales and Conversions
            </h3>
            <ChevronDown
              className={`w-5 h-5 text-gray-400 transition-transform ${
                openSections.includes(2) ? "transform rotate-180" : ""
              }`}
            />
          </button>

          {openSections.includes(2) && (
            <div className="pb-6 animate-slideDown">
              <p className="text-gray-300 mb-4">
                AI Chat Bots do more than answer questions — they actively drive sales:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Recommend products based on customer preferences.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Guide users through the sales funnel to finalize purchases.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Capture leads and gather contact information for your sales team.</span>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Section 4 */}
        <div className="border-b border-gray-800">
          <button
            onClick={() => toggleSection(3)}
            className="w-full text-left py-4 flex justify-between items-center"
          >
            <h3 className="text-xl font-semibold text-emerald-400">
              4. Instant Scalability for High Volumes
            </h3>
            <ChevronDown
              className={`w-5 h-5 text-gray-400 transition-transform ${
                openSections.includes(3) ? "transform rotate-180" : ""
              }`}
            />
          </button>

          {openSections.includes(3) && (
            <div className="pb-6 animate-slideDown">
              <p className="text-gray-300 mb-4">
                An AI Chat Bot can handle thousands of inquiries simultaneously:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Processes requests quickly, even during peak hours.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>
                    Works effectively for businesses of all sizes, from small to enterprise-level.
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>
                    Handles large-scale events like sales, promotions, and seasonal spikes
                    seamlessly.
                  </span>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Section 5 */}
        <div className="border-b border-gray-800">
          <button
            onClick={() => toggleSection(4)}
            className="w-full text-left py-4 flex justify-between items-center"
          >
            <h3 className="text-xl font-semibold text-emerald-400">
              5. Enhanced Customer Experience
            </h3>
            <ChevronDown
              className={`w-5 h-5 text-gray-400 transition-transform ${
                openSections.includes(4) ? "transform rotate-180" : ""
              }`}
            />
          </button>

          {openSections.includes(4) && (
            <div className="pb-6 animate-slideDown">
              <p className="text-gray-300 mb-4">
                Improve overall customer satisfaction with personalized interactions:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Provides consistent and accurate responses across all channels.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Offers multilingual support for global customer base.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Maintains conversation context for more natural interactions.</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Top5ReasonsSection;
