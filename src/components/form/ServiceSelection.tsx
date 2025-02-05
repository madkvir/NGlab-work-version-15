import React from 'react';
import { MessageSquare, Mic, Code2, UserCircle2, Bot, HeartHandshake, HelpCircle } from 'lucide-react';
import getPageLangUnit from '../../utils/getPageLangUnit';

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

const serviceTranslations = {
  en: {
    services: {
      aiChatBot: {
        title: "AI Agent (Chat Bot)",
        description: "24/7 intelligent customer support",
        tooltip: "Automated chat support with AI capabilities"
      },
      aiVoiceBot: {
        title: "AI Agent (Voice Bot)",
        description: "Voice-enabled AI assistant",
        tooltip: "Natural voice interactions powered by AI"
      },
      customDevelopment: {
        title: "Custom Development",
        description: "Tailored AI solutions",
        tooltip: "Custom AI development for your specific needs"
      },
      aiAvatar: {
        title: "AI Avatar",
        description: "Digital AI representation",
        tooltip: "Virtual AI avatars for digital interactions"
      },
      aiAssistant: {
        title: "AI Assistant",
        description: "Personal AI helper",
        tooltip: "AI-powered personal assistance and automation"
      },
      counseling: {
        title: "Counseling",
        description: "Expert AI guidance",
        tooltip: "Professional consultation on AI implementation"
      }
    }
  },
  de: {
    services: {
      aiChatBot: {
        title: "KI-Agent (Chat-Bot)",
        description: "24/7 intelligenter Kundensupport",
        tooltip: "Automatisierter Chat-Support mit KI-Fähigkeiten"
      },
      aiVoiceBot: {
        title: "KI-Agent (Sprach-Bot)",
        description: "Sprachgesteuerter KI-Assistent",
        tooltip: "Natürliche Sprachinteraktionen mit KI"
      },
      customDevelopment: {
        title: "Individuelle Entwicklung",
        description: "Maßgeschneiderte KI-Lösungen",
        tooltip: "Individuelle KI-Entwicklung für Ihre Bedürfnisse"
      },
      aiAvatar: {
        title: "KI-Avatar",
        description: "Digitale KI-Repräsentation",
        tooltip: "Virtuelle KI-Avatare für digitale Interaktionen"
      },
      aiAssistant: {
        title: "KI-Assistent",
        description: "Persönlicher KI-Helfer",
        tooltip: "KI-gestützte persönliche Assistenz und Automatisierung"
      },
      counseling: {
        title: "Beratung",
        description: "Experten-KI-Beratung",
        tooltip: "Professionelle Beratung zur KI-Implementierung"
      }
    }
  },
  es: {
    services: {
      aiChatBot: {
        title: "Agente IA (Chat Bot)",
        description: "Soporte al cliente 24/7",
        tooltip: "Soporte de chat automatizado con capacidades de IA"
      },
      aiVoiceBot: {
        title: "Agente IA (Bot de Voz)",
        description: "Asistente IA por voz",
        tooltip: "Interacciones de voz naturales con IA"
      },
      customDevelopment: {
        title: "Desarrollo Personalizado",
        description: "Soluciones IA a medida",
        tooltip: "Desarrollo personalizado de IA para sus necesidades"
      },
      aiAvatar: {
        title: "Avatar IA",
        description: "Representación digital IA",
        tooltip: "Avatares virtuales IA para interacciones digitales"
      },
      aiAssistant: {
        title: "Asistente IA",
        description: "Ayudante personal IA",
        tooltip: "Asistencia personal y automatización con IA"
      },
      counseling: {
        title: "Asesoramiento",
        description: "Guía experta en IA",
        tooltip: "Consultoría profesional en implementación de IA"
      }
    }
  },
  ru: {
    services: {
      aiChatBot: {
        title: "ИИ Агент (Чат-бот)",
        description: "Поддержка клиентов 24/7",
        tooltip: "Автоматизированная поддержка с возможностями ИИ"
      },
      aiVoiceBot: {
        title: "ИИ Агент (Голосовой бот)",
        description: "Голосовой ИИ-ассистент",
        tooltip: "Естественное голосовое взаимодействие с ИИ"
      },
      customDevelopment: {
        title: "Индивидуальная разработка",
        description: "Решения ИИ под заказ",
        tooltip: "Разработка ИИ под ваши потребности"
      },
      aiAvatar: {
        title: "ИИ Аватар",
        description: "Цифровой ИИ-представитель",
        tooltip: "Виртуальные ИИ-аватары для цифрового взаимодействия"
      },
      aiAssistant: {
        title: "ИИ Ассистент",
        description: "Персональный ИИ-помощник",
        tooltip: "Персональная помощь и автоматизация с ИИ"
      },
      counseling: {
        title: "Консультация",
        description: "Экспертное руководство",
        tooltip: "Профессиональная консультация по внедрению ИИ"
      }
    }
  },
  ua: {
    services: {
      aiChatBot: {
        title: "ШІ Агент (Чат-бот)",
        description: "Підтримка клієнтів 24/7",
        tooltip: "Автоматизована підтримка з можливостями ШІ"
      },
      aiVoiceBot: {
        title: "ШІ Агент (Голосовий бот)",
        description: "Голосовий ШІ-асистент",
        tooltip: "Природна голосова взаємодія з ШІ"
      },
      customDevelopment: {
        title: "Індивідуальна розробка",
        description: "Рішення ШІ на замовлення",
        tooltip: "Розробка ШІ під ваші потреби"
      },
      aiAvatar: {
        title: "ШІ Аватар",
        description: "Цифровий ШІ-представник",
        tooltip: "Віртуальні ШІ-аватари для цифрової взаємодії"
      },
      aiAssistant: {
        title: "ШІ Асистент",
        description: "Персональний ШІ-помічник",
        tooltip: "Персональна допомога та автоматизація з ШІ"
      },
      counseling: {
        title: "Консультація",
        description: "Експертне керівництво",
        tooltip: "Професійна консультація з впровадження ШІ"
      }
    }
  }
};

const ServiceSelection: React.FC<ServiceSelectionProps> = ({ services, onChange }) => {
  const language = getPageLangUnit(serviceTranslations);
  const t = serviceTranslations[language];

  const serviceOptions = [
    {
      id: 'aiChatBot',
      name: t.services.aiChatBot.title,
      icon: <MessageSquare className="w-4 h-4" />,
      info: t.services.aiChatBot.description
    },
    {
      id: 'aiVoiceBot',
      name: t.services.aiVoiceBot.title,
      icon: <Mic className="w-4 h-4" />,
      info: t.services.aiVoiceBot.description
    },
    {
      id: 'customDevelopment',
      name: t.services.customDevelopment.title,
      icon: <Code2 className="w-4 h-4" />,
      info: t.services.customDevelopment.description
    },
    {
      id: 'aiAvatar',
      name: t.services.aiAvatar.title,
      icon: <Bot className="w-4 h-4" />,
      info: t.services.aiAvatar.description
    },
    {
      id: 'aiAssistant',
      name: t.services.aiAssistant.title,
      icon: <UserCircle2 className="w-4 h-4" />,
      info: t.services.aiAssistant.description
    },
    {
      id: 'counseling',
      name: t.services.counseling.title,
      icon: <HeartHandshake className="w-4 h-4" />,
      info: t.services.counseling.description
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