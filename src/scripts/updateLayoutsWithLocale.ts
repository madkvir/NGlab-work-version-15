import fs from 'fs';
import path from 'path';

const layoutsToUpdate = [
  'src/app/[locale]/contacts/layout.tsx',
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
  'src/app/[locale]/privacy/layout.tsx',
  'src/app/[locale]/cookie-policy/layout.tsx',
  'src/app/[locale]/responsible-ai-policy/layout.tsx',
  'src/app/[locale]/tools/ai-security/layout.tsx',
];

function updateLayoutFile(filePath: string): void {
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  Файл не найден: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;

  // Проверяем, есть ли уже generateMetadata функция
  if (content.includes('export async function generateMetadata')) {
    console.log(`✅ ${filePath} уже обновлен`);
    return;
  }

  // Ищем export const metadata = generatePageMetadata
  const metadataRegex = /export const metadata = generatePageMetadata\(([\s\S]*?)\);/;
  const match = content.match(metadataRegex);

  if (match) {
    const args = match[1];
    const argsArray = args.split(',').map(arg => arg.trim());
    
    // Создаем новую generateMetadata функцию
    const newGenerateMetadata = `export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  return generatePageMetadata(${argsArray.join(', ')}, locale);
}`;

    // Заменяем старый export const metadata
    content = content.replace(metadataRegex, newGenerateMetadata);
    
    // Добавляем импорт Metadata если его нет
    if (!content.includes('import { Metadata }')) {
      content = content.replace(
        /import React from "react";/,
        'import React from "react";\nimport { Metadata } from \'next\';'
      );
    }
    
    updated = true;
  }

  if (updated) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Обновлен: ${filePath}`);
  } else {
    console.log(`⚠️  Не удалось обновить: ${filePath}`);
  }
}

function main(): void {
  console.log('🔄 Обновление layout файлов для поддержки локали...\n');
  
  layoutsToUpdate.forEach(filePath => {
    updateLayoutFile(filePath);
  });
  
  console.log('\n✅ Обновление завершено!');
}

main();
