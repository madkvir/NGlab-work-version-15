import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TOOLS = [
  'ai-assistant',
  'ai-chat-bot',
  'ai-avatar',
  'ai-voice-bot',
  'counseling',
  'intercom',
  'discord',
  'facebook-messenger',
  'jira',
  'anti-spam',
  'hubspot',
  'livechat',
  'whatsapp',
  'salesforce',
  'custom-development',
  'keepincrm',
  'microsoft-teams',
  'slack',
  'email',
  'instagram',
  'zapier',
  'best-search'
];

const LAYOUT_TEMPLATE = `import React from "react";
import HreflangTags from '../../../../components/HreflangTags';

export default function {ToolName}Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <HreflangTags path="tools/{toolPath}" currentLocale={params.locale} />
      {children}
    </>
  );
}
`;

function createToolLayout(toolPath: string) {
  const toolName = toolPath.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('');
  
  const layoutContent = LAYOUT_TEMPLATE
    .replace(/{ToolName}/g, toolName)
    .replace(/{toolPath}/g, toolPath);
  
  const layoutDir = path.join(__dirname, `../../app/[locale]/tools/${toolPath}`);
  const layoutFile = path.join(layoutDir, 'layout.tsx');
  
  // Создаем директорию если её нет
  if (!fs.existsSync(layoutDir)) {
    fs.mkdirSync(layoutDir, { recursive: true });
  }
  
  // Записываем layout файл
  fs.writeFileSync(layoutFile, layoutContent);
  console.log(`✅ Создан layout для: ${toolPath}`);
}

function createAllToolLayouts() {
  console.log('🔧 Создание layout файлов для всех tool страниц...\n');
  
  TOOLS.forEach(tool => {
    createToolLayout(tool);
  });
  
  console.log('\n✅ Все layout файлы созданы!');
}

createAllToolLayouts();
