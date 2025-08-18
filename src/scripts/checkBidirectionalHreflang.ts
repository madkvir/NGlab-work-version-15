import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface BidirectionalHreflangCheck {
  url: string;
  hreflangs: Record<string, string>;
  bidirectionalLinks: Record<string, boolean>;
  missingBidirectional: string[];
  status: 'error' | 'warning' | 'success';
  issues: string[];
}

const LANGUAGES = ['en', 'de', 'es', 'ru', 'uk'];
const baseUrl = 'https://neurogenlab.de';

/**
 * Проверяет двусторонние hreflang теги
 */
async function checkBidirectionalHreflang(url: string): Promise<BidirectionalHreflangCheck> {
  const result: BidirectionalHreflangCheck = {
    url,
    hreflangs: {},
    bidirectionalLinks: {},
    missingBidirectional: [],
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

    // Проверяем двусторонние ссылки
    for (const [lang, href] of Object.entries(result.hreflangs)) {
      if (lang === 'x-default') continue;
      
      try {
        const targetResponse = await fetch(href);
        if (targetResponse.ok) {
          const targetHtml = await targetResponse.text();
          
          // Проверяем, есть ли обратная ссылка
          const reverseHreflangMatch = targetHtml.match(
            new RegExp(`<link[^>]*hreflang=["']${lang}["'][^>]*href=["']${url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']`, 'i')
          );
          
          if (reverseHreflangMatch) {
            result.bidirectionalLinks[lang] = true;
          } else {
            result.bidirectionalLinks[lang] = false;
            result.missingBidirectional.push(lang);
            result.issues.push(`Отсутствует обратная hreflang ссылка для ${lang}: ${href} не ссылается обратно на ${url}`);
            result.status = 'error';
          }
        }
      } catch (error) {
        result.issues.push(`Ошибка при проверке обратной ссылки для ${lang}: ${error instanceof Error ? error.message : 'Unknown error'}`);
        result.status = 'warning';
      }
    }

    // Проверяем наличие всех языков
    for (const lang of LANGUAGES) {
      if (!result.hreflangs[lang]) {
        result.issues.push(`Отсутствует hreflang для языка: ${lang}`);
        result.status = 'warning';
      }
    }

    // Проверяем наличие x-default
    if (!result.hreflangs['x-default']) {
      result.issues.push('Отсутствует hreflang x-default');
      result.status = 'warning';
    }

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
async function checkBidirectionalHreflang() {
  console.log('🔍 Проверка двусторонних hreflang тегов...\n');

  const urls = generateTestUrls();
  const results: BidirectionalHreflangCheck[] = [];

  for (const url of urls) {
    console.log(`Проверяю: ${url}`);
    const result = await checkBidirectionalHreflang(url);
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

  console.log('📊 Результаты проверки двусторонних hreflang:');
  console.log(`✅ Успешно: ${success.length}`);
  console.log(`⚠️  Предупреждения: ${warnings.length}`);
  console.log(`❌ Ошибки: ${errors.length}`);

  if (errors.length > 0) {
    console.log('\n🚨 Критические проблемы двусторонних hreflang:');
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
  const reportPath = path.join(__dirname, '../../bidirectional-hreflang-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log(`\n📄 Отчет сохранен в: ${reportPath}`);

  // Создаем HTML отчет
  const htmlReport = generateHtmlReport(results);
  const htmlReportPath = path.join(__dirname, '../../bidirectional-hreflang-report.html');
  fs.writeFileSync(htmlReportPath, htmlReport);
  console.log(`📄 HTML отчет сохранен в: ${htmlReportPath}`);
}

/**
 * Генерирует HTML отчет
 */
function generateHtmlReport(results: BidirectionalHreflangCheck[]): string {
  const errors = results.filter(r => r.status === 'error');
  const warnings = results.filter(r => r.status === 'warning');
  const success = results.filter(r => r.status === 'success');

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bidirectional Hreflang Check Report</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .success { color: #28a745; }
        .warning { color: #ffc107; }
        .error { color: #dc3545; }
        .url { font-weight: bold; margin-top: 20px; }
        .issue { margin-left: 20px; color: #666; }
        .summary { background: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
        .hreflang-list { margin-left: 20px; font-family: monospace; }
        .bidirectional-status { margin-left: 20px; }
    </style>
</head>
<body>
    <h1>Bidirectional Hreflang Check Report</h1>
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
        ${Object.keys(result.bidirectionalLinks).length > 0 ? `
            <div class="bidirectional-status">
                <strong>Двусторонние ссылки:</strong><br>
                ${Object.entries(result.bidirectionalLinks).map(([lang, isBidirectional]) => 
                    `${lang}: ${isBidirectional ? '✅' : '❌'}`
                ).join('<br>')}
            </div>
        ` : ''}
    `).join('')}
</body>
</html>
  `;
}

// Запускаем проверку
checkBidirectionalHreflang().catch(console.error);
