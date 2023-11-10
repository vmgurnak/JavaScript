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

// const button = document.querySelector('.btn');

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
// //   console.log(timerId);
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

// console.dir(date);
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// console.log(typeof date);

// console.dir(date.toString());
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// console.log(typeof date.toString());

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

// console.log(date);

// Форматирование даты	Date formatting

// Объект даты может быть представлен в разных строчных и числовых форматах. Для этого существует целый набор методов.
// toString(), toDateString() и toTimeString() 	возвращают стандартное строчное представление, не заданное жёстко в стандарте, а зависящее от браузера. Единственное требование к нему - читаемость человеком.
// Метод toString()	возвращает дату целиком
// toDateString() и toTimeString()	только дату и время соответственно.

// const date = new Date('March 16, 2030 14:25:00');

// date.toString();
// // "Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"

// date.toTimeString();
// // "14:25:00 GMT+0200 (Eastern European Standard Time)"

// date.toLocaleTimeString();
// // "2:25:00 PM"

// date.toUTCString();
// // "Sat, 16 Mar 2030 12:25:00 GMT"

// date.toDateString();
// // "Sat Mar 16 2030"

// date.toISOString();
// // "2030-03-16T12:25:00.000Z"

// date.toLocaleString();
// // "3/16/2030, 2:25:00 PM"

// date.getTime();
// // 1899894300000

// ЗАНЯТИЕ РЕПЕТА

// NOTIFICATION

// // Объект элементов
// const refs = {
//   notification: document.querySelector('.js-alert'),
// };
// // Деструктуризация
// const { notification } = refs;

// // Переменные
// const NOTIFICATION_DELAY = 5000;
// let timerId = null;

// // Вызов функции showNotification, добавляет класс js-visible, чтобы нотификация показывалась
// showNotification();

// // Слушатель событие клик
// notification.addEventListener('click', onNotificationClick);
// // Коллбэк-функция для слушателя, убирает класс js-visible, чтобы скрыть нотификацию, удаляет clearTimeout
// function onNotificationClick() {
//   hideNotification();
//   clearTimeout(timerId);
// }

// // Функция для показа нотификации, добавляет класс js-visible и setTimeout для автоматического закрытия
// function showNotification() {
//   notification.classList.add('js-visible');
//   timerId = setTimeout(() => {
//     console.log('Закрываем алерт автоматически');
//     hideNotification();
//   }, NOTIFICATION_DELAY);
// }

// // Функция для скрытия нотификации при клике, убирает класс js-visible
// function hideNotification() {
//   notification.classList.remove('js-visible');
// }

// НАДОЕДАЛКА.

// Всплывает модальное окно, подпищитесь, при скрытии снова всплывает несколько раз

// const PROMT_DELAY = 1000;
// const MAX_PROMT_ATTEMPS = 3;

// let promtCouner = 0;
// let hasSubscribed = false;
// let intervelID = null;

// intervelID = setInterval(() => {
//   if (promtCouner === MAX_PROMT_ATTEMPS || hasSubscribed) {
//     console.log('Нужно остановить интервал');
//     clearInterval(intervelID);
//     return;
//   }
//   console.log('Подпишись на рассылку -' + Date.now());
//   promtCouner += 1;
// }, PROMT_DELAY);

// Подключение Bootstap через npm
// import BSN from './node_modules/bootstrap.native/';
// const myModalInstance = new BSN.Modal('#exampleModal');
// console.log(myModalInstance);

// Date

// const date = new Date();

// console.log(date);
// console.dir(date);

// Разница двух дат
// const date1 = new Date();
// console.log('date1', date1);

// setTimeout(() => {
//   const date2 = new Date();
//   console.log('date1', date1);
//   console.log('date2', date2);
//   console.log(date2 - date1);
// }, 3000);

// Date.now() - не создает новый объект

// const date = Date.now();
// console.log(date);

// ПРАКТИКА. СЕКУНДОМЕР

// // Объект элементов - Elements object
// const refs = {
//   startBtn: document.querySelector('button[data-action-start]'),
//   stopBtn: document.querySelector('button[data-action-stop]'),
//   clockface: document.querySelector('.js-clockface'),
// };

// // Функция обновления интерфейса времени - Time interface update function
// function updateClockface({ days, hours, minutes, seconds }) {
//   refs.clockface.textContent = `${days}:${hours}:${minutes}:${seconds}`;
//   console.log(`${days}:${hours}:${minutes}:${seconds}`);
// }

// // Начальное время 00:00:00:00 при загрзуке и перезагрузке страницы - Initial time 00:00:00:00 when loading and reloading the page
// updateClockface(convertMs(0));

// // Слушатели для кнопок Старт и Стоп - Listeners for the Start and Stop buttons
// refs.startBtn.addEventListener('click', () => timer.start());
// refs.stopBtn.addEventListener('click', () => timer.stop());

