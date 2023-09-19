// Module 9 - Lesson 17 - Timers and Time

// Асинхронный код

// Асинхронное программирование достигается путем отложенных вызовов функций, где инициализация асинхронной операции и обработка её результата это разные действия.

// // Will run first
// console.log('First log');

// setTimeout(() => {
//   // Will run last, after 2000 milliseconds
//   console.log('Second log');
// }, 2000);

// // Will run second
// console.log('Third log');

// Таймеры	Timers
// Таймаут	Timeout
// Метод setTimeout() позволяет запланировать запуск функции через определённое время.
//  Возвращает цифровой идентификатор созданного таймера, который используется для его удаления.

// const timerId = setTimeout(callback, delay, arg1, arg2, ...);
// "callback - функция, выполнение которое необходимо запланировать.
// delay - время в миллисекундах, через которое callback-функция будет вызвана один раз.
// Дополнительные аргументы (arg1, arg2 и т. д.) будут переданы callback-функции во время вызова. "

// const button = document.querySelector('button');

// const onClick = () => {
//   const timerId = setTimeout(() => {
//     console.log('I love async JS!');
//   }, 5000);

//   console.log(timerId);
// };

// button.addEventListener('click', onClick);

// метод clearTimeout(id)
// Если нам, по какой-то причине, нужно отменить вызов функции внутри таймаута, используется метод clearTimeout(id), которая принимает идентификатор таймера и очищает (удаляет) его.

// const greet = () => {
//   console.log('Hello!');
// };

// const timerId = setTimeout(greet, 3000);

// clearTimeout(timerId);

// Интервал;
// Метод setInterval()
// Метод setInterval() - это простой способ повторения кода снова и снова с установленным промежутком времени повторений. Синтаксис и параметры такие же как у setTimeout(). В отличие от setTimeout(), интервал запускает выполнение функции не один раз, а регулярно повторяет её через указанный промежуток времени.

// метода clearInterval(id)
// Остановить исполнение можно вызовом метода clearInterval(id).

// const startBtn = document.querySelector('.js-start');
// const stopBtn = document.querySelector('.js-stop');
// let timerId = null;

// startBtn.addEventListener('click', () => {
//   timerId = setInterval(() => {
//     console.log(`I love async JS!  ${Math.random()}`);
//   }, 1000);
//   // console.log(timerId);
// });

// stopBtn.addEventListener('click', () => {
//   clearInterval(timerId);
//   console.log(`Interval with id ${timerId} has stopped!`);
// });

// Дата и время	Date and Time

// Класс Date абстрагирует большую часть работы с датами напрямую. Это позволяет нам представлять моменты во времени как объекты и манипулировать ими заранее определёнными методами. Используя возможности класса Date можно создавать часы, счетчики, календари и другие интерактивные элементы интефрейса.

// Создание даты	Creating date

// Экземпляр объекта Date это объект представляющий определённый момент времени. Создание даты без аргументов, возвращает объект хранящий дату и время на момент его инициализации, то есть текущие. В строчном преобразовании объект возвращает результат вызова метода toString(), поэтому в первом логе мы получим строку, а не объект.

// const date = new Date();

// console.log(date);
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// console.log(date.toString());
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// Unix время	Unix time

// Внутренне даты представлены в миллисекундах прошедших с полночи 1 января 1970 года в часовом поясе UTC. Для компьютера это дата начала отсчета всего времени - Unix время. Поэтому при инициализации даты одним числом, оно представляет собой количество прошедших миллисекунд.

// console.log(new Date(0));
// // "Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)"

// console.log(new Date(15000));
// // "Thu Jan 01 1970 03:00:15 GMT+0300 (Eastern European Standard Time)"

// Метод getTime()
// Метод getTime() возвращает числовое представление даты (timestamp) - количество миллисекунд прошедших с полночи 1 января 1970 года.

// const date = new Date();
// console.log(date);
// console.log(date.getTime()); // 1624021654154

// Установка даты	Setting date

// При создании экземпляра класса Date, можно установить дату строкой или числами. Строка может описывать только дату или дату и время.

// const teamMeetingDate = new Date('March 16, 2030');
// console.log(teamMeetingDate);
// // "Mon Mar 16 2030 00:00:00 GMT+0200 (Eastern European Standard Time)"

// const preciseTeamMeetingDate = new Date('March 16, 2030 14:25:00');
// console.log(preciseTeamMeetingDate);
// // "Mon Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"

// Другой способ создания новых объектов - это передать семь чисел, которые описывают год, месяц (начинается с 0), день, часы, минуты, секунды и миллисекунды. Обязательны только первые три.

// const date = new Date(2030, 2, 16, 14, 25, 0, 0);
// console.log(date);
// // Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)

// Методы	Methods

// Геттеры	Getters
// Геттеры используются для чтения всей даты или отдельной составляющей. Возвращаемое значение зависит от текущего часового пояса установленного на вашем компьютере.

// const date = new Date();
// console.log('Date: ', date);

// // Returns day of month from 1 to 31
// console.log('getDate(): ', date.getDate());

// // Returns day of week from 0 to 6
// console.log('getDay(): ', date.getDay());

// // Returns month from 0 to 11
// console.log('getMonth(): ', date.getMonth());

// // Returns 4-digit year
// console.log('getFullYear(): ', date.getFullYear());

// // Returns hour
// console.log('getHours(): ', date.getHours());

// // Returns minutes
// console.log('getMinutes(): ', date.getMinutes());

// // Returns seconds
// console.log('getSeconds(): ', date.getSeconds());

// // Returns milliseconds
// console.log('getMilliseconds(): ', date.getMilliseconds());

// Сеттеры	Setters

// Все, что можно прочитать можно записать, методы для записи называются также как геттеры, но начинаются с приставки set. Также для всех методов есть их UTC эквивалент.

// const date = new Date('March 16, 2030 14:25:00');

// date.setMinutes(50);
// // "Sat Mar 16 2030 14:50:00 GMT+0200"

// date.setFullYear(2040, 4, 8);
// // "Tue May 08 2040 14:50:00 GMT+0300"

// Форматирование даты	Date formatting

// Объект даты может быть представлен в разных строчных и числовых форматах. Для этого существует целый набор методов.
// toString(), toDateString() и toTimeString() 	возвращают стандартное строчное представление, не заданное жёстко в стандарте, а зависящее от браузера. Единственное требование к нему - читаемость человеком.
// Метод toString()	возвращает дату целиком
// toDateString() и toTimeString()	только дату и время соответственно.

const date = new Date('March 16, 2030 14:25:00');

date.toString();
// "Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"

date.toTimeString();
// "14:25:00 GMT+0200 (Eastern European Standard Time)"

date.toLocaleTimeString();
// "2:25:00 PM"

date.toUTCString();
// "Sat, 16 Mar 2030 12:25:00 GMT"

date.toDateString();
// "Sat Mar 16 2030"

date.toISOString();
// "2030-03-16T12:25:00.000Z"

date.toLocaleString();
// "3/16/2030, 2:25:00 PM"

date.getTime();
// 1899894300000
