// Module 7 - Lesson 14 - throttledebounce and lazyload

// "use strict";

// Throttle и Debounce

// Подсчет событий при сколле мыши

// const output = document.querySelector(".output");
// let scrollEventCounter = 0;

// document.addEventListener("scroll", () => {
//   scrollEventCounter += 1;
//   output.textContent = scrollEventCounter;
// });

// При подключении библиотек через CDN, на объект window добавляется свойство в котором хранится то, что предоставляет библиотека.
// Имя этого свойства уникально для библиотеки и описано в её документации. Для Lodash это символ нижнего подчёркивания _.
// const result = _.add(2, 3);
// console.log(result); // 5

// Throttle
// Прием throttle контролирует количество раз которое функция может быть вызвана в течение промежутка времени. То есть позволяет вызывать функцию не чаще чем один раз в N миллисекунд, гарантируя ее регулярное выполнение.

// Используя throttle мы не контролируем, как часто браузер будет генерировать события. Мы всего-лишь берем контроль над частотой выполнения функции обработчика события.

// Реализация из библиотеки Lodash ожидает первым аргументом функцию которую необходимо «затормозить», а вторым количество миллисекунд. Возвращает новую функцию для передачи в слушатель события.

// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     console.log("Scroll handler call every 300ms");
//   }, 300)
// );

// const vanillaOutput = document.querySelector(".output.vanilla");
// const throttledOutput = document.querySelector(".output.throttled");
// const eventCounter = {
//   vanilla: 0,
//   throttled: 0,
// };

// document.addEventListener("scroll", () => {
//   eventCounter.vanilla += 1;
//   vanillaOutput.textContent = eventCounter.vanilla;
// });

// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     eventCounter.throttled += 1;
//     throttledOutput.textContent = eventCounter.throttled;
//   }, 300)
// );

// Debounce;
// Прием debounce гарантирует, что функция будет вызвана только если между событиями будет пауза в N миллисекунд. Например, пока пользователь скролит страницу функция не вызовется, но как только он перестал скролить, функция будет вызвана через 300 миллисекунд. Если скролл возобновится раньше чем через 300 миллисекунд после паузы, функция не вызовется.

// const vanillaOutput = document.querySelector(".output.vanilla");
// const throttledOutput = document.querySelector(".output.throttled");
// const debouncedOutput = document.querySelector(".output.debounced");
// const eventCounter = {
//   vanilla: 0,
//   throttled: 0,
//   debounced: 0,
// };

// document.addEventListener("scroll", () => {
//   eventCounter.vanilla += 1;
//   vanillaOutput.textContent = eventCounter.vanilla;
// });

// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     eventCounter.throttled += 1;
//     throttledOutput.textContent = eventCounter.throttled;
//   }, 300)
// );

// document.addEventListener(
//   "scroll",
//   _.debounce(() => {
//     eventCounter.debounced += 1;
//     debouncedOutput.textContent = eventCounter.debounced;
//   }, 300)
// );

// Режимы метода debounce	debounce method modes

// trailing edge (в конце). По умолчанию метод debounce работает в режиме когда функция вызывается через N миллисекунд после паузы между потоками событий.
// leading edge(в начале). Есть задачи когда функцию надо вызвать сразу при наступлении первого события в потоке, а потом игнорировать все последующие события, до паузы между ними, например в 300 миллисекунд. На старте следующего потока событий это поведение повторяется.

const vanillaOutput = document.querySelector('.output.vanilla');
const throttledOutput = document.querySelector('.output.throttled');
const trailingOutput = document.querySelector('.output.trailing');
const leadingOutput = document.querySelector('.output.leading');
const eventCounter = {
  vanilla: 0,
  throttled: 0,
  trailing: 0,
  leading: 0,
};

// Trailing debounce

// document.addEventListener(
//   "scroll",
//   _.debounce(() => {
//     eventCounter.trailing += 1;
//     trailingOutput.textContent = eventCounter.trailing;
//   }, 300)
// );

// // Leading debounce
// document.addEventListener(
//   "scroll",
//   _.debounce(
//     () => {
//       eventCounter.leading += 1;
//       leadingOutput.textContent = eventCounter.leading;
//     },
//     300,
//     { trailing: false, leading: true }
//   )
// );

// document.addEventListener("scroll", () => {
//   eventCounter.vanilla += 1;
//   vanillaOutput.textContent = eventCounter.vanilla;
// });

// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     eventCounter.throttled += 1;
//     throttledOutput.textContent = eventCounter.throttled;
//   }, 300)
// );

// Занятие с преподователем

//  <!-- KAHOOT -->

// Lazy Loading

// Тестовий масив для lazy-loading

// const cats = [
//   'https://i.ytimg.com/vi/iKA6ZXpGcGQ/maxresdefault.jpg',
//   'https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg',
//   'https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg',
//   'https://i.guim.co.uk/img/media/941093798b256e5d1aa6246a08824bc86f62a31f/0_0_5000_3000/master/5000.jpg?width=1300&quality=85&fit=max&s=ea672fb16df8634901283252059baaf8',
//   'https://nypost.com/wp-content/uploads/sites/2/2022/06/reddit-cats-judging-looks-00.jpg?quality=75&strip=all',
//   'https://gdb.voanews.com/09690000-0a00-0242-5408-08da76ebde16_cx0_cy3_cw99_w1200_r1.jpg',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCK8yYjQ6igjrAJyCyXUwV6U7RDkLVc4FVnQ&usqp=CAU',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU',
//   'https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU',
//   'https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU',
//   'https://assets.globalwildlife.org/m/3b6039a74fd067ea/webimage-Tigrinia.jpg',
//   'https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg',
//   'https://www.nhm.ac.uk/content/dam/nhmwww/discover/wild-cats/margay-two-column.jpg.thumb.768.768.jpg',
//   'https://irs.www.warnerbros.com/gallery-v2-jpeg/cats__dogs_photo_12-14571309.jpg',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyGk9Ds3bdd4B404EcoMDrVUKnU5u9KABOg&usqp=CAU',
// ];

// console.log(cats.length);

// const container = document.querySelector('.js-cats');

// const markup = cats
//   .map(
//     (cat) => `<li>
//    <img src="${cat}" alt="cat" loading="lazy" width="300">
// </li>
// <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda nemo sit quas quaerat. Soluta, sint possimus. Eaque, dolore corrupti. Quisquam illum nemo quasi incidunt, enim iste molestias maxime voluptatum sed?</p>`
//   )
//   .join('');

// container.insertAdjacentHTML('beforebegin', markup);

// Throttle & Debounce

// Библиотека lodash подключена
console.log(_);
