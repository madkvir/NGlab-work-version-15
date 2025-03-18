import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

// Получаем __dirname для ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const APP_DIR = path.resolve(process.cwd(), 'src/app/[locale]');

/**
 * Функция для запуска обновления sitemap
 */
function updateSitemap() {
  console.log('Обнаружены изменения в структуре директорий. Обновляем sitemap...');
  try {
    execSync('npm run update-sitemap', { stdio: 'inherit' });
    console.log('Sitemap успешно обновлен!');
  } catch (error) {
    console.error('Ошибка при обновлении sitemap:', error);
  }
}

/**
 * Функция для запуска наблюдения за изменениями
 */
function watchDirectories() {
  console.log(`Запуск наблюдения за изменениями в структуре директорий: ${APP_DIR}`);
  
  // Запускаем обновление при запуске скрипта
  updateSitemap();
  
  // Наблюдаем за изменениями в директории [locale]
  fs.watch(APP_DIR, { recursive: true }, (eventType, filename) => {
    // Проверяем, создана/удалена ли директория
    if (eventType === 'rename' && filename) {
      const fullPath = path.join(APP_DIR, filename);
      
      // Проверяем, является ли это директорией
      try {
        // Даем системе время на завершение операции с файлами
        setTimeout(() => {
          if (fs.existsSync(fullPath) && fs.statSync(fullPath).isDirectory()) {
            console.log(`Обнаружена новая директория: ${filename}`);
            updateSitemap();
          } else if (!fs.existsSync(fullPath) && filename.indexOf('.') === -1) {
            // Если путь не существует и не похож на файл (нет расширения)
            console.log(`Удалена директория: ${filename}`);
            updateSitemap();
          }
        }, 500);
      } catch (err) {
        // Директория была удалена
        if (filename.indexOf('.') === -1) {
          console.log(`Удалена директория: ${filename}`);
          updateSitemap();
        }
      }
    }
  });
  
  console.log('Наблюдение за изменениями запущено. Нажмите Ctrl+C для завершения.');
}

// Запускаем наблюдение
watchDirectories(); 