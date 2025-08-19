import fs from 'fs';
import path from 'path';

const layoutsToCheck = [
  'src/app/[locale]/privacy/layout.tsx',
  'src/app/[locale]/responsible-ai-policy/layout.tsx',
  'src/app/[locale]/guide/layout.tsx',
  'src/app/[locale]/tools/ai-assistant/layout.tsx',
  'src/app/[locale]/tools/ai-avatar/layout.tsx',
  'src/app/[locale]/tools/ai-voice-bot/layout.tsx',
  'src/app/[locale]/tools/anti-spam/layout.tsx',
  'src/app/[locale]/tools/best-search/layout.tsx',
  'src/app/[locale]/tools/counseling/layout.tsx',
  'src/app/[locale]/tools/custom-development/layout.tsx',
  'src/app/[locale]/tools/discord/layout.tsx',
  'src/app/[locale]/tools/email/layout.tsx',
  'src/app/[locale]/tools/facebook-messenger/layout.tsx',
  'src/app/[locale]/tools/hubspot/layout.tsx',
  'src/app/[locale]/tools/instagram/layout.tsx',
  'src/app/[locale]/tools/intercom/layout.tsx',
  'src/app/[locale]/tools/jira/layout.tsx',
  'src/app/[locale]/tools/keepincrm/layout.tsx',
  'src/app/[locale]/tools/livechat/layout.tsx',
  'src/app/[locale]/tools/microsoft-teams/layout.tsx',
  'src/app/[locale]/tools/salesforce/layout.tsx',
  'src/app/[locale]/tools/slack/layout.tsx',
  'src/app/[locale]/tools/tables/layout.tsx',
  'src/app/[locale]/tools/whatsapp/layout.tsx',
  'src/app/[locale]/tools/zapier/layout.tsx',
];

function fixMetadataImport(filePath: string): void {
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  Файл не найден: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;

  // Проверяем, есть ли generateMetadata функция
  if (content.includes('export async function generateMetadata')) {
    // Проверяем, есть ли импорт Metadata
    if (!content.includes('import { Metadata }')) {
      // Добавляем импорт Metadata после первого import
      const importRegex = /import React from ['"]react['"];?/;
      if (importRegex.test(content)) {
        content = content.replace(
          importRegex,
          'import React from \'react\';\nimport { Metadata } from \'next\';'
        );
        updated = true;
        console.log(`✅ Добавлен импорт Metadata в: ${filePath}`);
      }
    } else {
      console.log(`✅ ${filePath} уже имеет импорт Metadata`);
    }
  } else {
    console.log(`⚠️  ${filePath} не содержит generateMetadata`);
  }

  if (updated) {
    fs.writeFileSync(filePath, content);
  }
}

function main(): void {
  console.log('🔧 Исправление импортов Metadata...\n');
  
  layoutsToCheck.forEach(filePath => {
    fixMetadataImport(filePath);
  });
  
  console.log('\n✅ Исправление завершено!');
}

main();
