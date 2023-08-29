const message = 'Hello';
console.log(message);

// require('имя-модуля');
// Для того чтобы получить интерфейс пакета в Node.js - коде, необходимо вызвать функцию require("имя-модуля"), аргументом передав ей имя модуля без определения пути - это называется абсолютный импорт.

// const validator = require('validator');
// // console.log(validator);

// const validateEmail = (email) => {
//   return validator.isEmail(email);
// };

// console.log(
//   'Is mango@mail.com a valid email?:',
//   validateEmail('mango@mail.com')
// );

// console.log(
//   'Is Mangozedog.com a valid email?:',
//   validateEmail('Mangozedog.com')
// );

// import { hello, goodbye } from './greeter';

// console.log(hello()); // "hello!"
// console.log(goodbye()); // "goodbye!"
