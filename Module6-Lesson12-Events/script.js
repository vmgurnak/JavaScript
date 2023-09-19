// Module 6 - Lesson 12 - Events

// "use strict";

// События	Events

// Метод addEventListener()	addEventListener() method
// Добавляет слушателя события на элемент.

// element.addEventListener(event, handler, options);
// event - имя события, строка, например ""click"".
// handler - коллбэк-функция которая будет вызвана при наступлении события.
// options - необязательный объект параметров с расширенными настройками.

// Коллбэк-функция внутри слушателя

// const button = document.querySelector('.my-button');

// button.addEventListener('click', () => {
//   console.log('Button was clicked');
// });

// Для коллбэка можно (и желательно) использовать отдельную функцию и передавать на неё ссылку. Именованная функция повышает читаемость кода.

// const button = document.querySelector('.my-button');

// Стрелочаня функция, объявдяется до вызова слушателя

// const handleClick = () => {
//   console.log('Button was clicked');
// };

// button.addEventListener('click', handleClick);

// Обычная функция

// const button = document.querySelector('.my-button');
// console.dir(button);

// button.addEventListener('click', handlerClick);

// function handlerClick() {
//   console.log('Button was click');
// }

// На одном элементе может быть сколько угодно обработчиков событий, даже событий одного типа. Коллбэк-функции будут вызываться в порядке регистрации их в коде.

// const singleBtn = document.querySelector('#single');

// const handleClick = () => {
//   console.log('click event listener callback');
// };

// singleBtn.addEventListener('click', handleClick);

// ===============================================

// const multiBtn = document.querySelector('#multiple');

// const firstCallback = () => {
//   console.log('First callback!');
// };
// const secondCallback = () => {
//   console.log('Second callback!');
// };
// const thirdCallback = () => {
//   console.log('Third callback!');
// };

// multiBtn.addEventListener('click', firstCallback);
// multiBtn.addEventListener('click', secondCallback);
// multiBtn.addEventListener('click', thirdCallback);

// Метод removeEventListener()	removeEventListener() method

// element.removeEventListener(event, handler, options);
// Удаляет слушателя события с элемента.Аргументы аналогичны методу addEventListener().

// const addListenerBtn = document.querySelector('[data-action="add"]');
// const removeListenerBtn = document.querySelector('[data-action="remove"]');
// const btn = document.querySelector('#btn');

// const handleClick = () => {
//   console.log('click event listener callback');
// };

// addListenerBtn.addEventListener('click', () => {
//   btn.addEventListener('click', handleClick);
//   console.log('click event listener was added to btn');
// });

// removeListenerBtn.addEventListener('click', () => {
//   btn.removeEventListener('click', handleClick);
//   console.log('click event listener was removed from btn');
// });

// Ключевое слово this	Keyword this

// const mango = {
//   username: 'Mango',
//   showUsername() {
//     console.log(this);
//     console.log(`My username is: ${this.username}`);
//   },
// };

// const btn = document.querySelector('.js-btn');
// console.log(btn);

// mango.showUsername();
// ✅ Работает

// ❌ this будет ссылаться на button если использовать showUsername как callback
// btn.addEventListener('click', mango.showUsername);
// не работает

// ✅ Не забывайте привязывать контекст методов объекта
// btn.addEventListener('click', mango.showUsername.bind(mango));

// Объект события	Event Object

// Каждое событие представляет собой объект, который содержит информацию о деталях события и автоматически передается первым аргументом в обработчик события. Все события происходят от базового класса Event.

// const button = document.querySelector('.btn');

// const handleClick = (event) => {
//   console.log('event: ', event);
//   console.log('event type: ', event.type);
//   console.log('currentTarget: ', event.currentTarget);
// };

// button.addEventListener('click', handleClick);

// Действия браузера по умолчанию	Browser default actions

// Для отмены действия браузера по умолчанию на объекте события есть стандартный метод preventDefault().

// const form = document.querySelector('.register-form');

// console.log(form);

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   console.log(event);
//   console.log(event.currentTarget);
//   //   console.log(event.currentTarget.username.value);
//   //   console.log(event.currentTarget.password.value);
//   const {
//     elements: { username, password },
//   } = event.currentTarget;
//   console.log(username.value, password.value);
// });

// События клавиатуры Keyboard Events

