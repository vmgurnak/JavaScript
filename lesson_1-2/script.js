// Объявление переменных

// let age = 10;
// const message = 'Добро пожаловать';
// const totalPrice = 199;
// const isOpen = true;

// console.log(age);
// console.log(message);
// console.log('Цена', totalPrice);

/***** Примітивні типи даних ****/

// Number

// let value = 10.45;
// console.log(value);

// console.log(5 === 5);
// Особливий підтип NaN
// console.log(NaN === NaN);
// console.log(Number('22.5aa'));
// console.log(undefined + 1);
// console.log(null + 1); // 0 + 1
// console.log(false + 1); // 0
// console.log(true + 1); // 1 + 1

// String

// Типи рядків '' "" ``

// console.log("I'm");

// console.log('Total 25 + 15');
// const total = 25 + 15;
// console.log(`Total ${total}`);

// Boolean (true, false)
// true  => 1
// false => 0

// undefined

// null

// перевірка типу даних з яким працюємо метод typeof
// const value = '10';
// console.log(typeof value);
// console.log(typeof value === 'string');

// Оператор typeof

// const type = typeof totalPrice;
// console.log(type);
// console.log(typeof isOpen);

// Свойство length количество символов в строке

// const long = 'JavaScript is awesome';
// console.log(long.length);

// Вывод данных

// Метод console.log()

// console.log('result', 10 + 15);
// console.log('result', 10 + 15);
// console.log('result', 10 + 15);

// alert('Привіт вчи JS');

// const message = prompt("Введіть і'мя");
// console.log(message);

// const result = confirm('Будеш вчити JS ?');
// console.log(result);

// Метод alert() выводит модальное окно, текст которого соответствует значению переменной (или литерала) которую передадим в скобках.

// alert('Нажимит ОК, чтобы продолжить');

// Получение данных

// Метод confirm(); - выводит модальное окно с сообщением, и две кнопки, Ok и Cancel. При нажатии на Ok, результатом будет true, при нажатии на Cancel - возвращается false.

// const isComing = confirm('Please confirm hotel reservation');
// console.log(isComing);

// Метод prompt() - - выводит модальное окно с полем ввода и кнопками Ok и Cancel. При нажатии Ok, результатом будет то, что ввел пользователь, при Cancel - возвращается null.

// const hotelName = prompt('Please enter desired hotel name');
// console.log(hotelName);

// let value = prompt('Please enter a number!');
// console.log(typeof value); // "string"
// console.log(value); // "5"

/***** Основні оператори *****/

// >
// console.log(25 > 21);

// <
// console.log(25 < 24);

// ==
// console.log('false' == 0);
// console.log(false == 0);

// ===
// console.log(Number('25') === 25);

// <=
// console.log(24 <= 25);
// console.log(25 <= 25);

// >=
// console.log(26 >= 20);
// console.log(26 >= 26);

// !=
// console.log('1' != 1);

// !==
// console.log('1' !== 1);

// Приклади роботи

// console.log(1 == true);

// console.log(1 === true);

// console.log('0' == false);

// console.log('0' === false);

// console.log('Papaya' < 'papaya');

// console.log('a' < 'aAbBc');
// console.log('Papaya' === 'papaya');

/***** Значення які завжди будуть конвертовані до false (Обов'язково!!!) *****/

//  0 (число нуль)
// console.log(Boolean(0));
// "" (порожній рядок)
// console.log(Boolean(''));
// NaN
// console.log(Boolean(NaN));
// undefined
// console.log(Boolean(undefined));
// null
// console.log(Boolean(null));
// false
// console.log(Boolean(false));

/***** Логічні оператори *****/

// const sum = 10
// console.log(0 < sum  && sum < 20);

// !
// console.log(10 !== 10);
// console.log(Boolean(''));
// console.log(!'');
// Двойная инверсия вместо оператора буля
// console.log(!!'');

// ||

// console.log(2 || 0 || 1);

// ?? оператор нулевого сравнения, реагує лише на null undefined, только потом идет дальше, на другие значения не реагирует, они его устраивают

// console.log(0 ?? 1);
// console.log(false ?? 0);
// console.log(null ?? 1);
// console.log(undefined ?? 10);

