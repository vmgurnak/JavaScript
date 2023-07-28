// Module 1 - Lesson 1 - Variables and Types

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