// Есть два основных события клавиатуры: keydown и keyup.

// В отличии от других, события клавиатуры обрабатываются на документе, а не на конкретном элементе.Объекты событий клавиатуры происходят от базового класса KeyboardEvent.

// document.addEventListener('keydown', (event) => {
//   console.log('Keydown: ', event);
// });

// document.addEventListener('keyup', (event) => {
//   console.log('Keyup: ', event);
// });

// Свойства key и code	key and code properties

// document.addEventListener('keydown', (event) => {
//   console.log('key: ', event.key);
//   console.log('code: ', event.code);
// });

// Поставьте фокус в окно примера кликнув в него мышкой, отслеживание событий клавиатуры стоит на элементе document. Печатайте что-то на клавиатуре и смотрите результат.

// // Выбор кнопки
// const clearLogBtn = document.querySelector('[data-action="clear"]');
// // Выбор div контейнера
// const logList = document.querySelector('.log-list');
// // Начальное значение счетчика
// let keypressCounter = 1;

// // Слушатели (обработчики событий) для нажатия, отжатия клавиш и нажатии клавиши
// document.addEventListener('keydown', logMessage);
// document.addEventListener('keyup', logMessage);
// clearLogBtn.addEventListener('click', reset);

// // коллбэк-функция для обработки события
// function logMessage({ type, key, code }) {
//   const markup = `<div class="log-item">
//     <span class="chip">${keypressCounter}</span>
//     <ul>
//       <li><b>Event</b>: ${type}</li>
//       <li><b>Key</b>: ${key}</li>
//       <li><b>Code</b>: ${code}</li>
//     </ul>
//   </div>`;

//   // Добавление разметки
//   logList.insertAdjacentHTML('afterbegin', markup);

//   // Увеличение счетчика
//   if (type === 'keyup') {
//     incrementKeypressCounter();
//   }
// }

// // Коллбэк-функция для события клика по кнопкпе (сброс счетчика, очистка разметки)
// function reset() {
//   keypressCounter = 1;
//   logList.innerHTML = '';
// }

// // Функция счетчика
// function incrementKeypressCounter() {
//   keypressCounter += 1;
// }

// Клавиши-модификаторы	Modifier keys

// Для обработки комбинации клавиш, например Ctrl + s или любую другую, на объекте события есть свойства ctrlKey, altKey, shiftkey и metaKey, хранящие булевое значение сигнализирующее о том, была зажата клавиша-модификатор или нет.

// document.addEventListener('keydown', (event) => {
//   // console.log(event);

//   // Отмена действия Ctr + S по умолчанию
//   event.preventDefault();

//   if ((event.ctrlKey || event.metaKey) && event.code === 'KeyS') {
//     console.log('«Ctrl + s» or «Command + s» combo');
//   }
// });

// События элементов форм	Form Events

// Событие submit	submit event

// Отправка формы происходит при клике по кнопке с атрибутом type="submit" или нажатии клавиши Enter, находясь в каком-нибудь её текстовом поле. Событие submit можно применить для валидации (проверки) формы перед отправкой, так как на объекте события есть много полезных свойств связанных с элементами формы. Сабмит формы перезагружает страницу, поэтому не забывайте отменять действие по умолчанию методом preventDefault().

// const form = document.querySelector('.form');
// console.log(form);

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();

//   const {
//     elements: { login, password },
//   } = event.currentTarget;

//   if (login.value === '' || password.value === '') {
//     return console.log('Please fill in all the fields!');
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }

// Событие change	change event

// Происходит после изменения элемента формы. Для текстовых полей или textarea событие произойдёт не при каждом вводе символа, а при потере фокуса, что не всегда удобно. Например, пока вы набираете что-то в текстовом поле - события нет, но как только фокус пропал, произойдет событие change. Для остальных элементов, например select, чекбоксов и радио-кнопок, событие change срабатывает сразу при выборе значения.

// const select = document.querySelector('.pizza-select');
// const textOutput = document.querySelector('.text-output');
// const valueOutput = document.querySelector('.value-output');

// select.addEventListener('change', setOutput);

// function setOutput() {
//   const selectedOptionValue = select.value;
//   console.log(selectedOptionValue);
//   const selectedOptionIndex = select.selectedIndex;
//   console.log(selectedOptionIndex);
//   const selectedOptionText = select.options[selectedOptionIndex].text;
//   console.log(selectedOptionText);

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }

