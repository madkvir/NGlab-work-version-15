export const integrationSetupTranslations = {
  ua: {
    title: "Налаштування Інтеграції",
    subtitle: "Покрокова інструкція для налаштування інтеграції з KeepinCRM",
    steps: [
      {
        number: 1,
        title: "Створення облікового запису",
        description: "Для налаштування інтеграції необхідно зв'язатися з нами для отримання Безкоштовної Консультації і доступу до інтеграції. Для цього вам потрібно:",
        points: [
          "Перейти на сторінку сайта Контакти",
          "Заповнити форму зворотнього зв'язку",
          "Очікувати на дзвінок або відповідь від нашого експерта"
        ],
        important: {
          title: "Важливо:",
          text: "Безкоштовна консультація допоможе вам краще зрозуміти, які можливості інтеграції, скільки коштує інтеграція і що для цього необхідно. Наші експерти детально розглянуть ваш запит і запропонують найкращі рішення."
        }
      },
      {
        number: 2,
        title: "Підключення акаунту KeepinCRM",
        description: "",
        sections: [
          {
            title: "1. Отримання API ключа",
            description: "Перейдіть у розділ «Профіль компанії – API» у вашій CRM та скопіюйте API ключ.",
            image: {
              src: "/assets/tools/keepincrm/api-key.png",
              alt: "Отримання API ключа в KeepinCRM",
              fallbackText: "Фото: Отримання API ключа"
            }
          },
          {
            title: "2. Підключення к плагіну в аккаунті Zappr",
            description: "У кабінеті інтеграції вставте API ключ для встановлення зв'язку з KeepinCRM.",
            image: {
              src: "/assets/tools/keepincrm/plugin-connect.png",
              alt: "Підключення к плагіну в аккаунті Zappr",
              fallbackText: "Фото: Підключення к плагіну"
            }
          },
          {
            title: "3. Налаштуйте форми під ваші карточки",
            description: "Налаштуйте форми під ваші карточки Ліда, Клієнта, Угоди.",
            image: {
              src: "/assets/tools/keepincrm/form-setup.png",
              alt: "Налаштування форм під ваші карточки",
              fallbackText: "Фото: Налаштування форм"
            }
          }
        ]
      },
      {
        number: 3,
        title: "Конфігурація ШІ агента",
        description: "",
        sections: [
          {
            title: "Сценарії відповідей (Prompt)",
            description: "Налаштуйте шаблони відповідей для найбільш поширених запитів. Тон і характер спілкування.",
            tip: {
              title: "Порада:",
              text: "Створіть кілька варіантів відповідей для одного типу запитань, щоб спілкування з ШІ агентом виглядало більш природним і менш шаблонним."
            }
          },
          {
            title: "Навчання та адаптація",
            description: "Встановіть алгоритми розпізнавання запитів та інтегруйте систему FAQ для швидкої обробки звернень. Додайте все що потрібно до бази знань.",
            important: {
              title: "Важливо:",
              text: "Регулярно аналізуйте запити, які не були розпізнані системою, і додавайте їх до бази знань для постійного вдосконалення ШІ агента."
            }
          },
          {
            title: "Налаштування відображення",
            description: "Вкажіть параметри віджету (позицію, кольорову гаму, текст привітання тощо) через налаштування в адмінці інтеграції.",
            image: {
              src: "/assets/tools/keepincrm/widget-settings.png",
              alt: "Налаштування відображення віджету",
              fallbackText: "Фото: Налаштування відображення віджету"
            }
          }
        ]
      },
      {
        number: 4,
        title: "Тестування та Встановлення віджету",
        description: "",
        sections: [
          {
            title: "Перевірка роботи",
            description: "Відправте тестовий запит через віджет і переконайтеся, що дані правильно передаються до KeepinCRM.",
            checkItems: {
              title: "Що перевірити:",
              items: [
                "Коректність відображення віджету на сайті",
                "Правильність роботи ШІ агента при різних запитах",
                "Передачу даних до KeepinCRM після заповнення форми",
                "Створення нових записів у CRM-системі"
              ]
            },
            tip: {
              title: "Порада:",
              text: "Проведіть тестування з різних пристроїв (комп'ютер, планшет, мобільний телефон) та браузерів для забезпечення коректної роботи на всіх платформах."
            }
          },
          {
            title: "Фінальне налаштування",
            description: "При успішному тестуванні переходьте до встановлення віджету на основний сайт.",
            important: {
              title: "Важливо:",
              text: "Після встановлення на основний сайт продовжуйте моніторинг роботи інтеграції протягом перших кількох місяців для виявлення та усунення можливих проблем."
            }
          },
          {
            title: "Встановлення віджету на сайт",
            description: "Скопіюйте JavaScript-код віджету та вставте його перед закриваючим тегом &lt;/body&gt; на вашому сайті.",
            image: {
              src: "/assets/tools/keepincrm/widget-code.png",
              alt: "Інсталяційний код віджету",
              fallbackText: "Фото: Інсталяційний код віджету"
            },
            techTip: {
              title: "Технічна порада:",
              text: "Для оптимальної продуктивності рекомендується розмістити код віджету перед закриваючим тегом body, щоб він завантажувався після основного контенту сторінки. Це забезпечить швидше завантаження сайту."
            },
            success: {
              title: "Вітаємо! Ви успішно налаштували інтеграцію з KeepinCRM.",
              text: "Тепер ваш бізнес готовий до автоматизованої обробки запитів та ефективного управління клієнтами."
            }
          }
        ]
      }
    ],
    buttonText: "Get Started"
  },
  en: {
    title: "Integration Setup",
    subtitle: "Step-by-step guide for setting up integration with KeepinCRM",
    steps: [
      {
        number: 1,
        title: "Account Creation",
        description: "To set up the integration, you need to contact us for a Free Consultation and access to the integration. To do this, you need to:",
        points: [
          "Go to the Contacts page of the website",
          "Fill out the feedback form",
          "Wait for a call or response from our expert"
        ],
        important: {
          title: "Important:",
          text: "A free consultation will help you better understand the integration capabilities, how much the integration costs, and what is needed for it. Our experts will carefully review your request and offer the best solutions."
        }
      },
      {
        number: 2,
        title: "Connecting KeepinCRM Account",
        description: "",
        sections: [
          {
            title: "1. Getting the API Key",
            description: "Go to the 'Company Profile - API' section in your CRM and copy the API key.",
            image: {
              src: "/assets/tools/keepincrm/api-key.png",
              alt: "Getting API key in KeepinCRM",
              fallbackText: "Photo: Getting API key"
            }
          },
          {
            title: "2. Connecting to the Plugin in Zappr Account",
            description: "In the integration dashboard, paste the API key to establish a connection with KeepinCRM.",
            image: {
              src: "/assets/tools/keepincrm/plugin-connect.png",
              alt: "Connecting to the plugin in Zappr account",
              fallbackText: "Photo: Connecting to the plugin"
            }
          },
          {
            title: "3. Configure Forms for Your Cards",
            description: "Configure forms for your Lead, Client, and Deal cards.",
            image: {
              src: "/assets/tools/keepincrm/form-setup.png",
              alt: "Configuring forms for your cards",
              fallbackText: "Photo: Form configuration"
            }
          }
        ]
      },
      {
        number: 3,
        title: "AI Agent Configuration",
        description: "",
        sections: [
          {
            title: "Response Scenarios (Prompt)",
            description: "Set up response templates for the most common requests. Tone and character of communication.",
            tip: {
              title: "Tip:",
              text: "Create multiple response variants for one type of question to make communication with the AI agent look more natural and less templated."
            }
          },
          {
            title: "Training and Adaptation",
            description: "Set up request recognition algorithms and integrate the FAQ system for quick processing of inquiries. Add everything needed to the knowledge base.",
            important: {
              title: "Important:",
              text: "Regularly analyze requests that were not recognized by the system and add them to the knowledge base for continuous improvement of the AI agent."
            }
          },
          {
            title: "Display Settings",
            description: "Specify widget parameters (position, color scheme, greeting text, etc.) through the integration admin settings.",
            image: {
              src: "/assets/tools/keepincrm/widget-settings.png",
              alt: "Widget display settings",
              fallbackText: "Photo: Widget display settings"
            }
          }
        ]
      },
      {
        number: 4,
        title: "Testing and Widget Installation",
        description: "",
        sections: [
          {
            title: "Functionality Check",
            description: "Send a test request through the widget and make sure the data is correctly transferred to KeepinCRM.",
            checkItems: {
              title: "What to check:",
              items: [
                "Correct display of the widget on the site",
                "Proper functioning of the AI agent with different requests",
                "Data transfer to KeepinCRM after form completion",
                "Creation of new records in the CRM system"
              ]
            },
            tip: {
              title: "Tip:",
              text: "Conduct testing from different devices (computer, tablet, mobile phone) and browsers to ensure correct operation on all platforms."
            }
          },
          {
            title: "Final Setup",
            description: "Upon successful testing, proceed to install the widget on the main site.",
            important: {
              title: "Important:",
              text: "After installation on the main site, continue monitoring the integration for the first few months to identify and resolve possible issues."
            }
          },
          {
            title: "Installing the Widget on the Site",
            description: "Copy the JavaScript code of the widget and paste it before the closing &lt;/body&gt; tag on your site.",
            image: {
              src: "/assets/tools/keepincrm/widget-code.png",
              alt: "Widget installation code",
              fallbackText: "Photo: Widget installation code"
            },
            techTip: {
              title: "Technical tip:",
              text: "For optimal performance, it is recommended to place the widget code before the closing body tag so that it loads after the main content of the page. This will ensure faster site loading."
            },
            success: {
              title: "Congratulations! You have successfully set up the integration with KeepinCRM.",
              text: "Now your business is ready for automated request processing and effective customer management."
            }
          }
        ]
      }
    ],
    buttonText: "Get Started"
  },
  ru: {
    title: "Настройка Интеграции",
    subtitle: "Пошаговая инструкция для настройки интеграции с KeepinCRM",
    steps: [
      {
        number: 1,
        title: "Создание учетной записи",
        description: "Для настройки интеграции необходимо связаться с нами для получения Бесплатной Консультации и доступа к интеграции. Для этого вам нужно:",
        points: [
          "Перейти на страницу сайта Контакты",
          "Заполнить форму обратной связи",
          "Ожидать звонок или ответ от нашего эксперта"
        ],
        important: {
          title: "Важно:",
          text: "Бесплатная консультация поможет вам лучше понять возможности интеграции, сколько стоит интеграция и что для этого необходимо. Наши эксперты детально рассмотрят ваш запрос и предложат лучшие решения."
        }
      },
      {
        number: 2,
        title: "Подключение аккаунта KeepinCRM",
        description: "",
        sections: [
          {
            title: "1. Получение API ключа",
            description: "Перейдите в раздел «Профиль компании – API» в вашей CRM и скопируйте API ключ.",
            image: {
              src: "/assets/tools/keepincrm/api-key.png",
              alt: "Получение API ключа в KeepinCRM",
              fallbackText: "Фото: Получение API ключа"
            }
          },
          {
            title: "2. Подключение к плагину в аккаунте Zappr",
            description: "В кабинете интеграции вставьте API ключ для установления связи с KeepinCRM.",
            image: {
              src: "/assets/tools/keepincrm/plugin-connect.png",
              alt: "Подключение к плагину в аккаунте Zappr",
              fallbackText: "Фото: Подключение к плагину"
            }
          },
          {
            title: "3. Настройте формы под ваши карточки",
            description: "Настройте формы под ваши карточки Лида, Клиента, Сделки.",
            image: {
              src: "/assets/tools/keepincrm/form-setup.png",
              alt: "Настройка форм под ваши карточки",
              fallbackText: "Фото: Настройка форм"
            }
          }
        ]
      },
      {
        number: 3,
        title: "Конфигурация ИИ агента",
        description: "",
        sections: [
          {
            title: "Сценарии ответов (Prompt)",
            description: "Настройте шаблоны ответов для наиболее распространенных запросов. Тон и характер общения.",
            tip: {
              title: "Совет:",
              text: "Создайте несколько вариантов ответов для одного типа вопросов, чтобы общение с ИИ агентом выглядело более естественным и менее шаблонным."
            }
          },
          {
            title: "Обучение и адаптация",
            description: "Установите алгоритмы распознавания запросов и интегрируйте систему FAQ для быстрой обработки обращений. Добавьте все необходимое в базу знаний.",
            important: {
              title: "Важно:",
              text: "Регулярно анализируйте запросы, которые не были распознаны системой, и добавляйте их в базу знаний для постоянного совершенствования ИИ агента."
            }
          },
          {
            title: "Настройка отображения",
            description: "Укажите параметры виджета (позицию, цветовую гамму, текст приветствия и т.д.) через настройки в админке интеграции.",
            image: {
              src: "/assets/tools/keepincrm/widget-settings.png",
              alt: "Настройка отображения виджета",
              fallbackText: "Фото: Настройка отображения виджета"
            }
          }
        ]
      },
      {
        number: 4,
        title: "Тестирование и Установка виджета",
        description: "",
        sections: [
          {
            title: "Проверка работы",
            description: "Отправьте тестовый запрос через виджет и убедитесь, что данные правильно передаются в KeepinCRM.",
            checkItems: {
              title: "Что проверить:",
              items: [
                "Корректность отображения виджета на сайте",
                "Правильность работы ИИ агента при различных запросах",
                "Передачу данных в KeepinCRM после заполнения формы",
                "Создание новых записей в CRM-системе"
              ]
            },
            tip: {
              title: "Совет:",
              text: "Проведите тестирование с разных устройств (компьютер, планшет, мобильный телефон) и браузеров для обеспечения корректной работы на всех платформах."
            }
          },
          {
            title: "Финальная настройка",
            description: "При успешном тестировании переходите к установке виджета на основной сайт.",
            important: {
              title: "Важно:",
              text: "После установки на основной сайт продолжайте мониторинг работы интеграции в течение первых нескольких месяцев для выявления и устранения возможных проблем."
            }
          },
          {
            title: "Установка виджета на сайт",
            description: "Скопируйте JavaScript-код виджета и вставьте его перед закрывающим тегом &lt;/body&gt; на вашем сайте.",
            image: {
              src: "/assets/tools/keepincrm/widget-code.png",
              alt: "Инсталляционный код виджета",
              fallbackText: "Фото: Инсталляционный код виджета"
            },
            techTip: {
              title: "Техническая рекомендация:",
              text: "Для оптимальной производительности рекомендуется размещать код виджета перед закрывающим тегом body, чтобы он загружался после основного контента страницы. Это обеспечит более быструю загрузку сайта."
            },
            success: {
              title: "Поздравляем! Вы успешно настроили интеграцию с KeepinCRM.",
              text: "Теперь ваш бизнес готов к автоматизированной обработке запросов и эффективному управлению клиентами."
            }
          }
        ]
      }
    ],
    buttonText: "Начать"
  },
  de: {
    title: "Integrationseinrichtung",
    subtitle: "Schritt-für-Schritt-Anleitung zur Einrichtung der Integration mit KeepinCRM",
    steps: [
      {
        number: 1,
        title: "Kontoerstellung",
        description: "Um die Integration einzurichten, müssen Sie uns für eine kostenlose Beratung und Zugang zur Integration kontaktieren. Dazu müssen Sie:",
        points: [
          "Zur Kontaktseite der Website gehen",
          "Das Feedback-Formular ausfüllen",
          "Auf einen Anruf oder eine Antwort von unserem Experten warten"
        ],
        important: {
          title: "Wichtig:",
          text: "Eine kostenlose Beratung hilft Ihnen, die Integrationsmöglichkeiten, die Kosten der Integration und die dafür erforderlichen Voraussetzungen besser zu verstehen. Unsere Experten werden Ihre Anfrage sorgfältig prüfen und die besten Lösungen anbieten."
        }
      },
      {
        number: 2,
        title: "Verbindung des KeepinCRM-Kontos",
        description: "",
        sections: [
          {
            title: "1. API-Schlüssel erhalten",
            description: "Gehen Sie zum Bereich 'Firmenprofil - API' in Ihrer CRM und kopieren Sie den API-Schlüssel.",
            image: {
              src: "/assets/tools/keepincrm/api-key.png",
              alt: "API-Schlüssel in KeepinCRM erhalten",
              fallbackText: "Foto: API-Schlüssel erhalten"
            }
          },
          {
            title: "2. Verbindung zum Plugin im Zappr-Konto",
            description: "Fügen Sie im Integrations-Dashboard den API-Schlüssel ein, um eine Verbindung mit KeepinCRM herzustellen.",
            image: {
              src: "/assets/tools/keepincrm/plugin-connect.png",
              alt: "Verbindung zum Plugin im Zappr-Konto",
              fallbackText: "Foto: Verbindung zum Plugin"
            }
          },
          {
            title: "3. Formulare für Ihre Karten konfigurieren",
            description: "Konfigurieren Sie Formulare für Ihre Lead-, Kunden- und Deal-Karten.",
            image: {
              src: "/assets/tools/keepincrm/form-setup.png",
              alt: "Formulare für Ihre Karten konfigurieren",
              fallbackText: "Foto: Formular-Konfiguration"
            }
          }
        ]
      },
      {
        number: 3,
        title: "KI-Agent-Konfiguration",
        description: "",
        sections: [
          {
            title: "Antwortszenarien (Prompt)",
            description: "Richten Sie Antwortvorlagen für die häufigsten Anfragen ein. Ton und Charakter der Kommunikation.",
            tip: {
              title: "Tipp:",
              text: "Erstellen Sie mehrere Antwortvarianten für einen Fragetyp, damit die Kommunikation mit dem KI-Agenten natürlicher und weniger schablonenhaft wirkt."
            }
          },
          {
            title: "Training und Anpassung",
            description: "Richten Sie Algorithmen zur Anfrageerkennung ein und integrieren Sie das FAQ-System für die schnelle Bearbeitung von Anfragen. Fügen Sie alles Notwendige zur Wissensdatenbank hinzu.",
            important: {
              title: "Wichtig:",
              text: "Analysieren Sie regelmäßig Anfragen, die vom System nicht erkannt wurden, und fügen Sie sie zur Wissensdatenbank hinzu, um den KI-Agenten kontinuierlich zu verbessern."
            }
          },
          {
            title: "Anzeigeeinstellungen",
            description: "Geben Sie Widget-Parameter (Position, Farbschema, Begrüßungstext usw.) über die Integrationsadmin-Einstellungen an.",
            image: {
              src: "/assets/tools/keepincrm/widget-settings.png",
              alt: "Widget-Anzeigeeinstellungen",
              fallbackText: "Foto: Widget-Anzeigeeinstellungen"
            }
          }
        ]
      },
      {
        number: 4,
        title: "Testen und Widget-Installation",
        description: "",
        sections: [
          {
            title: "Funktionsprüfung",
            description: "Senden Sie eine Testanfrage über das Widget und stellen Sie sicher, dass die Daten korrekt an KeepinCRM übertragen werden.",
            checkItems: {
              title: "Was zu prüfen ist:",
              items: [
                "Korrekte Anzeige des Widgets auf der Website",
                "Ordnungsgemäße Funktion des KI-Agenten bei verschiedenen Anfragen",
                "Datenübertragung an KeepinCRM nach Formularabschluss",
                "Erstellung neuer Datensätze im CRM-System"
              ]
            },
            tip: {
              title: "Tipp:",
              text: "Führen Sie Tests von verschiedenen Geräten (Computer, Tablet, Mobiltelefon) und Browsern durch, um die korrekte Funktion auf allen Plattformen sicherzustellen."
            }
          },
          {
            title: "Endgültige Einrichtung",
            description: "Nach erfolgreicher Prüfung fahren Sie mit der Installation des Widgets auf der Hauptwebsite fort.",
            important: {
              title: "Wichtig:",
              text: "Überwachen Sie nach der Installation auf der Hauptwebsite die Integration für die ersten Monate weiter, um mögliche Probleme zu identifizieren und zu beheben."
            }
          },
          {
            title: "Installation des Widgets auf der Website",
            description: "Kopieren Sie den JavaScript-Code des Widgets und fügen Sie ihn vor dem schließenden &lt;/body&gt;-Tag auf Ihrer Website ein.",
            image: {
              src: "/assets/tools/keepincrm/widget-code.png",
              alt: "Widget-Installationscode",
              fallbackText: "Foto: Widget-Installationscode"
            },
            techTip: {
              title: "Technischer Tipp:",
              text: "Für optimale Leistung wird empfohlen, den Widget-Code vor dem schließenden Body-Tag zu platzieren, damit er nach dem Hauptinhalt der Seite geladen wird. Dies gewährleistet ein schnelleres Laden der Website."
            },
            success: {
              title: "Herzlichen Glückwunsch! Sie haben die Integration mit KeepinCRM erfolgreich eingerichtet.",
              text: "Jetzt ist Ihr Unternehmen bereit für die automatisierte Anfragenbearbeitung und effektives Kundenmanagement."
            }
          }
        ]
      }
    ],
    buttonText: "Loslegen"
  },
  es: {
    title: "Configuración de Integración",
    subtitle: "Guía paso a paso para configurar la integración con KeepinCRM",
    steps: [
      {
        number: 1,
        title: "Creación de Cuenta",
        description: "Para configurar la integración, necesita contactarnos para una Consulta Gratuita y acceso a la integración. Para ello, debe:",
        points: [
          "Ir a la página de Contactos del sitio web",
          "Completar el formulario de contacto",
          "Esperar una llamada o respuesta de nuestro experto"
        ],
        important: {
          title: "Importante:",
          text: "Una consulta gratuita le ayudará a comprender mejor las capacidades de integración, cuánto cuesta la integración y qué se necesita para ello. Nuestros expertos revisarán cuidadosamente su solicitud y ofrecerán las mejores soluciones."
        }
      },
      {
        number: 2,
        title: "Conexión de la Cuenta KeepinCRM",
        description: "",
        sections: [
          {
            title: "1. Obtención de la Clave API",
            description: "Vaya a la sección 'Perfil de la empresa - API' en su CRM y copie la clave API.",
            image: {
              src: "/assets/tools/keepincrm/api-key.png",
              alt: "Obtención de la clave API en KeepinCRM",
              fallbackText: "Foto: Obtención de la clave API"
            }
          },
          {
            title: "2. Conexión al Plugin en la Cuenta Zappr",
            description: "En el panel de integración, pegue la clave API para establecer una conexión con KeepinCRM.",
            image: {
              src: "/assets/tools/keepincrm/plugin-connect.png",
              alt: "Conexión al plugin en la cuenta Zappr",
              fallbackText: "Foto: Conexión al plugin"
            }
          },
          {
            title: "3. Configure Formularios para sus Tarjetas",
            description: "Configure formularios para sus tarjetas de Lead, Cliente y Acuerdo.",
            image: {
              src: "/assets/tools/keepincrm/form-setup.png",
              alt: "Configuración de formularios para sus tarjetas",
              fallbackText: "Foto: Configuración de formularios"
            }
          }
        ]
      },
      {
        number: 3,
        title: "Configuración del Agente de IA",
        description: "",
        sections: [
          {
            title: "Escenarios de Respuesta (Prompt)",
            description: "Configure plantillas de respuesta para las solicitudes más comunes. Tono y carácter de la comunicación.",
            tip: {
              title: "Consejo:",
              text: "Cree múltiples variantes de respuesta para un tipo de pregunta para que la comunicación con el agente de IA parezca más natural y menos estandarizada."
            }
          },
          {
            title: "Entrenamiento y Adaptación",
            description: "Configure algoritmos de reconocimiento de solicitudes e integre el sistema de FAQ para el procesamiento rápido de consultas. Agregue todo lo necesario a la base de conocimientos.",
            important: {
              title: "Importante:",
              text: "Analice regularmente las solicitudes que no fueron reconocidas por el sistema y agréguelas a la base de conocimientos para la mejora continua del agente de IA."
            }
          },
          {
            title: "Configuración de Visualización",
            description: "Especifique los parámetros del widget (posición, esquema de colores, texto de saludo, etc.) a través de la configuración de administración de integración.",
            image: {
              src: "/assets/tools/keepincrm/widget-settings.png",
              alt: "Configuración de visualización del widget",
              fallbackText: "Foto: Configuración de visualización del widget"
            }
          }
        ]
      },
      {
        number: 4,
        title: "Pruebas e Instalación del Widget",
        description: "",
        sections: [
          {
            title: "Verificación de Funcionalidad",
            description: "Envíe una solicitud de prueba a través del widget y asegúrese de que los datos se transfieran correctamente a KeepinCRM.",
            checkItems: {
              title: "Qué verificar:",
              items: [
                "Visualización correcta del widget en el sitio",
                "Funcionamiento adecuado del agente de IA con diferentes solicitudes",
                "Transferencia de datos a KeepinCRM después de completar el formulario",
                "Creación de nuevos registros en el sistema CRM"
              ]
            },
            tip: {
              title: "Consejo:",
              text: "Realice pruebas desde diferentes dispositivos (computadora, tableta, teléfono móvil) y navegadores para garantizar un funcionamiento correcto en todas las plataformas."
            }
          },
          {
            title: "Configuración Final",
            description: "Tras una prueba exitosa, proceda a instalar el widget en el sitio principal.",
            important: {
              title: "Importante:",
              text: "Después de la instalación en el sitio principal, continúe monitoreando la integración durante los primeros meses para identificar y resolver posibles problemas."
            }
          },
          {
            title: "Instalación del Widget en el Sitio",
            description: "Copie el código JavaScript del widget y péguelo antes de la etiqueta de cierre &lt;/body&gt; en su sitio.",
            image: {
              src: "/assets/tools/keepincrm/widget-code.png",
              alt: "Código de instalación del widget",
              fallbackText: "Foto: Código de instalación del widget"
            },
            techTip: {
              title: "Consejo técnico:",
              text: "Para un rendimiento óptimo, se recomienda colocar el código del widget antes de la etiqueta de cierre body para que se cargue después del contenido principal de la página. Esto asegurará una carga más rápida del sitio."
            },
            success: {
              title: "¡Felicitaciones! Ha configurado con éxito la integración con KeepinCRM.",
              text: "Ahora su negocio está listo para el procesamiento automatizado de solicitudes y la gestión efectiva de clientes."
            }
          }
        ]
      }
    ],
    buttonText: "Comenzar"
  }
}; 