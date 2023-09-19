// Module 6 - Lesson 11 - DOM

// "use strict";

// Навигация по DOM	DOM Traversal

// elem.parentNode	 - выберет родителя elem.
// elem.childNodes - псевдомассив, хранит все дочерние элементы, включая текстовые.	 - псевдомассив, хранит все дочерние элементы, включая текстовые.
// elem.children	 - псевдомассив, хранит только дочерние узлы-элементы, то есть соответствующие тегам.
// elem.firstChild	 - выберет первый дочерний элемент внутри elem, включая текстовые узлы.
// elem.firstElementChild	 - выберет первый дочерний узел-элемент внутри elem.
// elem.lastChild	 - выберет последний дочерний элемент внутри elem, включая текстовые узлы.
// elem.lastElementChild	 - выберет последний дочерний узел-элемент внутри elem.
// elem.previousSibling	 - выберет элемент «слева» от elem (его предыдущего соседа).
// elem.previousElementSibling	 - выберет узел-элемент «слева» от elem (его предыдущего соседа).
// elem.nextSibling	 - выберет элемент «справа» от elem (его следующего соседа)
// elem.nextElementSibling	 - выберет узел-элемент «справа» от elem (его следующего соседа).

// Поиск элементов	Query for Elements

// Поиск Метод element.querySelector(selector);

// const title = document.querySelector('h1');
// const title = document.querySelector(".js-title");
// const title = document.querySelector('#title')
// console.log(title);

// const item = document.querySelector(".js-item");
// console.log(item);

// Поиск метод element.querySelectorAll(selector);

// const items = document.querySelectorAll(".js-item");
// console.log(items);

// // преобразование псевдомассива в массив
// console.log([...items]);
// console.log(Array.from(items));

// Поиск элементов с помощью метода getElementById ()
// Ищет по ID

// const title = document.getElementById("title");
// console.log(title);

// Поиск элементов с помощью метода getElementsByClassName ()
// Ищет по имени класса, возвращает html коллекцию

// const items2 = document.getElementsByClassName("js-title");
// console.log(items2);

// Свойства и атрибуты

// Во время построения DOM-дерева, некоторые стандартные HTML-атрибуты становятся свойствами элементов.

// value - содержит текущий текстовый контент элементов форм.
// checked - хранит состояние чекбокса или радиокнопки.
// name - хранит значение, указанное в HTML-атрибуте name.
// src - путь к изображению тега <img>

// const message = document.querySelector('#message');
// console.log(message);
// console.log(message.value);
// // Default textarea message

// const activeLink = document.querySelector('.btn.active');
// console.log(activeLink.href);
// // https://s.codepen.io/about

// const image = document.querySelector('.image');
// console.log(image.src);
// // https://placeimg.com/640/480/animals
// image.src = 'https://placeimg.com/640/480/tech';

// Свойство textContent

// elem.textContent возвращает текстовый контент внутри элемента.

// Доступно для чтения и записи. Не зависимо что будет передано в textContent, данные всегда будут записаны как текст.

// const text = document.querySelector(".article-text");
// console.log(text.textContent);
// // text inside p.article-text

// const title = document.querySelector(".article-title");
// title.textContent = "Welcome to Bahamas!";

// Свойство classList

// В свойстве classList хранится объект с методами для работы с классами элемента.

// elem.classList.contains(cls) - возвращает true или false в зависимости от того, есть ли у элемента класс cls.
// elem.classList.add(cls) - добавляет класс cls в список классов элемента.
// elem.classList.remove(cls) - удаляет класс cls из списка классов элемента.
// elem.classList.toggle(cls) - если класса cls нет, то добавляет его, если есть, наоборот удаляет.
// elem.classList.replace(oldClass, newClass) - заменяет существующий класс oldClass на указанный newClass.

// const text = document.querySelector('#paragraph');

// console.log(text.classList); // ["text", "red", "big", value: "text red big"]

// console.log(text.classList.contains('red')); // true

// text.classList.remove("big");
// console.log(text.classList); // ["text", "red", value: "text red"]

// text.classList.add("new-class");
// console.log(text.classList); // ["text", "red", "new-class", value: "text red new-class"]

// // Can add multiple classes
// text.classList.add("a", "b", "c");
// console.log(text.classList);

// text.classList.toggle("is-hidden"); // will add is-hidden class
// console.log(text.classList);

// // text.classList.toggle("is-hidden"); // will remove is-hidden class
// // console.log(text.classList);

// // classList has a forEach method
// text.classList.forEach((cls) => {
//   console.log(cls);
// });
// // text, red, new-class

