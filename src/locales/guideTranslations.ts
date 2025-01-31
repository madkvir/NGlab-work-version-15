type StageSection = {
  title: string;
  content: string;
};

type Stage = {
  title: string;
  subtitle: string;
  sections: {
    [key: string]: StageSection;
  };
};

type GuideTranslations = {
  [key: string]: {
    navigation: {
      backHome: string;
    };
    header: {
      title: string;
      subtitle: string;
    };
    mobileMenu: {
      show: string;
      hide: string;
    };
    stages: {
      [key: string]: Stage;
    };
    buttons: {
      contactSales: string;
      bookDemo: string;
    };
    sidebar: {
      [key: string]: {
        title: string;
        stage: string;
      };
    };
  };
};

export const guideTranslations: GuideTranslations = {
  en: {
    navigation: {
      backHome: "← Back to Home",
    },
    header: {
      title: "from Idea to Implementation",
      subtitle: "Imagine your business as an entire ecosystem where every part matters. Our task is to complement this ecosystem with a 'smart assistant' that will take over routine tasks and help the company grow.",
    },
    mobileMenu: {
      show: "Show Menu",
      hide: "Hide Menu",
    },
    stages: {
      stage1: {
        title: "WHERE WE START",
        subtitle: "First Meeting (Introduction) and Needs Analysis",
        sections: {
          diagnosis: {
            title: "Diagnosis",
            content: "At the meeting, we strive to understand which part of the business process is experiencing difficulties. We can say that we conduct a 'diagnosis' to find out which tasks are most critical.",
          },
          goalsAndTasks: {
            title: "Goals and Objectives",
            content: "We ask about your goals, analyze the main problems. Want to reduce customer response time? What information do your customers most often request? What questions cause the most difficulty for employees?",
          },
          informationGathering: {
            title: "Information Gathering",
            content: "What do you do? Simply share information about how the business process works and what tasks you plan to solve through AI Agent integration. We take care of technical and IT issues. We collect preliminary information about the number of possible requests, analyze their nature (technical, client, operational) and assess which tasks can be automated using AI. We find out peak loads, average number of requests per day/month and forecast growth potential.",
          },
          caseDemonstration: {
            title: "Case Demonstration",
            content: "We conduct a demonstration of a relevant case with analysis of successful examples of AI implementation in similar businesses. We show how our tools work in real time, what tasks they solve and what results can be expected. We answer all questions and discuss potential possibilities for adaptation to your business.",
          },
          sourcesAndSystems: {
            title: "Determining Sources and Systems to Interact With",
            content: "We determine which sources need to be connected: Facebook, Website Widget, WhatsApp, Instagram and other platforms. We analyze management systems used, such as HubSpot, Salesforce, Email, SQL or NoSQL databases. We assess the need for API integration, automated data collection and synchronization between different platforms for seamless operation.",
          },
          preliminaryAssessment: {
            title: "Preliminary Project and Integration Assessment",
            content: "We preliminarily assess the amount and formats of information for creating a knowledge base, analyze their structure and need for updates. We determine what data should be loaded into the system, in what form and with what frequency. We evaluate the possibilities of automatic knowledge base updates, as well as integration with external data sources to maintain its relevance.",
          },
          stageResults: {
            title: "First Stage Results",
            content: "Based on the information received and the meeting held, NeuroGen Lab specialists will be able to assess the project scope in detail, identify possible integration points and propose an optimal solution for your company. We also forecast implementation timelines and resources necessary for successful implementation.",
          }
        }
      },
      stage2: {
        title: "LEGAL ASPECTS",
        subtitle: "Offer, Contract, Technical Specification",
        sections: {
          technicalSpecification: {
            title: "Preparing Technical Specification (Offer)",
            content: "At this stage, we develop a detailed technical specification (TS) that documents all requirements, tasks, and expected project outcomes. The TS includes:"
          },
          specificationList: {
            title: "",
            content: `• Description of goals and objectives for AI solution implementation
• Definition of key functions and integrations with your systems
• Clarification of data sources and processing methods
• Project implementation timelines and stages
• Details regarding system training and testing before launch`
          },
          specificationSummary: {
            title: "",
            content: "This document ensures transparency and complete understanding between our team and the client, and serves as the foundation for further project implementation."
          },
          offerApproval: {
            title: "Offer Approval",
            content: "After coordinating all technical specification details, we approve the final terms of cooperation. This stage includes a final review of all requirements, timelines, and integrations, after which the document is submitted for signing."
          },
          contractSigning: {
            title: "Contract Signing",
            content: "At this stage, we document all agreed terms in an official contract. The document includes implementation timelines, scope of work, technical project parameters, and obligations of the parties. After signing, we proceed with the direct implementation of solutions."
          },
          caseDemonstration: {
            title: "",
            content: "",
          },
          sourcesAndSystems: {
            title: "",
            content: "",
          },
          preliminaryAssessment: {
            title: "",
            content: "",
          },
          stageResults: {
            title: "",
            content: "",
          }
        }
      },
      stage3: {
        title: "IMPLEMENTATION",
        subtitle: "Integration and Launch",
        sections: {
          dataPreparation: {
            title: "Data Preparation and Knowledge Base Creation",
            content: "We start by preparing and structuring the data that will form the foundation of your AI assistant's knowledge base. This includes processing documentation, FAQs, product descriptions, and other relevant information sources."
          },
          integrationProcess: {
            title: "Integration Process",
            content: `We connect the AI assistant to your communication channels: Facebook, Website Widget, WhatsApp, Instagram, and other platforms. We also integrate with your management systems such as HubSpot, Salesforce, Email, SQL or NoSQL databases. This ensures seamless data flow and synchronization across all platforms.`
          },
          aiTraining: {
            title: "AI Training and Testing",
            content: "We conduct thorough training of the AI model using your prepared data. This includes:"
          },
          trainingList: {
            title: "",
            content: `• Initial model training on your knowledge base
• Fine-tuning responses based on your business specifics
• Testing various scenarios and use cases
• Response accuracy verification
• Integration testing with all connected systems`
          },
          qualityAssurance: {
            title: "Quality Assurance",
            content: "We perform comprehensive testing of all system components:"
          },
          qaList: {
            title: "",
            content: `• Verification of response accuracy and relevance
• Testing of all integration points
• Load testing and performance optimization
• Security testing and data protection verification
• User interface testing and experience optimization`
          },
          launch: {
            title: "Launch and Initial Support",
            content: "After successful testing, we proceed with the launch. This includes:"
          },
          launchList: {
            title: "",
            content: `• System deployment in production environment
• Real-time monitoring setup
• Staff training on system usage
• Documentation provision
• Initial support and quick issue resolution`
          },
          stageResults: {
            title: "",
            content: "",
          }
        }
      },
      stage4: {
        title: "RESULTS",
        subtitle: "Continuous Improvement and Optimization",
        sections: {
          monitoring: {
            title: "System Monitoring and Analytics",
            content: "We continuously monitor the AI assistant's performance and collect analytics on:"
          },
          monitoringList: {
            title: "",
            content: `• Response accuracy and relevance
• User satisfaction metrics
• System load and performance
• Most frequent queries and scenarios
• Areas requiring optimization`
          },
          optimization: {
            title: "Continuous Optimization",
            content: "Based on the collected analytics, we regularly:"
          },
          optimizationList: {
            title: "",
            content: `• Update and expand the knowledge base
• Fine-tune response algorithms
• Optimize system performance
• Add new features and capabilities
• Improve user experience`
          },
          support: {
            title: "Technical Support",
            content: "Our support team provides:"
          },
          supportList: {
            title: "",
            content: `• 24/7 system monitoring
• Quick issue resolution
• Regular system updates
• Consultation on system usage
• Help with new feature implementation`
          },
          development: {
            title: "Further Development",
            content: "We work on system evolution by:"
          },
          developmentList: {
            title: "",
            content: `• Implementing new AI technologies
• Adding new communication channels
• Expanding integration capabilities
• Developing custom features
• Scaling the system as your business grows`
          }
        }
      }
    },
    buttons: {
      contactSales: "Contact Sales",
      bookDemo: "Book Demo",
    },
    sidebar: {
      stage1: {
        title: "WHERE WE START",
        stage: "Stage 1"
      },
      stage2: {
        title: "LEGAL ASPECTS",
        stage: "Stage 2"
      },
      stage3: {
        title: "IMPLEMENTATION",
        stage: "Stage 3"
      },
      stage4: {
        title: "RESULTS",
        stage: "Stage 4"
      }
    }
  },
  ru: {
    navigation: {
      backHome: "← Вернуться на главную",
    },
    header: {
      title: "от Идеи до Реализации",
      subtitle: "Представьте ваш бизнес как целую экосистему, где важна каждая часть. Наша задача — дополнить эту экосистему 'умным помощником', который возьмет на себя рутинные задачи и поможет компании расти.",
    },
    mobileMenu: {
      show: "Показать меню",
      hide: "Скрыть меню",
    },
    stages: {
      stage1: {
        title: "С ЧЕГО НАЧИНАЕМ",
        subtitle: "Первая встреча (Знакомство) и Анализ потребностей",
        sections: {
          diagnosis: {
            title: "Диагностика",
            content: "На встрече мы стремимся понять, в какой части бизнес-процесса возникают сложности. Можно сказать, что мы проводим 'диагностику' выясняем, какие задачи наиболее критичны.",
          },
          goalsAndTasks: {
            title: "Цели и Задачи",
            content: "Расспрашиваем о ваших целях, анализируем основные проблемы. Хотите сократить время отклика клиентам? Какую информацию чаще всего запрашивают ваши клиенты? Какие вопросы вызывают у сотрудников наибольшую сложность?",
          },
          informationGathering: {
            title: "Сбор информации",
            content: "Что делаете вы? Просто делитесь информацией о том, как устроен бизнес процесс и какие задачи планируете решать за счёт интеграции ИИ Агента. Технические и IT-вопросы мы берём на себя. Собираем предварительную информацию о количестве возможных запросов, анализируем их природу (технические, клиентские, операционные) и оцениваем, какие задачи можно автоматизировать с помощью ИИ. Выясняем пиковые нагрузки, среднее количество обращений в день/месяц и прогнозируем потенциал роста.",
          },
          caseDemonstration: {
            title: "Демонстрация Кейсов",
            content: "Проводим демонстрацию релевантного кейса с разбором успешных примеров внедрения ИИ в аналогичных бизнесах. Показываем, как работают наши инструменты в реальном времени, какие задачи они решают и какие результаты можно ожидать. Отвечаем на все вопросы и обсуждаем потенциальные возможности адаптации под ваш бизнес.",
          },
          sourcesAndSystems: {
            title: "Определение Источников и Систем с которыми необходимо взаимодействовать",
            content: "Выясняем, какие источники необходимо подключить: Facebook, Виджет на сайт, WhatsApp, Instagram и другие платформы. Анализируем используемые системы управления, такие как HubSpot, Salesforce, Email, базы данных SQL или NoSQL. Оцениваем необходимость интеграции с API, автоматизированного сбора данных и синхронизации между различными платформами для бесперебойной работы.",
          },
          preliminaryAssessment: {
            title: "Предварительная оценка проекта и интеграции",
            content: "Предварительно оцениваем количество и форматы информации для создания базы знаний, анализируем их структуру и необходимость обновлений. Определяем, какие данные должны быть загружены в систему, в каком виде и с какой частотой. Оцениваем возможности автоматического обновления базы знаний, а также интеграцию с внешними источниками данных для поддержания её актуальности.",
          },
          stageResults: {
            title: "Итоги первого этапа",
            content: "На базе полученной информации и проведённой встречи специалисты компании NeuroGen Lab смогут детально оценить масштаб проекта, определить возможные точки интеграции и предложить оптимальное решение для вашей компании. Также мы прогнозируем сроки реализации и ресурсы, необходимые для успешного внедрения.",
          }
        }
      },
      stage2: {
        title: "ПРАВОВЫЕ АСПЕКТЫ",
        subtitle: "Оферта, Договор, Техническое задание",
        sections: {
          technicalSpecification: {
            title: "Составление технического задания (Оферта)",
            content: "На данном этапе мы разрабатываем подробное техническое задание (ТЗ), в котором фиксируем все требования, задачи и ожидаемые результаты проекта. ТЗ включает:"
          },
          specificationList: {
            title: "",
            content: `• Описание целей и задач внедрения ИИ-решения
• Определение ключевых функций и интеграций с вашими системами
• Уточнение источников данных и способов их обработки
• Сроки и этапы реализации проекта
• Детали касательно обучения и тестирования системы перед запуском`
          },
          specificationSummary: {
            title: "",
            content: "Это документ, который обеспечивает прозрачность и полное понимание между нашей командой и клиентом, а также служит основой для дальнейшей реализации проекта."
          },
          offerApproval: {
            title: "Утверждение офера",
            content: "После согласования всех деталей технического задания утверждаем финальные условия сотрудничества. Этот этап включает итоговый просмотр всех требований, timelines, и интеграций, после чего документ передается на подписание."
          },
          contractSigning: {
            title: "Подписание договора",
            content: "На этом этапе документально фиксируем все согласованные условия в официальном договоре. Документ включает сроки реализации, объем работ, технические параметры проекта и обязательства сторон. После подписания переходим к непосредственной реализации решений."
          },
          caseDemonstration: {
            title: "",
            content: "",
          },
          sourcesAndSystems: {
            title: "",
            content: "",
          },
          preliminaryAssessment: {
            title: "",
            content: "",
          },
          stageResults: {
            title: "",
            content: "",
          }
        }
      },
      stage3: {
        title: "КАК ПРОХОДИТ РАБОТА",
        subtitle: "Integration and Launch",
        sections: {
          dataPreparation: {
            title: "Data Preparation and Knowledge Base Creation",
            content: "We start by preparing and structuring the data that will form the foundation of your AI assistant's knowledge base. This includes processing documentation, FAQs, product descriptions, and other relevant information sources."
          },
          integrationProcess: {
            title: "Integration Process",
            content: `We connect the AI assistant to your communication channels: Facebook, Website Widget, WhatsApp, Instagram, and other platforms. We also integrate with your management systems such as HubSpot, Salesforce, Email, SQL or NoSQL databases. This ensures seamless data flow and synchronization across all platforms.`
          },
          aiTraining: {
            title: "AI Training and Testing",
            content: "We conduct thorough training of the AI model using your prepared data. This includes:"
          },
          trainingList: {
            title: "",
            content: `• Initial model training on your knowledge base
• Fine-tuning responses based on your business specifics
• Testing various scenarios and use cases
• Response accuracy verification
• Integration testing with all connected systems`
          },
          qualityAssurance: {
            title: "Quality Assurance",
            content: "We perform comprehensive testing of all system components:"
          },
          qaList: {
            title: "",
            content: `• Verification of response accuracy and relevance
• Testing of all integration points
• Load testing and performance optimization
• Security testing and data protection verification
• User interface testing and experience optimization`
          },
          launch: {
            title: "Launch and Initial Support",
            content: "After successful testing, we proceed with the launch. This includes:"
          },
          launchList: {
            title: "",
            content: `• System deployment in production environment
• Real-time monitoring setup
• Staff training on system usage
• Documentation provision
• Initial support and quick issue resolution`
          },
          stageResults: {
            title: "",
            content: "",
          }
        }
      },
      stage4: {
        title: "РЕЗУЛЬТАТЫ",
        subtitle: "Continuous Improvement and Optimization",
        sections: {
          monitoring: {
            title: "System Monitoring and Analytics",
            content: "We continuously monitor the AI assistant's performance and collect analytics on:"
          },
          monitoringList: {
            title: "",
            content: `• Response accuracy and relevance
• User satisfaction metrics
• System load and performance
• Most frequent queries and scenarios
• Areas requiring optimization`
          },
          optimization: {
            title: "Continuous Optimization",
            content: "Based on the collected analytics, we regularly:"
          },
          optimizationList: {
            title: "",
            content: `• Update and expand the knowledge base
• Fine-tune response algorithms
• Optimize system performance
• Add new features and capabilities
• Improve user experience`
          },
          support: {
            title: "Техническая поддержка",
            content: "Наша команда поддержки обеспечивает:"
          },
          supportList: {
            title: "",
            content: `• Круглосуточный мониторинг системы
• Быстрое решение возникающих проблем
• Регулярные обновления системы
• Консультации по использованию системы
• Помощь во внедрении новых функций`
          },
          development: {
            title: "Дальнейшее развитие",
            content: "Мы работаем над эволюцией системы путем:"
          },
          developmentList: {
            title: "",
            content: `• Внедрения новых ИИ-технологий
• Добавления новых каналов коммуникации
• Расширения возможностей интеграции
• Разработки индивидуальных функций
• Масштабирования системы по мере роста вашего бизнеса`
          }
        }
      }
    },
    buttons: {
      contactSales: "Отдел продаж",
      bookDemo: "Заказать демо",
    },
    sidebar: {
      stage1: {
        title: "С ЧЕГО НАЧИНАЕМ",
        stage: "Этап 1"
      },
      stage2: {
        title: "ПРАВОВЫЕ АСПЕКТЫ",
        stage: "Этап 2"
      },
      stage3: {
        title: "КАК ПРОХОДИТ РАБОТА",
        stage: "Этап 3"
      },
      stage4: {
        title: "РЕЗУЛЬТАТЫ",
        stage: "Этап 4"
      }
    }
  },
  de: {
    navigation: {
      backHome: "← Zurück zur Startseite",
    },
    header: {
      title: "von der Idee zur Umsetzung",
      subtitle: "Stellen Sie sich Ihr Unternehmen als ein komplettes Ökosystem vor, in dem jeder Teil wichtig ist. Unsere Aufgabe ist es, dieses Ökosystem mit einem 'intelligenten Assistenten' zu ergänzen, der Routineaufgaben übernimmt und dem Unternehmen beim Wachstum hilft.",
    },
    mobileMenu: {
      show: "Menü anzeigen",
      hide: "Menü ausblenden",
    },
    stages: {
      stage1: {
        title: "WOMIT WIR BEGINNEN",
        subtitle: "Erste Schritte zur KI-Integration",
        sections: {
          diagnosis: {
            title: "Diagnose der aktuellen Situation",
            content: "Wir analysieren die bestehenden Geschäftsprozesse, identifizieren Engpässe und Bereiche mit Optimierungspotenzial. Dies ermöglicht es uns, die effektivsten Einsatzmöglichkeiten für KI-Lösungen zu bestimmen."
          },
          goalsAndTasks: {
            title: "Ziele und Aufgaben",
            content: "Junto con Ihnen definieren wir die wichtigsten Ziele und spezifischen Aufgaben für die KI-Integration:"
          },
          tasksList: {
            title: "",
            content: `• Automatisierung von Routineaufgaben
• Optimierung der Kundeninteraktion
• Verbesserung der Datenanalyse
• Steigerung der Arbeitseffizienz
• Reduzierung der Betriebskosten`
          },
          informationGathering: {
            title: "Informationssammlung",
            content: "Wir sammeln detaillierte Informationen über Ihre Geschäftsprozesse, bestehende Software-Lösungen und spezifische Anforderungen."
          },
          caseDemonstration: {
            title: "Demonstration von Anwendungsfällen",
            content: "Wir präsentieren erfolgreiche Implementierungsbeispiele in ähnlichen Bereichen und zeigen die konkreten Vorteile der KI-Integration."
          },
          sourcesAndSystems: {
            title: "Datenquellen und Systeme",
            content: "Wir identifizieren die wichtigsten Datenquellen und Systeme, die für die KI-Integration relevant sind:"
          },
          sourcesList: {
            title: "",
            content: `• CRM und ERP-Systeme
• Kommunikationskanäle
• Dokumentation und Wissensdatenbanken
• Analytische Tools
• Interne Datenbanken`
          },
          preliminaryAssessment: {
            title: "Vorläufige Bewertung",
            content: "Basierend auf den gesammelten Informationen erstellen wir eine vorläufige Bewertung der Projektumfang, der erforderlichen Ressourcen und der erwarteten Ergebnisse."
          },
          stageResults: {
            title: "Ergebnisse der ersten Phase",
            content: "Auf Basis der gesammelten Informationen und des durchgeführten Meetings können die Spezialisten von NeuroGen Lab den Projektumfang detailliert bewerten, mögliche Integrationspunkte identifizieren und die optimale Lösung für Ihr Unternehmen vorschlagen. Wir prognostizieren auch die Implementierungszeit und die für eine erfolgreiche Einführung erforderlichen Ressourcen."
          }
        }
      },
      stage2: {
        title: "RECHTLICHE ASPEKTE",
        subtitle: "Angebot, Vertrag, Technische Spezifikation",
        sections: {
          technicalSpecification: {
            title: "Erstellung der technischen Spezifikation (Angebot)",
            content: "In dieser Phase entwickeln wir eine detaillierte technische Spezifikation (TS), die alle Anforderungen, Aufgaben und erwarteten Projektergebnisse dokumentiert. Die TS umfasst:"
          },
          specificationList: {
            title: "",
            content: `• Beschreibung der Ziele und Aufgaben für die KI-Lösung-Implementation
• Definition der Kernfunktionen und Integrationen mit Ihren Systemen
• Klärung der Datenquellen und Verarbeitungsmethoden
• Projekt-Implementierungszeitplan und Phasen
• Details zum Systemtraining und Tests vor dem Start`
          },
          specificationSummary: {
            title: "",
            content: "Dieses Dokument gewährleistet Transparenz und vollständiges Verständnis zwischen unserem Team und dem Kunden und dient als Grundlage für die weitere Projektimplementierung."
          },
          offerApproval: {
            title: "Angebotsfreigabe",
            content: "Nach der Abstimmung aller Details der technischen Spezifikation genehmigen wir die endgültigen Bedingungen der Zusammenarbeit. Diese Phase umfasst eine abschließende Überprüfung aller Anforderungen, Zeitpläne und Integrationen, wonach das Dokument zur Unterzeichnung vorgelegt wird."
          },
          contractSigning: {
            title: "Vertragsunterzeichnung",
            content: "In dieser Phase dokumentieren wir alle vereinbarten Bedingungen in einem offiziellen Vertrag. Das Dokument enthält Implementierungsfristen, Arbeitsumfang, technische Projektparameter und Verpflichtungen der Parteien. Nach der Unterzeichnung gehen wir zur direkten Implementierung der Lösungen über."
          }
        }
      },
      stage3: {
        title: "IMPLEMENTIERUNG",
        subtitle: "Integration und Start",
        sections: {
          dataPreparation: {
            title: "Datenvorbereitung und Erstellung der Wissensbasis",
            content: "Wir beginnen mit der Vorbereitung und Strukturierung der Daten, die die Grundlage der Wissensbasis Ihres KI-Assistenten bilden werden. Dies umfasst die Verarbeitung von Dokumentation, FAQs, Produktbeschreibungen und anderen relevanten Informationsquellen."
          },
          integrationProcess: {
            title: "Integrationsprozess",
            content: `Wir verbinden den KI-Assistenten mit Ihren Kommunikationskanälen: Facebook, Website-Widget, WhatsApp, Instagram und anderen Plattformen. Wir integrieren auch mit Ihren Managementsystemen wie HubSpot, Salesforce, Email, bases de datos SQL o NoSQL. Dies gewährleistet einen nahtlosen Datenfluss und Synchronisation über alle Plattformen hinweg.`
          },
          aiTraining: {
            title: "KI-Training und Tests",
            content: "Wir führen ein gründliches Training des KI-Modells mit Ihren vorbereiteten Daten durch. Dies umfasst:"
          },
          trainingList: {
            title: "",
            content: `• Initiales Modelltraining mit Ihrer Wissensbasis
• Feinabstimmung der Antworten basierend auf Ihren Geschäftsspezifika
• Testen verschiedener Szenarien und Anwendungsfälle
• Überprüfung der Antwortgenauigkeit
• Integrationstests mit allen verbundenen Systemen`
          },
          qualityAssurance: {
            title: "Qualitätssicherung",
            content: "Wir führen umfassende Tests aller Systemkomponenten durch:"
          },
          qaList: {
            title: "",
            content: `• Überprüfung der Antwortgenauigkeit und Relevanz
• Testen aller Integrationspunkte
• Lasttests und Leistungsoptimierung
• Sicherheitstests und Überprüfung des Datenschutzes
• Tests der Benutzeroberfläche und Optimierung der Benutzererfahrung`
          },
          launch: {
            title: "Start und initiale Unterstützung",
            content: "Nach erfolgreichen Tests gehen wir zum Start über. Dies umfasst:"
          },
          launchList: {
            title: "",
            content: `• Systemimplementierung in der Produktionsumgebung
• Einrichtung des Echtzeit-Monitorings
• Mitarbeiterschulung zur Systemnutzung
• Bereitstellung der Dokumentation
• Initiale Unterstützung und schnelle Problemlösung`
          }
        }
      },
      stage4: {
        title: "ERGEBNISSE",
        subtitle: "Kontinuierliche Verbesserung und Optimierung",
        sections: {
          monitoring: {
            title: "Systemüberwachung und Analytik",
            content: "Wir überwachen kontinuierlich die Leistung des KI-Assistenten und sammeln Analysen zu:"
          },
          monitoringList: {
            title: "",
            content: `• Genauigkeit und Relevanz der Antworten
• Metriken zur Benutzerzufriedenheit
• Systemauslastung und Leistung
• Häufigste Anfragen und Szenarien
• Bereiche, die Optimierung erfordern`
          },
          optimization: {
            title: "Kontinuierliche Optimierung",
            content: "Basierend auf den gesammelten Analysen führen wir regelmäßig durch:"
          },
          optimizationList: {
            title: "",
            content: `• Aktualisierung und Erweiterung der Wissensbasis
• Feinabstimmung der Antwortalgorithmen
• Optimierung der Systemleistung
• Hinzufügen neuer Funktionen und Fähigkeiten
• Verbesserung der Benutzererfahrung`
          },
          support: {
            title: "Technischer Support",
            content: "Unser Support-Team bietet:"
          },
          supportList: {
            title: "",
            content: `• 24/7 Systemüberwachung
• Schnelle Problemlösung
• Regelmäßige Systemaktualisierungen
• Beratung zur Systemnutzung
• Hilfe bei der Implementierung neuer Funktionen`
          },
          development: {
            title: "Weitere Entwicklung",
            content: "Wir arbeiten an der Systemevolution durch:"
          },
          developmentList: {
            title: "",
            content: `• Implementierung neuer KI-Technologien
• Hinzufügen neuer Kommunikationskanäle
• Erweiterung der Integrationsmöglichkeiten
• Entwicklung kundenspezifischer Funktionen
• Skalierung des Systems mit dem Wachstum Ihres Unternehmens`
          }
        }
      }
    },
    buttons: {
      contactSales: "Vertrieb kontaktieren",
      bookDemo: "Demo buchen",
    },
    sidebar: {
      stage1: {
        title: "WOMIT WIR BEGINNEN",
        stage: "Stage 1"
      },
      stage2: {
        title: "RECHTLICHE ASPEKTE",
        stage: "Stage 2"
      },
      stage3: {
        title: "IMPLEMENTIERUNG",
        stage: "Stage 3"
      },
      stage4: {
        title: "ERGEBNISSE",
        stage: "Stage 4"
      }
    }
  },
  es: {
    navigation: {
      backHome: "← Volver al inicio",
    },
    header: {
      title: "de la Idea a la Implementación",
      subtitle: "Imagine su empresa como un ecosistema completo donde cada parte es importante. Nuestra tarea es complementar este ecosistema con un 'asistente inteligente' que se encargue de las tareas rutinarias y ayude a la empresa a crecer.",
    },
    mobileMenu: {
      show: "Mostrar menú",
      hide: "Ocultar menú",
    },
    stages: {
      stage1: {
        title: "POR DÓNDE EMPEZAMOS",
        subtitle: "Primeros pasos hacia la integración de IA",
        sections: {
          diagnosis: {
            title: "Diagnóstico de la situación actual",
            content: "Analizamos los procesos comerciales existentes, identificamos cuellos de botella y áreas con potencial de optimización. Esto nos permite determinar las aplicaciones más efectivas para soluciones de IA."
          },
          goalsAndTasks: {
            title: "Objetivos y tareas",
            content: "Junto con usted, definimos los objetivos principales y las tareas específicas para la integración de IA:"
          },
          tasksList: {
            title: "",
            content: `• Automatización de tareas rutinarias
• Optimización de la interacción con el cliente
• Mejora del análisis de datos
• Aumento de la eficiencia laboral
• Reducción de costos operativos`
          },
          informationGathering: {
            title: "Recopilación de información",
            content: "Recopilamos información detallada sobre sus procesos comerciales, soluciones de software existentes y requisitos específicos."
          },
          caseDemonstration: {
            title: "Demostración de casos de uso",
            content: "Presentamos ejemplos exitosos de implementación en áreas similares y mostramos los beneficios concretos de la integración de IA."
          },
          sourcesAndSystems: {
            title: "Fuentes de datos y sistemas",
            content: "Identificamos las principales fuentes de datos y sistemas relevantes para la integración de IA:"
          },
          sourcesList: {
            title: "",
            content: `• CRM y ERP sistemas
• Canales de comunicación
• Documentación y bases de conocimiento
• Herramientas analíticas
• Bases de datos internas`
          },
          preliminaryAssessment: {
            title: "Evaluación preliminar",
            content: "Basándonos en la información recopilada, realizamos una evaluación preliminar del alcance del proyecto, los recursos necesarios y los resultados esperados."
          },
          stageResults: {
            title: "Resultados de la primera etapa",
            content: "Basándose en la información recopilada y la reunión realizada, los especialistas de NeuroGen Lab pueden evaluar detalladamente el alcance del proyecto, identificar posibles puntos de integración y proponer la solución óptima para su empresa. También pronosticamos el tiempo de implementación y los recursos necesarios para una implementación exitosa."
          }
        }
      },
      stage2: {
        title: "ASPECTOS LEGALES",
        subtitle: "Oferta, Contrato, Especificación Técnica",
        sections: {
          technicalSpecification: {
            title: "Preparación de la especificación técnica (Oferta)",
            content: "En esta etapa, desarrollamos una especificación técnica detallada (ET) que documenta todos los requisitos, tareas y resultados esperados del proyecto. La ET incluye:"
          },
          specificationList: {
            title: "",
            content: `• Descripción de objetivos y tareas para la implementación de la solución de IA
• Definición de funciones clave e integraciones con sus sistemas
• Aclaración de fuentes de datos y métodos de procesamiento
• Cronograma y etapas de implementación del proyecto
• Detalles sobre el entrenamiento y pruebas del sistema antes del lanzamiento`
          },
          specificationSummary: {
            title: "",
            content: "Este documento garantiza la transparencia y la comprensión completa entre nuestro equipo y el cliente, y sirve como base para la implementación posterior del proyecto."
          },
          offerApproval: {
            title: "Aprobación de la oferta",
            content: "Después de coordinar todos los detalles de la especificación técnica, aprobamos los términos finales de cooperación. Esta etapa incluye una revisión final de todos los requisitos, cronogramas e integraciones, después de lo cual el documento se envía para su firma."
          },
          contractSigning: {
            title: "Firma del contrato",
            content: "En esta etapa, documentamos todos los términos acordados en un contrato oficial. El documento incluye plazos de implementación, alcance del trabajo, parámetros técnicos del proyecto y obligaciones de las partes. Después de la firma, procedemos a la implementación directa de las soluciones."
          }
        }
      },
      stage3: {
        title: "IMPLEMENTACIÓN",
        subtitle: "Integración y Lanzamiento",
        sections: {
          dataPreparation: {
            title: "Preparación de datos y creación de base de conocimientos",
            content: "Comenzamos preparando y estructurando los datos que formarán la base de conocimientos de su asistente de IA. Esto incluye el procesamiento de documentación, preguntas frecuentes, descripciones de productos y otras fuentes de información relevantes."
          },
          integrationProcess: {
            title: "Proceso de integración",
            content: `Conectamos el asistente de IA a sus canales de comunicación: Facebook, Widget del sitio web, WhatsApp, Instagram y otras plataformas. También integramos con sus sistemas de gestión como HubSpot, Salesforce, Email, bases de datos SQL o NoSQL. Esto asegura un flujo de datos fluido y sincronización a través de todas las plataformas.`
          },
          aiTraining: {
            title: "Entrenamiento y pruebas de IA",
            content: "Realizamos un entrenamiento exhaustivo del modelo de IA utilizando sus datos preparados. Esto incluye:"
          },
          trainingList: {
            title: "",
            content: `• Entrenamiento inicial del modelo con su base de conocimientos
• Feinabstimmung der Antworten basierend auf Ihren Geschäftsspezifika
• Testen verschiedener Szenarien und Anwendungsfälle
• Überprüfung der Antwortgenauigkeit
• Integrationstests mit allen verbundenen Systemen`
          },
          qualityAssurance: {
            title: "Aseguramiento de calidad",
            content: "Realizamos pruebas exhaustivas de todos los componentes del sistema:"
          },
          qaList: {
            title: "",
            content: `• Verificación de precisión y relevancia de respuestas
• Pruebas de todos los puntos de integración
• Pruebas de carga y optimización de rendimiento
• Pruebas de seguridad y verificación de protección de datos
• Pruebas de interfaz de usuario y optimización de experiencia`
          },
          launch: {
            title: "Lanzamiento y soporte inicial",
            content: "Después de las pruebas exitosas, procedemos con el lanzamiento. Esto incluye:"
          },
          launchList: {
            title: "",
            content: `• Implementación del sistema en entorno de producción
• Configuración de monitoreo en tiempo real
• Capacitación del personal en el uso del sistema
• Provisión de documentación
• Soporte inicial y resolución rápida de problemas`
          }
        }
      },
      stage4: {
        title: "RESULTADOS",
        subtitle: "Mejora y Optimización Continua",
        sections: {
          monitoring: {
            title: "Monitoreo del sistema y análisis",
            content: "Monitoreamos continuamente el rendimiento del asistente de IA y recopilamos análisis sobre:"
          },
          monitoringList: {
            title: "",
            content: `• Precisión y relevancia de las respuestas
• Métricas de satisfacción del usuario
• Carga y rendimiento del sistema
• Consultas y escenarios más frecuentes
• Áreas que requieren optimización`
          },
          optimization: {
            title: "Optimización continua",
            content: "Basándonos en los análisis recopilados, regularmente:"
          },
          optimizationList: {
            title: "",
            content: `• Actualizamos y ampliamos la base de conocimientos
• Ajustamos los algoritmos de respuesta
• Optimizamos el rendimiento del sistema
• Agregamos nuevas funciones y capacidades
• Mejoramos la experiencia del usuario`
          },
          support: {
            title: "Soporte técnico",
            content: "Nuestro equipo de soporte proporciona:"
          },
          supportList: {
            title: "",
            content: `• Monitoreo del sistema 24/7
• Resolución rápida de problemas
• Actualizaciones regulares del sistema
• Consultoría sobre el uso del sistema
• Ayuda con la implementación de nuevas funciones`
          },
          development: {
            title: "Desarrollo futuro",
            content: "Trabajamos en la evolución del sistema mediante:"
          },
          developmentList: {
            title: "",
            content: `• Implementación de nuevas tecnologías de IA
• Adición de nuevos canales de comunicación
• Expansión de capacidades de integración
• Desarrollo de funciones personalizadas
• Escalamiento del sistema a medida que crece su negocio`
          }
        }
      }
    },
    buttons: {
      contactSales: "Contactar ventas",
      bookDemo: "Reservar demo",
    },
    sidebar: {
      stage1: {
        title: "POR DÓNDE EMPEZAMOS",
        stage: "Stage 1"
      },
      stage2: {
        title: "ASPECTOS LEGALES",
        stage: "Stage 2"
      },
      stage3: {
        title: "IMPLEMENTACIÓN",
        stage: "Stage 3"
      },
      stage4: {
        title: "RESULTADOS",
        stage: "Stage 4"
      }
    }
  },
  ua: {
    navigation: {
      backHome: "← Повернутися на головну",
    },
    header: {
      title: "від Ідеї до Впровадження",
      subtitle: "Уявіть вашу компанію як повноцінну екосистему, де кожна частина важлива. Наше завдання - доповнити цю екосистему 'розумним помічником', який візьме на себе рутинні завдання та допоможе компанії зростати.",
    },
    mobileMenu: {
      show: "Показати меню",
      hide: "Сховати меню",
    },
    stages: {
      stage1: {
        title: "З ЧОГО ПОЧИНАЄМО",
        subtitle: "Перші кроки до інтеграції ШІ",
        sections: {
          diagnosis: {
            title: "Діагностика поточної ситуації",
            content: "Аналізуємо існуючі бізнес-процеси, виявляємо вузькі місця та області з потенціалом оптимізації. Це дозволяє нам визначити найефективніші варіанти застосування ШІ-рішень."
          },
          goalsAndTasks: {
            title: "Цілі та завдання",
            content: "Разом з вами визначаємо головні цілі та конкретні завдання для інтеграції ШІ:"
          },
          tasksList: {
            title: "",
            content: `• Автоматизація рутинних завдань
• Оптимізація взаємодії з клієнтами
• Покращення аналізу даних
• Підвищення ефективності роботи
• Зниження операційних витрат`
          },
          informationGathering: {
            title: "Збір інформації",
            content: "Збираємо детальну інформацію про ваші бізнес-процеси, існуючі програмні рішення та специфічні вимоги."
          },
          caseDemonstration: {
            title: "Демонстрація прикладів використання",
            content: "Представляємо успішні приклади впровадження в подібних сферах та показуємо конкретні переваги інтеграції ШІ."
          },
          sourcesAndSystems: {
            title: "Джерела даних та системи",
            content: "Визначаємо основні джерела даних та системи, що мають значення для інтеграції ШІ:"
          },
          sourcesList: {
            title: "",
            content: `• CRM та ERP системи
• Канали комунікації
• Документація та бази знань
• Аналітичні інструменти
• Внутрішні бази даних`
          },
          preliminaryAssessment: {
            title: "Попередня оцінка",
            content: "На основі зібраної інформації проводимо попередню оцінку обсягу проекту, необхідних ресурсів та очікуваних результатів."
          },
          stageResults: {
            title: "Результати першого етапу",
            content: "На основі зібраної інформації та проведеної зустрічі спеціалісти NeuroGen Lab можуть детально оцінити обсяг проекту, визначити можливі точки інтеграції та запропонувати оптимальне рішення для вашої компанії. Також ми прогнозуємо час впровадження та ресурси, необхідні для успішного запуску."
          }
        }
      },
      stage2: {
        title: "ПРАВОВІ АСПЕКТИ",
        subtitle: "Оферта, Договір, Технічне завдання",
        sections: {
          technicalSpecification: {
            title: "Складання технічного завдання (Оферта)",
            content: "На цьому етапі ми розробляємо детальне технічне завдання (ТЗ), яке документує всі вимоги, завдання та очікувані результати проекту. ТЗ включає:"
          },
          specificationList: {
            title: "",
            content: `• Опис цілей та завдань для впровадження ШІ-рішення
• Визначення ключових функцій та інтеграцій з вашими системами
• Уточнення джерел даних та методів обробки
• Терміни та етапи реалізації проекту
• Деталі щодо навчання та тестування системи перед запуском`
          },
          specificationSummary: {
            title: "",
            content: "Цей документ забезпечує прозорість та повне розуміння між нашою командою та клієнтом, а також служить основою для подальшої реалізації проекту."
          },
          offerApproval: {
            title: "Затвердження оферти",
            content: "Після узгодження всіх деталей технічного завдання затверджуємо фінальні умови співпраці. Цей етап включає підсумковий перегляд усіх вимог, термінів та інтеграцій, після чого документ передається на підписання."
          },
          contractSigning: {
            title: "Підписання договору",
            content: "На цьому етапі документально фіксуємо всі узгоджені умови в офіційному договорі. Документ включає терміни реалізації, обсяг робіт, технічні параметри проекту та зобов'язання сторін. Після підписання переходимо до безпосередньої реалізації рішень."
          },
          caseDemonstration: {
            title: "",
            content: "",
          },
          sourcesAndSystems: {
            title: "",
            content: "",
          },
          preliminaryAssessment: {
            title: "",
            content: "",
          },
          stageResults: {
            title: "",
            content: "",
          }
        }
      },
      stage3: {
        title: "ВПРОВАДЖЕННЯ",
        subtitle: "Інтеграція та Запуск",
        sections: {
          dataPreparation: {
            title: "Підготовка даних та створення бази знань",
            content: "Починаємо з підготовки та структурування даних, які формуватимуть базу знань вашого ШІ-асистента. Це включає обробку документації, FAQ, описів продуктів та інших релевантних джерел інформації."
          },
          integrationProcess: {
            title: "Процес інтеграції",
            content: `Підключаємо ШІ-асистента до ваших каналів комунікації: Facebook, віджет сайту, WhatsApp, Instagram та інших платформ. Також інтегруємо з вашими системами управління, такими як HubSpot, Salesforce, Email, SQL або NoSQL бази даних. Це забезпечує безперебійний потік даних та синхронізацію через усі платформи.`
          },
          aiTraining: {
            title: "Навчання та тестування ШІ",
            content: "Проводимо ретельне навчання моделі ШІ з використанням ваших підготовлених даних. Це включає:"
          },
          trainingList: {
            title: "",
            content: `• Початкове навчання моделі на вашій базі знань
• Тонке налаштування відповідей на основі специфіки вашого бізнесу
• Тестування різних сценаріїв та випадків використання
• Перевірка точності відповідей
• Тести інтеграції з усіма підключеними системами`
          },
          qualityAssurance: {
            title: "Забезпечення якості",
            content: "Проводимо комплексне тестування всіх компонентів системи:"
          },
          qaList: {
            title: "",
            content: `• Перевірка точності та релевантності відповідей
• Тестування всіх точок інтеграції
• Навантажувальні тести та оптимізація продуктивності
• Тести безпеки та перевірка захисту даних
• Тести інтерфейсу користувача та оптимізація досвіду`
          },
          launch: {
            title: "Запуск та початкова підтримка",
            content: "Після успішних тестів переходимо до запуску. Це включає:"
          },
          launchList: {
            title: "",
            content: `• Впровадження системи в продуктивне середовище
• Налаштування моніторингу в реальному часі
• Навчання персоналу роботі з системою
• Надання документації
• Початкова підтримка та швидке вирішення проблем`
          }
        }
      },
      stage4: {
        title: "РЕЗУЛЬТАТИ",
        subtitle: "Неперервна покращення та оптимізація",
        sections: {
          monitoring: {
            title: "Моніторинг системи та аналіз",
            content: "Ми постійно моніторуємо продуктивність вашого ШІ-асистента та збираємо аналізи щодо:"
          },
          monitoringList: {
            title: "",
            content: `• Точність та релевантність відповідей
• Метрики задоволення користувача
• Навантаження та продуктивність системи
• Найчастіші запити та сценарії
• Області, які потребують оптимізації`
          },
          optimization: {
            title: "Неперервна оптимізація",
            content: "На основі зібраних аналізів ми регулярно проводимо:"
          },
          optimizationList: {
            title: "",
            content: `• Оновлення та розширення бази знань
• Точне налаштування алгоритмів відповідей
• Оптимізація продуктивності системи
• Додавання нових функцій та можливостей
• Поліпшення досвіду користувача`
          },
          support: {
            title: "Технічна підтримка",
            content: "Наша команда підтримки надає:"
          },
          supportList: {
            title: "",
            content: `• 24/7 моніторинг системи
• Швидке вирішення проблем
• Регулярні оновлення системи
• Консультація щодо використання системи
• Допомога з реалізацією нових функцій`
          },
          development: {
            title: "Додаткове розвиток",
            content: "Ми працюємо над еволюцією системи за допомогою:"
          },
          developmentList: {
            title: "",
            content: `• Реалізація нових ШІ-технологій
• Додавання нових каналів комунікації
• Розширення можливостей інтеграції
• Розробка персоналізованих функцій
• Масштабування системи з ростом вашого бізнесу`
          }
        }
      }
    },
    buttons: {
      contactSales: "Відділ продажів",
      bookDemo: "Замовити демо",
    },
    sidebar: {
      stage1: {
        title: "З ЧОГО ПОЧИНАЄМО",
        stage: "Этап 1"
      },
      stage2: {
        title: "ПРАВОВІ АСПЕКТИ",
        stage: "Этап 2"
      },
      stage3: {
        title: "ВПРОВАДЖЕННЯ",
        stage: "Этап 3"
      },
      stage4: {
        title: "РЕЗУЛЬТАТИ",
        stage: "Этап 4"
      }
    }
  }
}; 