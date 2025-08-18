import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface SeoCheck {
  url: string;
  title?: string;
  description?: string;
  canonical?: string;
  hreflang?: Record<string, string>;
  robots?: string;
  status: 'success' | 'error' | 'warning';
  issues: string[];
}

const LANGUAGES = ['en', 'de', 'es', 'ru', 'uk'];
const baseUrl = 'https://neurogenlab.de';

/**
 * Проверяет SEO параметры страницы
 */
async function checkSeoParams(url: string): Promise<SeoCheck> {
  const result: SeoCheck = {
    url,
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
    
    // Проверяем title
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    if (titleMatch) {
      result.title = titleMatch[1].trim();
      if (result.title.length < 30 || result.title.length > 60) {
        result.issues.push(`Title length: ${result.title.length} characters (should be 30-60)`);
        result.status = 'warning';
      }
    } else {
      result.issues.push('Missing title tag');
      result.status = 'error';
    }

    // Проверяем description
    const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
    if (descMatch) {
      result.description = descMatch[1].trim();
      if (result.description.length < 120 || result.description.length > 160) {
        result.issues.push(`Description length: ${result.description.length} characters (should be 120-160)`);
        result.status = 'warning';
      }
    } else {
      result.issues.push('Missing meta description');
      result.status = 'error';
    }

    // Проверяем canonical
    const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
    if (canonicalMatch) {
      result.canonical = canonicalMatch[1];
      if (result.canonical !== url) {
        result.issues.push(`Canonical mismatch: ${result.canonical} vs ${url}`);
        result.status = 'warning';
      }
    } else {
      result.issues.push('Missing canonical URL');
      result.status = 'warning';
    }

    // Проверяем hreflang
    const hreflangMatches = html.matchAll(/<link[^>]*hreflang=["']([^"']+)["'][^>]*href=["']([^"']+)["']/gi);
    const hreflang: Record<string, string> = {};
    for (const match of hreflangMatches) {
      hreflang[match[1]] = match[2];
    }
    
    if (Object.keys(hreflang).length > 0) {
      result.hreflang = hreflang;
      
      // Проверяем наличие x-default
      if (!hreflang['x-default']) {
        result.issues.push('Missing hreflang x-default');
        result.status = 'warning';
      }
      
      // Проверяем все языки
      for (const lang of LANGUAGES) {
        if (!hreflang[lang]) {
          result.issues.push(`Missing hreflang for ${lang}`);
          result.status = 'warning';
        }
      }
    } else {
      result.issues.push('Missing hreflang tags');
      result.status = 'warning';
    }

    // Проверяем robots
    const robotsMatch = html.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']+)["']/i);
    if (robotsMatch) {
      result.robots = robotsMatch[1];
      if (result.robots.includes('noindex')) {
        result.issues.push('Page is marked as noindex');
        result.status = 'error';
      }
    }

  } catch (error) {
    result.status = 'error';
    result.issues.push(`Fetch error: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }

  return result;
}

/**
 * Генерирует список URL для проверки
 */
function generateSeoTestUrls(): string[] {
  const paths = [
    '',
    '/guide',
    '/blog',
    '/about-us',
    '/contacts',
    '/tools/ai-assistant',
    '/tools/ai-chat-bot'
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
 * Основная функция мониторинга SEO
 */
async function monitorSeo() {
  console.log('🔍 SEO мониторинг запущен...\n');

  const urls = generateSeoTestUrls();
  const results: SeoCheck[] = [];

  for (const url of urls) {
    console.log(`Проверяю: ${url}`);
    const result = await checkSeoParams(url);
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

  console.log('📊 Результаты SEO мониторинга:');
  console.log(`✅ Успешно: ${success.length}`);
  console.log(`⚠️  Предупреждения: ${warnings.length}`);
  console.log(`❌ Ошибки: ${errors.length}`);

  if (errors.length > 0) {
    console.log('\n🚨 Критические проблемы SEO:');
    errors.forEach(result => {
      console.log(`\n${result.url}:`);
      result.issues.forEach(issue => console.log(`  - ${issue}`));
    });
  }

  if (warnings.length > 0) {
    console.log('\n⚠️  Рекомендации по улучшению SEO:');
    warnings.forEach(result => {
      console.log(`\n${result.url}:`);
      result.issues.forEach(issue => console.log(`  - ${issue}`));
    });
  }

  // Сохраняем отчет
  const reportPath = path.join(__dirname, '../../seo-monitor-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log(`\n📄 SEO отчет сохранен в: ${reportPath}`);

  // Создаем HTML отчет
  const htmlReport = generateHtmlReport(results);
  const htmlReportPath = path.join(__dirname, '../../seo-monitor-report.html');
  fs.writeFileSync(htmlReportPath, htmlReport);
  console.log(`📄 HTML отчет сохранен в: ${htmlReportPath}`);
}

/**
 * Генерирует HTML отчет
 */
function generateHtmlReport(results: SeoCheck[]): string {
  const errors = results.filter(r => r.status === 'error');
  const warnings = results.filter(r => r.status === 'warning');
  const success = results.filter(r => r.status === 'success');

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SEO Monitor Report</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .success { color: #28a745; }
        .warning { color: #ffc107; }
        .error { color: #dc3545; }
        .url { font-weight: bold; margin-top: 20px; }
        .issue { margin-left: 20px; color: #666; }
        .summary { background: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
    </style>
</head>
<body>
    <h1>SEO Monitor Report</h1>
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
    `).join('')}
</body>
</html>
  `;
}

// Запускаем мониторинг
monitorSeo().catch(console.error);
