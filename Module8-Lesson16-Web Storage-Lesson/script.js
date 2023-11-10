// Module8-Lesson16-Web Storage

// Формат JSON

// "{
//   ""name"": ""Josh"",
//   ""weight"": 175,
//   ""age"": 30,
//   ""eyecolor"": ""brown"",
//   ""isHappy"": true,
//   ""cars"": [""Chevy"", ""Honda""],
//   ""favoriteBook"": {
//     ""title"": ""The Last Kingdom"",
//     ""author"": ""Bernard Cornwell"",
//     ""rating"": 8.38
//   }
// }"

// Метод JSON.stringify()
// Принимает значение и преобразовывает его в JSON. Значением может быть число, буль, null, массив или обьект. Строки это уже валидный JSON поэтому их преобразование не имеет смысла.

// const dog = {
//   name: 'Mango',
//   age: 3,
//   isHappy: true,
// };

// const dogJSON = JSON.stringify(dog);
// console.log(dogJSON); // "{"name":"Mango","age":3,"isHappy":true}"

// Не любой JavaScript объект может быть преобразован один к одному в JSON. Например, если у объекта есть методы, то при преобразовании они будут проигнорированы.

// const dog = {
//   name: 'Mango',
//   age: 3,
//   isHappy: true,
//   bark() {
//     console.log('Woof!');
//   },
// };

// const dogJSON = JSON.stringify(dog);
// console.log(dogJSON); // "{"name":"Mango","age":3,"isHappy":true}"

// Также при попытке преобразовать функцию в JSON, результатом будет undefined

// JSON.stringify(() => console.log('Well, this is awkward')); // undefined

// Метод JSON.parse()

// const json = '{"name":"Mango","age":3,"isHappy":true}';
// console.log(json);

// const dog = JSON.parse(json);
// console.log(dog); // {name: "Mango", age: 3, isHappy: true}
// console.log(dog.name); // "Mango"

// Обработка ошибок

// конструкция try...catch, которая позволяет «ловить» и обрабатывать ошибки выполнения скрипта.

// try {
//   // Code that may throw a runtime error
// } catch (error) {
//   // Error handling
// }

// Переменная error это объект ошибки с информацией о том, что произошло. У этого объекта есть несколько полезных свойств:
// name - тип ошибки. Для ошибки парса это SyntaxError.
// message - сообщение о деталях ошибки.
// stack - стек вызовов функций на момент ошибки. Используется для отладки.

// Script will crash during parse
// const data = JSON.parse('Well, this is awkward');
// console.log("❌ You won't see this log");

// try {
//   const data = JSON.parse('Well, this is awkward');
// } catch (error) {
//   console.log(error.name); // "SyntaxError"
//   console.log(error.message); // Unexpected token W in JSON at position 0
// }

// console.log('✅ This is fine, we handled parse error in try...catch');

// try {
//   const data = JSON.parse('{"username: "Mango"}');
//   console.log(data);
// } catch (error) {
//   console.log(error.name); // "SyntaxError"
//   console.log(error.message); // "Unexpected token u in JSON at position 1"
// }

// console.log('✅ This is fine, we handled parse error in try...catch');

// console.log('This message will not appear in the console');

// cons value = 5;

// Веб-хранилище	Web Storage

// Локальное хранилище	Local storage

// console.log(localStorage);

// Сохранение	Saving

// Используя метод setItem(key, value) можно добавить новую запись в виде пары ключ:значение.

// localStorage.setItem('ui-theme', 'light');
// localStorage.setItem('sidebar', 'expanded');
// localStorage.setItem('notification-level', 'mute');

// Если необходимо сохранить что-то кроме строки, например массив или объект, необходимо преобразовать их в строку методом JSON.stringify().

// const settings = {
//   theme: 'dark',
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };

// localStorage.setItem('settings', JSON.stringify(settings));

// Чтение	Reading

// Метод getItem(key) позволяет прочитать из хранилища запись с ключом key. Если в хранилище нет записи с таким ключом, метод возвращает null. Когда значение это обычная строка - нет необходимости её парсить.

// localStorage.setItem('ui-theme', 'dark');

// const theme = localStorage.getItem('ui-theme');
// console.log(theme); // "dark"

// В противном случае, необходимо распарсить значение методом JSON.parse(), чтобы получить валидные данные.

// const settings = {
//   theme: 'dark',
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };

// localStorage.setItem('settings', JSON.stringify(settings));

// const savedSettings = localStorage.getItem('settings');
// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings); // settings object

// Удаление	Removal

