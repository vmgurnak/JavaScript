// Module 8 - Lesson 15 - Code Modularity

// JavaScript вне браузера
// node; - запустится REPL (read-eval-print loop) - интерактивная среда выполнения JS-кода.

const message = 'NodeJS in amazing!';
console.log(message);

// npm init - инициализирует npm в проекте и создает файл package.json

// Установка пакетов
// npm install validator

// NPM загрузил validator и поместил его в node_modules - папку, в которой будут находиться все внешние зависимости.

// В package.json появилась новая зависимость в поле dependencies

// Для того чтобы получить интерфейс пакета в Node.js-коде, необходимо вызвать функцию require("имя-модуля"), аргументом передав ей имя модуля без определения пути - это называется абсолютный импорт. Путь не нужен, так как по умолчанию поиск модуля будет происходить в папке node_modules

// const validator = require('validator');
// // console.log(validator);

// const validateEmail = (email) => {
//   return validator.isEmail(email);
// };

// console.log(
//   'Is mango@mail.com a valid email?: ',
//   validateEmail('mango@mail.com')
// );

// console.log(
//   'Is Mangozedog.com a valid email?: ',
//   validateEmail('Mangozedog.com')
// );

// Выполнив в терминале npm start получим.

// Для того чтобы получить интерфейс пакета в Node.js-коде, необходимо вызвать функцию require("имя-модуля"), аргументом передав ей имя модуля без определения пути - это называется абсолютный импорт.
const Joi = require('joi');

console.log(Joi);

// Типы зависимостей
//  --save-dev - указывает, что добавляется зависимость разработки. Пакет будет установлен локально, в папку node_modules, и будет добавлена запись в поле devDependencies в package.json.

// npm install --save-dev @babel/core @babel/cli
