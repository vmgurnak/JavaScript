// Practice.

// Module 2 - 3

// Arrays
// Functions.
// Objects.
// Destructuring and spread, rest

// KAHOOT

// const animals = ["cat", "dog"];
// animals.length = 0;
// console.log(animals[0]);

// // undefined;
// // animals.length = 0; - обнуляет массив
// // при обращении к несуществующем или пустому массиву

// console.log([1, 2, 3] === [1, 2, 3]);
// // false;
// сложные типы данных хранятся по ссылкам, два похожих объекта находятся в разных ячейках памяти

// const a = [10];
// const b = a;
// a[0] = 21;
// console.log(a === b);
// // true;
// // b ссылка на массив a, одну и ту же ячейку памяти

// let a = 10;
// const b = a;
// a = 21;
// console.log(a === b);
// // false;
// // примитивные типы данных хранятся в разных ячейках памяти

// Array.prototype.push();
// push() - возвращает длину массива после добавления элемента

// Array.prototype.splice();
// изменяет исходный объект

// Array.prototype.splice();
// Если метод splice() не удаляет элементы массива, возвращает пустой массив

// Array.prototype.concat();
// возвращает новый массив

// Array.prototype.slice();
// возвращает новый массив, который содержит копию элементов исходного массива

// Array.prototype.pop();
//  удаляет последний элемент из конца массива и возвращает удаленный элемент. Если массив пустой, метод возвращает undefined.

// return;
// Оператор return без явно указанного значения возвращает специальное значение undefined.

// return;
// При отсутствии return в теле функции, она все равно вернёт undefined.

// {
//   let x = "block scope";
// }
// console.log(x);
// // script.js: 63 Uncaught ReferenceError: x is not defined
// // переменная x записана в отдельной области видимости, поэтому ошибка

// function checkString(string) {
//   let isCheck;
//   if (string && 0) {
//     isCheck = false;
//   } else {
//     isCheck = true;
//   }
//   return isCheck;
// }

// console.log(checkString("true || flase "));
// // true
// // функция получает строку, строку не пустая, приводится к 1, if false, переходит к else

// console.log({ a: 1 } === { a: 1 });
// // false;

// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };

// const { name, stars, capacity } = hotel;
// console.log(hotel.name);
// console.log(hotel["name"]);

// console.log(name);
// console.log(["hotelName"]);
// const hotelName = "name";
// console.log(hotel[hotelName]);

// // const a = {};
// // const b = {};
// const a = "a";
// const b = "b";
// const c = {
//   d: 21,
//   e: 34,
// };

// c[a] = "Hello world";
// c[b] = 21;
// console.log(c);

// // {d: 21, e: 34, [object Object]: 21}
// // Добавление свойств в объект c помощью[]
// // В объекте не может быть дух одинаковых ключей
// // когда пытаемся объект привести к строке получаем Object object

// Task 1 --------------------

// Напишите функция, которая создает массив с указанной длиной и заполняет его указанными значениями
// Например fillArr(3, "a") возвращает["a", "a", "a"]

function fillArr(length, elem) {
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    arr.push(elem);
  }
  return arr;
}

console.log(fillArr(3, 'a'));
// возвращает["a", "a", "a"]

// Task 2 --------------------------------------

// Напиши скрипт, который сравнивает два массива и выведет в консоль результат все ли элементы одинаковые

const arr1 = [1, 4, 6, 'color', 324, 232, 'list', 11, 9, 'dream', 34, 0, -30];

const arr2 = [
  10,
  4,
  6,
  'color',
  324,
  232,
  'listen  ',
  11,
  9,
  'dream',
  40,
  0,
  -30,
];

const arr3 = [1, 4, 6, 'color', 324, 232, 'list', 11, 9, 'dream', 34, 0, -30];

const arr4 = [10, 254, 6, 'width', 324, 232, 'listen', 11, 9, 'dream', 40];

function arrCompare(array1, array2) {
  // Сравнение массивов по длине на ложь
  if (array1.length !== array2.length) {
    return console.log('Массивы разной длины');
  }
  // Цикл for of перебор массива array1, сравнивает на ложь, есть ли элементы маасива arr1 в массиве arr2
  for (const element of array1) {
    if (!array2.includes(element)) {
      return console.log('Массивы не одинаковые');
    }
  }
  console.log('Массивы одинаковые');
}

arrCompare(arr1, arr4);
arrCompare(arr2, arr3);
arrCompare(arr1, arr3);
arrCompare(arr3, arr4);
arrCompare(arr1, arr3);

// Task 3 --------------------------------------

// Написать функцию, которая создаст новый массив, в котором не будет значений, которые приводятся к false

const array = [
  1,
  0,
  54,
  'doc',
  null,
  'jpg',
  underfined,
  '',
  'png',
  'exe',
  false,
  'mp4',
  NaN,
  'hbs',
];