// let qty; //undefined

// console.log(qty ?? 'Такого товару не знайдено');

// &&
// console.log(false && 1);
// console.log(NaN && 2);

// console.log(1 && 5 && 23);
// console.log(1 && 0 && 23);

// console.log(1 || 0 && 23);

// Приклади роботи

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log( 3 ||true || 4);

// console.log('' || false || 7);

// console.log(null || 2 || undefined);

// console.log('' ??  4);

// console.log(false ?? 7);

// console.log(null ?? 7);

// console.log(undefined ?? 7);

/***** Математичні оператори *****/

// const value = 10;
// +
// const result = value + 15
// -
// const result = value - 5
// *
// const result = 10 + value * 5
// /

// %
// const result = value % 2 !== 0;
// const result = !(value % 2); //=>  10 % 2 => !0
// console.log(result);
// console.log(Boolean(0)) === console.log(!!0);

/***** Комбіновані оператори *****/

// +=

// -=

// *=

// /=

// false => HE HE 0

// Функция Number(val) - приведение к числу

// value = Number(value);
// console.log(value);
// console.log(typeof value);

// const valueA = '5';
// console.log(Number(valueA));
// console.log(typeof Number(valueA));

// console.log(Number('Строка'));
// NaN

// Методы Number.parseInt() и Number.parseFloat()
// Метод Number.parseInt() парсит из строки целое число.
//    Метод Number.parseFloat() парсит из строки дробное число.

// console.log(Number.parseInt('12qwe74')); // 12
// console.log(Number.parseFloat('12.46qwe79')); // 12.46

/***** Методи для роботки з числами (тип даних Number) *****/

// const str = '25.7a32px';

// Number.parseInt()
// console.log(Number.parseInt(str));

// Number.parseFloat()
// console.log(Number.parseFloat(str));

// Number.isNaN()  та метод isNaN()
// const num = Number(str); // NaN
// console.log(Number.isNaN(num));
// console.log(isNaN(num));

// console.log('=====================================');

// const str = '25.7a32px';
// console.log(typeof str);
// console.log(Number.isNaN(str));// NaN //String
// console.log(isNaN(str)); //Number(str) => NaN

// let value;

// value += 1;
// console.log(value);
// console.log(Number.isNaN(value))
// console.log(Number.isNaN(str))
// console.log(num === NaN);

// метод Number.isNaN(val) - Проверка на число
// проверяет, является ли указанное значение NaN или нет. Метод отвечает на вопрос "Это Not A Number?"

// const validNumber = Number('51'); // 51
// console.log(Number.isNaN(validNumber)); // false

// Сложение чисел с плавающей точкой

// console.log(0.1 + 0.2 === 0.3); // false
// console.log(0.1 + 0.2); // 0.30000000000000004

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 * 100 + 0.24 * 100) / 100); // 0.41

// метод toFixed() - результат отсечь до определённого знака после запятой при помощи метода toFixed().

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 + 0.24).toFixed(2)); // 0.41

// let salary = 1300.164256;
// console.log(salary);
// salary = salary.toFixed(2);
// console.log(salary);
// console.log(typeof salary);
// console.log(typeof Number(salary));

// Класс Math

// const value = 11.500
// console.log(Math.floor(value));

// console.log(Math.ceil(value));

// Math.round()
// console.log(Math.round(value));

// console.log(Math.pow(5, 4));
// console.log(5 ** 4);

// Math.floor(num) - возвращает наибольшее целое число, меньшее, либо равное указанному

// console.log(Math.floor(1.7)); // 1

// Math.ceil(num) - возвращает наименьшее целое число, большее, либо равное указанному числу.

// console.log(Math.ceil(1.2)); // 2

// Math.round(num) - возвращает значение числа, округлённое до ближайшего целого

// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// Math.max(num1, num2, ...) - возвращает наибольшее число из набора

// console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...) - возвращает наименьшее число из набора

// console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow(base, exponent) - возведение в степень

// console.log(Math.pow(2, 4)); // 16

// Math.random() - возвращает псевдослучайное число в диапазоне [0, 1)

// console.log(Math.random()); // случайное число между 0 и 1
// console.log(Math.random() * (10 - 1) + 1); // псевдослучайное число от 1 до 10

