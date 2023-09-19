// Module 8 - Lesson 15 - Code Modularity

// Node.js	Node.js
// Node.js - легкая и эффективная среда выполнения JavaScript. Позволяет писать высокопроизводительные серверные приложения и инструменты. Node.js построен на JavaScript-движке V8 и написан на C++.

// node	После установки в терминале будет доступна команда node.
// node --version	проверьте версию, запустив в консоли команду node с флагом version.

// JavaScript вне браузера

// node; - запустится REPL (read-eval-print loop) - интерактивная среда выполнения JS-кода.

// const message = 'NodeJS in amazing!';
// console.log(message);

// Теперь в консоли запускаем файл с помощью команды node index.js и получаем тот же результат - вывод строки непосредственно в терминале.

// node index.js

// Пакетный менеджер npm	NPM Package Manager

// NPM (node package manager)	 пакетный менеджер Node.js. Он устанавливает нужные пакеты и предоставляет удобный интерфейс для работы с ними.

// Команды NPM	NPM commands

// npm init - инициализирует npm в проекте и создает файл package.json
// npm install - устанавливает все зависимости перечисленные в package.json
// npm list --depth=0 - выведет в терминале список локально установленных пакетов с номерами их версий, без зависимостей
// npm install [package-name] - установит пакет локально в папку node_modules
// npm uninstall [package-name] - удалит пакет, установленный локально и обновит package.json
// npm start и npm test - запустит скрипт start или test, расположенный в package.json
// npm run [custom-script] - запустит кастомный скрипт, расположенный в package.json
// npm outdated - используется для поиска обновлений, обнаружит совместимые версии программно и выведет список доступных обновлений
// npm update - обновит все пакеты до максимально разрешенной версии

// npm init - инициализирует npm в проекте и создает файл package.json
// npm init --yes
// npm init --y

// package.json;
// отслеживает зависимости, содержит служебную информацию, позволяет писать npm-скрипты и служит инструкцией при создании нового проекта на основе уже готовых настроек

// npm config set init.author.name "YOUR_NAME"
// npm config set init.author.email "YOUR_EMAIL"

// npm-скрипты	npm scripts

// {
//   "scripts": {
//     "start": "node index.js"
//   }
// }

// npm start
// Теперь мы можем запустить его в терминале командой npm start.

// npm run имя-скрипта
// Если создать скрипт с любым другим именем, кроме start или test, он будет запускаться как npm run имя - скрипта

// Установка пакетов	Installing packages

// npm install validator

// NPM загрузил validator и поместил его в node_modules - папку, в которой будут находиться все внешние зависимости.
// В package.json появилась новая зависимость в поле dependencies

//  package-lock.json - это журнал снимков дерева зависимостей проекта. Он гарантирует, что команда разработчиков использует одни и те же версии зависимостей. NPM автоматически обновляет его при добавлении, удалении и обновлении пакетов.

// require("имя-модуля")
// абсолютный импорт.

// Для того чтобы получить интерфейс пакета в Node.js-коде, необходимо вызвать функцию require("имя-модуля"), аргументом передав ей имя модуля без определения пути - это называется абсолютный импорт. Путь не нужен, так как по умолчанию поиск модуля будет происходить в папке node_modules

// const validator = require('validator');
// console.log(validator);

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

// Выполнив в терминале npm run script.js

// Удаление пакетов	Removing packages

// npm uninstall validator

// Установка определенной версии пакета	Installing a specific package version

// npm install validator@1.0.0

// Типы зависимостей	Types of dependencies

// --save - указывает, что добавляется зависимость, которая войдет в финальный продукт. Пакет будет установлен локально, в папку node_modules и будет добавлена запись в поле dependencies в package.json.
//  --save-dev - указывает, что добавляется зависимость разработки. Пакет будет установлен локально, в папку node_modules, и будет добавлена запись в поле devDependencies в package.json.
//  --global - указывает, что добавляется глобальная зависимость, то есть инструмент, который доступен для любого проекта. Пакет будет установлен глобально (в систему).

// Управление версиями пакетов

// можно открыть package.json и вручную поменять версии пакетов, после чего выполнить npm install.

// npm outdated	используется для поиска обновлений, обнаружит совместимые версии программно.
// npm update	обновит все пакеты до максимально разрешенной версии.
// npm update [имя-пакета]	обновит указанный пакет.

// Управление кэшем	Cache management
// папка.npm;
// Кэш хранится в папке .npm вашего домашнего каталога.

// npm cache clean

// Модульность кода	Code Modularity

// Конструкция import и export

// index.js;

// import { hello, goodbye } from './greeter.js';

// console.log(hello()); // "hello!"
// console.log(goodbye()); // "goodbye!"

// Первый способ - это использовать ключевое слово export перед всеми сущностями, которые необходимо экспортировать.
// Они будут добавлены как свойства в экспортируемый объект.
// При импорте мы деструктуризируем свойства из импортируемого объекта.

// import { square, diag } from './greeter.js';

// console.log(square(11)); // 121
// console.log(diag(4, 3)); // 5

// Второй способ - это явно указать объект со свойствами для экспорта.

// import { square, diag } from './greeter.js';

// console.log(square(11)); // 121
// console.log(diag(4, 3)); // 5

// Третий способ - namespace import.

// Следующий синтаксис импортирует все экспорты модуля как объект с указанным именем. Это называется namespace import.

// import * as myModule from './greeter.js';

// console.log(myModule.square(11)); // 121
// console.log(myModule.diag(4, 3)); // 5

// Default export

// Часто модуль экспортирует всего одну сущность, такой экспорт удобен для импорта. Экспорт по умолчанию - самое главное экспортируемое значение, которое может быть чем угодно: переменной, функцией, классом и т. д.

import myFunc from './greeter.js';

myFunc();
