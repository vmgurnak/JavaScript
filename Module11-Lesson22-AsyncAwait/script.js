// Module11-Lesson22-AsyncAwait

// Синтаксис async/await

// В основі синтаксису async/await лежать проміси, тому він не блокує основний потік виконання програми.

// Для оголошення асинхронної стрілочної функції, перед списком параметрів додаємо ключове слово async.
// Всередині неї можна використовувати оператор await і праворуч від нього поставити щось, що поверне проміс.
// Метод response.json() також повертає проміс, тому ставимо await.

// Запрос с помощью async/await

// const fetchUsers = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const users = await response.json();
//   return users;
// };

// fetchUsers().then((users) => console.log(users));

// Обычный Запрос с помощью fetch

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

//   Будь-яка функція може бути асинхронною, чи то метод об'єкта, класу, колбек, оголошення або інлайн функція. Всі вони зможуть використовувати оператор await і обов'язково повернуть проміс, тому що будуть асинхронними функціями.

// // Function declaration
// async function foo() {
//   // ...
// }

// // Functional expression
// const foo = async function () {
//   // ...
// };

// // Arrow function
// const foo = async () => {
//   // ...
// };

// // Object method
// const user = {
//   async foo() {
//     // ...
//   },
// };

// // Class method
// class User {
//   async foo() {
//     // ...
//   }
// }

// Обробка помилок

// Якщо результат асинхронної функції (проміс) не використовується у зовнішньому коді, помилки обробляються в тілі функції конструкцією try...catch. Значення параметра error в блоці catch - це помилка, яку згенерує await, якщо проміс буде відхилений.

// const fetchUsers = async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     console.log(response);
//     const users = await response.json();
//     console.log(users);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// fetchUsers();

// Якщо результат асинхронної функції (проміс) використовується у зовнішньому (глобальному) коді, тобто за межами інших асинхронних функцій, помилки обробляються колбеком методом catch(). Значення параметра error в методі catch() - це помилка, яку згенерує await, якщо проміс буде відхилений.

// const fetchUsers = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const users = await response.json();
//   return users;
// };

// fetchUsers()
//   .then((users) => console.log(users))
//   .catch((error) => console.log(error));

// Так працювати не буде - await можна використовувати тільки в тілі асинхронної функції.

// const fetchUsers = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const users = await response.json();
//   return users;
// };

// // ❌ SyntaxError: await is only valid in async function
// const users = await fetchUsers();

// Якщо результат асинхронної функції використовується в іншій асинхронній функції, помилки обробляються конструкцією try...catch. Значення параметра error в блоці catch - це помилка, яку згенерує await, якщо проміс буде відхилений.

// const fetchUsers = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const users = await response.json();
//   return users;
// };

// const doStuff = async () => {
//   try {
//     const users = await fetchUsers();
//     console.log(users);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// doStuff();

// Паралельні запити

// Якщо одночасно необхідно зробити декілька запитів, використовувати синтаксис async/await потрібно дуже обережно. У наступному прикладі будуть виконані три послідовних запити, тому що виконання асинхронної функції призупиняється, коли інтерпретатор зустрічає await. Крім того, парс результатів запитів також буде послідовний, що забере більше часу.

// Це нормально, якщо запити залежать один від одного, тобто наступний використовує результат попереднього.

// const fetchUsers = async () => {
//   const baseUrl = 'https://jsonplaceholder.typicode.com';
//   const firstResponse = await fetch(`${baseUrl}/users/1`);
//   const secondResponse = await fetch(`${baseUrl}/users/2`);
//   const thirdResponse = await fetch(`${baseUrl}/users/3`);

//   const firstUser = await firstResponse.json();
//   const secondUser = await secondResponse.json();
//   const thirdUser = await thirdResponse.json();

//   console.log(firstUser, secondUser, thirdUser);
// };

// fetchUsers();

// У нашому випадку вони повністю незалежні, тому потрібно запустити їх паралельно. Для цього створюється масив промісів, після чого використовується метод Promise.all(), для очікування їх виконання. Масив промісів створюється методами map(), filter() тощо, залежно від завдання.

// запити запускаються паралельно, що економить час очікування їх виконання, який дорівнює тривалості «найповільнішого» з них. Такий прийом підходить тільки у разі, якщо запити не залежать один від одного.

// const fetchUsers = async () => {
//   const baseUrl = 'https://jsonplaceholder.typicode.com';
//   const userIds = [1, 2, 3];

//   // 1. Створюємо масив промісів
//   const arrayOfPromises = userIds.map(async (userId) => {
//     const response = await fetch(`${baseUrl}/users/${userId}`);
//     return response.json();
//   });

//   // 2. Запускаємо усі проміси паралельно і чекаємо на їх завершення
//   const users = await Promise.all(arrayOfPromises);
//   console.log(users);
// };

// fetchUsers();

// додали кнопку, клікаючи на яку, виконується запит, і обробили можливу помилку конструкцією try...catch. Це стандартний AJAX-код з використанням асинхронних функцій.

// const fetchUsersBtn = document.querySelector('.btn');
// const userList = document.querySelector('.user-list');

