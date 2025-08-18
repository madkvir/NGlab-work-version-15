import fs from 'fs';
import path from 'path';

// Список всех файлов с generateHrefLangs
const filesToClean = [
  'src/app/[locale]/tools/ai-avatar/layout.tsx',
  'src/app/[locale]/tools/ai-security/layout.tsx',
  'src/app/[locale]/tools/custom-development/layout.tsx',
  'src/app/[locale]/tools/discord/layout.tsx',
  'src/app/[locale]/tools/email/layout.tsx',
  'src/app/[locale]/tools/best-search/layout.tsx',
  'src/app/[locale]/tools/ai-chat-bot/layout.tsx',
  'src/app/[locale]/tools/facebook-messenger/layout.tsx',
  'src/app/[locale]/tools/intercom/layout.tsx',
  'src/app/[locale]/tools/ai-voice-bot/layout.tsx',
  'src/app/[locale]/tools/anti-spam/layout.tsx',
  'src/app/[locale]/tools/instagram/layout.tsx',
  'src/app/[locale]/tools/zapier/layout.tsx',
  'src/app/[locale]/tools/keepincrm/layout.tsx',
  'src/app/[locale]/tools/jira/layout.tsx',
  'src/app/[locale]/tools/slack/layout.tsx',
  'src/app/[locale]/tools/whatsapp/layout.tsx',
  'src/app/[locale]/tools/livechat/layout.tsx',
  'src/app/[locale]/tools/salesforce/layout.tsx',
  'src/app/[locale]/tools/microsoft-teams/layout.tsx',
  'src/app/[locale]/tools/tables/layout.tsx',
  'src/app/[locale]/blog/[slug]/layout.tsx'
];

function cleanFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️ Файл не найден: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Удаляем импорт generateHrefLangs
    const beforeImport = content;
    content = content.replace(/import\s*{\s*generateHrefLangs[^}]*}\s*from\s*["'][^"']*generateHrefLangs["'];?\s*/g, '');
    content = content.replace(/import\s*{\s*[^}]*generateHrefLangs[^}]*}\s*from\s*["'][^"']*generateHrefLangs["'];?\s*/g, '');
    
    if (content !== beforeImport) {
      modified = true;
    }

    // Удаляем alternates: generateHrefLangs(...)
    const beforeAlternates = content;
    content = content.replace(/alternates:\s*generateHrefLangs\([^)]*\),?\s*/g, '');
    
    if (content !== beforeAlternates) {
      modified = true;
    }

    // Удаляем generateOpenGraphAlternateLocales()
    const beforeOG = content;
    content = content.replace(/alternateLocale:\s*generateOpenGraphAlternateLocales\(\)/g, "alternateLocale: ['de', 'es', 'ru', 'uk']");
    
    if (content !== beforeOG) {
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Очищен: ${filePath}`);
    } else {
      console.log(`ℹ️ Без изменений: ${filePath}`);
    }

  } catch (error) {
    console.error(`❌ Ошибка при обработке ${filePath}:`, error.message);
  }
}

console.log('🧹 Удаление generateHrefLangs из всех файлов...\n');

filesToClean.forEach(file => {
  cleanFile(file);
});

console.log('\n✅ Очистка завершена!');
