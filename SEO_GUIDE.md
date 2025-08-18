# SEO Руководство для NeuroGen Lab

## 🔍 Проблемы с индексацией

### Критическая проблема: Дублирование локали в URL

**Проблема:** URL `https://neurogenlab.de/en/en/guide` содержит дублированную локаль `/en/en/`

**Решение:** ✅ Исправлено в middleware

### Критическая проблема: Дублированные hreflang теги

**Проблема:** На страницах есть несколько hreflang тегов с одинаковым значением 'en'

**Решение:** ✅ Исправлено - убраны дублированные hreflang из корневого layout

### Внесенные исправления:

1. **Middleware обновлен** - добавлена проверка дублирования локали
2. **Canonical URL добавлен** - явно указана основная версия страницы
3. **Robots.txt обновлен** - разрешена индексация guide страниц
4. **JSON-LD улучшен** - добавлена детальная структурированная разметка
5. **Hreflang теги исправлены** - убраны дублированные теги
6. **Создан ToolPageTemplate** - для правильной генерации метаданных

## 🛠️ Инструменты мониторинга

### Проверка дублированных URL
```bash
npm run check-urls
```

### SEO мониторинг
```bash
npm run seo-monitor
```

### Проверка hreflang тегов
```bash
npm run check-hreflang
```

### Обновление sitemap
```bash
npm run update-sitemap
```

## 📊 Что проверяют скрипты

### check-urls.ts
- Дублирование локали в URL
- Правильность редиректов
- Статус HTTP ответов

### seo-monitor.ts
- Title и description
- Canonical URL
- Hreflang теги
- Robots meta теги
- Структурированная разметка

### check-hreflang.ts
- Дублирование hreflang тегов
- Наличие x-default
- Правильность URL в hreflang
- Полнота языковых версий

## 🚨 Критические проблемы SEO

### 1. Дублированный контент
- **Причина:** Дублирование локали в URL
- **Решение:** ✅ Исправлено в middleware

### 2. Отсутствие canonical URL
- **Причина:** Не указана основная версия страницы
- **Решение:** ✅ Добавлен canonical URL

### 3. Проблемы с robots.txt
- **Причина:** Блокировка важных страниц
- **Решение:** ✅ Обновлен robots.txt

### 4. Дублированные hreflang теги
- **Причина:** Несколько hreflang тегов с одинаковым значением
- **Решение:** ✅ Убраны дублированные теги из корневого layout

## ✅ Рекомендации по поддержанию SEO

### Еженедельно:
1. Запускать `npm run check-urls`
2. Запускать `npm run check-hreflang`
3. Проверять Google Search Console
4. Мониторить редиректы

### Ежемесячно:
1. Запускать `npm run seo-monitor`
2. Обновлять sitemap
3. Проверять структурированную разметку

### При добавлении новых страниц:
1. Добавлять метаданные
2. Настраивать canonical URL
3. Добавлять hreflang теги
4. Обновлять sitemap

## 📁 Структура файлов

```
src/
├── app/
│   ├── [locale]/
│   │   ├── guide/
│   │   │   ├── layout.tsx    # SEO метаданные
│   │   │   └── page.tsx
│   │   └── ...
│   ├── robots.ts             # Правила индексации
│   └── sitemap.ts            # Карта сайта
├── components/
│   └── ToolPageTemplate.tsx  # Шаблон для tool страниц
├── scripts/
│   ├── checkDuplicateUrls.ts # Проверка URL
│   ├── seoMonitor.ts         # SEO мониторинг
│   └── checkHreflang.ts      # Проверка hreflang
├── utils/
│   └── generateHrefLangs.ts  # Генерация hreflang
└── middleware.ts             # Обработка редиректов
```

## 🔧 Настройки для разных окружений

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run start
```

### SEO проверка перед деплоем
```bash
npm run check-urls
npm run check-hreflang
npm run seo-monitor
```

## 📈 Метрики для отслеживания

### Google Search Console
- Ошибки индексации
- Дублированный контент
- Проблемы с мобильной версией
- Hreflang ошибки

### Google Analytics
- Источники трафика
- Поведение пользователей
- Конверсии

### PageSpeed Insights
- Core Web Vitals
- Производительность
- SEO оценка

## 🚀 Быстрые команды

```bash
# Полная проверка SEO
npm run check-urls && npm run check-hreflang && npm run seo-monitor

# Обновление sitemap и проверка
npm run update-sitemap && npm run check-urls

# Разработка с мониторингом
npm run dev & npm run seo-monitor
```

## 📞 Поддержка

При обнаружении проблем с SEO:

1. Запустите скрипты мониторинга
2. Проверьте логи middleware
3. Убедитесь в правильности метаданных
4. Проверьте robots.txt и sitemap
5. Проверьте hreflang теги

## 🔄 Автоматизация

Рекомендуется настроить автоматический запуск скриптов:

### GitHub Actions
```yaml
name: SEO Check
on: [push, pull_request]
jobs:
  seo-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm install
      - run: npm run check-urls
      - run: npm run check-hreflang
      - run: npm run seo-monitor
```

### Cron Job (еженедельно)
```bash
0 9 * * 1 cd /path/to/project && npm run seo-monitor
```
