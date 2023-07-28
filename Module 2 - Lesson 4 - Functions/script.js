// Модуль 2 - Занятие 4 - Функции	Module 2 - Lesson 4 - Functions

// Объявление функции	Function declaration

// function multiply() {
//   // Тело функции
//   console.log("Это лог при вызове функции multiply");
// }

// multiply();

// Параметры и аргументы	Parameters and arguments

// function multiply(x, y, z) {
//   console.log(`Результат умножения равен ${x * y * z}`);
// }

// multiply(2, 3, 5); // Результат умножения равен 30
// multiply(4, 8, 12); // Результат умножения равен 384
// multiply(17, 6, 25); // Результат умножения равен 2550

// Возврат значения	Value return

// function multiply(x, y, z) {
//   console.log("Код до return выполняется как обычно");

//   // Возвращаем результат выражения умножения
//   return x * y * z;

//   console.log("Этот лог никогда не выполнится, он стоит после return");
// }

// Результат работы функции можно сохранить в переменную
// let result = multiply(2, 3, 5);
// console.log(result); // 30

// result = multiply(4, 8, 12);
// console.log(result); // 384

// result = multiply(17, 6, 25);
// console.log(result); // 2550

// Параметры по умолчанию	Default parameters

// function count(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// }

// count(1, 5); // countFrom = 1, countTo = 5, step = 1
// count(2); // countFrom = 2, countTo = 10, step = 1
// count(); // countFrom = 0, countTo = 10, step = 1

// Псевдомассив arguments	arguments pseudo-array

// function multiply() {
//   let total = 1;

//   for (const argument of arguments) {
//     total *= argument;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

// Преобразование псевдомассива	Pseudo-array conversion
// Используя метод Array.from(), который создаст массив из псевдомассива.

// Используя операцию ... (rest), она позволяет собрать произвольное количество элементов, в нашем случае аргументов, в массив и сохранить его в переменную. Собираем все аргументы используя операцию rest прямо в подписи функции.
// function fn(...args) {
//   // В переменной args будет полноценный массив
// }

// Паттерн «Ранний возврат»	"Return early" pattern

// function withdraw(amount, balance) {
//   if (amount === 0) {
//     console.log("Для проведения операции введите сумму больше нуля");
//   } else if (amount > balance) {
//     console.log("Недостаточно средств на счету");
//   } else {
//     console.log("Операция снятия средств проведена успешно");
//   }
// }

// withdraw(0, 300); // "Для проведения операции введите сумму больше нуля"
// withdraw(500, 300); // "Недостаточно средств на счету"
// withdraw(100, 300); // "Операция снятия средств проведена успешно"

// Рефакторинг кода с помощью Паттерн «Ранний возврат»

// function withdraw(amount, balance) {
//   // Если  условие выполняется, вызывается console.log
//   // и выход из функции. Код идущий после тела if не выполнится.
//   if (amount === 0) {
//     console.log("Для проведения операции введите сумму больше нуля");
//     return;
//   }

//   // Если условие первого if не выполнилось, его тело пропускается
//   // и интерпретатор доходит до второго if.
//   // Если условие выполняется, вызывается console.log и выход из функции.
//   // Код идущий после тела if  не выполнится.
//   if (amount > balance) {
//     console.log("Недостаточно средств на счету");
//     return;
//   }

//   // Если ни один из предыдущих if не выполнился,
//   // интерпретатор доходит до этого кода и выполняет его.
//   console.log("Операция снятия средств проведена");
// }

// withdraw(0, 300); // "Для проведения операции введите сумму больше нуля"
// withdraw(500, 300); // "Недостаточно средств на счету"
// withdraw(100, 300); // "Операция снятия средств проведена"

// Функциональное выражение	Function expression
// Функциональное выражение (function expression) - обычное объявление переменной, значение которой будет функция. Альтернативный способ объявления функции.

// ❌ Ошибка! Не работает вызов до объявления
// multiply(1, 2, 3);

