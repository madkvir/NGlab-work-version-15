import * as fs from 'fs';
import * as path from 'path';

const toolsDir = path.join(process.cwd(), 'src/app/[locale]/tools');

function updateLayoutFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Добавляем импорт утилит если его нет
  if (!content.includes('generateHrefLangs')) {
    content = content.replace(
      'import { Metadata } from "next";',
      'import { Metadata } from "next";\nimport { generateHrefLangs, generateOpenGraphAlternateLocales } from "../../../../utils/generateHrefLangs";'
    );
  }

  // Обновляем alternateLocale в OpenGraph
  content = content.replace(
    /alternateLocale:\s*\[['"]de['"],\s*['"]es['"],\s*['"]ru['"],\s*['"]uk['"]\]/,
    'alternateLocale: generateOpenGraphAlternateLocales()'
  );

  // Получаем путь инструмента из структуры файловой системы
  const toolPath = filePath
    .split('tools')[1]
    .split('layout.tsx')[0]
    .replace(/\\/g, '/')
    .replace(/\/$/, '');

  // Заменяем блок alternates на вызов generateHrefLangs
  content = content.replace(
    /alternates:\s*{[\s\S]*?},/,
    `alternates: generateHrefLangs('tools${toolPath}'),`
  );

  fs.writeFileSync(filePath, content);
}

function processDirectory(dir: string) {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (item === 'layout.tsx') {
      console.log(`Updating ${fullPath}`);
      updateLayoutFile(fullPath);
    }
  }
}

processDirectory(toolsDir); 