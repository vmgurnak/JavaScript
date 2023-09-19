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

let password = "";

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