// fetchUsersBtn.addEventListener('click', async () => {
//   try {
//     const users = await fetchUsers();
//     renderUserListItems(users);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// async function fetchUsers() {
//   const baseUrl = 'https://jsonplaceholder.typicode.com';
//   const userIds = [1, 2, 3, 4, 5];

//   const arrayOfPromises = userIds.map(async (userId) => {
//     const response = await fetch(`${baseUrl}/users/${userId}`);
//     return response.json();
//   });

//   const users = await Promise.all(arrayOfPromises);
//   return users;
// }

// function renderUserListItems(users) {
//   const markup = users
//     .map(
//       (user) => `<li class="item">
//         <p><b>Name</b>: ${user.name}</p>
//         <p><b>Email</b>: ${user.email}</p>
//         <p><b>Company</b>: ${user.company.name}</p>
//       </li>`
//     )
//     .join('');
//   userList.innerHTML = markup;
// }

// ------------ЗАНЯТИЕ С ПРЕПОДАВАТЕЛЕМ-----------

// ***************** Конструкція async await ***************** \\

// function servicesCountry() {
//   return fetch('https://restcountries.com/v3.1/name/Ukraine')
//     .then((resp) => {
//       console.log(resp);
//       if (!resp.ok) {
//         throw new Error(resp.statusText);
//       }
//       return resp.json();
//     })
//     .then((date) => {
//       console.log(date);
//       console.log(date[0].capital);

//       return fetch('data.capital')
//         .then((resp) => {})
//         .then();
//     });
// }

// servicesCountry();

// async function servicesCountry() {
//   const resp = await fetch('https://restcountries.com/v3.1/name/Ukraine');
//   console.log(resp);
//   if (!resp.ok) {
//     throw new Error(resp.statusText);
//   }
//   const data = await resp.json();
//   console.log(data);

//   const respWeather = await fetch('data.capital');
//   console.log(respWeather);

//   if (!respWeather.ok) {
//     throw new Error(respWeather.statusText);
//   }
//   const dataWeather = await respWeather.json();
// }

// servicesCountry();

// ***************** Асинхрона функція завжди поверне проміс ***************** \\

// async function fn() {
//   const resp = await fetch('https://restcountries.com/v3.1/name/Ukraine');
//   console.log(resp);
//   console.log('Hello');
// }

// fn();
// // асинхронная функция возвращает промис
// // const result = fn();
// // console.log(result);
// console.log('after async function');

// // async можно использовать без оператора await, смысла нет
// async function fn() {
//   console.log('hello');
// }
// fn();

// // await нельзя использовать отдельно без асинхронной функции
//  function fn() {
//     const resp = await fetch("https://restcountries.com/v3.1/name/Ukraine");
// }
// fn()

// *****************Асинхронною функціює може бути будь який різновид функції ***************** \\

// ****** Arrow function ****** \\

// const servicesCountry = async () => {
//   const resp = await fetch('https://restcountries.com/v3.1/name/Ukraine');
//   console.log(resp);
// };

// servicesCountry();

// ****** Function expression ****** \\

// const servicesCountry = async function () {
//   const resp = await fetch('https://restcountries.com/v3.1/name/Ukraine');
//   console.log(resp);
// };

// servicesCountry();

// ****** Object method ****** \\

// const service = {
//   countryName: 'Ukraine',
//   async serviceCountry() {
//     const resp = await fetch(
//       `https://restcountries.com/v3.1/name/${this.countryName}`
//     );
//     console.log(resp);
//   },
// };

// service.serviceCountry();

// ****** Метод Class ****** \\

// class Service {
//   constructor(country) {
//     this.countryName = country;
//   }

//   async serviceCountry() {
//     const resp = await fetch(
//       `https://restcountries.com/v3.1/name/${this.countryName}`
//     );
//     console.log(resp);
//   }
// }

// const Ukraine = new Service('Ukraine');
// Ukraine.serviceCountry();

// -------------Обработка ошибок-----------------

// ************ Обробка за допомогою then та catch ************ \\

// Если результат выполнения функции обрабытвается за ее пределами, с функции что-то возвращается есть return

// async function serviceCountry() {
//   const resp = await fetch('https://restcountries.com/v3.1/name/Ukraine');

//   if (!resp.ok) {
//     throw new Error(resp.statusText);
//   }

//   return resp.json();
// }

// serviceCountry()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))
//   .finally(() => {});

// ************ Обробка за допомогою try та catch ************ \\

// Если ничего не возвращается, обработка в середине

// async function serviceCountry() {
//   try {
//     const resp = await fetch('https://restcountries.com/v3.1/name/Ukraine');

//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }

//     const data = await resp.json();
//     console.log(data);
//     // createMarkup(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// serviceCountry();

// Не комбинировать  then catch и try catch

// async function serviceCountry() {
//   try {
//     const resp = await fetch('https://restcountries.com/v3.1/nme/Ukraine');

//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }

//     return resp.json();
//   } catch (err) {
//     console.log(err);
//   }
// }

