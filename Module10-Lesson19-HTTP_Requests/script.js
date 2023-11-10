// Module 10 - Lesson 19 - HTTP Requests

// Протокол HTTP	HTTP Protocol

// REST API	REST API

// Пути;

// запрос для получения коллекции заказов.

// GET https://bookstore.com/api/orders
// Accept: application / json

// запрос на чтение одного заказа с идентификатором 289.

// GET https://bookstore.com/api/orders/289
// Accept: application/json

// 'Запрос-Ответ	Request-Response';

// "Предположим у нас есть приложение которое позволяет
// просматривать, создавать, редактировать и удалять клиентов и заказы небольшого книжного магазина,
// бекенд которого размещен на bookstore.com/api.
// Используя полученные знания опишем псевдокодом процесс запрос-ответ к бекенду."

//  получить данные о всех клиентах, GET запрос будет выглядеть так.

// GET bookstore.com/api/customers
// Accept: application/json

// сервер отправит нам такой ответ.

// Status: 200 OK
// Content-Type: application/json
// Body: JSON-данные о всех клиентах

// Для получения данных одного клиента мы указываем его идентификатор, уточняя GET запрос.

// GET bookstore.com/api/customers/289
// Accept: application/json

// сервер отправит нам такой ответ.

// Status: 200 OK
// Content-Type: application/json
// Body: JSON-данные о клиенте

// чтобы добавить нового клиента выполняем POST запрос.

// POST bookstore.com/api/customers
// Content-Type: application/json
// Body: { "username": "Mango", "email": "mango@gmail.com" }

// Сервер добавляет уникальный идентификатор и возвращает объект целиком как результат.

// Status: 201 Created
// Content-type: application/json
// Body: { "id": 18674, "username": "Mango", "email": "mango@gmail.com" }

// AJAX	AJAX

// метод получения или отправки данных с последующим обновлением интерфейса по этим данным, без необходимости перезагрузки страницы. За счет этого уменьшается время отклика и веб-страница становится более интерактивной. Этот процесс можно разобрать на примере подгрузки данных.

// 'Fetch API	Fetch API';

// "Встроенный в браузер интерфейс доступный на объекте window, который содержит набор свойств и методов для отправки, получения и обработки ресурсов от сервера.
// Метод fetch() предоставляет современный интерфейс для составления запросов к серверу и построен на промисах.
// "

// fetch(url, options);

// console.log(window);
// console.dir(window.fetch);

// "url - путь к данным на бэкенде которые необходимо получить, создать или изменить. Обязательный аргумент.
// options - объект настроек запроса: метод (по умолчанию GET), заголовки, тело и т. д. Необязательный аргумент."