// // Объект с методами старт и стоп таймера - An object with timer start and stop methods
// const timer = {
//   intervalId: null,
//   isActive: false,
//   // Метод старт - Start method
//   start() {
//     if (this.isActive) {
//       return;
//     }
//     const startTime = Date.now();
//     this.isActive = true;
//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       // Деструктуризация - Destructuring
//       // const { days, hours, minutes, seconds } = convertMs(deltaTime);
//       //  Вывод таймера в интерфейс и консоль - Outputting the timer to the interface and console
//       // updateClockface({ days, hours, minutes, seconds });
//       updateClockface(convertMs(deltaTime));
//     }, 1000);
//   },
//   // Метод Стоп - Stop method
//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//   },
// };

// // Функция для конвертации мс в дни часы, минуты, секунды - Function to convert ms to days hours, minutes, seconds
// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = addLeadingZero(Math.floor(ms / day));
//   // Remaining hours
//   const hours = addLeadingZero(Math.floor((ms % day) / hour));
//   // Remaining minutes
//   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   // Remaining seconds
//   const seconds = addLeadingZero(
//     Math.floor((((ms % day) % hour) % minute) / second)
//   );

//   return { days, hours, minutes, seconds };
// }

// //Функция для форматирования времени в двузначном формате - Function for formatting time in two-digit format
// function addLeadingZero(value) {
//   return value.toString().padStart(2, '0');
// }

// ПРАКТИКА. СЕКУНДОМЕР. ВАРИАНТ С КЛАССОМ

// // Объект элементов - Elements object
// const refs = {
//   startBtn: document.querySelector('button[data-action-start]'),
//   stopBtn: document.querySelector('button[data-action-stop]'),
//   clockface: document.querySelector('.js-clockface'),
// };

// // Внешняя Функция отрисовки интерфейса - External Interface rendering function
// function updateClockface({ days, hours, minutes, seconds }) {
//   refs.clockface.textContent = `${days}:${hours}:${minutes}:${seconds}`;
//   console.log(`${days}:${hours}:${minutes}:${seconds}`);
// }

// // Класс Timer с методами Старт и Стоп таймера
// class Timer {
//   constructor({ onTick }) {
//     this.intervalId = null;
//     this.isActive = false;
//     this.onTick = onTick;

//     this.init();
//   }

//   // Метод init для инициализации вначале в интерфейсе показвает 0
//   init() {
//     const time = this.convertMs(0);
//     this.onTick(time);
//   }

//   // Метод класса start
//   start() {
//     if (this.isActive) {
//       return;
//     }
//     const startTime = Date.now();
//     this.isActive = true;
//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       //  const timeComponents = convertMs(deltaTime);
//       //  const { days, hours, minutes, seconds } = convertMs(deltaTime);
//       const time = this.convertMs(deltaTime);

//       // //  Передача таймера в интерфейс
//       // updateClockface
//       this.onTick(time);
//     }, 1000);
//   }

//   // Метод класса stop
//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//     //   Очистка интерфейса
//     // const time = this.convertMs(0);
//     // this.onTick(time);
//   }

//   // Метод класса для подсчета значений - переводит мс в дни часы, минуты, секунды
//   convertMs(ms) {
//     // Number of milliseconds per unit of time
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;

//     // Remaining days
//     const days = this.addLeadingZero(Math.floor(ms / day));
//     // Remaining hours
//     const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
//     // Remaining minutes
//     const minutes = this.addLeadingZero(
//       Math.floor(((ms % day) % hour) / minute)
//     );
//     // Remaining seconds
//     const seconds = this.addLeadingZero(
//       Math.floor((((ms % day) % hour) % minute) / second)
//     );

//     return { days, hours, minutes, seconds };
//   }

//   //Метод класса для форматирования времени в двузначном формате
//   addLeadingZero(value) {
//     return value.toString().padStart(2, '0');
//   }
// }

// // Вызов экземпляра класса с методами, внешняя функция для отрисовки передается как свойство
// const timer = new Timer({
//   // свойства onTick ссылка на функцию updateClockface для отрисовки интерфейса
//   onTick: updateClockface,
// });

// // Слушатели
// // refs.startBtn.addEventListener('click', () => timer.start());
// refs.startBtn.addEventListener('click', timer.start.bind(timer));
// // refs.stopBtn.addEventListener('click', () => timer.stop());
// refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

// ЗАНЯТИЕ С ПРЕПОДАВАТЕЛЕМ

// Додатковий матеріал для самостійного ознайомлення
// Event loop documentation
// https://bool.dev/blog/detail/obyasnenie-event-loop-v-javascript-s-pomoshchyu-vizualizatsii
// https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif

// ***********setTimeout*********** \\

