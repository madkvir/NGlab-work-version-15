import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { useAIChatBotTranslations } from '../../../hooks/useAIChatBotTranslations';

type Integration = string | { name: string; description: string };

type IntegrationNames = "Website Widget" | "Facebook Messenger" | "WhatsApp" | "Slack" | "Microsoft Teams" | "Custom API";
type SupportedLanguages = "ua" | "de" | "es" | "ru" | "pl";

const integrationNameMapping: Record<IntegrationNames, Record<SupportedLanguages, string>> = {
  "Website Widget": {
    ua: "Віджет для сайту",
    de: "Website-Widget",
    es: "Widget para sitio web",
    ru: "Виджет для сайта",
    pl: "Widget dla strony"
  },
  "Facebook Messenger": {
    ua: "Facebook Messenger",
    de: "Facebook Messenger",
    es: "Facebook Messenger",
    ru: "Facebook Messenger",
    pl: "Facebook Messenger"
  },
  "WhatsApp": {
    ua: "WhatsApp",
    de: "WhatsApp",
    es: "WhatsApp",
    ru: "WhatsApp",
    pl: "WhatsApp"
  },
  "Slack": {
    ua: "Slack",
    de: "Slack",
    es: "Slack",
    ru: "Slack",
    pl: "Slack"
  },
  "Microsoft Teams": {
    ua: "Microsoft Teams",
    de: "Microsoft Teams",
    es: "Microsoft Teams",
    ru: "Microsoft Teams",
    pl: "Microsoft Teams"
  },
  "Custom API": {
    ua: "Користувацький API",
    de: "Benutzerdefinierte API",
    es: "API personalizada",
    ru: "Пользовательский API",
    pl: "Własne API"
  }
};

const integrationTranslations = {
  en: {
    title: "Integrations",
    descriptions: {
      "Website Widget": "Embeddable chatbot for your website. Easy installation, style customization and full integration with your design.",
      "Facebook Messenger": "Automate customer communication through Facebook Messenger. Instant 24/7 message responses.",
      "WhatsApp": "Integration with WhatsApp Business API for communication automation. Support customers in their favorite messenger.",
      "Slack": "Connect chatbot to corporate Slack for internal process automation and employee support.",
      "Microsoft Teams": "MS Teams integration for improving company communication and workflow automation.",
      "Custom API": "Flexible API integration for connecting to any of your systems and services."
    }
  },
  de: {
    title: "Integrationen",
    descriptions: {
      "Website Widget": "Einbettbarer Chatbot für Ihre Website. Einfache Installation, Stilanpassung und vollständige Integration in Ihr Design.",
      "Facebook Messenger": "Automatisieren Sie die Kundenkommunikation über Facebook Messenger. Sofortige Nachrichtenantworten rund um die Uhr.",
      "WhatsApp": "Integration mit WhatsApp Business API zur Kommunikationsautomatisierung. Unterstützen Sie Kunden in ihrem bevorzugten Messenger.",
      "Slack": "Verbinden Sie den Chatbot mit dem Unternehmens-Slack zur Automatisierung interner Prozesse und Mitarbeiterunterstützung.",
      "Microsoft Teams": "MS Teams-Integration zur Verbesserung der Unternehmenskommunikation und Workflow-Automatisierung.",
      "Custom API": "Flexible API-Integration zur Verbindung mit allen Ihren Systemen und Diensten."
    }
  },
  ua: {
    title: "Інтеграції",
    descriptions: {
      "Website Widget": "Вбудований чат-бот для вашого веб-сайту. Легке встановлення, налаштування стилю та повна інтеграція з вашим дизайном.",
      "Facebook Messenger": "Автоматизація спілкування з клієнтами через Facebook Messenger. Миттєві відповіді на повідомлення 24/7.",
      "WhatsApp": "Інтеграція з WhatsApp Business API для автоматизації комунікації. Підтримка клієнтів у їхньому улюбленому месенджері.",
      "Slack": "Підключення чат-бота до корпоративного Slack для автоматизації внутрішніх процесів та підтримки співробітників.",
      "Microsoft Teams": "Інтеграція з MS Teams для покращення комунікації компанії та автоматизації робочих процесів.",
      "Custom API": "Гнучка інтеграція через API для підключення до будь-яких ваших систем та сервісів."
    }
  },
  es: {
    title: "Integraciones",
    descriptions: {
      "Website Widget": "Chatbot integrable para su sitio web. Fácil instalación, personalización de estilo e integración completa con su diseño.",
      "Facebook Messenger": "Automatice la comunicación con clientes a través de Facebook Messenger. Respuestas instantáneas 24/7.",
      "WhatsApp": "Integración con WhatsApp Business API para automatización de comunicaciones. Soporte a clientes en su mensajero favorito.",
      "Slack": "Conecte el chatbot al Slack corporativo para automatización de procesos internos y soporte a empleados.",
      "Microsoft Teams": "Integración con MS Teams para mejorar la comunicación empresarial y automatización de flujos de trabajo.",
      "Custom API": "Integración API flexible para conectar con cualquiera de sus sistemas y servicios."
    }
  },
  ru: {
    title: "Интеграции",
    descriptions: {
      "Website Widget": "Встраиваемый чат-бот для вашего сайта. Легкая установка, настройка стилей и полная интеграция с вашим дизайном.",
      "Facebook Messenger": "Автоматизация общения с клиентами через Facebook Messenger. Мгновенные ответы на сообщения 24/7.",
      "WhatsApp": "Интеграция с WhatsApp Business API для автоматизации коммуникации. Поддержка клиентов в их любимом мессенджере.",
      "Slack": "Подключение чат-бота к корпоративному Slack для автоматизации внутренних процессов и поддержки сотрудников.",
      "Microsoft Teams": "Интеграция с MS Teams для улучшения коммуникации внутри компании и автоматизации рабочих процессов.",
      "Custom API": "Гибкая интеграция через API для подключения к любым вашим системам и сервисам."
    }
  },
  pl: {
    title: "Integracje",
    descriptions: {
      "Website Widget": "Wbudowany chatbot dla Twojej strony. Łatwa instalacja, dostosowanie stylów i pełna integracja z Twoim designem.",
      "Facebook Messenger": "Automatyzacja komunikacji z klientami przez Facebook Messenger. Natychmiastowe odpowiedzi na wiadomości 24/7.",
      "WhatsApp": "Integracja z WhatsApp Business API do automatyzacji komunikacji. Wsparcie klientów w ich ulubionym komunikatorze.",
      "Slack": "Podłączenie chatbota do firmowego Slacka do automatyzacji procesów wewnętrznych i wsparcia pracowników.",
      "Microsoft Teams": "Integracja z MS Teams do usprawnienia komunikacji w firmie i automatyzacji przepływu pracy.",
      "Custom API": "Elastyczna integracja przez API do połączenia z dowolnymi systemami i usługami."
    }
  }
};