// Свойство style	style property

// Используется для чтения и изменения инлайновых стилей. Возвращает объект CSSStyleDeclaration, который содержит список всех свойств, определенных только во встроенных стилях элемента, а не весь CSS

// const button = document.querySelector('.btn');

// button.style.backgroundColor = 'teal';
// button.style.fontSize = '24px';
// button.style.textAlign = 'center';

// console.log(button.style);
// // inline styles object

// Атрибуты	Attributes

// elem.hasAttribute(name) - проверяет наличие аттрибута, возвращает true или false.
// elem.getAttribute(name) - получает значение атрибута и возвращает его.
// elem.setAttribute(name, value) - устанавливает атрибут.
// elem.removeAttribute(name) - удаляет атрибут.
// elem.attributes - свойство, возвращает объект всех атрибутов элемента.

// const image = document.querySelector('.image');

// console.log(image.attributes);
// // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

// console.log(image.hasAttribute('src')); // true

// console.log(image.getAttribute('alt')); // "Beautiful nature"

// image.setAttribute('alt', 'Amazing nature');

// console.log(image.getAttribute('alt')); // Amazing nature

// image.setAttribute('id', 'image');
// console.log(image.attributes);

// data-атрибуты	Data attributes

// Позволяют добавить тегу произвольный атрибут и получить его значение в JavaScript. Эту возможность используют для того, чтобы упростить написание кода, например связать данные и разметку по уникальному идентификатору, указать тип действия кнопки и т. п.
// Для получения значения data-атрибута используется свойство dataset, после которого идет имя атрибута. То есть data- отбрасывается, а остальное имя записывается как имя свойства объекта.

// const saveBtn = document.querySelector('.btn[data-action="save"]');
// console.log(saveBtn);
// console.log(saveBtn.dataset.action);
// //save

// const closeBtn = document.querySelector('.btn[data-action="close"]');
// console.log(closeBtn);
// console.log(closeBtn.dataset.action);
// //close

// const dishes = document.querySelectorAll('.dishes > li');
// console.log(dishes);
// dishes.forEach((dish) => {
//   console.log(dish.dataset.id);
// });

// Создание и удаление элементов	Creating and Removing Elements

// Создание	Creation

// document.createElement(tagName);

// const heading = document.createElement('h1');
// console.log(heading); // <h1></h1>
// heading.textContent = 'This is a heading';
// console.log(heading); // <h1>This is a heading</h1>

// const image = document.createElement("img");
// image.src = "https://placeimg.com/640/480/nature";
// image.alt = "Nature";
// console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="Nature" />

// Добавление	Addition

// const list = document.querySelector('.usernames');
// console.log(list);

// // Adds an item to the end of the list
// const lastItem = document.createElement('li');
// console.log(lastItem);
// lastItem.textContent = 'Poly';
// list.append(lastItem);

// // Adds an item to the beginning of the list
// const firstItem = document.createElement('li');
// firstItem.textContent = 'Ajax';
// list.prepend(firstItem);

// // Adds a title before the list
// const title = document.createElement('h2');
// title.textContent = 'USERNAMES';
// list.before(title);

// // Adds a paragraph after the list
// const text = document.createElement('p');
// text.textContent =
//   'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in ';
// list.after(text);

// Удаление	Removal

// const usernames = document.querySelector(".usernames");
// console.log(usernames);
// usernames.remove();

// const list = document.querySelector(".js-list");
// console.log(list);

// // Создание элемента, добавление класса

// const li = document.createElement("li");
// li.textContent = 5;
// li.classList.add("js-item");
// li.classList.toggle("js-item");
// li.classList.toggle("js-item");
// li.classList.remove("js-item");
// li.classList.toggle("js-item");
// li.classList.replace("js-item", "item");
// li.classList.toggle("js-item");
// li.classList.remove("item");
// console.dir(li);

// // appendChild; - добавляет один элемент
// list.appendChild(li);

// const li2 = document.createElement("li");
// li2.textContent = 6;
// li2.classList.add("js-item");
// console.log(li2);

// // Добавление в разметку двух li
// // list.append(li, li2);

// // Добавление элемента внутри li
// const h2 = document.createElement("h2");
// h2.textContent = "Header H2";
// li.append(h2);

// li.classList.replace("js-item", "js-elem");
// // li.classList.remove("js-item");

// // Добавление массива элементов с распылением
// const liItems = [li, li2];
// list.append(...liItems);
// console.dir(li);
// console.log(li["classList"]);

// Создание, добавление элементов с помощью html подобного синтаксиса

// Метод insertAdjacentHTML добавляет в разметку