// const id = setTimeout(() => {
// console.log('Time is over');
// }, 1000)

// console.log(id);
// // Видалення Timeout за необхідністю
// clearTimeout(id)

// Можливість передати параметри для колбеку
// const id = setTimeout((name, country) => {
//     console.log(`Hello my name is ${name}, i from ${country}`);
// }, 1000, 'Alice', 'Ukraine',)

// ***********setInterval*********** \\

// const id = setInterval(() => {
// console.log('setInterval');
// }, 1000)

// Видалення Timeout за необхідністю
// clearInterval(id)

// Можливість передати параметри для колбеку
// const id = setInterval((name, country) => {
//     console.log(`Hello my name is ${name}, i from ${country}`);
// }, 1000, 'Alice', 'Ukraine')

// Приклад використання setInterval та setTimeout

// Створимо блок з рекламою яка зникне через 10 секундок

// const elements = {
//   content: document.querySelector('.js-content'),
//   text: document.querySelector('.js-text'),
// };

// let counter = 10;

// elements.text.textContent = `Залишилось ${counter} секунд`;

// const id = setInterval(() => {
//   counter -= 1;
//   elements.text.textContent = `Залишилось ${counter} секунд`;
// }, 1000);

// setTimeout(() => {
//   clearInterval(id);
//   elements.content.style.display = 'none';
// }, counter * 1000);

// ***********Синхронний та асинхронний JavaScript*********** \\

// console.log('start');

// setTimeout(() => {
//   console.log(setTimeout);
// }, 0);

// console.log('finish');

// setTimeout(() => {
//   console.log('Hello world');
// }, 0);

// console.time('for');

// for (let i = 0; i < 40000; i += 1) {
//   //   console.log(i);
// }

// console.timeEnd('for');

// ***********Class Date*********** \\

// const currentDate = new Date();

// console.log(currentDate);
// const targetDate = new Date('sep 05 2023')
// console.log(targetDate);

// console.log(targetDate - currentDate);

// ПРАКТИКА

// Потрібно створити два приклади годинника (Електронний та механічний)

// Массив дней недели - Array of days of the week
const arrDay = [
  'Неділя',
  'Понеділок',
  'Вівторок',
  'Середа',
  'Четвер',
  'П`ятниця',
  'Субота',
];

// Массив названий месяцев - Array of month names
const namesOfMonth = [
  'Січень',
  'Лютий',
  'Березень',
  'Квітень',
  'Травень',
  'Червень',
  'Липень',
  'Серпень',
  'Вересень',
  'Жовтень',
  'Листопад',
  'Грудень',
];

// Объект элементов Elements object
const elements = {
  day: document.querySelector('.date-day'),
  date: document.querySelector('.date'),
  month: document.querySelector('.date-month'),
  year: document.querySelector('.date-year'),
  digitalClock: document.querySelector('.digital-clock'),
  secondsArrow: document.querySelector('.clock-seconds__arrow'),
  minutesArrow: document.querySelector('.clock-minutes__arrow'),
  hoursArrow: document.querySelector('.clock-hours__arrow'),
};

// Обновление календаря раз в 1 секунду - Calendar updates every setInterval 1 second
setInterval(() => {
  // Вызов текущего времени - Call current time
  const currentTime = new Date();

  // Объект текущих значенией дня, даты, месяца, года - Object with current values of day, date, month, year
  const current = {
    day: arrDay[currentTime.getDay()],
    date: currentTime.getDate(),
    month: namesOfMonth[currentTime.getMonth()],
    year: currentTime.getFullYear(),
    hours: currentTime.getHours(),
    minutes: currentTime.getMinutes(),
    seconds: currentTime.getSeconds(),
  };

  // Присвоение значений интерфейсу календаря - Assigning Values to the Calendar Interface
  elements.day.textContent = current.day;
  elements.date.textContent = current.date;
  elements.month.textContent = current.month;
  elements.year.textContent = current.year;
  elements.digitalClock.textContent = `Current time ${formatTime(
    current.hours
  )}:${formatTime(current.minutes)}:${formatTime(current.seconds)}`;

  const secondsDeg = (360 / 60) * current.seconds;
  const minutesDeg = (360 / 60) * current.minutes;
  const hoursDeg =
    (360 / 12) * current.hours + (360 / 12 / 60) * current.minutes;
  elements.secondsArrow.style.transform = `rotate(${secondsDeg}deg)`;
  elements.minutesArrow.style.transform = `rotate(${minutesDeg}deg)`;
  elements.hoursArrow.style.transform = `rotate(${hoursDeg}deg)`;
}, 1000);

// Функция форматирования времени, преобрахование к строке, добавление 0 спереди - Time format function, convert to string, add 0 in front
function formatTime(value) {
  return value.toString().padStart(2, '0');
}