// Формула, если нужно случайно число от до
// Math.random() * (Max - Min) + Min)

// Аналог возведения в степень

// console.log(2 ** 5);

/***** Методи та властивості для роботки з рядками (тип даних String) *****/

// const str = 'Hello world';
// // length
// console.log(str.length);
// // toLowerCase()
// console.log(str.toLowerCase());
// // toUpperCase()
// console.log(str.toUpperCase());
// indexOf()

// console.log(str.indexOf(' '));
// console.log(str.indexOf('H'));

// console.log(str.includes('world'));

// const str = 'Hello world';

// endsWith()
// console.log(str.endsWith(' world'));

// startsWith()
// console.log(str.startsWith('h'));

// replace()
// console.log(str.replace('l', '🍕'));
// console.log(str);

// // replaceAll()
// console.log(str.replaceAll('l', '🍟'));

// slice()
// console.log(str.slice(0, 5));
// console.log(str.slice(0, str.length - 1));
// console.log(str.slice(-5)); //Вырезать последние 5
// console.log(str);

// Строки

// Конкатенация строк
// let text = 'Mango ' + 'is' + ' happy';
// console.log(text); // Mango is happy

// Шаблонные строки

// const guestName = 'Манго';
// const roomNumber = 207;
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(greeting);
// "Welcome Mango, your room number is 207!"

// Свойство length - количество символов в строке

// console.log(greeting.length);

// Методы toLowerCase() и toUpperCase()

// const welcome = 'Welcome to Bahamas!';
// console.log(welcome.toLowerCase()); // "welcome to bahamas!"
// console.log(welcome.toUpperCase()); // "WELCOME TO BAHAMAS!"
// console.log(welcome); // "Welcome to Bahamas!"

// Метод indexOf() Возвращает позицию (индекс) на которой находится первое совпадение подстроки или -1, если ничего не найдено

// console.log(welcome.indexOf('Welcome to'));
// console.log(welcome.indexOf('Bahamas'));
// console.log(welcome.indexOf('bahamas'));

// Метод includes() Проверяет входит ли подстрока в строку, возвращает буль - true если входит и false в противном случае.

// console.log(welcome.includes('Welcome to'));
// console.log(welcome.includes('bahamas'));

// Метод endsWith() Позволяет определить, заканчивается ли строка символами (подстрокой) указанными в скобках, возвращая true или false.

// console.log(welcome.endsWith('Bahamas!'));
// console.log(welcome.endsWith('bahamas!'));

// Методы replace() и replaceAll()
// Возвращают новую строку, в которой первое (replace) или все совпадения (replaceAll) подстроки заменены на указанное значение

// console.log(welcome.replace('Bahamas', 'Madeyra'));

// const cssFileNames = 'styles.css, about.css, portfolio.css';
// const minifiedCssFileNames = cssFileNames.replaceAll('.css', '.min.css');
// console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

// Метод slice()
// Метод строк slice(startIndex, endIndex) используется для создания копии части или всей строки. Он делает копию элементов строки от startIndex и до, но не включая endIndex и возвращает новую строку, не изменяя оригинал.

// console.log(welcome.slice(0, 10));

// let brand = 'SamSUng';
// console.log(brand);
// console.log(brand[4]);
// console.log(brand.slice(1));
// console.log(brand.slice(1).toLowerCase());
// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);

// Logical Operators

// Логическое «И»
// Оператор && приводит все операнды к булю и возвращает значение одного из них. Левый операнд если его можно привести к false, и правый в остальных случаях.

// const age1 = 20;
// console.log(age1 > 10 && age1 < 30);

// Логическое «ИЛИ»
// Оператор || приводит все операнды к булю и возвращает значение одного из них. Левый операнд если его можно привести к true, и правый в остальных случаях.

// const age2 = 5;
// console.log(age2 < 10 || age2 > 30); // true || false -> true

// Логическое «НЕ»
// Оператор ! приводит операнд к булю, если необходимо, а затем делает инверсию - заменяет его на противоположный true -> false или false -> true.

// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!'Mango'); // !"Mango" -> !true -> false

// **************************************** Практика ****************************** //

// Task - 1

