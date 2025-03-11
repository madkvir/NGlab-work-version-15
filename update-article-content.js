const fs = require('fs');
const path = require('path');

try {
  // Путь к директории с инструментами
  const toolsDir = path.join(process.cwd(), 'src', 'app', '[locale]', 'tools');
  console.log(`Путь к директории инструментов: ${toolsDir}`);

  // Получаем список всех директорий инструментов
  const toolDirs = fs.readdirSync(toolsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  console.log(`Найдено ${toolDirs.length} директорий инструментов`);

  // Обрабатываем каждую директорию
  let updatedCount = 0;
  let errorCount = 0;

  toolDirs.forEach(toolDir => {
    try {
      const pagePath = path.join(toolsDir, toolDir, 'page.tsx');
      console.log(`Проверяю файл: ${pagePath}`);
      
      // Проверяем, существует ли файл page.tsx
      if (fs.existsSync(pagePath)) {
        let content = fs.readFileSync(pagePath, 'utf8');
        
        // Проверяем, содержит ли файл объект articleContent
        if (content.includes('articleContent') && !content.includes('howItWorks:')) {
          console.log(`Обновляем файл ${toolDir}/page.tsx`);
          
          // Находим место, где определяется объект articleContent
          const articleContentRegex = /const\s+articleContent\s*=\s*React\.useMemo\(\s*\(\)\s*=>\s*\(\{\s*([\s\S]*?)\}\)\s*,\s*\[/;
          const match = content.match(articleContentRegex);
          
          if (match) {
            const articleContentProps = match[1];
            
            // Проверяем, есть ли свойство howItWorksList
            if (articleContentProps.includes('howItWorksList')) {
              // Добавляем свойство howItWorks после howItWorksList
              const updatedContent = content.replace(
                /(howItWorksList:.*?),(\s*)/,
                '$1,\n      howItWorks: t?.articleContent?.howItWorks || [],$2'
              );
              
              // Записываем обновленный файл
              fs.writeFileSync(pagePath, updatedContent, 'utf8');
              console.log(`Файл ${toolDir}/page.tsx успешно обновлен`);
              updatedCount++;
            } else {
              console.log(`В файле ${toolDir}/page.tsx не найдено свойство howItWorksList`);
            }
          } else {
            console.log(`В файле ${toolDir}/page.tsx не удалось найти объект articleContent`);
          }
        } else {
          console.log(`Файл ${toolDir}/page.tsx уже содержит свойство howItWorks или не содержит объект articleContent`);
        }
      } else {
        console.log(`Файл ${pagePath} не существует`);
      }
    } catch (err) {
      console.error(`Ошибка при обработке директории ${toolDir}:`, err);
      errorCount++;
    }
  });

  console.log(`Обновление завершено. Обновлено файлов: ${updatedCount}, ошибок: ${errorCount}`);
} catch (err) {
  console.error('Произошла ошибка:', err);
} 