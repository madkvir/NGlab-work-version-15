import React from 'react';
import { MessageSquare, Mic, Code, Bot, Brain, Users, HelpCircle } from 'lucide-react';

interface ServiceSelectionProps {
  services: {
    aiChatBot: boolean;
    aiVoiceBot: boolean;
    customDevelopment: boolean;
    aiAvatar: boolean;
    aiAssistant: boolean;
    counseling: boolean;
  };
  onChange: (service: string) => void;
}

const ServiceSelection: React.FC<ServiceSelectionProps> = ({ services, onChange }) => {
  const serviceOptions = [
    {
      id: 'aiChatBot',
      name: 'AI Agent (Chat Bot)',
      icon: <MessageSquare className="w-4 h-4" />,
      info: 'Intelligent chatbot for 24/7 customer support and automated responses'
    },
    {
      id: 'aiVoiceBot',
      name: 'AI Agent (Voice Bot)',
      icon: <Mic className="w-4 h-4" />,
      info: 'Voice-enabled AI agent for natural conversations and phone support'
    },
    {
      id: 'customDevelopment',
      name: 'Custom Development',
      icon: <Code className="w-4 h-4" />,
      info: 'Tailored AI solutions built specifically for your business needs'
    },
    {
      id: 'aiAvatar',
      name: 'AI Avatar',
      icon: <Bot className="w-4 h-4" />,
      info: 'Digital avatars powered by AI for immersive user experiences'
    },
    {
      id: 'aiAssistant',
      name: 'AI Assistant',
      icon: <Brain className="w-4 h-4" />,
      info: 'Personal AI assistant for task automation and productivity'
    },
    {
      id: 'counseling',
      name: 'Counseling',
      icon: <Users className="w-4 h-4" />,
      info: 'Expert consultation on AI implementation and strategy'
    }
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {serviceOptions.map(service => (
        <div key={service.id} className="relative group">
          <button
            type="button"
            onClick={() => onChange(service.id)}
            className={`w-full flex flex-col items-center p-2 rounded-lg transition-all duration-300 ${
              services[service.id as keyof typeof services]
                ? 'bg-emerald-500/20 text-emerald-400'
                : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800/70'
            }`}
          >
            {service.icon}
            <span className="mt-1 text-xs text-center">{service.name}</span>
          </button>
          
          {/* Info Icon with Tooltip */}
          <div className="absolute top-1 right-1 group/tooltip">
            <HelpCircle className="w-3 h-3 text-gray-400 cursor-help" />
            <div className="absolute right-0 w-48 p-2 mt-1 text-xs bg-gray-900/95 text-gray-300 rounded-lg shadow-xl opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-300 z-10">
              {service.info}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceSelection;