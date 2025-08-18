import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface HreflangCheck {
  url: string;
  hreflangs: Record<string, string>;
  duplicates: string[];
  missingXDefault: boolean;
  status: 'error' | 'warning' | 'success';
  issues: string[];
}

const LANGUAGES = ['en', 'de', 'es', 'ru', 'uk'];
const baseUrl = 'https://neurogenlab.de';

/**
 * Проверяет hreflang теги на странице
 */
async function checkHreflangTags(url: string): Promise<HreflangCheck> {
  const result: HreflangCheck = {
    url,
    hreflangs: {},
    duplicates: [],
    missingXDefault: false,
    status: 'success',
    issues: []
  };

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      result.status = 'error';
      result.issues.push(`HTTP ${response.status}: ${response.statusText}`);
      return result;
    }

    const html = await response.text();
    
    // Извлекаем все hreflang теги
    const hreflangMatches = html.matchAll(/<link[^>]*hreflang=["']([^"']+)["'][^>]*href=["']([^"']+)["']/gi);
    
    for (const match of hreflangMatches) {
      const lang = match[1];
      const href = match[2];
      result.hreflangs[lang] = href;
    }

    // Проверяем на дублирование
    const langCounts: Record<string, number> = {};
    Object.keys(result.hreflangs).forEach(lang => {
      langCounts[lang] = (langCounts[lang] || 0) + 1;
    });

    Object.entries(langCounts).forEach(([lang, count]) => {
      if (count > 1) {
        result.duplicates.push(lang);
        result.issues.push(`Дублированный hreflang для языка: ${lang} (${count} раз)`);
        result.status = 'error';
      }
    });

    // Проверяем наличие x-default
    if (!result.hreflangs['x-default']) {
      result.missingXDefault = true;
      result.issues.push('Отсутствует hreflang x-default');
      result.status = 'warning';
    }

    // Проверяем все языки
    for (const lang of LANGUAGES) {
      if (!result.hreflangs[lang]) {
        result.issues.push(`Отсутствует hreflang для языка: ${lang}`);
        result.status = 'warning';
      }
    }

    // Проверяем правильность URL
    Object.entries(result.hreflangs).forEach(([lang, href]) => {
      if (!href.startsWith(baseUrl)) {
        result.issues.push(`Неправильный URL в hreflang ${lang}: ${href}`);
        result.status = 'warning';
      }
    });

  } catch (error) {
    result.status = 'error';
    result.issues.push(`Ошибка при проверке: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }

  return result;
}

/**
 * Генерирует список URL для проверки
 */
function generateTestUrls(): string[] {
  const paths = [
    '',
    '/guide',
    '/blog',
    '/about-us',
    '/contacts',
    '/tools/ai-assistant',
    '/tools/ai-chat-bot',
    '/tools/counseling',
    '/tools/intercom',
    '/tools/discord',
    '/tools/facebook-messenger',
    '/tools/jira',
    '/tools/anti-spam',
    '/tools/hubspot',
    '/tools/livechat',
    '/tools/whatsapp',
    '/tools/salesforce',
    '/tools/ai-avatar',
    '/tools/custom-development',
    '/tools/keepincrm',
    '/tools/microsoft-teams',
    '/tools/slack',
    '/tools/email',
    '/tools/instagram',
    '/tools/zapier',
    '/tools/best-search',
    '/tools/ai-voice-bot'
  ];

  const urls: string[] = [];

  LANGUAGES.forEach(lang => {
    paths.forEach(path => {
      urls.push(`${baseUrl}/${lang}${path}`);
    });
  });

  return urls;
}

/**
 * Основная функция проверки
 */
async function checkHreflangTags() {
  console.log('🔍 Проверка hreflang тегов...\n');

  const urls = generateTestUrls();
  const results: HreflangCheck[] = [];

  for (const url of urls) {
    console.log(`Проверяю: ${url}`);
    const result = await checkHreflangTags(url);
    results.push(result);
    
    if (result.status === 'error') {
      console.log(`❌ Ошибки: ${result.issues.join(', ')}\n`);
    } else if (result.status === 'warning') {
      console.log(`⚠️  Предупреждения: ${result.issues.join(', ')}\n`);
    } else {
      console.log(`✅ OK\n`);
    }
  }

  const errors = results.filter(r => r.status === 'error');
  const warnings = results.filter(r => r.status === 'warning');
  const success = results.filter(r => r.status === 'success');

  console.log('📊 Результаты проверки hreflang:');
  console.log(`✅ Успешно: ${success.length}`);
  console.log(`⚠️  Предупреждения: ${warnings.length}`);
  console.log(`❌ Ошибки: ${errors.length}`);

  if (errors.length > 0) {
    console.log('\n🚨 Критические проблемы hreflang:');
    errors.forEach(result => {
      console.log(`\n${result.url}:`);
      result.issues.forEach(issue => console.log(`  - ${issue}`));
    });
  }

  if (warnings.length > 0) {
    console.log('\n⚠️  Рекомендации по улучшению hreflang:');
    warnings.forEach(result => {
      console.log(`\n${result.url}:`);
      result.issues.forEach(issue => console.log(`  - ${issue}`));
    });
  }

  // Сохраняем отчет
  const reportPath = path.join(__dirname, '../../hreflang-check-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log(`\n📄 Отчет сохранен в: ${reportPath}`);

  // Создаем HTML отчет
  const htmlReport = generateHtmlReport(results);
  const htmlReportPath = path.join(__dirname, '../../hreflang-check-report.html');
  fs.writeFileSync(htmlReportPath, htmlReport);
  console.log(`📄 HTML отчет сохранен в: ${htmlReportPath}`);
}

/**
 * Генерирует HTML отчет
 */
function generateHtmlReport(results: HreflangCheck[]): string {
  const errors = results.filter(r => r.status === 'error');
  const warnings = results.filter(r => r.status === 'warning');
  const success = results.filter(r => r.status === 'success');

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hreflang Check Report</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .success { color: #28a745; }
        .warning { color: #ffc107; }
        .error { color: #dc3545; }
        .url { font-weight: bold; margin-top: 20px; }
        .issue { margin-left: 20px; color: #666; }
        .summary { background: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
        .hreflang-list { margin-left: 20px; font-family: monospace; }
    </style>
</head>
<body>
    <h1>Hreflang Check Report</h1>
    <div class="summary">
        <h2>Summary</h2>
        <p class="success">✅ Success: ${success.length}</p>
        <p class="warning">⚠️ Warnings: ${warnings.length}</p>
        <p class="error">❌ Errors: ${errors.length}</p>
    </div>
    
    ${results.map(result => `
        <div class="url ${result.status}">
            ${result.url}
        </div>
        ${result.issues.map(issue => `<div class="issue">- ${issue}</div>`).join('')}
        ${Object.keys(result.hreflangs).length > 0 ? `
            <div class="hreflang-list">
                <strong>Hreflang теги:</strong><br>
                ${Object.entries(result.hreflangs).map(([lang, href]) => 
                    `${lang}: ${href}`
                ).join('<br>')}
            </div>
        ` : ''}
    `).join('')}
</body>
</html>
  `;
}

// Запускаем проверку
checkHreflangTags().catch(console.error);
