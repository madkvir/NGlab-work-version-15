"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { toolGroups } from "../data/toolGroups";
import { Link } from "../i18n/routing";

interface ToolsMenuProps {
  isMobile?: boolean;
}

const ToolsMenu: React.FC<ToolsMenuProps> = ({ isMobile = false }) => {
  const [openGroup, setOpenGroup] = useState<string | null>("AI Tools for Business");
  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);

  const renderTool = (tool: any, index: number) => {
    const baseProps = {
      className: `flex flex-col items-center p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 relative group menu-item-appear`,
      style: { animationDelay: `${index * 30}ms` },
    };

    if (tool.component === Link && tool.to) {
      return (
        <Link key={`${tool.name}-${index}`} href={tool.to} {...baseProps}>
          {renderToolContent(tool)}
        </Link>
      );
    }

    return (
      <button key={`${tool.name}-${index}`} type="button" {...baseProps}>
        {renderToolContent(tool)}
      </button>
    );
  };

  const renderToolContent = (tool: any) => (
    <>
      <div className="text-gray-400 group-hover:text-emerald-400 transition-all duration-200 transform group-hover:scale-110">
        {tool.icon}
      </div>
      <span className="mt-2 text-sm text-gray-400 text-center leading-tight group-hover:text-white transition-all duration-200 menu-text-hover">
        {tool.name}
      </span>
      {tool.hot && (
        <span className="absolute -top-1 right-0 bg-pink-500 text-white text-xs px-2 py-0.5 rounded-full animate-hot-pulse">
          Hot
        </span>
      )}
      {tool.coming && (
        <span className="absolute -top-1 right-0 bg-purple-500 text-white text-xs px-2 py-0.5 rounded-full">
          Coming
        </span>
      )}
    </>
  );

  const renderGroupButton = (groupName: string) => (
    <button
      type="button"
      onClick={() => setOpenGroup(openGroup === groupName ? null : groupName)}
      onMouseEnter={() => setHoveredGroup(groupName)}
      onMouseLeave={() => setHoveredGroup(null)}
      className={`w-full flex items-center justify-between p-2 text-gray-300 hover:text-white transition-all duration-200 group ${
        hoveredGroup === groupName ? "bg-gray-800 rounded-lg" : ""
      }`}
    >
      <span
        className={`${
          isMobile ? "text-base" : "text-sm"
        } font-medium menu-text-hover transform group-hover:translate-x-1 transition-transform duration-200`}
      >
        {groupName}
      </span>
      <ChevronDown
        className={`${isMobile ? "w-5 h-5" : "w-4 h-4"} transition-all duration-200 transform ${
          openGroup === groupName ? "rotate-180" : ""
        } group-hover:text-emerald-400`}
      />
    </button>
  );

  const renderToolsGrid = (tools: any[]) => (
    <div className="grid grid-cols-2 gap-2">
      {tools.map((tool, index) => renderTool(tool, index))}
    </div>
  );

  if (isMobile) {
    return (
      <div className="space-y-3">
        {Object.entries(toolGroups).map(([groupName, tools], index) => (
          <div
            key={groupName}
            className="border-b border-gray-700 last:border-0 pb-3 menu-item-appear"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {renderGroupButton(groupName)}
            <div
              className={`overflow-hidden transition-all duration-200 ease-in-out ${
                openGroup === groupName ? "max-h-[600px] opacity-100 pt-2" : "max-h-0 opacity-0"
              }`}
            >
              {renderToolsGrid(tools)}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="absolute top-full right-0 mt-2 w-[420px] bg-[#0B0F19] rounded-lg border border-gray-700 p-4 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
      <div className="space-y-2">
        {Object.entries(toolGroups).map(([groupName, tools], index) => (
          <div
            key={groupName}
            className="border-b border-gray-700 last:border-0 menu-item-appear"
            style={{ animationDelay: `${index * 30}ms` }}
          >
            {renderGroupButton(groupName)}
            <div
              className={`overflow-hidden transition-all duration-200 ease-in-out ${
                openGroup === groupName ? "max-h-[600px] opacity-100 py-2" : "max-h-0 opacity-0"
              }`}
            >
              {renderToolsGrid(tools)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsMenu;