// Виконавши математичні операції та застосувавши шаблоні рядки виведи в консоль загальну кількість та ціну за кожен продукт та за всі продукти в кошику

// const apple = '🍎';

// const appleQuantity = 8;

// const applePrice = 34;

// const appleMessage = `${apple} total cost ${appleQuantity * applePrice}`;
// console.log(appleMessage);
// const lemon = '🍋';

// const lemonQuantity = 3;

// const lemonPrice = 72;

// const lemonMessage = lemon + ' total cost ' + (lemonQuantity + lemonPrice);
// // console.log(lemonMessage);
// const cherry = '🍒';

// const cherryQuantity = 3;

// const cherryPrice = 72;

// const cherryMessage = `${cherry} total cost ${cherryQuantity * cherryPrice}`;

// console.log(cherryMessage);
// const result = `Total ${
//   applePrice * appleQuantity +
//   lemonQuantity * lemonPrice +
//   cherryQuantity * cherryPrice

// console.log(result);

// Task - 2

// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01

// const totalMinutes = 1441;
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// const result = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
// console.log(result);

// Task - 3

// Виконай рефакторинг коду щоб уникнути помилок

// const name = 'Harry'
// const message = `Hello my name is ${name}`
// console.log(message);

// const delivery = 25;
// const price = 190;
// const message = `Total purchase, price ${delivery + price}`;

// console.log(message);

// Task - 4
// Виконай рефакторинг коду так, щоб у змінну value присвоювалося значення змінної incomingValue, якщо воно не рівне undefined або null. В іншому випадку має присвоюватися значення defaultValue. Перевір роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0, false. Використовуй оператор ?? (nullish coalescing operator).

// const incomingValue = 0;
// const defaultValue = 10;
// const value = null ?? defaultValue;
// console.log(value);

// const KEY_AUTHORIZATION = 'qwerty111';
// console.log(KEY_AUTHORIZATION);

/*---MODULE 1 - LESSON 2 - Branches and cycles---*/

// Ветвления

// Инструкция if

/***** Інструкція if та її варіації *****/

// if(){
// }

// if(){
// }else{
// }

// const value = 10;
// if (value === 1) {
//   console.log(1);
// } else if (value === 10) {
//   console.log('first', 10);
// } else if (value === 7) {
//   console.log(7);
// } else if (value === 10) {
//   console.log('second', 10);
// } else {
//   console.log('default');
// }

// const value = 4;
// if (value === 1) {
//   console.log(1);
// } else if (value < 10 && value > 5) {
//   console.log('first', 10);
// } else if (value === 10) {
//   console.log('second', 10);
// } else {
//   console.log('default');
// }

// let cost = 0;
// const subscription = 'pro';
// if (subscription === 'pro') {
//   cost = 100;
// }
// console.log(cost); // 100"

// Инструкция if...else
// Расширяет синтаксис if тем, что в случае если условие приводится к false, выполнится код в фигурных скобках после оператора else.

// let cost;
// const subscription = 'free';

// if (subscription === 'pro') {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost); // 0

// Инструкция else...if
// Блок else...if позволяет добавить после else еще один оператор if с условием. В конце цепочки может быть классический блок else, который выполнится только в случае, когда ни одно из условий не приведётся к true.
// Поэтому подобную запись следует читать как: «ищу первое выполнение условия, игнорирую всё остальное».

// let cost;
// const subscription = 'premium';

// if (subscription === 'free') {
//   cost = 0;
// } else if (subscription === 'pro') {
//   cost = 100;
// } else if (subscription === 'premium') {
//   cost = 500;
// } else {
//   console.log('Invalid subscription type');
// }

// console.log(cost); // 500"

// /***** Тернарний оператор *****/

// Тернарный оператор
// Тернарный оператор используется как более синтаксически краткая замена инструкции if...else, когда одной и той же переменной необходимо присвоить разные значения по условию.

// const age = 20;
// const type = age >= 18 ? 'adult' : 'child';
// console.log(type); // "adult"

// const value = 17;

// value > 15 && value < 20
//   ? console.log('в діапазоні від 15 до 20')
//   : console.log('Спробуйте ще');

// if (value > 15 && value < 20) {
//   console.log('в діапазоні від 15 до 20');
// }

