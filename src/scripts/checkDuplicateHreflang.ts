import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

const baseUrl = 'https://neurogenlab.de';
const pages = [
  '/en/tools/intercom',
  '/en/tools/counseling',
  '/en/tools/hubspot',
  '/en/tools/discord',
  '/en/guide',
  '/en/tools/custom-development',
  '/en/tools/jira',
  '/en/tools/ai-assistant',
  '/en/tools/livechat',
  '/en/tools/instagram',
  '/en/tools/anti-spam',
  '/en/tools/zapier',
  '/en/about-us',
  '/en/tools/tables',
  '/en/tools/ai-avatar',
  '/en/tools/whatsapp',
  '/en/tools/microsoft-teams',
  '/en/tools/ai-chat-bot',
  '/en/tools/slack',
  '/en/tools/keepincrm',
  '/en/contacts',
  '/en/tools/ai-voice-bot',
  '/en/tools/best-search'
];

interface HreflangTag {
  href: string;
  hreflang: string;
}

interface PageReport {
  url: string;
  hreflangTags: HreflangTag[];
  duplicates: string[];
  errors: string[];
}

async function checkDuplicateHreflangTags(url: string): Promise<PageReport> {
  const fullUrl = `${baseUrl}${url}`;
  const report: PageReport = {
    url,
    hreflangTags: [],
    duplicates: [],
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
    
    const hreflangMap = new Map<string, string[]>();
    
    for (const match of matches) {
      const hreflang = match[1];
      const href = match[2];
      
      report.hreflangTags.push({ href, hreflang });
      
      if (!hreflangMap.has(hreflang)) {
        hreflangMap.set(hreflang, []);
      }
      hreflangMap.get(hreflang)!.push(href);
    }
    
    // Проверяем дубликаты
    for (const [lang, urls] of hreflangMap) {
      if (urls.length > 1) {
        report.duplicates.push(`${lang}: ${urls.join(', ')}`);
      }
    }
    
  } catch (error) {
    report.errors.push(`Ошибка при проверке ${fullUrl}: ${error}`);
  }
  
  return report;
}

async function generateReport(): Promise<void> {
  console.log('🔍 Проверка дублированных hreflang тегов...\n');
  
  const reports: PageReport[] = [];
  
  for (const page of pages) {
    console.log(`Проверяю ${page}...`);
    const report = await checkDuplicateHreflangTags(page);
    reports.push(report);
    
    if (report.duplicates.length > 0) {
      console.log(`❌ Найдены дубликаты на ${page}:`);
      report.duplicates.forEach(dup => console.log(`   ${dup}`));
    } else if (report.errors.length > 0) {
      console.log(`⚠️  Ошибки на ${page}:`);
      report.errors.forEach(err => console.log(`   ${err}`));
    } else {
      console.log(`✅ ${page} - дубликатов не найдено`);
    }
    console.log('');
  }
  
  // Сохраняем отчет
  const reportData = {
    timestamp: new Date().toISOString(),
    summary: {
      totalPages: reports.length,
      pagesWithDuplicates: reports.filter(r => r.duplicates.length > 0).length,
      pagesWithErrors: reports.filter(r => r.errors.length > 0).length
    },
    reports
  };
  
  fs.writeFileSync(
    path.join(process.cwd(), 'duplicate-hreflang-report.json'),
    JSON.stringify(reportData, null, 2)
  );
  
  console.log('📊 Отчет сохранен в duplicate-hreflang-report.json');
  console.log(`\n📈 Итого: ${reportData.summary.pagesWithDuplicates} страниц с дубликатами из ${reportData.summary.totalPages}`);
}

generateReport().catch(console.error);
