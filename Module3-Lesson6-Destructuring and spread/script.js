// Модуль 3 - Занятие 6 - Деструктуризация и spread/rest	Module 3 - Lesson 6 - Destructuring and spread/rest

// Синтаксис spread и rest	Spread and Rest Syntax

// spread: передача аргументов	spread: passing arguments

// Операция ... (spread) позволяет распылить коллекцию элементов (массив, строку или объект) в место, где ожидается набор отдельных значений. Конечно есть некоторые ограничения, например нельзя распылить массив в объект и наоборот.

// const temps = [14, -4, 25, 8, 11];

// // В консоли будет массив
// console.log(temps);
// // ❌ Так не сработает, потому что передаём целый массив
// console.log(Math.max(temps)); // NaN

// // В консоли будет набор отдельных чисел
// console.log(...temps);
// // ✅ Распылим коллекцию элементов как отдельные аргументы
// console.log(Math.max(...temps)); // 25

// spread: создание нового массива	spread: creating a new array

// Операция ... (spread) позволяет создать копию массива или «склеить» произвольное количество массивов в один новый. Раньше для этого использовали методы slice() и concat(), но операция распыления позволяет сделать тоже самое в более краткой форме.

// const temps = [14, -4, 25, 8, 11];

// // Это точная, но независимая копия массива temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]

// Порядок распыления важен - он влияет на порядок элементов в новой коллекции.

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// spread: создание нового объекта	spread: creating a new object

// Операция ... (spread) позволяет распылить свойства произвольного количества объектов в один новый.

// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// Порядок распыления имеет значение. Имена свойств объекта уникальные, поэтому свойства распыляемого объекта могут перезаписать значение уже существующего свойства, если их имена совпадают.

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // {propC: 50, propD: 20, propA: 5, propB: 10}

// Во время распыления можно добавлять свойства в произвольное место. Главное помнить про уникальность имени свойства и о том, что его значение может быть перезаписано.

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }

// rest: сбор всех аргументов функции	rest: collecting all function arguments

// Операция ... (rest) позволяет собрать группу независимых элементов в новую коллекцию. Синтаксически это близнец операции распыления, но отличить их просто - распыление это когда ... находится в правой части операции присваивания, а сбор это когда ... находится в её левой части.

// Одна из областей применения операции rest это создание функций которые могут принимать произвольное количество аргументов.

// function multiply(...args) {
//   console.log(args); // массив всех аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// rest: сбор части аргументов функции	rest: collecting part of function arguments

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значение первого аргумента
//   console.log(secondNumber); // Значение второго аргумента
//   console.log(otherArgs); // Массив остальных аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// Деструктуризация объектов	Object Destructuring

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// // Деструктуризируем
// const { title, author, isPublic, rating, coverImage } = book;
// console.log(coverImage); // undefined

// const accessType = isPublic ? "публичном" : "закрытом";
// const message = `Книга ${title} автора ${author} с рейтингом ${rating} находится в ${accessType} доступе.`;

// console.log(message);

// Значения по умолчанию	Default values

// Для того чтобы избежать присвоения undefined при деструктуризации несуществующих свойств объекта, можно задать переменным значения по умолчанию, которые будут присвоены только в случае когда в объекте нет свойства с таким именем.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
// };

// Добавим картинку обложки если её нет в объекте книги
// const {
//   title,
//   coverImage = "https://via.placeholder.com/640/480",
//   author,
// } = book;

// console.log(title); // The Last Kingdom
// console.log(author); // Bernard Cornwell
// console.log(coverImage); // https://via.placeholder.com/640/480

// Изменение имени переменной	Changing variable name

// При деструктуризации можно изменить имя переменной в которую распаковывается значение свойства. Сначала пишем имя свойства из которого хотим получить значение, после чего ставим двоеточие и пишем имя переменной в которую необходимо поместить значение этого свойства.

