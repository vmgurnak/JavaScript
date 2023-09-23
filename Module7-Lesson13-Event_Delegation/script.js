// Module 7 - Lesson 13 - Event Delegation

// "use strict";

// Распространение событий	Event Propagation

// Распространение событий (event propagation) - это термин описывающий жизненный цикл события, который включает в себя три этапа:
// погружение,
// таргетинг и
// всплытие.
// На практике чаще всего используют только фазу всплытия.

// Всплытие событий	Event Bubbling

// Всплытие гарантирует, что клик по #descendant вызовет обработчик клика, если он есть, сначала на самом #descendant, затем на элементе #child, далее на элементе #parent и так далее вверх по цепочке предков до window. Поэтому, если в примере кликнуть на #descendant, то последовательно выведутся alert для descendant → child → parent.

// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');
// const descendant = document.querySelector('#descendant');

// parent.addEventListener('click', () => {
//   alert('Parent click handler');
// });

// child.addEventListener('click', () => {
//   alert('Child click handler');
// });

// descendant.addEventListener('click', () => {
//   alert('Descendant click handler');
// });

// Свойство event.target	event.target property

// Если слушатель события зарегистрирован на самом верхнем элементе, то он «поймает» все клики внутри, потому что события будут всплывать до этого элемента. Откройте консоль в примере и покликайте, event.target это всегда исходный (и самый глубокий) элемент на котором был сделан клик, а event.currentTarget не меняется.

// event.target - это ссылка на исходный элемент на котором произошло событие, в процессе всплытия он неизменен.
// event.currentTarget - это ссылка текущий элемент до которого дошло всплытие, на нём сейчас выполняется обработчик события.

// const parent = document.querySelector('#parent');

// parent.addEventListener('click', (event) => {
//   console.log('event.target: ', event.target);
//   console.log('event.currentTarget: ', event.currentTarget);
// });

// Прекращение всплытия	Bubbling stop

// метод stopPropagation() только препятствует продвижению события дальше, останавливает всплытие

// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// parent.addEventListener('click', () => {
//   alert(
//     'Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!'
//   );
// });

// child.addEventListener('click', (event) => {
//   event.stopPropagation();
//   alert(
//     'Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!'
//   );
// });

// descendant.addEventListener('click', (event) => {
//   // event.stopPropagation();
//   alert('Descendant click handler');
// });

// Делегирование событий	Event Delegation

// Палитра цветов	Color palette

// // Поиск div.color-palette
// const colorPalette = document.querySelector('.color-palette');
// // Поиск p.output
// const output = document.querySelector('.output');

// // Слушатель по click на div.color-palette
// colorPalette.addEventListener('click', selectColor);

// // This is where delegation «magic» happens

// // Коллбэк-функция для слушетеля
// function selectColor(event) {
//   // проверяем цель клика, чтобы это была кнопка, мы не хотим обрабатывать клики в элемент-контейнер. Для проверки типа элемента используем свойство nodeName.
//   if (event.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   // Переменная для значения цвета - используем event.target, чтобы получить элемент на котором произошло событие и связанный с ним цвет, который будем хранить в атрибуте data-color
//   const selectedColor = event.target.dataset.color;

//   // Присвоение текста внутри  output
//   output.textContent = `Selected color: ${selectedColor}`;
//   // Присвоение inline style color для output
//   output.style.color = selectedColor;
// }

// // Some helper functions to render palette items

// // Вызов функции для создания палитры цветов
// createPaletteItems();

// // Функция для создания в div.color-palette кнопок с палитрой цветов
// function createPaletteItems() {
//   const items = [];
//   // цикл с количеством цветов
//   for (let i = 0; i < 64; i += 1) {
//     const color = getRandomColor();
//     //   создание кнпопки
//     const item = document.createElement('button');
//     // Добавление атрибутов, класса, стиля
//     item.type = 'button';
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add('item');
//     //   Добавление item в массив items
//     items.push(item);
//   }
//   // Добавление в ДОМ дерево с распылением spred
//   colorPalette.append(...items);
// }

// // Функция для создания случайного знаяения цвета в HEX формате
// function getRandomColor() {
//   return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
// }

// // Функция для создания двухзначного числа в в 16 системе
// function getRandomHex() {
//   return Math.round(Math.random() * 256)
//     .toString(16)
//     .padStart(2, '0');
// }

// Занятие с преподователем

// KAHOOT

// 1. Что будует выведено в консоль при нажатии на button

// const elem = document.querySelector('div');
// elem.addEventListener('click', (event) => {
//   console.log(event.target);
// });

// // span;

// Слушатель событий на каждом div