// Будем делать запросы к JSONPlaceholder API - публичному REST API для быстрого прототипирования, который предоставляет коллекцию не настоящих пользователей в ресурсе /users.

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => {
//     // Response handling
//   })
//   .then((data) => {
//     // Data handling
//   })
//   .catch((error) => {
//     // Error handling
//   });

// В первом методе then() выполняется проверка статуса ответа и преобразование данных в правильный формат, или явное создание ошибки чтобы обработать неудачный HTTP-запрос в блоке catch().

// Это необходимо для того, чтобы fetch() правильно среагировал на статус код 404, который технически не является ошибкой, но для клиента это не успешный результат.

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     // Data handling
//   })
//   .catch((error) => {
//     // Error handling
//   });

// По клику на кнопку «Fetch users» сделаем GET-запрос и отрисуем список пользователей по полученным данным.

// const fetchUsersBtn = document.querySelector('.btn');
// const userList = document.querySelector('.user-list');

// fetchUsersBtn.addEventListener('click', () => {
//   // Вызываем запрос на бэкенд fetchUsers(), Получаем массив объектов с пользователями .then, Вызываем функцию для разметки renderUserList()
//   fetchUsers()
//     .then((users) => {
//       console.log(users);
//       renderUserList(users);
//     })
//     .catch((error) => console.log(error));
// });

// // Функция для запроса на бэкенд, возвращает массив объектов
// function fetchUsers() {
//   return fetch('https://jsonplaceholder.typicode.com/users').then(
//     (response) => {
//       // Значение промиса, который возвращает метод fetch(), это объект со служебной информацией о состоянии ответа сервера.
//       console.log(response);
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       // console.log(response.json());
//       // промис - массив объектов с пользователями
//       return response.json();
//     }
//   );
// }

// // Функция для рендеринга разметки
// function renderUserList(users) {
//   const markup = users
//     .map((user) => {
//       // Объект одного пользователя
//       console.log(user);
//       return `<li>
//           <p><b>Name</b>: ${user.name}</p>
//           <p><b>Email</b>: ${user.email}</p>
//           <p><b>Company</b>: ${user.company.name}</p>
//           <p><b>Phone</b>: ${user.phone}</p>
//           <p><b>Website</b>: ${user.website}</p>
//         </li>`;
//     })
//     .join('');
//   userList.innerHTML = markup;
// }

// 'Параметры строки запроса	Query string parameters';

// Параметры запроса позволяют указать бекенду дополнительные критерии. Например, сколько элементов коллекции мы хотим получить в запросе, возможно необходимо добавить сортировку по какому-то свойству объекта, ограничить выборку и т. п. Список параметров запроса, их названия и возможные значения зависят от бэкенда и описаны в документации.

// Символ ? указывает на старт параметров запроса. Каждый параметр это пара имя=значение. Символ & используется для указания смыслового «И», разделяя параметры в строке запроса.

// const url = 'https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name';

// Такой GET-запрос вернет массив из семи пользователей (всего их 10) отсортированных по имени (поле name) в алфавитном порядке. Подчеркивания в именах параметров специфичны для этого бэкенда, это не какой-то стандарт.

// const fetchUsersBtn = document.querySelector('.btn');
// const userList = document.querySelector('.user-list');

// fetchUsersBtn.addEventListener('click', () => {
//   fetchUsers()
//     .then((users) => renderUserList(users))
//     .catch((error) => console.log(error));
// });

// function fetchUsers() {
//   return fetch(
//     'https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name'
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// function renderUserList(users) {
//   const markup = users
//     .map((user) => {
//       return `
//           <li>
//             <p><b>Name</b>: ${user.name}</p>
//             <p><b>Email</b>: ${user.email}</p>
//             <p><b>Company</b>: ${user.company.name}</p>
//           </li>
//       `;
//     })
//     .join('');
//   userList.innerHTML = markup;
// }

// Класс URLSearchParams	URLSearchParams class

// Параметров может быть много, и составлять из них одну длинную строку не удобно, как для читабельности, так и для её последующего редактирования. При составлении строки параметров создаётся экземпляр класса URLSearchParams и инициализируется объектом. Результатом будет специальный объект (итератор) с методами, который в строчном преобразовании возвращает результат вызова метода toString() - своё строчное представление.

// const searchParams = new URLSearchParams({
//   _limit: 5,
//   _sort: 'name',
// });

// console.log(searchParams);
// console.log(searchParams.toString()); // "_limit=5&_sort=name"

// При интерполяции значения в шаблонных строках происходит его неявное преобразование к строке, поэтому не нужно вызывать метод toString() при составлении URL. Не забывайте указывать начало строки запроса символом ?.

// const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
// console.log(url); // "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name"

// HTTP-заголовки	HTTP headers

// Класс Headers позволяет выполнять различные действия в заголовках HTTP-запроса и ответа. Эти действия включают в себя извлечение, настройку, добавление и удаление заголовков.

// const headers = new Headers({
//   'Content-Type': 'application/json',
//   'X-Custom-Header': 'custom value',
// });

// headers.append('Content-Type', 'text/bash');
// headers.append('X-Custom-Header', 'custom value');
// headers.has('Content-Type'); // true
// headers.get('Content-Type'); // "text/bash"
// headers.set('Content-Type', 'application/json');
// headers.delete('X-Custom-Header');

// На практике для составления заголовков запроса обычно использут просто литерал объекта со свойствами. В таком случае методов не будет, что зачастую и не требуется.

// const headers = {
//   'Content-Type': 'application/json',
//   'X-Custom-Header': 'custom value',
// };

// console.log(headers);

// Запрос с использованием заголовков будет выглядеть так.

// fetch('https://jsonplaceholder.typicode.com/users', {
//   headers: {
//     Accept: 'application/json',
//   },
// }).then((response) => {
//   // ...
// });

// Кросс-доменные запросы	Cross-Origin Resource Sharing

// "По умолчанию HTTP-запрос можно делать только в рамках текущего сайта.
// При попытке запроса на другой домен, порт или протокол, то есть выполнить кросс-доменный запрос - браузер выдаёт ошибку.
// Это сделано из соображений безопасности и права доступа настраиваются на бэкенде.
// Если бэкенд не поддерживает кросс-доменные запросы, то фронтенд-разработчик ничего не сможет с этим сделать в своем коде."

// "При каждом запросе браузер сам добавляет HTTP-заголовок Origin,
// где указывает адрес веб-страницы которая хочет сделать HTTP-запрос.
// Например, если мы делаем fetch-запрос с веб-страницы https://my-site.com/about на https://my-api.com/users, то заголовки будут следующими."

// GET /users
// Host: my-api.com
// Origin: https://my-site.com

// Сервер проверяет заголовок Origin и, если он поддерживает кросс-доменные запросы, добавляет в ответ специальный HTTP-заголовок Access-Control-Allow-Origin.

// Значением этого заголовка будет разрешенный источник (Origin).
// В нашем случае это должен быть один сайт https://my-site.com,
// если бэкенд приватный,
// или спецсимвол *, если бэкенд публичный - разрешает делать запросы кому угодно

// # Private API
// Access-Control-Allow-Origin: https://my-site.com

// # Public API
// Access-Control-Allow-Origin: *

// ЗАНЯТИЕ С ПРЕПОДОВАТЕЛЕМ

// *********Links********* \\
// https://www.postman.com/downloads/
// https://rickandmortyapi.com/documentation
// https://www.weatherapi.com/docs/
// https://uk.wikipedia.org/wiki/SOAP

// Приклад документації до API

// https://rickandmortyapi.com/documentation/#rest

// *********Fetch********* \\

// *********Обробка помилок та парсинг відповіді********* \\

// XMLHttpRequest
// const options = {
// method: 'GET',
// }

// Объект параметров, передается вторым параметром в feth
// const options = {
//   method: 'GET',
// };

// Метод fetch запрос на бэкенд
// console.log(fetch('https://rickandmortyapi.com/api/character', options));

// fetch('https://rickandmortyapi.com/api/character', options)
//   // ответ с параметрами запроса на бэкенд
//   .then((response) => {
//     console.log(response);
//     // проверка, что ответ пришел ок, если нет throw
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     //   JSON.parse() уже не используем, есть встроенный метод
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// ***************ПРАКТИКА*************** \\

// ФУНКЦИОНАЛ ДЛЯ ПОГОДЫ В ГОРОДЕ

// Потрібно створити функціонал для отримання прогнозу погоди в місті.
// Використай публічне API https://www.weatherapi.com/docs/
// Використовуй ендпоінт Forecast для того, щоб отримати прогноз погоди на декілька днів.

// Створи форму в яку користувач:
// 1 вводить назву міста.
// 2 обирає на яку кількість днів він хоче отримати прогноз погоди (3, 5 та 7 днів).
// (Іноді параметр не працює в такому випадку можна зробити пошук на 1, 2 та 3 дні)
// Приклад форми https://prnt.sc/kFmLOj6gBdv-

// Після сабміту форми відмалюй картки з інформацією отриманою з бекенду.
// Картка має містити відомості про:
// 1 Зображення з погодою (icon)
// 2 Текст з погодою (text)
// 3 Дату (date)
// 4 Середню температуру в Цельсія (avgtemp_c)
// Приклад картки https://prnt.sc/h_p-A6Hty-i-

// !!! ЗВЕРНИ УВАГУ ЩО API_KEY ПІСЛЯ РЕЄСТРАЦІЇ ВАЛІДНИЙ 21 ДЕНЬ !!!.

// Объект с поиском элементов
const elements = {
  searchForm: document.querySelector('.js-search-form'),
  list: document.querySelector('.js-list'),
};

// Слушатель на форме, событие submit
elements.searchForm.addEventListener('submit', handlerSearch);

// Коллбэк-функция
function handlerSearch(evt) {
  // Сброс стандартных настроек при перезагрузке
  evt.preventDefault();
  console.dir(evt.currentTarget);
  // Деструктуризация
  const { city, days } = evt.currentTarget.elements;
  console.dir(city.value);
  console.dir(days.value);

  // Вызов функции запроса на бэкенд, получение данных и создание разметки - Call the request function on the backend, get data and create markup
  serviceWeather(city.value, days.value)
    .then((data) => {
      console.log(data);
      console.log(data.forecast.forecastday);
      elements.list.innerHTML = createMarkup(data.forecast.forecastday);
    })
    .catch((err) => console.log(err))
    // Очистка формы после запроса - Clearing the form after a request
    .finally(() => evt.target.reset());
}

// Функция запроса на бэкенд - Backend request function
function serviceWeather(city, days) {
  const BASE_URL = 'http://api.weatherapi.com/v1';
  const END_POINT = '/forecast.json';
  const API_KEY = '6410346f89264d6e919165208231505';

  // экземпляр класса URLSearchParams для составлении строки параметров - an instance of the URLSearchParams class for composing a string of parameters
  const params = new URLSearchParams({
    key: API_KEY,
    q: city,
    days: days,
    lang: 'ru',
  });

  // console.log(params.toString());

  return fetch(`${BASE_URL}${END_POINT}?${params}`).then((resp) => {
    console.log(resp);
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });

  // Без экземпляра класса new URLSearchParams
  // fetch(`${BASE_URL}${END_POINT}?key=${API_KEY}&q=${city}&days=${days}&lang=uk`)
}

// Функция для разметки - Markup function
function createMarkup(arr) {
  return arr
    .map(
      ({
        date,
        day: {
          avgtemp_c,
          condition: { icon, text },
        },
      }) => `<li class="weather-card">
    <img src="${icon}" alt="${text}" class="weather-icon"/>
    <h2 class="date">${date}</h2>
    <h3 class="weather-text">${text}</h3>
    <h3 class="temperature">${avgtemp_c} °C</h3>
</li>`
    )
    .join('');
}