// const value = 15;
// let message;

// value > 15 && value < 20
//   ? (message = 'в діапазоні від 15 до 20')
//   : (message = 'Спробуйте ще');

// console.log(message);

// const value = 17;
// let message;

// message =
//   value > 15 && value < 20 ? 'в діапазоні від 15 до 20' : 'Спробуйте ще';

// console.log(message);

/***** Інструкція switch *****/

// Инструкция switch
// Область применения switch ограничена задачами с одним общим вопросом (что сравнивать) и множеством вариантов ответов (с чем сравнивать).

// let cost;
// const subscription = 'premium';

// switch (subscription) {
//   case 'free':
//     cost = 0;
//     break;

//   case 'pro':
//     cost = 100;
//     break;

//   case 'premium':
//     cost = 500;
//     break;

//   default:
//     console.log('Invalid subscription type');
// }

// console.log(cost); // 500"

// const value = 4;

// switch (value) {
//   case 1:
//     console.log('Один');
//     break;
//   case 3:
//     console.log('Три');
//     break;
//   case 4:
//     console.log('Чотири');
//     break;
//   case 7:
//     console.log('Сім');
//     break;
//   default:
//     console.log('default');
// }

/***** Області видимості *****/ //(Обов'язково !!!)

// Область видимости
// Область видимости переменных (variable scope) - доступность переменных в определённом месте кода.

// Глобальная область видимости используется по умолчанию.

// const value = 5;

// if (true) {
//   console.log('Block scope: ', value); // 5
// }

// console.log('Global scope: ', value); // 5

// Любая конструкция использующая фигурные скобки {} (условия, циклы, функции и т. п.) создает новую локальную область видимости, и переменные, объявленные в этой области видимости, используя let или const, не доступны вне этого блока.

// if (true) {
//   const value = 5;
//   console.log('Block scope: ', value); // 5
// }

// console.log('Global scope: ', value); // ReferenceError: value is not defined

// Глобальна та локальна
// const
// let

// const value = 10;
// let str = 'Hello world';

// if (true) {
//   console.log(str);
//   let number = 22;
//   const str1 = 'I love JS';
//   if (true) {
//     const str2 = 'Home';
//     console.log(str);
//     console.log(str1);
//   }

//   console.log(str1);
//   console.log(str2);
// }

// console.log(hello);
// const hello = 1;

// const value = 10;
// let str = 'Hello world';

// if (true) {
//   // console.log(str);
//   let number = 22;
//   if (true) {
//     console.log(str);
//   }
//   let str = 'I love JS';
// }

// console.log(str);

// switch (1) {
// }

// function someName() {
// }

//  Глобальна та функціональна
// var

// var num = 10;

// if (true) {
//   var num = 15;
// }

// console.log(num);

// function foo() {
//     var str = 'Hello world';
// }

// console.log(str);

// Циклы

/***** Цикл while *****/
// Цикл while - Цикл с предусловием — цикл, который выполняется пока истинно некоторое условие, указанное перед его началом.

// Сделаем счетчик.
// let counter = 0;

// while (counter < 10) {
//   console.log('counter:', counter);
//   counter += 1;
// }

// const str = 'hello world';
// let i = 0;
// while (i < str.length) {
//   console.log(str[i]);
//   i += 1;
// }

// let i = 0;
// while (i < 0) {
//   console.log('Hello');
//   i += 1;
// }

// Будем заполнять места в отеле до тех пор пока текущее количество клиентов не будет равно максимально допустимому.
// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter <= maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

/***** Цикл do while *****/
// Цикл do...while
// Цикл с постусловием - цикл, в котором условие проверяется после выполнения тела цикла. Отсюда следует, что тело всегда выполняется хотя бы один раз.

// let i = 0;

// do {
//   console.log('hello world');
//   i += 1;
// } while (i < 0);

let password = '';

// do {
//   password = prompt('Введите пароль длиннее 4-х символов', '');
// } while (password.length < 5);

// console.log('Ввели пароль: ', password);

// Цикл for
// Цикл со счётчиком - цикл, в котором некоторая переменная изменяет своё значение от заданного начального до конечного значения с некоторым шагом и для каждого значения этой переменной тело цикла выполняется один раз.