// const multiply = function (x, y, z) {
//   console.log(`Результат умножения равен ${x * y * z}`);
// };

// multiply(4, 5, 6);

// Область видимости	Scope

// Глобальная область видимости	Global scope

// const globalValue = 10;

// console.log(globalValue); // 10

// function foo() {
//   console.log(globalValue); // 10
// }

// for (let i = 0; i < 5; i++) {
//   console.log(globalValue); // 10

//   if (i === 2) {
//     console.log(globalValue); // 10
//   }
// }

// Блочная область видимости	Block scope

// function foo() {
//   const a = 20;
//   console.log(a); // 20

//   for (let i = 0; i < 5; i += 1) {
//     console.log(a); // 20

//     if (i === 2) {
//       console.log(a); // 20
//     }
//   }
// }

// foo();

// // Ошибка! Переменная a не доступна в глобальной области видимости
// // console.log(a);

// for (let i = 0; i < 3; i++) {
//   // Ошибка! Переменная a не доступна в этой области видимости
//   //   console.log(a);
// }

// Стек вызовов	Call Stack

// function fnA() {
//   console.log("Лог внуртри функции fnA до вызова fnB");
//   fnB();
//   console.log("Лог внуртри функции fnA после вызова fnB");
// }

// function fnB() {
//   console.log("Лог внутри функции fnB");
// }

// console.log("Лог перед вызовом fnA");
// fnA();
// console.log("Лог после вызова fnA");

// // "Лог перед вызовом fnA"
// // "Лог внуртри функции fnA до вызова fnB"
// // "Лог внутри функции fnB"
// // "Лог внуртри функции fnA после вызова fnB"
// // "Лог после вызова fnA"

// Стек вызовов	Call stack
// function bar() {
//   console.log("bar");
// }

// function baz() {
//   console.log("baz");
// }

// function foo() {
//   console.log("foo");
//   bar();
//   baz();
// }

// foo();

// ЗАНЯТИЕ С ПРЕПОДАВАТЕЛЕМ

// KAHOOT;

// function greet(name) {
//   console.log(`Welcome ${name}`);
// }

// greet("Mango");

// const c = 20;

// function foo(a, b) {
//   const c = 10;
//   return a + b + c;
// }

// console.log(foo(5, 15));

// function foo(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] *= 2;
//   }
// }

// const numbers = [1, 2, 3, 4, 5];
// foo(numbers);
// console.log(numbers);

// greet();
// const greet = function () {
//   console.log("Welcome");
// };

// greet();
// function greet() {
//   console.log("Welcome");
// }

// function foo() {
//   console.log(arguments);
// }

// // foo([1, 2, 3]);
// foo(5, "Mango", true);

// ЛЕЦИЯ

// Function expression

// const value = 12;

// const foo = function (valA, valB) {
//   const sum = valA + valB;
//   console.log(sum);
// };

// foo(4, 5);
// foo(21, 15);
// foo(value, 125);

// const numbers = [2, 3, 4, 5];

// function foo(valA) {
//   valA.splice(0, 1);
//   return valA;
// }

// console.log(foo);
// console.log(foo(numbers));

// Простые типы данных запоминание по значением, отдельные ячейки памяти
// let a = 12;
// let b = a;

// a += 20;

// console.log("a", a);
// console.log("b", b);

// Сложные типы данных присовение по ссылке, обращение к одной и той же ячейке памяти
// const a = [1, 2, 3];
// const b = a;

// a.splice(0, 1);
// console.log(a);
// console.log(b);

// Function declaration
// Декларативная функция

// foo()
// function foo(){
// console.log('work');
// }

// hoisting https://codeguida.com/post/199

// Псевдомасив arguments

// Псевдомассив arguments без методов, можно перебирать аргументы циклами
// function getSum() {
//   console.log(arguments);

//   for (arg of arguments) {
//     console.log(arg);
//   }
// }

// getSum(5, 6);
// getSum(2, 3, 4, 5, 6);
// getSum(5, 6, 9, 0, 2, 4, 2, 5, 7, 3);

