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
// console.log(_);

// console.log(_.map());

// Проверка подключения только метода debounce   библиотеки lodash
// console.log(debounce);
// Проверка подключения только метода debounce   библиотеки throttle
// console.log(throttle);

// const input = document.querySelector('.js-search');
// input.addEventListener(
//   'input',
//   debounce(handlerInput, 1000, {
//     // leading: true,
//     // trailing: false,
//   })
// );

// function handlerInput(evt) {
//   console.log(evt.target.value);
// }

// const input = document.querySelector('.js-search');
// input.addEventListener(
//   'input',
//   throttle(handlerInput, 500, {
//     leading: true,
//     trailing: false,
//   })
// );

// function handlerInput(evt) {
//   console.log(evt.target.value);
// }

// -----------------ПРАКТИКА-------------------

// Потрібно створити гру хрестики нулики.
// Відмалюй розмітку ігрового поля для контейнера з класом "content", для кожної клітинки застосуй клас "item"
// Реалізуй делегування подій на ігровому полі для можливості ходу.
// Скріпт має самостійно визначати переможця гри та виводити модальне вікно з переможцем (X/O)
// Для історії ходів наших гравців (Х/О) потрібно щоб кожна клітинка ігрового поля містила дата атрибут id
// Створи скріпт для перевірки виграшної комбінації, список всіх можливих виграшних комбінацій знаходиться в масиві combination.
// Для виводу модального вікна застосуй бібліотеку basiclightbox
// Після визначення переможця обов'язково підготуй ігрове поле для наступної гри

// Проверка подключения библиотеки basicLightbox
console.log(basicLightbox);

const combinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [1, 5, 9],
  [3, 5, 7],
  [3, 6, 9],
];

// Поиск div.js-content
const container = document.querySelector('.js-content');

// Массивы для истории игроков - два пустых масива
const historyX = [];
const historyO = [];

// Создание игрока
let player = 'X';

// Функция по созданию разметки
// Создание разметки 9 div в контейнере
// На каждой итерации нужно создать div и поместить в  dom
function createMarkup() {
  // переменная markup внутри функции, чтобы обнулялась
  let markup = '';
  for (let i = 1; i <= 9; i += 1) {
    markup += `<div class="item js-item" data-id="${i}"></div>`;
  }
  container.innerHTML = markup;
}
// Вызов функции по созданию разметки
createMarkup();

// Слушатель по клику с делегированием
container.addEventListener('click', handlerClick);

function handlerClick(evt) {
  // Проверка для клика по отсутствию класса js-item с инверсией или квадратик не пустой (чтобы нельзя было перезаписывать, менять x на о),
  if (!evt.target.classList.contains('js-item') || evt.target.textContent) {
    // Выход, если клик не по квадратику или уже заполнен
    return;
  }

  // Получение дата атрибута при клике, приведение до числа
  const itemId = Number(evt.target.dataset.id);
  // Переменная результата, по умолчанию false
  let result = false;

  // Проверки, кто сделал ход Х или О, и добавление в массивы историй ходов, запись в результат checkWinner(history) при условии, ято количество ходов-длина массива историй больше или равна 3,
  if (player === 'X') {
    historyX.push(itemId);
    result = historyX.length >= 3 && checkWinner(historyX);
  } else {
    historyO.push(itemId);
    result = historyO.length >= 3 && checkWinner(historyO);
  }

  // Создание модального окна const instance = basicLightbox.create и вызов instance.show с дополнительной колбэк-функцией restart()
  // При условии result
  if (result) {
    const instance = basicLightbox.create(`
	    <div class="box">
            <h1>Player - ${player} is Winner 😎</h1>
        </div>`);
    // Вызов модалки с вызовом коллбэка restart()
    instance.show(() => restart());
    return;
  }

  // Случай ничья
  // Переменная общая длина историй равна длине массива вариантов
  const isEnd = historyO.length + historyX.length === container.children.length;
  if (isEnd) {
    const instance = basicLightbox.create(`
	    <div class="box">
            <h1>End Game 😂</h1>
        </div>`);
    instance.show(() => restart());
    return;
  }

  // Присвоение значения для игрока Х или О
  evt.target.textContent = player;
  player = player === 'X' ? 'O' : 'X';
}

// Функция для определения победителя
// метод some(на каждой итерации получаем массив item)
// условием для some будет, что каждый элемент входит в историю ходов игрока(метод every )
function checkWinner(arr) {
  return combinations.some((item) => item.every((id) => arr.includes(id)));
}

// Функция restart для обнуления разметки, установки player = 'X', чистка массивов истории огроков
function restart() {
  player = 'X';
  // Вырезаем все элементы массивов, метод splice
  historyX.splice(0, historyX.length);
  historyO.splice(0, historyO.length);
  createMarkup();
}

// Ответі на вопросы

const value = {
  numbers: {
    one: 1,
  },
};

console.log(value.numbers?.one);
console.log(value.string?.one);