// Метод removeItem(key) удаляет из хранилища уже существующую запись с ключом key.

// localStorage.setItem('ui-theme', 'dark');
// console.log(localStorage.getItem('ui-theme')); // "dark"

// localStorage.removeItem('ui-theme');
// console.log(localStorage.getItem('ui-theme')); // null

// Очистка хранилища	Storage clearing

// localStorage.setItem('ui-theme', 'light');
// localStorage.setItem('sidebar', 'expanded');
// localStorage.setItem('notification-level', 'mute');
// console.log(localStorage.getItem('ui-theme')); // "light"
// console.log(localStorage.getItem('sidebar')); // "expanded"
// console.log(localStorage.getItem('notification-level')); // "mute"

// localStorage.clear();
// console.log(localStorage.getItem('ui-theme')); // null
// console.log(localStorage.getItem('sidebar')); // null
// console.log(localStorage.getItem('notification-level')); // null

// Сохраняем сообщение
// Создадим форму для ввода сообщения и будем сохранять его в localStorage при сабмите. Изменяйте значение текстового поля и нажимате кнопку «Save». Текст в поле вывода изменится на введенный. Перезагрузите страницу, и вы увидите все тот же текст, хотя ничего еще не вводили. При загрузке страницы мы берем из localStorage последнее сохраненное значение. Изначально такой записи в хранилище нет, поэтому будет выведена пустая строка.

// // Поиск элементов
// const form = document.querySelector('.message-form');
// const output = document.querySelector('.output');
// // Переменная для LOCALSTORAGE_KEY
// const LOCALSTORAGE_KEY = 'goit-example-message';

// // Вызов функции updateOutput c последним значением ключа LOCALSTORAGE_KEY
// updateOutput();
// // Слушатель по событию 'submit' для формы
// form.addEventListener('submit', saveMessage);

// Коллбэк - функция;
// function saveMessage(evt) {
//   // отмена действий по умолчанию - перезагрузки при отправке формы
//   evt.preventDefault();
//   // Сохранение в локальном хранилище значения ввода в input (свойство elements объект со ссылками на все её элементы у которых есть атрибут name в форме)
//   localStorage.setItem(LOCALSTORAGE_KEY, form.elements.message.value);
//   // Вызов функции updateOutput для записи значения ключа локального хранилища LOCALSTORAGE_KEY в span
//   updateOutput();
//   // сброс формы после отправки
//   form.reset();
// }

// // Функция updateOutput для записи значения ключа локального хранилища LOCALSTORAGE_KEY в span
// function updateOutput() {
//   output.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || '';
// }

// Удаление из хранилища записи с ключом 'goit-example-message'
// localStorage.removeItem('goit-example-message');

// Сервис для localStorage	Service for localStorage

// "storage.js

// Функция сохранения в локальное хранилище
// const save = (key, value) => {
//   try {
//     const serializedState = JSON.stringify(value);
//     localStorage.setItem(key, serializedState);
//   } catch (error) {
//     console.error('Set state error: ', error.message);
//   }
// };

// Вызов функции
// save('key', 120);

// Функция чтания из локального хранилища
// const load = key => {
//   try {
//     const serializedState = localStorage.getItem(key);
//     return serializedState === null ? undefined : JSON.parse(serializedState);
//   } catch (error) {
//     console.error('Get state error: ', error.message);
//   }
// };

// // Вызов функции
// console.log(load('key'));

// export default {
//   save,
//   load,
// };

// localStorage.removeItem('goit-example-message');

// ЗАНЯТИЕ РЕПЕТА

// Отправка данных формы textarea. Функционал сохоранение данных при сбое (не отправка формы)
// Сохранение сообщений пользователя между перезагрузками страницы

// // подключение lodash.throttle
// import throttle from 'lodash.throttle';

// // Объект элементов
// const elements = {
//   form: document.querySelector('.js-feedback-form'),
//   textarea: document.querySelector('.js-feedback-form textarea'),
//   input: document.querySelector('.js-feedback-form input'),
// };
// // Деструктуризация объекта
// const { form, textarea, input } = elements;

// // Константа для имени ключа в Localstorage
// const STORAGE_KEY = 'feedback-msg';

// // Пустой объект для вводимых значений в форму
// formDate = {};

// // Вставляем значение в textarea из localstorage при перезагрузке
// populateForm();

// // Cлушатель событие 'submit' при отправке формы
// form.addEventListener('submit', onFormSubmit);

// // - получаем значение полей формы, записываем в объект
// // - сохраняем в хранилище
// // - можно добавить throttle

