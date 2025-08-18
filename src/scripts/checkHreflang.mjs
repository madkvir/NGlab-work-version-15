import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

const baseUrl = 'https://neurogenlab.de';
const pages = [
  '/en/tools/hubspot',
  '/en/tools/counseling',
  '/en/tools/intercom',
  '/en/tools/jira',
  '/en/guide',
  '/en/tools/facebook-messenger',
  '/en/tools/discord',
  '/en/tools/custom-development',
  '/en/tools/ai-assistant',
  '/en/tools/anti-spam',
  '/en/tools/instagram',
  '/en/tools/zapier',
  '/en/tools/livechat',
  '/en/tools/whatsapp',
  '/en/tools/tables',
  '/en/tools/ai-avatar',
  '/en/tools/keepincrm',
  '/en/tools/salesforce',
  '/en/tools/microsoft-teams',
  '/en/tools/slack',
  '/en/tools/email',
  '/en/tools/ai-chat-bot',
  '/en/tools/best-search',
  '/en/contacts',
  '/en/tools/ai-voice-bot',
  '/en/about-us',
  '/en/'
];

async function checkHreflangTags(url) {
  const fullUrl = `${baseUrl}${url}`;
  const report = {
    url,
    hreflangTags: [],
    duplicates: [],
    missingXDefault: false,
    missingLanguages: [],
    errors: []
  };

  try {
    const response = await fetch(fullUrl);
    if (!response.ok) {
      report.errors.push(`HTTP ${response.status}: ${response.statusText}`);
      return report;
    }

    const html = await response.text();
    
    // Извлекаем hreflang теги
    const hreflangRegex = /<link[^>]*rel=["']alternate["'][^>]*hreflang=["']([^"']+)["'][^>]*href=["']([^"']+)["'][^>]*>/gi;
    const matches = html.matchAll(hreflangRegex);
    
    const hreflangMap = new Map();
    const foundLanguages = new Set();
    
    for (const match of matches) {
      const hreflang = match[1];
      const href = match[2];
      
      report.hreflangTags.push({ href, hreflang });
      foundLanguages.add(hreflang);
      
      if (!hreflangMap.has(hreflang)) {
        hreflangMap.set(hreflang, []);
      }
      hreflangMap.get(hreflang).push(href);
    }
    
    // Проверяем дубликаты
    for (const [lang, urls] of hreflangMap) {
      if (urls.length > 1) {
        report.duplicates.push(`${lang}: ${urls.join(', ')}`);
      }
    }
    
    // Проверяем x-default
    report.missingXDefault = !foundLanguages.has('x-default');
    
    // Проверяем отсутствующие языки
    const expectedLanguages = ['en', 'de', 'es', 'ru', 'uk'];
    for (const lang of expectedLanguages) {
      if (!foundLanguages.has(lang)) {
        report.missingLanguages.push(lang);
      }
    }
    
  } catch (error) {
    report.errors.push(`Ошибка при проверке ${fullUrl}: ${error}`);
  }
  
  return report;
}

async function generateReport() {
  console.log('🔍 Проверка hreflang тегов...\n');
  
  const reports = [];
  
  for (const page of pages) {
    console.log(`Проверяю: ${page}`);
    const report = await checkHreflangTags(page);
    reports.push(report);
    
    if (report.duplicates.length > 0) {
      console.log(`❌ Дубликаты: ${report.duplicates.join('; ')}`);
    }
    if (report.missingXDefault) {
      console.log(`❌ Отсутствует x-default`);
    }
    if (report.missingLanguages.length > 0) {
      console.log(`❌ Отсутствуют языки: ${report.missingLanguages.join(', ')}`);
    }
    if (report.errors.length > 0) {
      console.log(`❌ Ошибки: ${report.errors.join('; ')}`);
    }
    if (report.duplicates.length === 0 && !report.missingXDefault && report.missingLanguages.length === 0 && report.errors.length === 0) {
      console.log('✅ Все в порядке');
    }
    console.log('');
  }
  
  // Сохраняем JSON отчет
  const jsonReport = {
    timestamp: new Date().toISOString(),
    summary: {
      totalPages: reports.length,
      pagesWithDuplicates: reports.filter(r => r.duplicates.length > 0).length,
      pagesMissingXDefault: reports.filter(r => r.missingXDefault).length,
      pagesWithErrors: reports.filter(r => r.errors.length > 0).length
    },
    reports
  };
  
  fs.writeFileSync('hreflang-report.json', JSON.stringify(jsonReport, null, 2));
  
  // Генерируем HTML отчет
  const htmlReport = generateHtmlReport(jsonReport);
  fs.writeFileSync('hreflang-report.html', htmlReport);
  
  console.log('📊 Отчеты сохранены:');
  console.log('- hreflang-report.json');
  console.log('- hreflang-report.html');
}

function generateHtmlReport(data) {
  return `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hreflang Report</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .summary { background: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
        .page { border: 1px solid #ddd; margin: 10px 0; padding: 15px; border-radius: 5px; }
        .error { color: #d32f2f; }
        .success { color: #388e3c; }
        .warning { color: #f57c00; }
        .hreflang-tag { background: #e3f2fd; padding: 5px; margin: 2px; border-radius: 3px; display: inline-block; }
    </style>
</head>
<body>
    <h1>Отчет по Hreflang тегам</h1>
    <div class="summary">
        <h2>Общая статистика</h2>
        <p><strong>Всего страниц:</strong> ${data.summary.totalPages}</p>
        <p><strong>Страниц с дубликатами:</strong> ${data.summary.pagesWithDuplicates}</p>
        <p><strong>Страниц без x-default:</strong> ${data.summary.pagesMissingXDefault}</p>
        <p><strong>Страниц с ошибками:</strong> ${data.summary.pagesWithErrors}</p>
    </div>
    
    ${data.reports.map((report) => `
        <div class="page">
            <h3>${report.url}</h3>
            ${report.duplicates.length > 0 ? `<p class="error"><strong>Дубликаты:</strong> ${report.duplicates.join('; ')}</p>` : ''}
            ${report.missingXDefault ? '<p class="error"><strong>Отсутствует x-default</strong></p>' : ''}
            ${report.missingLanguages.length > 0 ? `<p class="warning"><strong>Отсутствуют языки:</strong> ${report.missingLanguages.join(', ')}</p>` : ''}
            ${report.errors.length > 0 ? `<p class="error"><strong>Ошибки:</strong> ${report.errors.join('; ')}</p>` : ''}
            ${report.hreflangTags.length > 0 ? `
                <p><strong>Hreflang теги:</strong></p>
                <div>
                    ${report.hreflangTags.map((tag) => `<span class="hreflang-tag">${tag.hreflang}: ${tag.href}</span>`).join('')}
                </div>
            ` : ''}
        </div>
    `).join('')}
</body>
</html>
  `;
}

generateReport().catch(console.error);
