// Функции	Functions

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
function bar() {
  console.log("bar");
}

function baz() {
  console.log("baz");
}

function foo() {
  console.log("foo");
  bar();
  baz();
}

foo();