// const container = document.querySelector('.js-container');
// // const box = document.querySelector('.js-box')
// [...container.children].forEach((box) => {
//   box.addEventListener('click', handlerClick);
// });

// function handlerClick(evt) {
//   console.log(evt.currentTarget);
// }

// Один слушаетль событий на контейнере

// container.addEventListener('click', handlerClick);

// function handlerClick(evt) {
//   // console.log('currentTarget', evt.currentTarget);
//   // if (evt.currentTarget === evt.target) {
//   //     return;
//   // }

//   // Проверка по наличию класса
//   if (!evt.target.classList.contains('js-box')) {
//     return;
//   }

//   console.log('target', evt.target);
// }

// Методы stopPropagation(); stopImmediatePropagation();

// const box = document.querySelector('.js-box');

// box.addEventListener('click', handlerClick);
// box.addEventListener('click', handlerClick1);
// box.addEventListener('click', handlerClick2);

// function handlerClick(evt) {
//   console.log(evt.target);
//   // evt.stopImmediatePropagation();
//   // evt.stopPropagation();
//   console.log('fn1');
// }

// function handlerClick1(evt) {
//   console.log(evt.target);
//   console.log('fn2');
//   evt.stopImmediatePropagation();
// }
// function handlerClick2(evt) {
//   console.log(evt.target);
//   console.log('fn3');
// }

// Practice

// Создание карточек с продуктами
// Каждая карточка имеет img и price
// Сделать деленгирование собітий на всех карточках
// При клике на карточку открывается поверх большое модальное окно
// В модальному окне отрисовать img, price, description

// Массив объектов продуктов
const products = [
  {
    id: 1,
    img: 'https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG',
    name: 'Монітор',
    price: 3000,
    description: '23-дюймовий монітор з Full HD роздільною здатністю.',
  },
  {
    id: 2,
    img: 'https://img.ktc.ua/img/base/1/6/316526.jpg',
    name: 'Ноутбук',
    price: 20000,
    description: 'Легкий та потужний ноутбук з 15-дюймовим дисплеєм та SSD.',
  },
  {
    id: 3,
    img: 'https://cdn.27.ua/799/66/39/6841913_1.jpeg',
    name: 'Смартфон',
    price: 8000,
    description: 'Оснащений потрійною камерою та багатоядерним процесором.',
  },
  {
    id: 4,
    img: 'https://cdn.27.ua/799/b6/16/4371990_1.jpeg',
    name: 'Планшет',
    price: 12000,
    description:
      '10-дюймовий планшет з високою продуктивністю та Retina дисплеєм.',
  },
];

// Поиск контейнера ul
const container = document.querySelector('.js-products');
console.log(container);

// {
//   id: 1,
//   img: 'https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG',
//   name: 'Монітор',
//   price: 3000,
//   description: '23-дюймовий монітор з Full HD роздільною здатністю.',
// }

// Функция для создания строки разметки, преобразование массива продуктов, метод map, метод join
function createMarkup(arr) {
  return arr
    .map(
      ({ id, img, name, price, description }) =>
        `
        <li class="item js-product-item" data-id="${id}">
        <img src="${img}" alt="${name}" width="300">
        <h2>${name}</h2>
        <p>Цена: ${price} грн</p>
        </li>`
    )
    .join('');
}

// Добавление разметки, вызов функции со строкой разметки, аргумент массив products
container.insertAdjacentHTML('beforeend', createMarkup(products));

// Добавление слушателя на контейнер, событие click
container.addEventListener('click', handlerProductClick);

// Коллбэк-функция для слушателя, событие click
function handlerProductClick(evt) {
  // Прверка, чтобы клик был не по ul
  if (evt.currentTarget === evt.target) {
    return;
  }

  // Создание переменной текущий продукт, метод closest, выбор li по классу js-product-item
  // Метод Element.closest() возвращает ближайший родительский элемент (или сам элемент), который соответствует заданному CSS-селектору
  const currentProduct = evt.target.closest('.js-product-item');

  // Деструктуризация data-id
  const { id } = currentProduct.dataset;

  // Выбор Объекта текушщий продукт со свойствами. Метод массива find - поиск элемента массива с id, по которому сделан клик
  const product = products.find(
    // Переименование в объекте ключа id в productId, чтобы не совпадало с атрибутом id
    ({ id: productId }) => productId === Number(id)
  );
  console.log(product);

  // Подключение модального окна, библиотека basicLightbox

  const instance = basicLightbox.create(`
  // Разметка модалки
   <div class="modal">
      <img src="${product.img}" alt="${product.name}" width="500">
      <h2>${product.name}</h2>
      <h3>${product.price}</h3>
      <p>${product.description}</p>
   </div>
`);

  instance.show();
  instance.show(() => console.log('lightbox now visible'));
}