// Современный метод для добавления строки с HTML-тегами до, после или внутрь элемента.

// elem.insertAdjacentHTML(position, string);

// "beforebegin" - перед elem
// "afterbegin" - внутри elem, перед всеми детьми
// "beforeend" - внутри elem, после всех детей
// "afterend" - после elem

// const list = document.querySelector('.js-list');
// console.log(list);

// const li = `<li class="js-item">5</li><li class="js-item">6</li>`;
// console.log(li);

// list.insertAdjacentHTML('beforeend', li);

// Свойство innerHTML заменяет разметку;

// Свойство innerHTML хранит содержимое элемента, включая теги, в виде строки.

//  Если записать в него строку с HTML-тегами, то браузер во время парсинга строки превратит их в валидные элементы и добавит в DOM-дерево.

// list.innerHTML = li;

// Очистка разметки

// list.innerHTML = '';

// list.insertAdjacentHTML('beforeend',li)

// list.innerHTML = '';

// Каждое обращение с js в html ресурсоемкая операция

// Лучше вначале получить например ul и дальше воспользоваться встроенной навигацией по нашему html элементу

// Выбор всех элементов с классом .js-item помощью querySelectorAll - псевдомассив на момент выбора статический

// const items = document.querySelectorAll('.js-item');

// Выбор всех элементов с классом .js-item помощью getElementsByClassName - HTML коллекция

// const items2 = document.getElementsByClassName('js-item');

// const list = document.querySelector('.js-list');

// console.log('static', items);
// console.log('dynamic', items2);
// console.dir(list);

// Добавоение трех li в разметку

// const list = document.querySelector('.js-list');

// псевдомассив, хранит только дочерние узлы-элементы, то есть соответствующие тегам.
// console.log(list.children);

// let markup = '';
// for (let i = 1; i <= 3; i += 1) {
//   markup += `<li class="js-item">${list.children.length + i}</li>`;
// }
// console.log(markup);

// list.insertAdjacentHTML('beforeend', markup);

// console.log('static', items);
// console.log('dynamic', items2);

// const items3 = document.querySelectorAll(".js-item");
// console.log("static", items3);

// Свойство innerHTML	innerHTML Property

// Чтение	Reading

// const title = document.querySelector('.title');
// console.log(title.innerHTML);

// Изменение	Changing

// const title = document.querySelector('.title');
// title.innerHTML = 'New and <span class="accent">improved</span> title';

// console.log(title);
// console.log(title.innerHTML);

// Очистка содержимого

// title.innerHTML = '';

// Однотипная (шаблонная) разметка

// const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// const list = document.querySelector('.list');

// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join('');

// console.log(markup);

// Adding all the markup in one operation

// list.innerHTML = markup;

// Добавление	Addition

// const article = document.querySelector('.article');
// const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
//    <a class="link" href="#">Read more...</a>`;

// // Replace += with = operator. See the difference?
// // Article title is lost because we overwrite element content.
// article.innerHTML += htmlString;

// console.log(article.innerHTML);

// Метод insertAdjacentHTML()	insertAdjacentHTML() method

// elem.insertAdjacentHTML(position, string);

// Аргумент position - это строка, позиция относительно элемента elem. Принимает одно из четырёх значений.

// "beforebegin" - перед elem
// "afterbegin" - внутри elem, перед всеми детьми
// "beforeend" - внутри elem, после всех детей
// "afterend" - после elem

// const list = document.querySelector('.list');

// const newTechnologies = ['React', 'TypeScript', 'Node.js'];
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
//   .join('');

// list.insertAdjacentHTML('beforeend', markup);
// list.insertAdjacentHTML('beforebegin', '<h2>Popular technologies</h2>');

// Элементы коммуникации

// const input = document.querySelector('.js-query');
// input.value = 'Hello world';
// console.dir(input);

// Атрибуты

// const btn = document.querySelector('.js-btn');
// console.dir(btn);

// btn.hidden = true;
// btn.hidden = false;
// btn.disabled = true;
// btn.disabled = false;
// btn.setAttribute('hidden', true);
// btn.removeAttribute('hidden');
// console.log(btn.getAttribute('hidden'));

// Добавление дата атрибутов

// btn.setAttribute('data-id', 24);
// btn.setAttribute('data-goods-id', 2);
// btn.setAttribute('data-test-id', 3);

// Считывание значений дата атрибутов с помощью деструктуризации

// const { goodsId, id, testId } = btn.dataset;
// console.log(goodsId);
// console.log(id);
// console.log(testId);

// Считывание без деструктуризации с помощью свойства dataset
// Название атрибута при поиске вводится через camelCase