// Такая запись читается как «Создать переменную firstTitle, в которую поместить значение свойства title из объекта firstBook» и т. д.

// const firstBook = {
//   title: "The Last Kingdom",
//   coverImage:
//     "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };

// const {
//   title: firstTitle,
//   coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
// } = firstBook;

// console.log(firstTitle); // The Last Kingdom
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// const secondBook = {
//   title: "Сон смешного человека",
// };

// const {
//   title: secondTitle,
//   coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
// } = secondBook;

// console.log(secondTitle); // Сон смешного человека
// console.log(secondCoverImage); // https://via.placeholder.com/640/480

// Деструктуризация в циклах	Destructuring in loops

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// Если в объекте немного свойств, деструктуризацию можно выполнить прямо в месте объявления переменной book.

// for (const { title, author, rating } of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// Глубокая деструктуризация	Deep destructuring

// Для деструктуризации свойств вложенных объектов используются те же принципы, что и в трёх предыдущих упражнениях.

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// Деструктуризация массивов	Array Destructuring
// Деструктуризирующее присваивание можно использовать и для массивов, но с некоторыми особенностями.

// Вместо фигурных скобок {} используются квадратные []
// Переменным, указанным в квадратных скобках [], будут последовательно присваиваться значения элементов массива.

// const rgb = [200, 255, 100];
// const [red, green, blue] = rgb;

// console.log(`R:${red},G:${green},B:${blue}`); // "R:200,G:255,B:100"

// При деструктуризации массивов, значение переменной может быть присвоено после ее объявления. На практике это используется редко.

// const rgb = [200, 255, 100];
// let red, green, blue;

// [red, green, blue] = rgb;

// console.log(`R:${red},G:${green},B:${blue}`); // "R:200,G:255,B:100"

// Если переменных больше чем элементов массива, им будет присвоено undefined, поэтому можно указывать значения по умолчанию.

// const rgb = [200, 100, 255];

// const [red, green, blue, alfa = 0.3] = rgb;

// console.log(`R:${red},G:${green},B:${blue},Alfa:${alfa}`); // "R:200,G:100,B:255,Alfa:0.3"

// Иногда из массива необходимо деструктуризировать только первые N элементов, а остальные сохранить в одну переменную в виде массива. При деструкции массива можно распаковать и присвоить оставшуюся часть элементов массива переменной, используя операцию ... (rest).

// const rgb = [200, 255, 100];

// const [red, ...colors] = rgb;

// console.log(red); // "200"
// console.log(colors); // [255, 100]

// Элементы можно пропускать. Допустим, из массива rgb необходимо взять только последнее значение. На практике эта возможность используется редко.

// const rgb = [200, 100, 255];

// const [, , blue] = rgb;

// console.log(`Blue: ${blue}`); // "Blue: 255"

// Паттерн «Объект параметров»	«Parameter Object» Pattern

// Паттерн «Объект параметров» помогает решить эту проблему, заменяя набор параметров всего одним - объектом с именованными свойствами.

// function doStuffWithBook(book) {
//   // Делаем что-то со свойствами объекта
//   console.log(book.title);
//   console.log(book.numberOfPages);
//   // И так далее
// }

// // ✅ Всё понятно
// doStuffWithBook({
//   title: "The Last Kingdom",
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });

// Ещё один плюс в том, что можно деструктуризировать объект в параметре book. Это можно сделать в теле функции.

// function doStuffWithBook(book) {
//   const { title, numberOfPages, downloads, rating, isPublic } = book;
//   console.log(title);
//   console.log(numberOfPages);
//   // И так далее
// }

// doStuffWithBook({
//   title: "The Last Kingdom",
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });

// Или сразу в сигнатуре (подписи) функции, разницы нет.

// function doStuffWithBook({
//   title,
//   numberOfPages,
//   downloads,
//   rating,
//   isPublic,
// }) {
//   console.log(title);
//   console.log(numberOfPages);
//   // And so on
// }

