// Module 6 - Lesson 11 - DOM

// "use strict";

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

// const message = document.querySelector("#message");
// console.log(message);
// console.log(message.value);
// // Default textarea message

// const activeLink = document.querySelector(".btn.active");
// console.log(activeLink.href);
// // https://s.codepen.io/about

// const image = document.querySelector(".image");
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

// const text = document.querySelector("#paragraph");

// console.log(text.classList); // ["text", "red", "big", value: "text red big"]

// console.log(text.classList.contains("red")); // true

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

// const button = document.querySelector(".btn");

// button.style.backgroundColor = "teal";
// button.style.fontSize = "24px";
// button.style.textAlign = "center";

// console.log(button.style);
// // inline styles object

// Атрибуты	Attributes

// elem.hasAttribute(name) - проверяет наличие аттрибута, возвращает true или false.
// elem.getAttribute(name) - получает значение атрибута и возвращает его.
// elem.setAttribute(name, value) - устанавливает атрибут.
// elem.removeAttribute(name) - удаляет атрибут.
// elem.attributes - свойство, возвращает объект всех атрибутов элемента.

// const image = document.querySelector(".image");

// console.log(image.attributes);
// // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

// console.log(image.hasAttribute("src")); // true

// console.log(image.getAttribute("alt")); // "Beautiful nature"

// image.setAttribute("alt", "Amazing nature");

// console.log(image.getAttribute("alt")); // Amazing nature

// image.setAttribute("id", "image");
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

// const dishes = document.querySelectorAll(".dishes > li");
// console.log(dishes);
// dishes.forEach((dish) => {
//   console.log(dish.dataset.id);
// });

// Создание и удаление элементов	Creating and Removing Elements

// Создание	Creation

// document.createElement(tagName);

// const heading = document.createElement("h1");
// console.log(heading); // <h1></h1>

// heading.textContent = "This is a heading";
// console.log(heading); // <h1>This is a heading</h1>

// const image = document.createElement("img");
// image.src = "https://placeimg.com/640/480/nature";
// image.alt = "Nature";
// console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="Nature" />

// Добавление	Addition

// const list = document.querySelector(".usernames");
// console.log(list);

// // Adds an item to the end of the list
// const lastItem = document.createElement("li");
// console.log(lastItem);
// lastItem.textContent = "Poly";
// list.append(lastItem);

// // Adds an item to the beginning of the list
// const firstItem = document.createElement("li");
// firstItem.textContent = "Ajax";
// list.prepend(firstItem);

// // Adds a title before the list
// const title = document.createElement("h2");
// title.textContent = "USERNAMES";
// list.before(title);

// // Adds a paragraph after the list
// const text = document.createElement("p");
// text.textContent =
//   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in ";
// list.after(text);

// Удаление	Removal

// const usernames = document.querySelector(".usernames");
// console.log(usernames);
// usernames.remove();

const list = document.querySelector(".js-list");
console.log(list);

const li = document.createElement("li");
li.textContent = 5;
li.classList.add("js-item");
li.classList.toggle("js-item");
li.classList.toggle("js-item");
li.classList.remove("js-item");
li.classList.toggle("js-item");
li.classList.replace("js-item", "item");
li.classList.toggle("js-item");
li.classList.remove("item");
console.dir(li);

// const h2 = document.createElement('h2')
// li.append(h2)
// const li2 = document.createElement('li');
// li2.textContent = 6;
// li2.classList.add('js-item');

// const liItems = [li, li2];
// console.log(li['classList']);
// li.classList.replace('js-it', 'js-elem')
// li.classList.remove('js-item')
// list.append(...liItems)
// console.dir(li);

// const list = document.querySelector('.js-list')
// const li = `<li class="js-item">5</li>`;

// list.insertAdjacentHTML('beforeend',li)
// list.innerHTML = ''