// for (let i = 0; i < 5; i += 1) {
//   console.log(i);
// }

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// let i;
// const str = 'hello world';
// for (let i = 0; i < str.length; i += 1) {
//   console.log(str[i]);
// }

// Посчитаем сумму чисел до определенного значения.
// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// Вспомним про операцию a % b и выведем остаток от деления используя цикл.
// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// Оператор break
//  оператор break, который полностью прекращает выполнение цикла и передаёт управление на строку за его телом.

// Найдём число 3. Как только выполнится условие if, цикл прекратит своё выполнение (будет прерван).

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 4) {
//     console.log(`Нашли число ${i}, прерываем выполнение цикла`);
//     break;
//   }
// }

// console.log('Лог после цикла');

// let idx = -1;

// const str = 'Hello world';
// console.log(str.length);
// for (let i = 0; i < str.length; i += 1) {
//   //   console.log(i);
//   if (str[i] === 'o') {
//     idx = i;
//     break;
//   }
// }

// console.log('result', idx);

// Оператор continue

// Прерывает не весь цикл, а только выполнение текущей итерации.

// Используем цикл для вывода только нечетных чисел. Для чётных i срабатывает continue, выполнение тела прекращается и управление передаётся на следующую итерацию.

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log('Нечетное i: ', i); // 1, 3, 5, 7, 9
// }

// Контролировать четные и нечетные числа
// for (let i = 0; i <= 20; i += 1) {
//   if (i % 2 === 0) {
//     console.log('Парне', i);
//     continue;
//   }
//   console.log('Не парне', i);
// }

// **************************************** Практика ****************************** /

// Task - 1
// Потрібно створити світлофор використовуючи конструкцію if
// В propmt() юзер вводить колір який він бачить на світлофорі
// В результаті виконання юзер має отримати повідомлення з дією яку має виконати

// Можливі 4 стани світлофора
// 1 - red, action stop
// 2 - yellow, action ready
// 3 - green, action go
// 4 - Будь-який інший колір або значення відповідно світлофор не працює, action be careful

// let message = prompt('color ?');
// let action;

// if (message) {
//   message = message.toLowerCase();
// }

// if (message === 'red') {
//   action = 'stop';
// } else if (message === 'yellow') {
//   action = 'ready';
// } else if (message === 'green') {
//   action = 'go';
// } else {
//   action = 'be careful';
// }

// console.log(action);
// console.log(message);

// Task - 2
// Виконай рефакторинг попереднього завдання використовуючи конструкцію switch
// Можливі 4 стани світлофора
// 1 - red, action stop
// 2 - yellow, action ready
// 3 - green, action go
// 4 - Будь-який інший колір або значення відповідно світлофор не працює, action be careful

// let message = prompt('color ?');
// let action;

// if (message) {
//   message = message.toLowerCase();
// }

// switch (message) {
//   case 'red':
//     action = 'stop';
//     break;
//   case 'yellow':
//     action = 'ready';
//     break;
//   case 'green':
//     action = 'go';
//     break;
//   default:
//     action = 'be careful';
// }

// console.log(action);

// Task - 3
// Потрібно створити додаток для автоматизації перевірки правильних відповідей на дитячі загадки
// Створи функцію яка буде приймати 2 параметри
// 1 параметр це текст загадки
// 2 правильна відповідь

// Після виклику функції користувач має побачити питання на екрані та поле для вводу відповіді, використовуй propmt()
// Функція має повертати булеве значення з результатом відповіді (true/false)

// function check(text, answer) {
//   //   console.log(answer);
//   let message = prompt(text);
//   if (message) {
//     message = message.toLowerCase();
//   }

//   return message === answer;
// }

// const result = check(
//   'Хоч не літак, а крилатий, Без крил не може працювати.',
//   'вітряк'
// );
// console.log(result);

// check('Хоч не літак, а крилатий, Без крил не може працювати.', 'вітряк');
// check('Через воду він проводить, А сам з місця вік не сходить', 'міст');

// Task - 4
// Потрібно створити функцію яка буде рахувати за скільки днів Равлик зможе виповзти з колодязя
// функція приймає 1 параметр глибину колодязя, функція повертає кількість днів яку равлик витратив на шлях.
// за день Равлик проповзає на 7 м в гору, а за ніч опускається на 2 м в низ
// для вирішення завдання використовуй цикл while

// 42 м, виповзе за 8 днів
// 17 м, виповзе за 3 дні
// 18 м, виповзе за 4 дні

// function getDays(deps) {
//   const daySpeed = 7;
//   const nightSpeed = 2;
//   let total = 0;
//   let days = 0;

//   while (total < deps) {
//     total += daySpeed;
//     days += 1;

//     if (total < deps) {
//       total -= nightSpeed;
//     }
//   }
//   console.log(days);
// }
// getDays(42);

// Task - 5
// Порахуй скільки голосних літер у реченні.

// function countVowel(str) {
//   const vowels = 'aeiou';
//   let counter = 0;
//   for (let i = 0; i < str.length; i += 1) {
//     if (vowels.includes(str[i].toLowerCase())) {
//       counter += 1;
//     }
//   }

//   return counter;
// }
// console.log(countVowel('HELLO WORLD')); // 3
// // console.log(countVowel("Junior Web Developer")) // 8

// Практика доп. занятие

// console.log(Number(false));
// console.log(Number(null));
// console.log('2' > '12');
// console.log(10 >= '7');
// console.log(Number('7'));
// console.log(Boolean(-5));
// console.log(Boolean('0'));
// console.log(3 > 2 > 1);
// console.log('5' + 5);
// console.log('10' > 5);
// console.log(Boolean(0));
// console.log(Number('0'));
// console.log('5' - 5);
// console.log('5' - true);
// console.log('Їжак' > 'їжачок');
// console.log(true && 0 && 'їжачок');
// console.log('Їжак' || 'їжачок');
// console.log((true && 0 && 2) > 0);

// Модуль 2 - Занятие 3 - Массивы

// Создание - Arrays
// const clients = ['Mango', 'Poly', 'Ajax'];
// console.log(clients);

// Доступ к элементам - Access to elements
// const clients = ['Mango', 'Poly', 'Ajax'];

// Указывая в скобках индекс элемента мы получаем его значение
// console.log(clients);
// console.log(clients[0]); // Mango
// console.log(clients[1]); // Poly
// console.log(clients[2]); // Ajax"

// Переопределение	Overriding
// const clients = ['Mango', 'Poly', 'Ajax'];
// clients[0] = 'Kiwi';
// clients[1] = 'Pango';
// console.log(clients); // ["Kiwi", "Pango", "Ajax"]

// Длина массива	Array length
// const clients = ['Mango', 'Poly', 'Ajax'];
// console.log(clients.length); // 3

// Индекс последнего элемента	Last element's index
// const clients = ['Mango', 'Poly', 'Ajax'];
// const lastElementIndex = clients.length - 1;
// console.log(lastElementIndex); // 2
// console.log(clients[lastElementIndex]); // "Ajax"

// Итерация по массиву	Array Iteration

// Цикл for можно использовать для итерации по массиву, то есть «перебрать» его поэлементно.
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// Цикл for...of	for...of loop
// Конструкция for...of объявляет цикл, перебирающий итерируемые объекты, такие как массивы и строки. Тело цикла будет выполняться для значения каждого элемента. Это хорошая замена циклу for если не нужен доступ к счётчику итерации.
// for (const variable of iterable) {
//   // тело цикла
// }
// variable — переменная которая будет хранить значение элемента на каждой итерации.
// iterable — коллекция, которая имеет перечислимые элементы, например массив.

// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//   console.log(client);
// }

// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }

// Операторы break и continue	break and continue statements

// Будем искать имя клиента в массиве имен, если нашли - прервем цикл, так как нет смысла искать дальше, имена у нас уникальные.
// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let message;

// for (const client of clients) {
//   // На каждой итерации будем проверять совпадает ли элемент массива с
//   // именем клиента. Если совпадает то мы записываем в message сообщение
//   // об успехе и делаем break чтобы не искать дальше
//   if (client === clientNameToFind) {
//     message = 'Клиент с таким именем есть в базе данных!';
//     break;
//   }

//   // Если они не совпадают то запишем в message сообщение об отсутствии имени
//   message = 'Клиента с таким именем нету в базе данных!';
// }

// console.log(message); // "Клиент с таким именем есть в базе данных!"

// Другой вариант
// Можно изначально задать message значение неудачи поиска, а в цикле перезаписать его на успех, если нашли имя
// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let message = 'Клиента с таким именем нету в базе данных!';

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = 'Клиент с таким именем есть в базе данных!';
//     break;
//   }
//   // Если не совпадает, то на этой итерации ничего не делаем
// }

// console.log(message); // Клиент с таким именем есть в базе данных!

// Используем цикл для вывода только чисел больше определенного значения.
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// и управление передаётся на следующую итерацию.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// Методы массива
// Методы split() и join()	split() and join() methods

// Метод split(delimiter) превращает строку в массив, «разбив» её по разделителю delimiter. Если разделитель это пустая строка, то получится массив отдельных символов. Разделителем может быть один или несколько символов.

// const name = 'Mango';
// console.log(name.split('')); // ["M", "a", "n", "g", "o"]

// const message = 'JavaScript это интересно';
// console.log(message.split(' ')); // ["JavaScript", "это", "интересно"]

// Метод массивов join(delimiter) соединяет элементы массива в строку. В строке элементы будут разделены символом или группой символов указанных в delimiter. То есть это операция обратная методу строк split(delimiter).

// const words = ['JavaScript', 'это', 'интересно'];
// console.log(words);
// console.log(words.join('')); // "JavaScriptэтоинтересно"
// console.log(words.join(' ')); // "JavaScript это интересно"
// console.log(words.join('-')); // "JavaScript-это-интересно"

// Метод indexOf()	indexOf() method

// indexOf(value) возвращает первый индекс, в котором элемент со значением value был найден в массиве, или число -1, если такого элемента нет. Используйте indexOf тогда, когда необходимо получить непосредственно индекс элемента.

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.indexOf('Poly')); // 2
// console.log(clients.indexOf('Monkong')); // -1