// doStuffWithBook({
//   title: "The Last Kingdom",
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });

// Модуль 3. Заняття 6. Об’єкти.Операції rest та spread
// Lesson with a teacher

// KAHOOT

// Question 1

// const user = {
//   email: "mango@gmail.com",
//   age: 20,
// };

// const { username } = user;
// console.log(username);
// // undefined;

// Question 2

// const user = {
//   email: "mango@gmail.com",
//   age: 20,
// };

// const { username = "User" } = user;
// console.log(username);
// // User;

// Question 3

// const user = {
//   email: "mango@gmail.com",
//   age: 20,
// };

// const { email: userEmail } = user;

// console.log(userEmail);
// // mango@gmail.com
// console.log(email);
// // script.js:366 Uncaught ReferenceError: email is not defined

// Question 3

// const user = {
//   email: "mango@gmail.com",
//   age: 20,
//   location: { lat: 10, lon: 20 },
// };

// const {
//   location: { lat, lon },
// } = user;
// console.log(lat, lon);
// // 10 20;

// Question 4

// function foo({ username } = {}) {
//   console.log(username);
// }
// foo();

// // undefined;

// Question 5

// const values = [10, 3, 17, 84, 12, 6];
// const min = Math.min(...values);
// console.log(min);

// // 3

// Question 6

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [...arr1];
// console.log(arr1 === arr2);

// // false;

// Question 7

// const profile = {
//   username: "Mango",
//   age: 2,
// };
// const profileUpdate = {
//   username: "Polly",
// };
// const updatedProfile = { ...profile, ...profileUpdate };

// console.log(updatedProfile);

// // {username: 'Polly', age: 2}

// Question 8

// const firstObject = { A: 1, B: 2 };
// const secondObject = { A: 3, C: 4 };
// const thirdObject = { A: 5, ...firstObject, ...secondObject, C: 6 };
// console.log(thirdObject);

// // {A: 3, B: 2, C: 6}

// Question 9

// function foo(...args) {
//   console.log(args);
// }
// foo(1, 2, 3, 4, 5);

// // [1, 2, 3, 4, 5];

// Question 10

// function foo(a, b, c, ...args) {
//   console.log(args);
// }
// foo(1, 2, 3, 4, 5);

// // [4, 5];

// Question 11

// function foo({ a, b, c, ...props }) {
//   console.log(props);
// }
// foo({ a: 1, b: 2, c: 3, d: 4, e: 5 });

// // // {d: 4, e: 5}

// Деструктуризация массивов

// const arr = [1, 2, 3, 4, 5];
// // const first = arr[0];
// // const second = arr[1];
// // console.log(second);

// const [first, second, third] = arr;
// console.log(first);
// console.log(second);
// console.log(third);

// Деструктуризация объектов

// const user = {
//   name: "Test name",
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// console.log(user.skills);
// console.log(user.skills.html);

// const { skills } = user;
// console.log(skills);

// const {
//   skills: { html },
// } = user;

// console.log("html", html);

// const {
//   skills,
//   skills: { html, css, js },
// } = user;

// console.log("skills", skills);
// console.log("html", html);

// const user = {
//   name: "Test name",
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };
// const css = "i don`t know";
// const {
//   skills: { css: cssLanguage },
// } = user;

// const { html } = user.skills;
// console.log(html);

// console.log(css);
// console.log(cssLanguage);

// console.log(user.skills.css);

// Деструктуризация в функциях

// const user = {
//   name: "Test name",
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };
// const user2 = {
//   name: "Artem",
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// function getUserName({ name, skills: { html, css, js } } = {}) {
//   console.log(
//     `Hello my name is ${name}, I know html - ${html}, css - ${css} and js -${js}`
//   );
// }

// getUserName(user);
// getUserName(user2);

