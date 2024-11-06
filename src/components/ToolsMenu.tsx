import React from 'react';
import { 
  MessageSquare,
  Instagram,
  LayoutGrid,
  Phone,
  MessageCircle,
  ShieldCheck,
  Network,
  Mail,
  Webhook,
  BookOpen,
  Cloud,
  Building2
} from 'lucide-react';

export const tools = [
  { icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />, name: 'Facebook Messenger', hot: true },
  { icon: <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />, name: 'Instagram', hot: true },
  { icon: <LayoutGrid className="w-5 h-5 sm:w-6 sm:h-6" />, name: 'Widget on Site', hot: true },
  { icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />, name: 'Twilio', hot: true },
  { icon: <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />, name: 'Discord' },
  { icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />, name: 'Anti-Spam', hot: true },
  { icon: <Network className="w-5 h-5 sm:w-6 sm:h-6" />, name: 'RAG' },
  { icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />, name: 'Email' },
  { icon: <Webhook className="w-5 h-5 sm:w-6 sm:h-6" />, name: 'Zendesk API' },
  { icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />, name: 'Zendesk Knowledge' },
  { icon: <Cloud className="w-5 h-5 sm:w-6 sm:h-6" />, name: 'Salesforce', coming: true },
  { icon: <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />, name: 'HubSpot', coming: true }
];

const ToolsMenu = () => {
  return (
    <div className="absolute top-full right-0 mt-2 w-[280px] sm:w-[420px] bg-[#0B0F19]/95 backdrop-blur-sm rounded-lg border border-gray-900/50 p-2 sm:p-4 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
        {tools.map((tool, index) => (
          <button
            key={index}
            className="flex flex-col items-center p-2 sm:p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors relative"
          >
            <div className="text-gray-400 hover:text-emerald-400 transition-colors">{tool.icon}</div>
            <span className="mt-2 text-xs sm:text-sm text-gray-400 text-center line-clamp-2">{tool.name}</span>
            {tool.hot && (
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] sm:text-xs px-1 sm:px-1.5 py-0.5 rounded-full">
                Hot
              </span>
            )}
            {tool.coming && (
              <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-[10px] sm:text-xs px-1 sm:px-1.5 py-0.5 rounded-full">
                Coming
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ToolsMenu;