export const AIChatBotIntegrations: React.FC = () => {
  const { t, language } = useAIChatBotTranslations();

  if (!t.integrations) return null;

  // Получаем переводы для текущего языка
  const currentTranslations = integrationTranslations[language as keyof typeof integrationTranslations] || integrationTranslations.en;

  // Функция для получения локализованного имени
  const getLocalizedName = (name: string): string => {
    const integrationKey = Object.keys(integrationNameMapping).find(key => 
      key === name || integrationNameMapping[key as IntegrationNames][language as SupportedLanguages] === name
    ) as IntegrationNames;

    if (integrationKey) {
      return integrationNameMapping[integrationKey][language as SupportedLanguages] || name;
    }
    return name;
  };

  // Функция для получения оригинального (английского) ключа
  const getOriginalKey = (name: string): string => {
    return Object.keys(integrationNameMapping).find(key => 
      key === name || integrationNameMapping[key as IntegrationNames][language as SupportedLanguages] === name
    ) || name;
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-gray-900/50 rounded-lg p-4 hover:bg-gray-900/70 transition-all duration-300 mb-8">
        <h2 className="text-xl font-semibold mb-3 text-emerald-400">
          {currentTranslations.title}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {(t.integrations as readonly Integration[]).map((integration, index) => {
            const [showTooltip, setShowTooltip] = useState(false);
            const integrationName = typeof integration === 'string' ? integration : integration.name;
            const localizedName = getLocalizedName(integrationName);
            const originalKey = getOriginalKey(integrationName);
            const description = currentTranslations.descriptions[originalKey];
            
            return (
              <div 
                key={index} 
                className="bg-gray-800/50 rounded-md p-2 text-center relative group cursor-help"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <div className="flex items-center justify-center gap-1 text-sm">
                  <span>{localizedName}</span>
                </div>
                {showTooltip && description && (
                  <div className="absolute z-10 w-56 p-3 text-sm bg-gray-900 border border-gray-700 rounded-md shadow-lg text-left 
                    left-1/2 transform -translate-x-1/2 bottom-full mb-2">
                    <div className="text-gray-300">{description}</div>
                    <div className="absolute w-2 h-2 bg-gray-900 border-r border-b border-gray-700 transform rotate-45 -bottom-1 
                      left-1/2 -translate-x-1/2"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}; 