// function getUserName(obj) {
//   console.log(
//     `Hello my name is ${obj.name}, I know html - ${obj.skills.html}, css - ${obj.skills.css} and js -${obj.skills.js}`
//   );
// }

// getUserName(user);

// Деструктуризация в циклах

// Перебираем массив объектов

// const users = [{ name: "Kate" }, { name: "Alex" }, { name: "Mark" }];

// const names = [];

// // Вариант с деструктуризацией
// for (const { name } of users) {
//   names.push(name);
// }

// // Вариант без деструктуризации
// // for (const user of users) {
// //   names.push(user.name);
// // }

// console.log(names);

// Операторы spread и rest

// ...spred
// ...rest

// spread создание нового массива

// const arr = [1, 2, 3];
// const arr2 = [...arr]; //spread
// arr.splice(0, 1);
// console.log(arr === arr2);
// console.log("arr", arr);
// console.log("arr2", arr2);

// rest

// const arr = [1, 2, 3];
// // деструктуризация
// const [first, ...args] = arr; // rest

// console.log(first);
// console.log(args);
// console.log("arr", arr);

// Применение в функциях

// function foo(...props){//rest

// }
// foo(...arr)// spread

// const arr = [1, 2, 3];

// const user = {
//   name: "Test name",
//   age: 22,
//   city: "Lviv",
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// function foo(first, second, third) {
//   console.log("first", first);
//   console.log("second", second);
//   console.log("third", third);
// }

// Передача трех параметров
// foo("a", "b", "c");

// Передача массива как параметра в первый аргумент
// foo(arr);

// распыление параметров массива spred и передвача отдельных элементов параметрами в аргументы. foo(1, 2, 3)

// foo(...arr);

// нельзя распылить и передать объект, только деструктуризация
// foo(...user);

// псевдомассив arguments используется, когда не знаем количество параметров в функции, но не поддерживает методы

// function foo(a, b, ...args) {
//   console.log(args);
//   // console.log(arguments);
// }

// foo(1, 2, 3, 4);
// foo(1, 2);
// foo(1, 2, 3, 4, 5, 6, 7, 8);

// const user = {
//   name: "Test name",
//   age: 22,
//   city: "Lviv",
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// Деструктуризая name, вложенная деструктуризация свойств в объекте slills, и rest остальных объектов

// function foo({ name, skills: { html, ...props }, ...props2 }) {
//   console.log(name);
//   console.log(html);
//   console.log(props);
//   console.log(props2);
// }
// foo(user);

// Деструктуризация двух элеиментов и rest остальных в объект

// function foo({ name, age, ...props }) {
//   console.log(name);
//   console.log(age);
//   console.log(props);
// }
// foo(user);

// const user = {
//   name: "Test name",
//   age: 22,
//   city: "Lviv",
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// // при копировании объекта с помощью spred записываются в разные ячейки памяти, поэтому объекты не равны
// const copy = { ...user };
// console.log("user", user);
// console.log("copy", copy);
// console.log(copy === user);
// // но вложенные свойства хранятся по той же ссылке, равны, нельзя сделать полную копию объекта
// console.log(copy.skills === user.skills);

// TASKS

// Task - 1 - Деструктуризація

// Паттерн объект параметров

// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// // деструктуризуем параметры функции, приводим к передаваемым аргументам

// function calcBMI({ weight, height }) {
//   const numericWeight = Number(weight.replace(",", "."));
//   const numericHeight = Number(height.replace(",", "."));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// // аргумент передаем объектом
// console.log(
//   calcBMI({
//     weight: "88,3",
//     height: "1.75",
//   })
// );

// Task - 2 - Операція spread

// Напиши функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданими властивостями id та createdAt, а також list зі значенням "default" якщо в partialContact немає такої властивості.

// function createContact(partialContact) {
//   return {
//     id: Math.random(),
//     createdAt: new Date(),
//     list: "default",
//     ...partialContact,
//   };
// }