// // Слушатель событие input на форме, всплывание при вводе в input и textarea с элементов.
// form.addEventListener('input', throttle(onFormInput, 500));

// function onFormInput(evt) {
//   formDate[evt.target.name] = evt.target.value;
//   const message = JSON.stringify(formDate);
//   localStorage.setItem(STORAGE_KEY, message);
// }

// // - останавливаем поведение по умолчанию
// // - убираем сообщение из хранилища
// // - очищаем форму
// function onFormSubmit(evt) {
//   evt.preventDefault();
//   // form.reset();
//   evt.currentTarget.reset();
//   // очищаем localStorage при отправке формы
//   localStorage.removeItem(STORAGE_KEY);
// }

// // - Получаем значение из хранилища
// // - Если там что-то было, обновляем DOM (вызов функции вверху)
// function populateForm() {
//   const savedFormDate = JSON.parse(localStorage.getItem(STORAGE_KEY));
//   // Проверка, если не пустой объект
//   if (savedFormDate) {
//     textarea.value = savedFormDate.message;
//     input.value = savedFormDate.name;
//   }
// }

// ЗАНЯТИЕ С ПРЕПОДАВАТЕЛЕМ

// const names = ['Alice', 'Kate', 'Emma'];
// // Объект ключей
// const keys = {
//   names: 'Array of names',
// };

// Запись в localStorage с преобразхованием в строку
// localStorage.setItem(keys.names, JSON.stringify(names));

// Получение из localStorage с пасингом в объект
// console.log(JSON.parse(localStorage.getItem(keys.names)));

// Удаленпие из localStorage

// localStorage.removeItem(keys.names);

// Добавление в localStorage по клику на кнопку

// const btnLs = document.querySelector('.js-ls');
// btnLs.addEventListener('click', handlerAddLS);
// function handlerAddLS() {
//   localStorage.setItem(keys.names, JSON.stringify(names));
// }

// Добавление в sessionStorage по клику на кнопку

// const btnSs = document.querySelector('.js-ss');
// btnSs.addEventListener('click', handlerAddSS);
// function handlerAddSS() {
//   sessionStorage.setItem(keys.names, JSON.stringify(names));
// }

// Удаление из localStorage localStorage.clear

// localStorage.setItem(keys.names, JSON.stringify(names));
// localStorage.setItem('123', 12312);
// localStorage.setItem('abc', 'abc');
// localStorage.removeItem(keys.names)
// localStorage.clear();

// Добавлять функции в localStorage нельзя, если преобразовывать JSON.stringify

// function add(a, b) {
//   return a + b;
// }

// Преобразование функции в JSON строку - undefined
// console.log(JSON.stringify(add));

// Добавление функции localStorage без преобразования, добавляет, возвращает строку
// localStorage.setItem('function', add);
// console.log(localStorage.getItem('function'));
// console.log(typeof localStorage.getItem('function'));
// // Будет ошибка
// // console.log(typeof JSON.parse(localStorage.getItem('function')));

// Добавление функции с преобразованиемсв JSON строку - undefined
// localStorage.setItem('function1', JSON.stringify(add));

// JSON.stringify - вырезавет методы, функции

// const calc = {
//   a: 5,
//   b: 10,
//   add() {
//     return this.a + this.b;
//   },
// };

// console.log(JSON.stringify(calc));

// конструкция try...catch
// позволяет безопасно обработать какие - то рискованные моменты кода
// try обрабатывает ошибку, если будет

// try {
//   console.log(message);
// } catch (error) {
//   console.log(error);
//   console.error(error);
//   console.log(error.name);
//   console.log(error.message);
// }

// console.log('after console');

// Оператор ИЛИ
// ||
// для него false
// 0 null '' NaN undefined false

// Оператор нулевого сравнения
// ??
// для него false только
// null undefined

// При работе с localStoraget - чаще вместо try...catch применяется дефролтное значение с помощью оператора || или ?? (напр. пустой массив, объект, строка, 0)

// const names = ['Alice', 'Kate', 'Emma'];
// // Объект ключей
// const keys = {
//   names: 'Array of names',
// };

// localStorage.setItem(keys.names, JSON.stringify(names));

// try {
//   const names = JSON.parse(localStorage.getItem(keys.names));
//   // Bариант без конструкции try catch
//   // const names = JSON.parse(localStorage.getItem(keys.names)) ?? [];

//   names.forEach((element) => {
//     console.log(element);
//   });
//   console.log(names);
// } catch (err) {
//   console.log(err);
//   console.log(err.name);
//   console.log(err.message);
// }

// console.log('after');
