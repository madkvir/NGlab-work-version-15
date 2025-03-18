// Типы для FAQ
export type FAQItem = {
  question: string;
  answer: string | TextFragment[];
};

export type TextFragment = {
  type: 'text' | 'bold' | 'link' | 'list' | 'numbered-list' | 'list-item';
  content?: string;
  url?: string;
  isGreen?: boolean;
  listItems?: TextFragment[];
  number?: number;
} & (
  | { type: 'text' | 'bold' | 'link' | 'list-item'; content: string }
  | { type: 'list' | 'numbered-list'; listItems: TextFragment[] }
);

export type FAQTranslation = {
  sectionTitle: string;
  title: string;
  description: string;
  faqs: FAQItem[];
};

// Переводы для FAQ
export const faqTranslations: Record<string, FAQTranslation> = {
  en: {
    sectionTitle: "FAQ",
    title: "Frequently Asked Questions",
    description: "Find answers to common questions about our AI solutions",
    faqs: [
      {
        question: "What is NeuroGen Lab? How does it work?",
        answer: [
          { 
            type: 'text', 
            content: 'NeuroGen Lab specializes in the selection, integration, and quality support of business-oriented AI solutions. The company helps entrepreneurs and organizations automate business processes by implementing intelligent AI agents for customer interaction, sales support, and workflow optimization. '
          },
          { 
            type: 'text', 
            content: 'For more details on how it works and where to start, please visit our ' 
          },
          { 
            type: 'link', 
            content: 'Guide', 
            url: '/guide' 
          },
          { 
            type: 'text', 
            content: '.\n\n'
          },
          {
            type: 'text',
            content: 'The company\'s work revolves around the selection, integration, and support of AI solutions. Main directions:'
          },
          {
            type: 'numbered-list',
            content: 'Main directions',
            listItems: [
              {
                type: 'list-item',
                content: 'Selection of AI solutions for business',
                listItems: [
                  { type: 'text', content: 'Analysis of client needs.' },
                  { type: 'text', content: 'Selection of the appropriate AI agent or bot.' },
                  { type: 'text', content: 'Development of implementation strategy.' }
                ]
              },
              {
                type: 'list-item',
                content: 'Integration of AI solutions',
                listItems: [
                  { type: 'text', content: 'Implementation of chatbots and voice assistants.' },
                  { 
                    type: 'text', 
                    content: 'Integration of AI with CRM (for example: <a href="/tools/keepincrm" class="text-emerald-400 font-bold underline">KeepinCRM</a>, <a href="/tools/hubspot" class="text-emerald-400 font-bold underline">Hubspot</a>).' 
                  },
                  { type: 'text', content: 'Setting up AI for sales automation and support.' }
                ]
              },
              {
                type: 'list-item',
                content: 'Technical support and optimization',
                listItems: [
                  { type: 'text', content: 'Updating and configuring AI agents.' },
                  { type: 'text', content: 'Optimizing bot performance for business needs.' },
                  { type: 'text', content: 'Scaling solutions for company growth.' }
                ]
              },
              {
                type: 'list-item',
                content: 'Experiments and A/B testing',
                listItems: [
                  { type: 'text', content: 'Comparison of AI agents with competitive solutions.' },
                  { type: 'text', content: 'Analysis of the effectiveness of AI integrations.' }
                ]
              }
            ]
          },
          {
            type: 'text',
            content: 'NeuroGen Lab helps businesses select and implement AI solutions that really work, increasing the efficiency of companies.'
          }
        ]
      },
      {
        question: "What kind of businesses can benefit from NeuroGen Lab?",
        answer: [
          {
            type: 'text',
            content: "NeuroGen Lab is designed to help businesses of all sizes across various industries. Whether you're a small startup or a large enterprise, our AI solutions can be customized to meet your specific needs in customer service, data analysis, and much more."
          }
        ]
      },
      {
        question: "How long does it take to implement the solution?",
        answer: [
          {
            type: 'text',
            content: 'Implementation time varies depending on your specific needs and the complexity of integration. Typically, basic setup can be completed within a few days, while more complex custom solutions may take several weeks. Our team provides support throughout the entire process, as well as ongoing support throughout the entire period of use.'
          }
        ]
      },
      {
        question: "Is my data safe with NeuroGen Lab?",
        answer: [
          {
            type: 'text',
            content: 'Yes, we take data security very seriously. We employ industry-standard encryption protocols, regular security audits, and strict data handling procedures. All data is processed in compliance with GDPR and other relevant data protection regulations.'
          }
        ]
      },
      {
        question: "What kind of support do you provide?",
        answer: [
          {
            type: 'text',
            content: 'We offer comprehensive support including 24/7 technical assistance, dedicated account managers, detailed documentation, and regular training sessions. Our team is always available to help you maximize the benefits of our AI solutions.'
          }
        ]
      },
      {
        question: "Is NeuroGen Lab available in multiple languages?",
        answer: [
          {
            type: 'text',
            content: 'Yes, our platform supports multiple languages and can be customized for different regional requirements. Contact our sales team for specific language availability and customization options.'
          }
        ]
      },
      {
        question: "How difficult is it for staff to learn integrated AI solutions?",
        answer: [
          {
            type: 'text',
            content: 'Integrated AI solutions from NeuroGen Lab do not require special knowledge to operate. All processes are configured so that employees can intuitively use the system from day one. Implementation is as simple as possible, and we provide support at every stage, helping you quickly understand the functionality.'
          }
        ]
      }
    ]
  },
  ru: {
    sectionTitle: "ЧАВО",
    title: "Часто задаваемые вопросы",
    description: "Найдите ответы на распространенные вопросы о наших ИИ-решениях",
    faqs: [
      {
        question: "Что такое NeuroGen Lab? Как это работает?",
        answer: [
          { 
            type: 'text', 
            content: 'NeuroGen Lab специализируется на подборе, интеграции и качественной поддержке ИИ-решений, ориентированных на бизнес. Компания помогает предпринимателям и организациям автоматизировать бизнес-процессы путем внедрения интеллектуальных ИИ-агентов для взаимодействия с клиентами, поддержки продаж и оптимизации рабочих процессов. '
          },
          { 
            type: 'text', 
            content: 'Подробнее как это работает и с чего начать можно ознакомиться на странице ' 
          },
          { 
            type: 'link', 
            content: 'Руководство', 
            url: '/guide' 
          },
          { 
            type: 'text', 
            content: '.\n\n'
          },
          {
            type: 'text',
            content: 'Работа компании строится вокруг подбора, интеграции и поддержки AI-решений. Основные направления:'
          },
          {
            type: 'numbered-list',
            content: 'Основные направления',
            listItems: [
              {
                type: 'list-item',
                content: 'Подбор AI-решений для бизнеса',
                listItems: [
                  { type: 'text', content: 'Анализ потребностей клиента.' },
                  { type: 'text', content: 'Выбор подходящего AI-агента или бота.' },
                  { type: 'text', content: 'Разработка стратегии внедрения.' }
                ]
              },
              {
                type: 'list-item',
                content: 'Интеграция AI-решений',
                listItems: [
                  { type: 'text', content: 'Implementation of chatbots and voice assistants.' },
                  { 
                    type: 'text', 
                    content: 'Integration of AI with CRM (for example: <a href="/tools/keepincrm" class="text-emerald-400 font-bold underline">KeepinCRM</a>, <a href="/tools/hubspot" class="text-emerald-400 font-bold underline">Hubspot</a>).' 
                  },
                  { type: 'text', content: 'Setting up AI for sales automation and support.' }
                ]
              },
              {
                type: 'list-item',
                content: 'Техническая поддержка и оптимизация',
                listItems: [
                  { type: 'text', content: 'Updating and configuring AI agents.' },
                  { type: 'text', content: 'Optimizing bot performance for business needs.' },
                  { type: 'text', content: 'Scaling solutions for company growth.' }
                ]
              },
              {
                type: 'list-item',
                content: 'Эксперименты и A/B тестирование',
                listItems: [
                  { type: 'text', content: 'Comparison of AI agents with competitive solutions.' },
                  { type: 'text', content: 'Analysis of the effectiveness of AI integrations.' }
                ]
              }
            ]
          },
          {
            type: 'text',
            content: 'NeuroGen Lab помогает бизнесу выбрать и внедрить AI-решения, которые реально работают, повышая эффективность работы компаний.'
          }
        ]
      },
      {
        question: "Каким компаниям подходит NeuroGen Lab?",
        answer: [
          {
            type: 'text',
            content: "NeuroGen Lab создан для помощи бизнесу любого размера в различных отраслях. Будь то небольшой стартап или крупное предприятие, наши ИИ-решения могут быть настроены под ваши конкретные потребности в обслуживании клиентов, анализе данных и многом другом."
          }
        ]
      },
      {
        question: "Сколько времени занимает внедрение решения?",
        answer: [
          {
            type: 'text',
            content: 'Время внедрения зависит от ваших конкретных потребностей и сложности интеграции. Обычно базовая настройка может быть завершена в течение нескольких дней, в то время как более сложные индивидуальные решения могут занять несколько недель. Наша команда обеспечивает поддержку на протяжении всего процесса, а так же поддержку на протяженни всего срока использования.'
          }
        ]
      },
      {
        question: "Безопасны ли мои данные с NeuroGen Lab?",
        answer: [
          {
            type: 'text',
            content: 'Да, мы очень серьезно относимся к безопасности данных. Мы используем отраслевые стандарты шифрования, регулярные проверки безопасности и строгие процедуры обработки данных. Все данные обрабатываются в соответствии с GDPR и другими соответствующими нормами защиты данных.'
          }
        ]
      },
      {
        question: "Какую поддержку вы предоставляете?",
        answer: [
          {
            type: 'text',
            content: 'Мы предлагаем комплексную поддержку, включающую техническую помощь 24/7, выделенных менеджеров по работе с клиентами, подробную документацию и регулярные обучающие сессии. Наша команда всегда готова помочь вам максимально эффективно использовать наши ИИ-решения.'
          }
        ]
      },
      {
        question: "Доступен ли NeuroGen Lab на разных языках?",
        answer: [
          {
            type: 'text',
            content: 'Да, наша платформа поддерживает несколько языков и может быть настроена под различные региональные требования. Свяжитесь с нашей командой продаж для уточнения доступности конкретных языков и вариантов настройки.'
          }
        ]
      },
      {
        question: "Насколько сложно освоить персоналу интегрированные ИИ-решения?",
        answer: [
          {
            type: 'text',
            content: 'Интегрированные ИИ-решения от NeuroGen Lab не требуют специальных знаний для работы. Все процессы настраиваются таким образом, чтобы сотрудники могли интуитивно использовать систему с первого дня. Внедрение проходит максимально просто, а мы оказываем поддержку на каждом этапе, помогая быстро разобраться с функционалом.'
          }
        ]
      }
    ]
  },
  de: {
    sectionTitle: "FAQ",
    title: "Häufig gestellte Fragen",
    description: "Finden Sie Antworten auf häufige Fragen zu unseren KI-Lösungen",
    faqs: [
      {
        question: "Was ist NeuroGen Lab? Wie funktioniert es?",
        answer: [
          { 
            type: 'text', 
            content: 'NeuroGen Lab ist spezialisiert auf die Auswahl, Integration und qualitative Unterstützung von geschäftsorientierten KI-Lösungen. Das Unternehmen hilft Unternehmern und Organisationen, Geschäftsprozesse durch den Einsatz intelligenter KI-Agenten für Kundeninteraktion, Vertriebsunterstützung und Workflow-Optimierung zu automatisieren. '
          },
          { 
            type: 'text', 
            content: 'Weitere Details zur Funktionsweise und zum Einstieg finden Sie auf unserer ' 
          },
          { 
            type: 'link', 
            content: 'Anleitung', 
            url: '/guide' 
          },
          { 
            type: 'text', 
            content: '.\n\n'
          },
          {
            type: 'text',
            content: 'Die Arbeit des Unternehmens dreht sich um die Auswahl, Integration und Unterstützung von KI-Lösungen. Hauptrichtungen:'
          },
          {
            type: 'numbered-list',
            content: 'Hauptrichtungen',
            listItems: [
              {
                type: 'list-item',
                content: 'Auswahl von KI-Lösungen für Unternehmen',
                listItems: [
                  { type: 'text', content: 'Analyse der Kundenbedürfnisse.' },
                  { type: 'text', content: 'Auswahl des passenden KI-Agenten oder Bots.' },
                  { type: 'text', content: 'Entwicklung einer Implementierungsstrategie.' }
                ]
              },
              {
                type: 'list-item',
                content: 'Integration von KI-Lösungen',
                listItems: [
                  { type: 'text', content: 'Implementierung von Chatbots und Sprachassistenten.' },
                  { 
                    type: 'text', 
                    content: 'Integration von KI mit CRM (zum Beispiel: <a href="/tools/keepincrm" class="text-emerald-400 font-bold underline">KeepinCRM</a>, <a href="/tools/hubspot" class="text-emerald-400 font-bold underline">Hubspot</a>).' 
                  },
                  { type: 'text', content: 'Einrichtung von KI für Vertriebsautomatisierung und Unterstützung.' }
                ]
              },
              {
                type: 'list-item',
                content: 'Technischer Support und Optimierung',
                listItems: [
                  { type: 'text', content: 'Aktualisierung und Konfiguration von KI-Agenten.' },
                  { type: 'text', content: 'Optimierung der Bot-Leistung für Geschäftsanforderungen.' },
                  { type: 'text', content: 'Skalierung von Lösungen für Unternehmenswachstum.' }
                ]
              },
              {
                type: 'list-item',
                content: 'Experimente und A/B-Tests',
                listItems: [
                  { type: 'text', content: 'Vergleich von KI-Agenten mit Wettbewerbslösungen.' },
                  { type: 'text', content: 'Analyse der Wirksamkeit von KI-Integrationen.' }
                ]
              }
            ]
          },
          {
            type: 'text',
            content: 'NeuroGen Lab hilft Unternehmen, KI-Lösungen auszuwählen und zu implementieren, die wirklich funktionieren und die Effizienz der Unternehmensarbeit steigern.'
          }
        ]
      },
      {
        question: "Welche Unternehmen können von NeuroGen Lab profitieren?",
        answer: [
          {
            type: 'text',
            content: "NeuroGen Lab wurde entwickelt, um Unternehmen aller Größen in verschiedenen Branchen zu unterstützen. Ob kleines Start-up oder großes Unternehmen, unsere KI-Lösungen können an Ihre spezifischen Anforderungen in den Bereichen Kundenservice, Datenanalyse und vielem mehr angepasst werden."
          }
        ]
      },
      {
        question: "Wie lange dauert die Implementierung der Lösung?",
        answer: [
          {
            type: 'text',
            content: 'Die Implementierungszeit hängt von Ihren spezifischen Anforderungen und der Komplexität der Integration ab. Typischerweise kann die grundlegende Einrichtung innerhalb weniger Tage abgeschlossen werden, während komplexere kundenspezifische Lösungen mehrere Wochen in Anspruch nehmen können. Unser Team unterstützt Sie während des gesamten Prozesses und bietet auch Unterstützung während der gesamten Nutzungsdauer.'
          }
        ]
      },
      {
        question: "Sind meine Daten bei NeuroGen Lab sicher?",
        answer: [
          {
            type: 'text',
            content: 'Ja, wir nehmen Datensicherheit sehr ernst. Wir verwenden branchenübliche Verschlüsselungsprotokolle, regelmäßige Sicherheitsaudits und strenge Datenverarbeitungsverfahren. Alle Daten werden in Übereinstimmung mit der DSGVO und anderen relevanten Datenschutzbestimmungen verarbeitet.'
          }
        ]
      },
      {
        question: "Welche Art von Support bieten Sie an?",
        answer: [
          {
            type: 'text',
            content: 'Wir bieten umfassenden Support, einschließlich 24/7 technischer Unterstützung, dedizierte Account Manager, detaillierte Dokumentation und regelmäßige Schulungen. Unser Team steht Ihnen jederzeit zur Verfügung, um Sie bei der Maximierung der Vorteile unserer KI-Lösungen zu unterstützen.'
          }
        ]
      },
      {
        question: "Ist NeuroGen Lab in mehreren Sprachen verfügbar?",
        answer: [
          {
            type: 'text',
            content: 'Ja, unsere Plattform unterstützt mehrere Sprachen und kann an verschiedene regionale Anforderungen angepasst werden. Kontaktieren Sie unser Vertriebsteam für spezifische Sprachverfügbarkeit und Anpassungsoptionen.'
          }
        ]
      },
      {
        question: "Wie schwierig ist es für Mitarbeiter, integrierte KI-Lösungen zu erlernen?",
        answer: [
          {
            type: 'text',
            content: 'Integrierte KI-Lösungen von NeuroGen Lab erfordern kein spezielles Wissen für den Betrieb. Alle Prozesse sind so konfiguriert, dass Mitarbeiter das System vom ersten Tag an intuitiv nutzen können. Die Implementierung ist so einfach wie möglich, und wir bieten Unterstützung in jeder Phase, um Ihnen zu helfen, die Funktionalität schnell zu verstehen.'
          }
        ]
      }
    ]
  },
  es: {
    sectionTitle: "FAQ",
    title: "Preguntas Frecuentes",
    description: "Encuentre respuestas a preguntas comunes sobre nuestras soluciones de IA",
    faqs: [
      {
        question: "¿Qué es NeuroGen Lab? ¿Cómo funciona?",
        answer: [
          { 
            type: 'text', 
            content: 'NeuroGen Lab se especializa en la selección, integración y soporte de calidad de soluciones de IA orientadas a negocios. La empresa ayuda a emprendedores y organizaciones a automatizar procesos de negocio mediante la implementación de agentes de IA inteligentes para la interacción con clientes, apoyo a ventas y optimización de flujos de trabajo. '
          },
          { 
            type: 'text', 
            content: 'Para más detalles sobre cómo funciona y por dónde empezar, visite nuestra página de ' 
          },
          { 
            type: 'link', 
            content: 'Guía', 
            url: '/guide' 
          },
          { 
            type: 'text', 
            content: '.\n\n'
          },
          {
            type: 'text',
            content: 'El trabajo de la empresa gira en torno a la selección, integración y soporte de soluciones de IA. Direcciones principales:'
          },
          {
            type: 'numbered-list',
            content: 'Direcciones principales',
            listItems: [
              {
                type: 'list-item',
                content: 'Selección de soluciones de IA para empresas',
                listItems: [
                  { type: 'text', content: 'Análisis de las necesidades del cliente.' },
                  { type: 'text', content: 'Selección del agente de IA o bot apropiado.' },
                  { type: 'text', content: 'Desarrollo de estrategia de implementación.' }
                ]
              },
              {
                type: 'list-item',
                content: 'Integración de soluciones de IA',
                listItems: [
                  { type: 'text', content: 'Implementación de chatbots y asistentes de voz.' },
                  { 
                    type: 'text', 
                    content: 'Integración de IA con CRM (por ejemplo: <a href="/tools/keepincrm" class="text-emerald-400 font-bold underline">KeepinCRM</a>, <a href="/tools/hubspot" class="text-emerald-400 font-bold underline">Hubspot</a>).' 
                  },
                  { type: 'text', content: 'Configuración de IA para automatización de ventas y soporte.' }
                ]
              },
              {
                type: 'list-item',
                content: 'Soporte técnico y optimización',
                listItems: [
                  { type: 'text', content: 'Actualización y configuración de agentes de IA.' },
                  { type: 'text', content: 'Optimización del rendimiento del bot para las necesidades del negocio.' },
                  { type: 'text', content: 'Escalado de soluciones para el crecimiento de la empresa.' }
                ]
              },
              {
                type: 'list-item',
                content: 'Experimentos y pruebas A/B',
                listItems: [
                  { type: 'text', content: 'Comparación de agentes de IA con soluciones competitivas.' },
                  { type: 'text', content: 'Análisis de la efectividad de las integraciones de IA.' }
                ]
              }
            ]
          },
          {
            type: 'text',
            content: 'NeuroGen Lab ayuda a las empresas a seleccionar e implementar soluciones de IA que realmente funcionan, aumentando la eficiencia de las empresas.'
          }
        ]
      },
      {
        question: "¿Qué tipo de empresas pueden beneficiarse de NeuroGen Lab?",
        answer: [
          {
            type: 'text',
            content: "NeuroGen Lab está diseñado para ayudar a empresas de todos los tamaños en diversas industrias. Ya sea una pequeña startup o una gran empresa, nuestras soluciones de IA se pueden personalizar para satisfacer sus necesidades específicas en servicio al cliente, análisis de datos y mucho más."
          }
        ]
      },
      {
        question: "¿Cuánto tiempo toma implementar la solución?",
        answer: [
          {
            type: 'text',
            content: 'El tiempo de implementación varía según sus necesidades específicas y la complejidad de la integración. Típicamente, la configuración básica se puede completar en unos días, mientras que las soluciones personalizadas más complejas pueden tomar varias semanas. Nuestro equipo brinda soporte durante todo el proceso, así como soporte continuo durante todo el período de uso.'
          }
        ]
      },
      {
        question: "¿Están seguros mis datos con NeuroGen Lab?",
        answer: [
          {
            type: 'text',
            content: 'Sí, nos tomamos muy en serio la seguridad de los datos. Empleamos protocolos de cifrado estándar de la industria, auditorías de seguridad regulares y procedimientos estrictos de manejo de datos. Todos los datos se procesan en cumplimiento con el GDPR y otras regulaciones relevantes de protección de datos.'
          }
        ]
      },
      {
        question: "¿Qué tipo de soporte proporcionan?",
        answer: [
          {
            type: 'text',
            content: 'Ofrecemos soporte integral que incluye asistencia técnica 24/7, gerentes de cuenta dedicados, documentación detallada y sesiones de capacitación regulares. Nuestro equipo siempre está disponible para ayudarlo a maximizar los beneficios de nuestras soluciones de IA.'
          }
        ]
      },
      {
        question: "¿Está NeuroGen Lab disponible en varios idiomas?",
        answer: [
          {
            type: 'text',
            content: 'Sí, nuestra plataforma admite varios idiomas y se puede personalizar para diferentes requisitos regionales. Contacte a nuestro equipo de ventas para conocer la disponibilidad de idiomas específicos y opciones de personalización.'
          }
        ]
      },
      {
        question: "¿Qué tan difícil es para el personal aprender soluciones de IA integradas?",
        answer: [
          {
            type: 'text',
            content: 'Las soluciones de IA integradas de NeuroGen Lab no requieren conocimientos especiales para operar. Todos los procesos están configurados para que los empleados puedan usar el sistema intuitivamente desde el primer día. La implementación es lo más simple posible, y brindamos soporte en cada etapa, ayudándole a comprender rápidamente la funcionalidad.'
          }
        ]
      }
    ]
  },
  ua: {
    sectionTitle: "ЧАПИ",
    title: "Часті питання",
    description: "Знайдіть відповіді на поширені запитання про наші ШІ-рішення",
    faqs: [
      {
        question: "Що таке NeuroGen Lab? Як це працює?",
        answer: [
          { 
            type: 'text', 
            content: 'NeuroGen Lab спеціалізується на підборі, інтеграції та якісній підтримці ШІ-рішень, орієнтованих на бізнес. Компанія допомагає підприємцям та організаціям автоматизувати бізнес-процеси шляхом впровадження інтелектуальних ШІ-агентів для взаємодії з клієнтами, підтримки продажів та оптимізації робочих процесів. '
          },
          { 
            type: 'text', 
            content: 'Детальніше як це працює та з чого почати можна ознайомитись на сторінці ' 
          },
          { 
            type: 'link', 
            content: 'Посібник', 
            url: '/guide' 
          },
          { 
            type: 'text', 
            content: '.\n\n'
          },
          {
            type: 'text',
            content: 'Робота компанії будується навколо підбору, інтеграції та підтримки ШІ-рішень. Основні напрямки:'
          },
          {
            type: 'numbered-list',
            content: 'Основні напрямки',
            listItems: [
              {
                type: 'list-item',
                content: 'Підбір ШІ-рішень для бізнесу',
                listItems: [
                  { type: 'text', content: 'Аналіз потреб клієнта.' },
                  { type: 'text', content: 'Вибір відповідного ШІ-агента чи бота.' },
                  { type: 'text', content: 'Розробка стратегії впровадження.' }
                ]
              },
              {
                type: 'list-item',
                content: 'Інтеграція ШІ-рішень',
                listItems: [
                  { type: 'text', content: 'Впровадження чат-ботів та голосових асистентів.' },
                  { 
                    type: 'text', 
                    content: 'Інтеграція ШІ з CRM (наприклад: <a href="/tools/keepincrm" class="text-emerald-400 font-bold underline">KeepinCRM</a>, <a href="/tools/hubspot" class="text-emerald-400 font-bold underline">Hubspot</a>).' 
                  },
                  { type: 'text', content: 'Налаштування ШІ для автоматизації продажів та підтримки.' }
                ]
              },
              {
                type: 'list-item',
                content: 'Технічна підтримка та оптимізація',
                listItems: [
                  { type: 'text', content: 'Оновлення та налаштування ШІ-агентів.' },
                  { type: 'text', content: 'Оптимізація роботи бота під потреби бізнесу.' },
                  { type: 'text', content: 'Масштабування рішень для зростання компанії.' }
                ]
              },
              {
                type: 'list-item',
                content: 'Експерименти та A/B тестування',
                listItems: [
                  { type: 'text', content: 'Порівняння ШІ-агентів з конкурентними рішеннями.' },
                  { type: 'text', content: 'Аналіз ефективності ШІ-інтеграцій.' }
                ]
              }
            ]
          },
          {
            type: 'text',
            content: 'NeuroGen Lab допомагає бізнесу вибрати та впровадити ШІ-рішення, які реально працюють, підвищуючи ефективність роботи компаній.'
          }
        ]
      },
      {
        question: "Яким компаніям підходить NeuroGen Lab?",
        answer: [
          {
            type: 'text',
            content: "NeuroGen Lab створений для допомоги бізнесу будь-якого розміру в різних галузях. Будь то невеликий стартап чи велике підприємство, наші ШІ-рішення можуть бути налаштовані під ваші конкретні потреби в обслуговуванні клієнтів, аналізі даних та багато іншого."
          }
        ]
      },
      {
        question: "Скільки часу займає впровадження рішення?",
        answer: [
          {
            type: 'text',
            content: 'Час впровадження залежить від ваших конкретних потреб та складності інтеграції. Зазвичай базове налаштування може бути завершено протягом кількох днів, тоді як більш складні індивідуальні рішення можуть зайняти кілька тижнів. Наша команда забезпечує підтримку протягом усього процесу, а також підтримку протягом усього терміну використання.'
          }
        ]
      },
      {
        question: "Чи в безпеці мої дані з NeuroGen Lab?",
        answer: [
          {
            type: 'text',
            content: 'Так, ми дуже серйозно ставимося до безпеки даних. Ми використовуємо галузеві стандарти шифрування, регулярні перевірки безпеки та суворі процедури обробки даних. Усі дані обробляються відповідно до GDPR та інших відповідних норм захисту даних.'
          }
        ]
      },
      {
        question: "Яку підтримку ви надаєте?",
        answer: [
          {
            type: 'text',
            content: 'Ми пропонуємо комплексну підтримку, що включає технічну допомогу 24/7, виділених менеджерів з роботи з клієнтами, детальну документацію та регулярні навчальні сесії. Наша команда завжди готова допомогти вам максимально ефективно використовувати наші ШІ-рішення.'
          }
        ]
      },
      {
        question: "Чи доступний NeuroGen Lab різними мовами?",
        answer: [
          {
            type: 'text',
            content: 'Так, наша платформа підтримує кілька мов і може бути налаштована під різні регіональні вимоги. Зв\'яжіться з нашою командою продажів для уточнення доступності конкретних мов та варіантів налаштування.'
          }
        ]
      },
      {
        question: "Наскільки складно персоналу освоїти інтегровані ШІ-рішення?",
        answer: [
          {
            type: 'text',
            content: 'Інтегровані ШІ-рішення від NeuroGen Lab не вимагають спеціальних знань для роботи. Всі процеси налаштовуються таким чином, щоб співробітники могли інтуїтивно використовувати систему з першого дня. Впровадження проходить максимально просто, а ми надаємо підтримку на кожному етапі, допомагаючи швидко розібратися з функціоналом.'
          }
        ]
      }
    ]
  }
};

export default faqTranslations; 