// Метод Array.from  Преобразование псевдомасива в обычный массив

// function getSum() {
//   const arr = Array.from(arguments);
//   console.log(arr);

//   for (arg of arr) {
//     console.log(arg);
//   }
// }
// getSum(2, 3, 4, 5, 6);
// getSum(5, 6, 9, 0, 2, 4, 2, 5, 7, 3);

// Преобразование псевдомассива в массив, вычисление суммы аргументов
// function getSum() {
//   let sum = 0;
//   console.log(arguments);
//   const arr = Array.from(arguments);
//   console.log(arr);
//   for (arg of arr) {
//     sum += arg;
//   }

//   console.log(sum);
// }
// getSum(2, 3, 4, 5, 6);
// getSum(5, 6, 9, 0, 2, 4, 2, 5, 7, 3);

// оператор return - прерывает выполнение функции и возвращает указанное значение

// function getSum() {
//   let sum = 0;
//   const arr = Array.from(arguments);

//   for (arg of arr) {
//     sum += arg;
//   }

//   //   console.log(sum);
//   return sum;
// }

// // getSum(2, 3, 4, 5, 6);

// const result = getSum(2, 3, 4, 5, 6);

// console.log(result);

// Області видимості, присвоєння за посиланням та значенням

// // Example 1 - происходит переназначение переменной
// let someValue = 4;

// if (true) {
//   someValue = 11;
// }

// // 11

// console.log(someValue);

// Example 2 - две переменных в разных областях видимости
// let someValue = 4;

// if (true) {
//   let someValue = 11;
//    console.log(someValue);
//    // 11
// }

// console.log(someValue);
// // 4

// Example 3 - ошибка внутри цикла присвоение значения раньше, чем инициализация
// let someValue = 4;

// if (true) {
//   if (true) {
//     someValue = 24;
//   }
//   let someValue = 11;
// }

// console.log(someValue);
// // Uncaught ReferenceError: Cannot access 'someValue' before initialization at script.js:412:15

// Example 4 - переназначение локальной переменной внутри функции, глобальная не мопенялась

// let someValue = 2;

// function checkScope(someValue) {
//   // let someValue = 2
//   someValue = 45;
//   console.log(someValue);
//   return someValue;
// }

// checkScope(someValue);
// console.log(someValue);
// // 2

// Example 5
// let someValue = 2;

// function checkScope() {
//   someValue = 45;
//   return someValue;
// }

// checkScope(someValue);
// console.log(someValue);

// // Example 6
// let someValue = 2;

// function checkScope() {
//     someValue = 42;
//     return someValue;
// }

// checkScope()

// console.log(someValue);

// Example 7
// let someArray = ["Hello", "my", "name", "scope"];

// function checkScope(arr) {
//   // let arr = someArray;
//   arr.splice(0, 3);
// }

// checkScope(someArray);

// console.log(someArray);

// let someArray = ["Hello", "my", "name", "scope"];

// function checkScope(arr) {
//   // let arr = someArray;
//   arr = Array.from(arr);
//   arr.splice(0, 3);
// }

// checkScope(someArray);

// console.log(someArray);

// Переменные в разных областях вдимости
// const name = 10;

// if (true) {
//   const name = 15;
//   console.log("block", name);
//   if (true) {
//     const name = 44;
//     console.log("block 2", name);
//   }
// }
// console.log("global", name);
// // console.log(qwerty);

// https://developer.mozilla.org/en-US/docs/Web/API/Window/name

// Стек вызовов (call stack)

// function logItem(valA, valB) {
//   const result = getSum(valA, valB);
//   const message = `Result is ${result}`;
//   console.log(message);
// }

// function getSum(a, b) {
//   return a + b;
// }

// logItem(5, 7);

// ПРАКТИКА

// Task-1;

// Створи функцію яка буде перевіряти чи кожен елемент масиву більше ніж вказане значення. Функція приймає два параметри.
// 1 - Масив чисел
// 2 - Число яке потрібно порівнювати з усіма елементами масиву.
// Функція повертає повідомлення про успішну або не успішну перевірку (повідомлення "Success ✅" "Fail ❌")