// serviceCountry()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))
//   .finally(() => {});

// // ************ Паралельні та послідовні запити ************ \\

// *********** Послідовні *********** \\

// async function servicesCountry() {
//   const resp1 = await fetch('https://restcountries.com/v3.1/name/Ukraine');
//   const resp2 = await fetch('https://restcountries.com/v3.1/name/Poland');
//   const resp3 = await fetch('https://restcountries.com/v3.1/name/Greece');
// }

// servicesCountry();

// *********** Паралельні *********** \\

// async function servicesCountry() {
//   const countries = ['Ukraine', 'Poland', 'Greece'];
//   const responses = countries.map(async (country) => {
//     const resp = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//     return resp.json();
//   });
//   console.log(responses);
//   const data = await Promise.allSettled(responses);
//   console.log(data);
// }
// servicesCountry();

// ************* CORS ************** \\

// fetch(
//   'https://common-api.rozetka.com.ua/v2/fat-menu/full?front-type=xl&country=UA&lang=ru&r=0.8775831279096225'
// )
//   .then((resp) => resp.json())
//   .then((data) => console.log(data));

// ********************* Практика ********************* \\
// Створи додаток для туристичного агенства
// Користувач має форму в яку може додавати довільну кількість полів
// В кожне поле він вводить назву країни
// Після сабміту форми форма відправляє запит на бекенд та отримує назви столиць цих країн
// На основі відповіді попереднього сервісу потрібно створити прогноз погоди по кожній столиці
// Використовуй паралельні запити
// Бекенд для пошуку країн https://restcountries.com/
// Бекенд для прогнозу погоди  https://www.weatherapi.com/docs/   КЛЮЧ ВАЛІДНИЙ 21 ДЕНЬ !!!!!

// Elements object
const elements = {
  form: document.querySelector('.js-search'),
  formContainer: document.querySelector('.js-form-container'),
  addField: document.querySelector('.js-add'),
  list: document.querySelector('.js-list'),
};

// Event listeners - click to add input, submit to submit form
elements.addField.addEventListener('click', handlerAddField);
elements.form.addEventListener('submit', handlerSubmit);

// Callback function for adding input
function handlerAddField() {
  elements.formContainer.insertAdjacentHTML(
    'beforeend',
    '<input type="text" name="country" />'
  );
}

// Callback function for submitting a form, getting an array of country capitals
async function handlerSubmit(evt) {
  evt.preventDefault();
  const formData = new FormData(evt.currentTarget);
  const countries = formData
    .getAll('country')
    .map((item) => item.trim())
    .filter((item) => item)
    .filter((item, idx, arr) => arr.indexOf(item) === idx);
  // console.log(formData);
  // console.log(countries);
  // Error handling
  try {
    const capitals = await servicesCountry(countries);
    const weather = await serviceWeather(capitals);
    console.log(weather);
    elements.list.innerHTML = createMurcup(weather);
  } catch (error) {
    console.log(error);
  } finally {
    elements.formContainer.innerHTML = '<input type="text" name="country" />';
  }
}

// Function for parallel requests on the backend https://restcountries.com
async function servicesCountry(countries) {
  const BASE_URL = 'https://restcountries.com/v3.1/name/';
  const responses = countries.map(async (country) => {
    const resp = await fetch(`${BASE_URL}${country}`);
    if (!resp.ok) {
      // Error handling
      // throw new Error(resp.statusText);
      return Promise.reject(resp.statusText);
    }
    return resp.json();
  });
  const data = await Promise.allSettled(responses);
  // console.log(data);
  return data
    .filter(({ status }) => status === 'fulfilled')
    .map(({ value }) => value[0].capital[0]);
}

// Function for parallel requests on the backend http://api.weatherapi.com
async function serviceWeather(capitals) {
  const BASE_URL = 'http://api.weatherapi.com/v1';
  const END_POINT = '/current.json';
  const API_KEY = '14c56bddeab14583a6e164909231107';

  const responses = capitals.map(async (capital) => {
    const params = new URLSearchParams({
      key: API_KEY,
      q: capital,
      lang: 'en',
    });
    const resp = await fetch(`${BASE_URL}${END_POINT}?${params}`);
    if (!resp.ok) {
      // Error handling
      // throw new Error(resp.statusText);
      return Promise.reject(resp.statusText);
    }
    // console.log(resp);
    return resp.json();
  });
  const data = await Promise.allSettled(responses);
  // console.log(data);
  return data
    .filter(({ status }) => status === 'fulfilled')
    .map(
      ({
        value: {
          current: {
            condition: { text, icon },
            temp_c,
          },
          location: { name, country },
        },
      }) => {
        return { text, icon, temp_c, name, country };
      }
    );
}

// function for creating markup
function createMurcup(arr) {
  return arr
    .map(
      ({ country, icon, name, temp_c, text }) => `      <li>
         <img src="${icon}" alt="${text}">
         <h2>${country}</h2>
         <h2>${name}</h2>
         <p2>${text}</p2>
         <p2>${temp_c} C</p2>
      </li>`
    )
    .join('');
}
