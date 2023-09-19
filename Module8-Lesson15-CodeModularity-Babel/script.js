// Module 8 - Lesson 15 - Code Modularity Babel

// Babel — это бесплатный транскомпилятор JavaScript с открытым исходным кодом, который в основном используется для преобразования кода ECMAScript 2015 + в обратно совместимый код JavaScript

// https://babeljs.io/
// https://babeljs.io/setup#installation

// если ставить пакет npm i - эта зависимость уйдет в продакшн, будет собирать сборщик
// если зависимость нужна только в разработке, добавляется специальный флаг  --save-dev или -D

// Старые браузеры ничего не знают про новые функции, методы и др. JS, поэтому настраивается транспилятор

// Установка Babel в проект

// npm install --save-dev @babel/core @babel/cli

//  в package.json появится
// "devDependencies" - зависимости разработки

// "devDependencies": {
//     "@babel/cli": "^7.22.10",
//     "@babel/core": "^7.22.11"
//   }

// для использования добавляется скрипт, вызывает babel и копирует в папку dist транспиляцию
// указвается из какой папки взять, напр. src и в какую папку положить транспиляцию
// "build": "babel src -d dist"

// npm run build - выполнится копирование файла в папку dist

// по умолчанию Babel делает для последних версий
// Дополнительно устанавливается еще пакет

// npm install @babel/preset-env --save-dev

// создается файл
// babel.config.json - создается файл

// Добавить в файл
// {
//   "presets": ["@babel/preset-env"]
// }

// https://github.com/browserslist/browserslist

// можно настроить поддержку для опеределенных браузеров в зависимости от проекта, чтобы код траспилировался для определенных браузеров

// browserslist - добавляет префиксы и другое

// .browserslistrc - добавить файл с настройками

// defaults and supports es6-module
// maintained node versions