// console.log(btn.dataset.goodsId);
// console.log(btn.dataset.id);
// console.log(btn.dataset.testId);

// console.log(btn.attributes);

// console.dir(btn);

// Lection.Practice

// Из массива объектов сделать html разметку

const cars = [
  {
    model: 'Honda',
    type: 'Civic',
    price: 12000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
  },
  {
    model: 'Audi',
    type: 'Q7',
    price: 40000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
  },
  {
    model: 'BMW',
    type: '5 series',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
  },
  {
    model: 'Honda',
    type: 'Accord',
    price: 20000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
  },
  {
    model: 'Volvo',
    type: 'XC60',
    price: 7000,
    img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
  },
  {
    model: 'Honda',
    type: 'Civic',
    price: 12000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
  },
  {
    model: 'Audi',
    type: 'Q7',
    price: 40000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
  },
  {
    model: 'BMW',
    type: '5 siries',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
  },
  {
    model: 'Honda',
    type: 'Accord',
    price: 20000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
  },
  {
    model: 'Volvo',
    type: 'XC60',
    price: 7000,
    img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
  },
  {
    model: 'Honda',
    type: 'Civic',
    price: 12000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
  },
  {
    model: 'Audi',
    type: 'Q7',
    price: 40000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
  },
  {
    model: 'BMW',
    type: '5 siries',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
  },
  {
    model: 'Honda',
    type: 'Accord',
    price: 20000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
  },
  {
    model: 'Volvo',
    type: 'XC60',
    price: 7000,
    img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
  },
  {
    model: 'Honda',
    type: 'Civic',
    price: 12000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
  },
  {
    model: 'Audi',
    type: 'Q7',
    price: 40000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
  },
  {
    model: 'BMW',
    type: '5 siries',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
  },
  {
    model: 'Honda',
    type: 'Accord',
    price: 20000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
  },
  {
    model: 'Volvo',
    type: 'XC60',
    price: 7000,
    img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
  },
  {
    model: 'Honda',
    type: 'Civic',
    price: 12000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
  },
  {
    model: 'Audi',
    type: 'Q7',
    price: 40000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
  },
  {
    model: 'BMW',
    type: '5 siries',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
  },
  {
    model: 'Honda',
    type: 'Accord',
    price: 20000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
  },
  {
    model: 'Volvo',
    type: 'XC60',
    price: 7000,
    img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
  },
  {
    model: 'Honda',
    type: 'Civic',
    price: 12000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
  },
  {
    model: 'Audi',
    type: 'Q7',
    price: 40000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
  },
  {
    model: 'BMW',
    type: '5 siries',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
  },
  {
    model: 'Honda',
    type: 'Accord',
    price: 20000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
  },
  {
    model: 'Volvo',
    type: 'XC60',
    price: 7000,
    img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
  },
];

// console.log(cars);
// console.log(cars.length);

// {
//     model: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
// }

// Решение с помощью createElement, arr.map,append

// Забираем ul по селектору .js-list
// const list = document.querySelector('.js-list');
// Отмена listStyle
// list.style.listStyle = 'none';

// Функция для создания разметки , с реструктуризацией
// function createMarkup(arr) {
//   const markup = arr.map(({ model, type, price, img }) => {
//     const li = document.createElement('li');
//     const imgEl = document.createElement('img');
//     const h2 = document.createElement('h2');
//     const h3 = document.createElement('h3');
//     const span = document.createElement('span');

//     // Назначение атрибутов
//     imgEl.src = img;
//     imgEl.alt = model;
//     imgEl.style.width = '300px';

//     h2.textContent = model;
//     h3.textContent = type;
//     span.textContent = price;
//     // Добавили в li элементы
//     li.append(imgEl, h2, h3, span);
//     return li;
//   });
//   // console.log(markup);

//   // синтаксис спреда, распыливает li с массива markup
//   // за один раз помещаем в разметку
//   list.append(...markup);
// }

// createMarkup(cars);

// Решение с помощью шаблонных строк

// {
//     model: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
// }

// Забираем ul по селектору .js-list
const list = document.querySelector('.js-list');
list.style.listStyle = 'none';

function createMarkup(arr) {
  const markup = arr
    .map(
      ({ model, type, price, img }) => `<li>
        <img src="${img}" alt="${model}"  width="300"/>
        <h2>${model}</h2>
        <h3>${type}</h3>
        <span>${price}</span>
  </li>`
    )
    .join('');

  console.log(markup);

  list.insertAdjacentHTML('beforeend', markup);
}

createMarkup(cars);