// // функция принимает объект,
// //   возвращает новый объект,
// //   создает новый ключ id,
// //   новый ключ с датой
// //   ключ list с дефолтным значением

// console.log(
//   createContact({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );
// console.log(
//   createContact({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );

// Task - 3 - Операція rest

// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

// деструктуризация firstName, lasrName и ...rest остальных параметров, которые не меняются в объект
// функция возвращает новый объект, формируем fullName и распыляем props в свойства обїектов

// function transformUsername({ firstName, lastName, ...props }) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...props,
//   };
// }

// function transformUsername(obj) {
//     const changeKeys = ['firstName', 'lastName'];
//     const keys = Object.keys(obj);
//     const result = {
//         fullName: ''
//     };

//     for (const key of keys) {
//         if (changeKeys.includes(key)) {
//             // result.fullName ? result.fullName += ` ${obj[key]}` : result.fullName = obj[key]
//             result.fullName += `${obj[key]} `
//         } else {
//             result[key] = obj[key]
//         }
//     }
//     console.log(result);
// }

// function transformUsername(obj) {
//     const changeKeys = ['firstName', 'lastName'];
//     const keys = Object.keys(obj);
//     const result = {
//         fullName: `${obj.firstName} ${obj.lastName}`
//     };

//     for (const key of keys) {
//         if (!changeKeys.includes(key)) {
//             result[key] = obj[key]
//         }
//     }
//     return result;
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: "Jacob",
//     lastName: "Mercer",
//     email: "j.mercer@mail.com",
//     friendCount: 40,
//   })
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: "Adrian",
//     lastName: "Cross",
//     email: "a.cross@hotmail.com",
//     friendCount: 20,
//   })
// );

// Task - 4 - Деструктуризація

// Напиши функцію так, щоб вона приймала об'єкт параметрів із властивостями companyName та stock та виводила репорт про кількість товарів на складі будь-якої компанії.

// function getStockReport({ companyName, stock }) {
//     const values = Object.values(stock)
//     let total = 0;

//     for(const value of values){
//         total += value
//     }
//     return `${companyName} has ${total} items in stock`;
// }

// console.log(
//     getStockReport({
//         companyName: 'Cyberdyne Systems',
//         stock: {
//             repairBots: 150,
//             defenceBots: 50,
//         },
//     }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//     getStockReport({
//         companyName: 'Belacci',
//         stock: {
//             shoes: 20,
//             skirts: 10,
//             hats: 5,
//         },
//     }),
// ); // "Belacci has 35 item in stock"//

// const rgb = ['122', '180', '255'];
// const [, , blue] = rgb;

// console.log(`Blue ${' '}`); // Blue 255 // Blue

// Вопрос по глубокому копированию,

// функция будет вызывать сама себя, в стеке вызовов будет еще один вызов функции?

// obj {
//   x: 2,
//   y {a: [  ], b: { a: 0, b: 1, с: 2 } }
//   z: {a: 0, b: 1, с: 2}
//     }

// function copyArr(arr){
//   var res = [];
//   for (var i in arr) { res.push(arr[i]); }
//   return res;
// }
// function copyObj(obj){
//   res = {};
//   for (var key in obj) {
//     if (typeof obj[key] === 'object') {
//       if (obj[key].length !== undefined) {
//         res[key] = copyArr(obj[key]);
//       } else {
//         res[key] = copyObj(obj[key]);
//       }
//     } else {
//       res[key] = obj[key];
//     }
//   }
//   return res;
// }

// const numbers = [1, 2, 3, [5, [9, 9], 6]];
// [5, 18, 6] =>29
// [9, 9] => 18
// function sum(arr) {
//     let total = 0;

//     for (const num of arr) {
//         if (Array.isArray(num)) {
//             total += sum(num)
//         } else {
//             total += num;
//         }
//     }
//     return total;
// }
// console.log(sum(numbers));
