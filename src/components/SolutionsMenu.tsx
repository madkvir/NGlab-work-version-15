"use client";
import React, { useState } from "react";
import {
  MessageSquare,
  Mic,
  Bot,
  Brain,
  Code,
  Users,
  Instagram,
  MessageCircle,
  Ticket,
  Puzzle,
  Table2,
  Shield,
  Search,
  Mail,
  MessageSquareMore,
  Headphones,
  Cloud,
  Building2,
} from "lucide-react";
import { toolGroupTranslations } from "../locales/translations";
import getPageLangUnit from "../utils/getPageLangUnit";
import { Link } from "../i18n/routing";

interface SolutionsMenuProps {
  isMobile?: boolean;
  language: "en" | "de" | "es" | "ru" | "ua";
}

const SolutionsMenu = ({ isMobile }: SolutionsMenuProps) => {
  const language = getPageLangUnit(toolGroupTranslations);
  const t = toolGroupTranslations[language];
  const [openGroup, setOpenGroup] = useState<string | null>(t["AI Tools for Business"]);
  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);

  const localizedToolGroups = {
    [t["AI Tools for Business"]]: [
      {
        icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />,
        name: t["AI Chat Bot"],
        to: "/tools/ai-chat-bot",
        hot: true,
      },
      {
        icon: <Mic className="w-5 h-5 sm:w-6 sm:h-6" />,
        name: t["AI Voice Bot"],
        to: "/tools/ai-voice-bot",
        hot: true,
      },
      {
        icon: <Bot className="w-5 h-5 sm:w-6 sm:h-6" />,
        name: t["AI Avatar"],
        to: "/tools/ai-avatar",
        hot: false,
      },
      {
        icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6" />,
        name: t["AI Assistant"],
        to: "/tools/ai-assistant",
        hot: false,
      },
      {
        icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
        name: t["Custom Development"],
        to: "/tools/custom-development",
      },
      {
        icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
        name: t["Counseling"],
        to: "/tools/counseling",
      },
    ],
    [t["Messaging"]]: [
      {
        icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />,
        name: "Facebook Messenger",
        to: "/tools/facebook-messenger",
        hot: true,
      },
      {
        icon: <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />,
        name: "Instagram",
        to: "/tools/instagram",
        hot: false,
      },
      {
        icon: <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
        name: "WhatsApp",
        to: "/tools/whatsapp",
        hot: true,
      },
      {
        icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />,
        name: "Discord",
        to: "/tools/discord",
        hot: false,
      },
    ],
    [t["Integration"]]: [
      {
        icon: <Ticket className="w-5 h-5 sm:w-6 sm:h-6" />,
        name: "Jira",
        to: "/tools/jira",
      },
      {
        icon: <Puzzle className="w-5 h-5 sm:w-6 sm:h-6" />,
        name: "Zapier",
        to: "/tools/zapier",
      },
      {
        icon: <Table2 className="w-5 h-5 sm:w-6 sm:h-6" />,
        name: "Tables",
        to: "/tools/tables",
        hot: true,
      },
    ],
    [t["Security & Search"]]: [
      {
        icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
        name: "Anti-Spam",
        to: "/tools/anti-spam",
        hot: true,
      },
      {
        icon: <Search className="w-5 h-5 sm:w-6 sm:h-6" />,
        name: "Best Search",
        to: "/tools/best-search",
        hot: true,
      },
    ],
    [t["Communication"]]: [
      {
        icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
        name: "Email",
        to: "/tools/email",
        hot: true,
      },
      {
        icon: <MessageSquareMore className="w-5 h-5 sm:w-6 sm:h-6" />,
        name: "Slack",
        to: "/tools/slack",
      },
      {
        icon: <Headphones className="w-5 h-5 sm:w-6 sm:h-6" />,
        name: "LiveChat",
        to: "/tools/livechat",
      },
      {
        icon: <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
        name: "Intercom",
        to: "/tools/intercom",
      },
    ],
    [t["Coming Soon"]]: [
      {
        icon: <Cloud className="w-5 h-5 sm:w-6 sm:h-6" />,
        name: "Salesforce",
        to: "/tools/salesforce",
        coming: true,
      },
      {
        icon: <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />,
        name: "HubSpot",
        to: "/tools/hubspot",
        coming: true,
      },
      {
        icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />,
        name: "Microsoft Teams",
        to: "/tools/microsoft-teams",
        coming: true,
      },
    ],
  };

  const renderTool = (tool: any) => (
    <Link
      key={tool.name}
      href={tool.to}
      className="flex flex-col items-center p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-200 relative group"
    >
      <div className="text-gray-400 group-hover:text-emerald-400 transition-all duration-200 transform group-hover:scale-110">
        {tool.icon}
      </div>
      <span className="mt-2 text-sm text-gray-400 text-center leading-tight group-hover:text-white transition-all duration-200">
        {tool.name}
      </span>
      {tool.hot && (
        <span className="absolute -top-1 -right-0 bg-pink-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
          {t["Hot"]}
        </span>
      )}
      {tool.coming && (
        <span className="absolute -top-1 -right-0 bg-purple-500 text-white text-xs px-2 py-0.5 rounded-full">
          {t["Coming"]}
        </span>
      )}
    </Link>
  );

  if (isMobile) {
    return (
      <div className="space-y-2">
        {Object.entries(localizedToolGroups).map(([groupName, tools], index) => (
          <div
            key={groupName}
            className="border-b border-gray-800/30 last:border-0 pb-2 menu-item-appear"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <button
              onClick={() => setOpenGroup(openGroup === groupName ? null : groupName)}
              className="w-full flex items-center justify-between p-2 text-gray-400 hover:text-white transition-all duration-200"
            >
              <span className="text-base font-medium">{groupName}</span>
              <span
                className={`transform transition-transform duration-200 ${
                  openGroup === groupName ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            <div
              className={`grid grid-cols-2 gap-2 overflow-hidden transition-all duration-200 ${
                openGroup === groupName ? "max-h-[600px] opacity-100 pt-2" : "max-h-0 opacity-0"
              }`}
            >
              {(tools as any[]).map((tool) => renderTool(tool))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="absolute top-full right-0 mt-2 w-[420px] bg-[#0B0F19] rounded-lg border border-gray-800/30 p-4 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
      <div className="space-y-1">
        {Object.entries(localizedToolGroups).map(([groupName, tools], index) => (
          <div
            key={groupName}
            className="border-b border-gray-800/30 last:border-0 menu-item-appear hover:border-gray-800/50 transition-colors duration-300"
            style={{ animationDelay: `${index * 30}ms` }}
          >
            <button
              onClick={() => setOpenGroup(openGroup === groupName ? null : groupName)}
              onMouseEnter={() => setHoveredGroup(groupName)}
              onMouseLeave={() => setHoveredGroup(null)}
              className={`w-full flex items-center justify-between p-2 text-gray-400 hover:text-white transition-all duration-200 group ${
                hoveredGroup === groupName ? "bg-gray-800/30 rounded-lg" : ""
              }`}
            >
              <span className="text-sm font-medium menu-text-hover transform group-hover:translate-x-1 transition-transform duration-200">
                {groupName}
              </span>
              <span
                className={`transform transition-transform duration-200 ${
                  openGroup === groupName ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            <div
              className={`grid grid-cols-2 gap-2 overflow-hidden transition-all duration-200 ${
                openGroup === groupName ? "max-h-[600px] opacity-100 py-2" : "max-h-0 opacity-0"
              }`}
            >
              {(tools as any[]).map((tool) => renderTool(tool))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionsMenu;