// Событие input	input event

// Происходит только на текстовых полях и textarea, и создаётся каждый раз при изменении значения элемента, не дожидаясь потери фокуса. На практике input это самое главное событие для работы с текстовыми полями формы.

// const textInput = document.querySelector('.text-input');
// const output = document.querySelector('.output');

// textInput.addEventListener('input', (event) => {
//   output.textContent = event.currentTarget.value;
// });

// События focus и blur focus and blur events

// Элемент получает фокус при клике мыши или переходе клавишей Tab.
// Момент получения фокуса и потери очень важен, при получении фокуса мы можем подгрузить данные для автозаполнения, начать отслеживать изменения и т.п
// При потере фокуса - проверить введённые данные.

// При фокусировке элемента происходит событие focus, а когда фокус исчезает, например пользователь кликает в другом месте экрана, происходит событие blur. Активировать или отменить фокус можно программно, вызвав в коде одноименные методы focus() и blur() у элемента.

// const textInput = document.querySelector('.text-input');
// const setFocusBtn = document.querySelector('[data-action="set"]');
// const removeFocusBtn = document.querySelector('[data-action="remove"]');

// setFocusBtn.addEventListener('click', () => {
//   textInput.focus();
// });

// removeFocusBtn.addEventListener('click', () => {
//   textInput.blur();
// });

// textInput.addEventListener('focus', () => {
//   textInput.value = 'This input has focus';
// });

// textInput.addEventListener('blur', () => {
//   textInput.value = '';
// });

// LESSON WITH THE TEACHER

// KAHOOT

// Лучше создавать объект со значениями, чем несколько переменных с названием elements

// const elements = {
//   clickMe: document.querySelector('.js-click'),
//   box: document.querySelector('.js-box'),
//   query: document.querySelector('.js-query'),
//   form: document.querySelector('.js-form'),
// };

// Коллбэк-функцию называть handlerClick (handler и тип события)

// Событие click

// elements.clickMe.addEventListener('click', handlerClick);
// elements.box.addEventListener('click', handlerClick);

// let step = 0;

// function handlerClick() {
//   step += 50;
//   elements.box.style.marginTop = `${step}px`;
//   elements.box.style.marginLeft = `${step}px`;
// }

// function handlerClick(evt) {
//   console.log(evt);
//   console.log('currentTarget', evt.currentTarget);
//   console.log('clickMe', elements.clickMe);
//   step += 50;
//   evt.currentTarget.style.marginTop = `${step}px`;
//   evt.currentTarget.style.marginLeft = `${step}px`;
// }

// elements.query.addEventListener('input', handlerSearch);
// elements.query.addEventListener('change', handlerSearch);

// function handlerSearch(evt) {
//   //   console.log(evt);
//   console.dir(evt.currentTarget);
//   console.dir(evt.currentTarget.value);
// }

// elements.query.addEventListener('blur', handlerSearch);

// Коллбэк функция с объектом evt, свойства evt.currentTarget, evt.currentTarget.value
// function handlerSearch(evt) {
//   console.dir(evt.currentTarget);
//   console.dir(evt.currentTarget.value);
//   console.log(elements.query.value);
// }

// Событие submit

// elements.form.addEventListener('submit', hundlerSubmit);

// function hundlerSubmit(evt) {
//   // Отмена действий браузера на собіьие по умолчанию
//   evt.preventDefault();
//   console.log(evt);
//   // Форма, элемент на котором событие
//   console.dir(evt.currentTarget);
//   // Элементы формы
//   console.dir(evt.currentTarget.elements);
//   // Выбор элемента по индексу
//   console.dir(evt.currentTarget.elements[3]);
//   // Выбор элемента по name
//   console.dir(evt.currentTarget.elements.email);

//   //деструктуризация
//   const { email, password, comment } = evt.currentTarget.elements;

//   // Вызов html элементов по name
//   console.log(email);
//   console.log(password);
//   console.log(comment);

//   // Считывание value html элементов по name
//   console.log(email.value);
//   console.log(password.value);
//   console.log(comment.value);
// }

// События клавиатуры

// document.addEventListener("keypress", handlerKey);
// document.addEventListener("keydown", handlerKey);

