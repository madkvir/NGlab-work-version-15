import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TOOLS_DIR = path.join(__dirname, '../../app/[locale]/tools');

function removeHreflangFromFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Удаляем импорт generateHrefLangs
    content = content.replace(/import\s*{\s*generateHrefLangs[^}]*}\s*from\s*["'][^"']*generateHrefLangs["'];?\s*/g, '');
    content = content.replace(/import\s*{\s*[^}]*generateHrefLangs[^}]*}\s*from\s*["'][^"']*generateHrefLangs["'];?\s*/g, '');

    // Удаляем alternates: generateHrefLangs(...)
    content = content.replace(/alternates:\s*generateHrefLangs\([^)]*\),?\s*/g, '');

    // Удаляем пустые строки
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Очищен файл: ${path.relative(process.cwd(), filePath)}`);
      modified = true;
    }

    return modified;
  } catch (error) {
    console.error(`❌ Ошибка при обработке ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  items.forEach(item => {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (item === 'layout.tsx') {
      removeHreflangFromFile(fullPath);
    }
  });
}

function main() {
  console.log('🧹 Удаление дублирующихся hreflang тегов...\n');

  // Обрабатываем tools директорию
  if (fs.existsSync(TOOLS_DIR)) {
    processDirectory(TOOLS_DIR);
  }

  // Обрабатываем другие layout файлы
  const otherLayouts = [
    path.join(__dirname, '../../app/[locale]/guide/layout.tsx'),
    path.join(__dirname, '../../app/[locale]/about-us/layout.tsx'),
    path.join(__dirname, '../../app/[locale]/contacts/layout.tsx'),
    path.join(__dirname, '../../app/[locale]/blog/layout.tsx'),
  ];

  otherLayouts.forEach(layoutPath => {
    if (fs.existsSync(layoutPath)) {
      removeHreflangFromFile(layoutPath);
    }
  });

  console.log('\n✅ Удаление дублирующихся hreflang тегов завершено!');
}

main();