const numbers = [25, 12, 67, 40, 18];

// function checkValue(arr, target) {
//   let message = "Success ✅";

//   for (const num of arr) {
//    //  console.log(num);
//     if (target >= num) {
//       message = "Fail ❌";
//     }
//   }

//   return message;
// }

// Вариант с паттерном раннего возврата

// function checkValue(arr, target) {
//   for (const num of arr) {
//     //  console.log(num);
//     if (target >= num) {
//       return "Fail ❌";
//     }
//   }

//   return "Success ✅";
// }

// console.log(checkValue(numbers, 10));
// console.log(checkValue(numbers, 15));

// Task-2

// Створити функцію яка буде розбивати початковий масив на потрібну кількість елементів розділюячи на декілька масивів.Функція приймає 2 параметри
// 1 - масив значень
// 2 - потрібну кількість елементіа в масиві
//  Функція повертає масив масивів

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function getCombination(arr, count) {
//   const result = [];

//   for (let i = 0; i < arr.length; i += count) {
//     const combination = arr.slice(i, i + count);
//     //  console.log(combination);
//     result.push(combination);
//   }
//   return result;
// }

// console.log(getCombination(data, 2));
// // [[1, 2], [3, 4],[5, 6],[7, 8]]
// console.log(getCombination(data, 3));

// Example 3 - Площа прямокутника
// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {
//   const arr = dimensions.split(" ");
//   console.log(arr);

//   const firstValue = Number(arr[0]);
//   const secondValue = Number(arr[1]);

//   return firstValue * secondValue;
// }

// console.log(getRectArea("8 11"));
// console.log(getRectArea("15 11"));

// // Example 4
// let someValue = 2;

// function checkScope(someValue) { // let someValue = 2
//     someValue = 45;
//     return someValue;
// }

// checkScope(someValue)

// console.log(someValue);

// Task-4
// Напишіть функції для роботи з колекцією навчальних курсів courses:

// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName) - змінює ім'я на нове

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// function addCourse(name) {
//   if (courses.includes(name)) {
//     return "Ви вже маєте такий курс";
//   }
//   courses.push(name);
// }

// addCourse("Express");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// console.log(addCourse("CSS")); // 'Ви вже маєте такий курс'

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// function removeCourse(name) {
//   const idx = courses.indexOf(name);
//   console.log(idx);

//   if (idx === -1) {
//     return "Курс із таким ім'ям не знайдено";
//   }

//   courses.splice(idx, 1);
// }

// removeCourse("React");
// console.log(courses);
// ['HTML', 'CSS', 'JavaScript', 'PostgreSQL']
// console.log(removeCourse("Vue"));
// 'Курс із таким ім'ям не знайдено'

// Рефакторинг с оператором ~
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT

// console.log("~", ~-1); // 0
// console.log(-(-1 + 1)); // 0
// // -(x + 1)
// // -1 => true => 0 => false
// // 0 => false => -1 true

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// function removeCourse(name) {
//   const idx = courses.indexOf(name);

//   if (!~idx) {
//     return "Курс із таким ім'ям не знайдено";
//   }
//   courses.splice(idx, 1);
// }

// removeCourse("React");
// console.log(courses);
// ['HTML', 'CSS', 'JavaScript', 'PostgreSQL']
// console.log(removeCourse("Vue"));
// 'Курс із таким ім'ям не знайдено'

// const courses = ["HTML", "CSS", "Express", "JavaScript", "React", "PostgreSQL"];
// console.log(courses);

// function updateCourse(oldName, newName) {
//   const idx = courses.indexOf(oldName);

//   if (~idx) {
//     courses[idx] = newName;
//     return;
//   }
//   return "Курс із таким ім'ям не знайдено";
// }

// updateCourse("HTML", "NestJS");

// console.log(courses);

// console.log(updateCourse("qwerty", "NestJS"));
// // console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
