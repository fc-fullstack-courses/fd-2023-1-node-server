// импорт CommonJS
// const MyMath = require('./math'); // по умолчанию
const { MyMath } = require('./math'); // именной
require('./async');

// console.log(MyMath.sum(2, 2));
// console.log(__dirname); // абсолютный путь к папке текущего файла
// console.log(__filename); // абсолютный путь к текущему файлу
// console.log(module);

/*
  Этапы импорта файла через require

  1. resolving - ищем файл
    1.1 нода подключает core modules
    1.2 ищет файл по указанному пути
      1.2.1 с расширением .js
      1.2.2 с расширением .json
    1.3 ищет папку по указанному пути
      1.3.1 читает package.json свойство main
      1.3.2 ищет в папке файлы index.js || index.json
    1.4 ищет папку node_modules
    1.5 кидает ошибку
  2. loading - читаем файл
  3. wrapping - прочитанный файл нода оборачивает в функцию. и передает туда свои данные
  4. evaluation - запуск функции из п.3
  5. caching - сохраняются результаты из п.4 и отдаются данные помечееные на экспорт
*/