// Проверка множественных условий с includes()	Checking multiple conditions with includes()

// // Выносим варианты в массив
// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// const fruit = 'cherry';
// // Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// Методы push() и pop()	push() and pop() methods

// Метод push() добавляет один или несколько элементов в конец массива, без необходимости указывать индексы добавляемых элементов. Возвращает длину массива после добавления элементов.

// const numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.push(5);
// console.log(numbers); // [1, 2, 3, 4, 5]

// Метод pop() удаляет последний элемент из конца массива и возвращает удаленный элемент. Если массив пустой, метод возвращает undefined.

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]

// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]

// console.log(numbers.pop()); //  2
// console.log(numbers); // [1]

// console.log(numbers.pop()); //  1
// console.log(numbers); // []

// Метод slice()	slice() method

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
// console.log(clients.slice(2)); // ["Poly", "Kiwi"]

// Метод splice()	splice() method

// Удаление	Removal
// const scores = [1, 2, 3, 4, 5];

// // Удаляем три элемента массива, начиная с первого элемента (индекс 0)
// const deletedScores = scores.splice(0, 3);

// // Теперь массив scores содержит два элемента
// console.log(scores); // [4, 5]
// console.log(scores.splice(0, 3));

// // А массив deletedScores содержит три удаленных элемента
// console.log(deletedScores); // [1, 2, 3]

// Добавление	Addition

// const colors = ['red', 'green', 'blue'];

// colors.splice(1, 0, 'yellow', 'pink');
// console.log(colors); // ["red", "yellow", "pink", "green", "blue"]

// Замена	Replacement

const languages = ['C', 'C++', 'Java', 'JavaScript'];

// Заменяем элемент с индексом 1 на новый
// languages.splice(1, 1, 'Python');
// console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// // Заменяем один элемент (с индексом 2) на несколько
// languages.splice(2, 1, 'C#', 'Swift', 'Go');
// console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]

// Метод concat()	concat() method

// Объединяет два или более массива в один. Он не изменяет массив на котором вызывается, а возвращает новый. Порядок аргументов метода влияет на порядок элементов нового массива.

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Monkong', 'Singu'];

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

// console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients); // ["Monkong", "Singu"]

// console.table(newClients);
