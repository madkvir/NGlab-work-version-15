import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LANGUAGES = ['en', 'de', 'es', 'ru', 'uk'];

interface UrlCheck {
  url: string;
  status: 'duplicate' | 'valid' | 'error';
  redirectsTo?: string;
  canonical?: string;
}

/**
 * Проверяет URL на дублирование локали
 */
function checkForDuplicateLocale(url: string): boolean {
  const pathSegments = url.split('/').filter(Boolean);
  return pathSegments.length >= 2 && 
         pathSegments[0] === pathSegments[1] && 
         LANGUAGES.includes(pathSegments[0]);
}

/**
 * Генерирует список URL для проверки
 */
function generateTestUrls(): string[] {
  const baseUrl = 'https://neurogenlab.de';
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

  // Правильные URL
  LANGUAGES.forEach(lang => {
    paths.forEach(path => {
      urls.push(`${baseUrl}/${lang}${path}`);
    });
  });

  // Дублированные URL для тестирования
  LANGUAGES.forEach(lang => {
    paths.forEach(path => {
      urls.push(`${baseUrl}/${lang}/${lang}${path}`);
    });
  });

  return urls;
}

/**
 * Проверяет URL и возвращает результат
 */
async function checkUrl(url: string): Promise<UrlCheck> {
  try {
    const response = await fetch(url, {
      method: 'HEAD',
      redirect: 'manual'
    });

    if (checkForDuplicateLocale(url)) {
      if (response.status === 301 || response.status === 302) {
        const location = response.headers.get('location');
        return {
          url,
          status: 'duplicate',
          redirectsTo: location || undefined
        };
      }
    }

    return {
      url,
      status: 'valid'
    };
  } catch (error) {
    return {
      url,
      status: 'error'
    };
  }
}

/**
 * Основная функция проверки
 */
async function checkDuplicateUrls() {
  console.log('🔍 Проверка дублированных URL...\n');

  const urls = generateTestUrls();
  const results: UrlCheck[] = [];

  for (const url of urls) {
    const result = await checkUrl(url);
    results.push(result);
    
    if (result.status === 'duplicate') {
      console.log(`❌ Дублированный URL: ${url}`);
      console.log(`   → Редирект на: ${result.redirectsTo}\n`);
    } else if (result.status === 'error') {
      console.log(`⚠️  Ошибка при проверке: ${url}\n`);
    }
  }

  const duplicates = results.filter(r => r.status === 'duplicate');
  const errors = results.filter(r => r.status === 'error');
  const valid = results.filter(r => r.status === 'valid');

  console.log('📊 Результаты проверки:');
  console.log(`✅ Правильные URL: ${valid.length}`);
  console.log(`❌ Дублированные URL: ${duplicates.length}`);
  console.log(`⚠️  Ошибки: ${errors.length}`);

  if (duplicates.length > 0) {
    console.log('\n🚨 Обнаружены дублированные URL!');
    console.log('Рекомендуется проверить middleware и настройки редиректов.');
  } else {
    console.log('\n✅ Дублированных URL не обнаружено.');
  }

  // Сохраняем результаты в файл
  const reportPath = path.join(__dirname, '../../duplicate-urls-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log(`\n📄 Отчет сохранен в: ${reportPath}`);
}

// Запускаем проверку
checkDuplicateUrls().catch(console.error);
