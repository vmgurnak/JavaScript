// Module 11 - Lesson 21 - CRUD

// POST - 	Операция create - создать новый ресурс."
// GET - Операция read - получить набор ресурсов или один ресурс по идентификатору.
// PUT и PATCH - Операция update - обновить ресурс по идентификатору.
// DELETE - Операция delete - удалить ресурс по идентификатору

// Чтение	Reading

// Получим массив всех постов. Для этого обращаемся к ресурсу /posts описанному в документации бэкенда. Метод fetch() по умолчанию делает GET-запрос, поэтому переопределять опции запроса не обязательно.

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((posts) => console.log(posts))
//   .catch((error) => console.log(error));

// Change this number to fetch different post
const postId = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//   .then((response) => response.json())
//   .then((post) => console.log(post))
//   .catch((error) => console.log(error));

// Создание	Creation

// Метод POST используется для добавления нового ресурса. Метод fetch() должен отправить на сервер POST-запрос

// const postToAdd = {
//   author: 'Mango',
//   body: 'CRUD is awesome',
// };

// const options = {
//   method: 'POST',
//   body: JSON.stringify(postToAdd),
//   headers: {
//     'Content-Type': 'application/json; charset=UTF-8',
//   },
// };

// fetch('https://jsonplaceholder.typicode.com/posts', options)
//   .then((response) => response.json())
//   .then((post) => console.log(post))
//   .catch((error) => console.log(error));

// Обновление	Updating

// Метод PATCH заменяет в существующем ресурсе значения переданные в теле запроса свойств.
// Метод PUT полностью заменяет ресурс.

// Change value of id property to update different post
// const postToUpdate = {
//   id: 1,
//   body: 'CRUD is really awesome',
// };

// const options = {
//   method: 'PATCH',
//   body: JSON.stringify(postToUpdate),
//   headers: {
//     'Content-Type': 'application/json; charset=UTF-8',
//   },
// };

// fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, options)
//   .then((response) => response.json())
//   .then((post) => console.log(post))
//   .catch((error) => console.log('ERROR' + error));

// Удаление	Deletion

// Метод DELETE используется для удаления существующих данных. Метод fetch() должен отправить на сервер DELETE-запрос без тела. Путь указывает в какой коллекции и какой элемент мы хотим удалить.

// const postIdToDelete = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
//   method: 'DELETE',
// })
//   .then(() => console.log('Post deleted'))
//   .catch((error) => console.log('Error:', error));

// ЗАНЯТИЕ С ПРЕПОДАВАТЕЛЕМ

// CRUD
// C - Create - POST
// R - Read   - GET
// U - Update - PUT PATCH
// D - Delete - DELETE

// https://jsonplaceholder.typicode.com/guide/
// API https://jsonplaceholder.typicode.com/posts

// Запрос получение одного элемента или всей коллекции

// fetch('https://jsonplaceholder.typicode.com/posts/1').then((resp) =>
//   console.log(resp)
// );

// Create - POST

// const post = {
//   userId: 105,
//   title: ' world Hello',
//   body: 'I love JS',
// };

// const options = {
//   method: 'POST',
//   body: JSON.stringify(post),
//   headers: {
//     'Content-type': 'application/json',
//   },
// };

// fetch('https://jsonplaceholder.typicode.com/posts', options);

// fetch('https://jsonplaceholder.typicode.com/posts', options).then((resp) =>
//   console.log(resp)
// );

// PATCH - UPDATE

// PATCH - обновляет одно или несколько свойств

// fetch('https://jsonplaceholder.typicode.com/posts/1').then((resp) =>
//   console.log(resp)
// );
// const post = {
//   title: 'Hello world',
//   // body: 'I love JS',
// };
// const options = {
//   method: 'PATCH',
//   body: JSON.stringify(post),
//   headers: {
//     'Content-type': 'application/json',
//   },
// };

// fetch('https://jsonplaceholder.typicode.com/posts/1', options);

// const before = {
//   body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//   id: 1,
//   title:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   userId: 1,
// };
// const post = {
//     title: "Hello world",
//   };

//   const after = {
//     body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//     id: 1,
//     title: "Hello world",
//     userId: 1,
//   }

// PUT - UPDATE

// Метод PUT перезаписывает все свойства. Придерживаться той структуры объекта, которую ожидает бэкенд

// const before = {
//   body: "quia et suscipit\nsuscipit recusandae ",
//   id: 1,
//   title: "sunt aut facere repellat provident ",
//   userId: 1,
// };
// const after = {
//     id: 1,
//     title: "Hello world",
// };

// fetch('https://jsonplaceholder.typicode.com/posts/1');

// const post = {
//   title: 'Hello world',
// };

// const options = {
//   method: 'PUT',
//   body: JSON.stringify(post),
//   headers: {
//     'Content-type': 'application/json',
//   },
// };

// fetch('https://jsonplaceholder.typicode.com/posts/1', options);

// DELETE

// fetch('https://jsonplaceholder.typicode.com/posts/1');

// const options = {
//   method: 'DELETE',
// };
// fetch('https://jsonplaceholder.typicode.com/posts/1', options);

// ПРАКТИКА

// Завдання - 1.

// Потрібно створи форму "Зв'яжіться зі мною" в якій користувач має можливість залишити заявку для того, щоб з ним зв'язались та відповіли на його питання

// Форма має складатись з таких елементів:
// 1 - Поле для імені.
// 2 - Поле для номера телефону.
// 3 - Поле для адреси електронної пошти.
// 4 - Поле для питання.

// Форма має відправляти дані на бекенд та зберігати їх в базі даних.

// Завдання - 2.
// Реалізуй сторінку для власника бізнесу - після того, як потрапляємо на сторінку потрібно отримати з бази даних всі заявки, які були залишені користувачами

// Elements object
const elements = {
  form: document.querySelector('.js-question'),
};

// Listener, submit event
elements.form.addEventListener('submit', handlerQuestion);

// The callback function collects data from form fields
function handlerQuestion(evt) {
  evt.preventDefault();

  // Destructuring form fields
  const { userName, phone, email, question } = evt.currentTarget.elements;

  const date = {
    name: userName.value,
    phone: phone.value,
    email: email.value,
    comment: question.value,
  };

  serviceQuestion(date)
    .then((d) => {
      console.log(d);
      alert('Success');
    })
    .catch((_) => alert('Failed'))
    .finally((_) => evt.target.reset());
}

// Backend request function
function serviceQuestion(date) {
  const options = {
    method: 'POST',
    body: JSON.stringify(date),
    headers: {
      'Content-type': 'application/json',
    },
  };

  return fetch('http://127.0.0.1:3000/api/question', options).then((resp) => {
    console.log(resp);
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}