// function handlerKey(evt) {
//   console.log(evt);
//   console.log(evt.code);
//   console.log(evt.key);
//   console.log(evt.keyCode);
// }

// function handlerKey(evt) {
// //   разный вывод при нажатии разных клавиш
//    //  if (evt.code === "Escape") {
//    //    console.log(`Нажата клавиша Escape`);
//    //  } else {
//    //    console.log(`Нажата клавиша не Escape`);
//    //   }
// //   Если нужно выполнить несколько условий удобно пользоваться switch
//     switch (evt.code) {
//       case "Escape":
//         console.log("Escape");
//         break;
//       case "KeyQ":
//         console.log("Q");
//         break;
//     }
// }

// Использование комбинации клавиш клавиш

// document.addEventListener("keydown", handlerKey);

// function handlerKey(event) {
//   console.log(event);

//   // Комбинация Ctr + C
//   if (event.ctrlKey && event.code === "KeyC") {
//     //   Отмена копирования по умоляанию
//     event.preventDefault();
//     console.log("Нажата комбинация Ctr и C");
//   }

//   // Комбинация Ctr + S
//   //   event.preventDefault();
//   //   if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
//   //     console.log("«Ctrl + s» or «Command + s» combo");
//   //   }
//   //   console.log("Нажата комбинация Ctr и C");

//   // Запрет нескольких событий
//   //   if (event.ctrlKey) {
//   //     switch (event.code) {
//   //       case "KeyC":
//   //       case "KeyV":
//   //       //   event.preventDefault();
//   //     }
//   //   }
// }

// События мыши

// document.addEventListener("mousedown", handler);

// function handler(evt) {
//   console.log(evt);
// }

// Практика

// Массив объектов автомобилей

// Поиск и отображение автомобилей по марке или модели

const cars = [
  {
    id: 1,
    car: 'Honda',
    type: 'Civic',
    price: 12000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
  },
  {
    id: 2,
    car: 'Audi',
    type: 'Q7',
    price: 40000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
  },
  {
    id: 33,
    car: 'BMW',
    type: '5 siries',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
  },
  {
    id: 3,
    car: 'Honda',
    type: 'Accord',
    price: 20000,
    number: '+380000000000',
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
  },
  {
    id: 4,
    car: 'Volvo',
    type: 'XC60',
    price: 7000,
    img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
  },
];

// Объект элементов
const elements = {
  form: document.querySelector('.js-form'),
  container: document.querySelector('.js-list'),
};

elements.container.style.display = 'flex';
elements.container.style.flexWrap = 'wrap';
elements.container.style.gap = '25px';
elements.container.style.listStyle = 'none';

// Образец для разметки
//   {
//     id: 1,
//     car: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   }

// Создание разметки
function createMarkup(arr) {
  return arr
    .map(
      ({ id, car, type, price, img }) =>
        `<li data-id="${id}">
          <img src="${img}" alt="${type}" width="300"/>
          <h2>${car}</h2>
          <h3>${type}</h3>
          <span>${price}</span>
        </li>`
    )
    .join('');
}

elements.container.insertAdjacentHTML('beforeend', createMarkup(cars));

// слушатель по событию submit
elements.form.addEventListener('submit', handlerSearch);

function handlerSearch(evt) {
  // отмена действия браузера по умолчанию
  evt.preventDefault();
  // console.log(evt.currentTarget.elements);
  // деструктуризация
  const { options, query } = evt.currentTarget;
  console.log(options);
  console.log(options.value);
  console.log(query.value);

  // Метод filter фильтрует объекты массива по ключу car или type на совпадение, что введено в input - query.value
  const result = cars.filter((item) =>
    // сравнивается элемент массива, объект один автомобиль, значение свойства свойства со значением в input - новый массив автомобилей
    item[options.value].toLowerCase().includes(query.value.toLowerCase())
  );

  // Вариант с  сортировкой, метод sort

  // const result = cars
  //   .filter((item) =>
  //     item[options.value].toLowerCase().includes(query.value.toLowerCase())
  //   )
  //   .sort((a, b) => a[options.value].localeCompare(b[options.value]));

  // console.log(result);

  // Перерисовка разметки с новым массивом для функции разметки createMarkup
  elements.container.innerHTML = createMarkup(result);
}
