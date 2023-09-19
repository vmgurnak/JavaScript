// Module 10 - Lesson 20 - Pagination

// пагинация - приём, при котором на первый и каждый последующий GET-запрос возвращается не вся коллекция, а определённая её часть.
// Пагинация реализуется на бэкенде и используется на фронтенде при помощи специальных параметров запроса.

// Публичный JSONPlaceholder API так же поддерживает пагинацию -
// количество элементов в ответе контролируерт параметр _limit.
// Всего в коллекции /posts есть сто элементов.
// Изменяйте значение параметра _limit в примере и исследуйте ответ бэкенда в интерфейсе и на вкладке Network.

// const fetchPostsBtn = document.querySelector('.btn');
// const userList = document.querySelector('.posts');

// fetchPostsBtn.addEventListener('click', () => {
//   fetchPosts()
//     .then((posts) => renderPosts(posts))
//     .catch((error) => console.log(error));
// });

// function fetchPosts() {
//   // Change the number of items in the group here
//   return fetch('https://jsonplaceholder.typicode.com/posts?_limit=5').then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     }
//   );
// }

// function renderPosts(posts) {
//   const markup = posts
//     .map(({ id, title, body, userId }) => {
//       return `<li>
//           <h2 class="post-title">${title.slice(0, 30)}</h2>
//           <p><b>Post id</b>: ${id}</p>
//           <p><b>Author id</b>: ${userId}</p>
//           <p>${body}</p>
//         </li>`;
//     })
//     .join('');
//   userList.innerHTML = markup;
// }

// 'Номер группы элементов	Item group number';

// Второй параметр пагинации контролирует смещение внутри коллекции - номер группы элементов которую мы хотим получить.
// Если бэкенд реализует пагинацию, то значение этого параметра по умолчанию единица - первая группа или «страница» элементов.

// В JSONPlaceholder API параметр контролирующий группу элементов называется _page. Изменяйте его значение в примере и исследуйте ответ бэкенда в интерфейсе и на вкладке Network.

// const fetchPostsBtn = document.querySelector('.btn');
// const userList = document.querySelector('.posts');

// fetchPostsBtn.addEventListener('click', () => {
//   fetchPosts()
//     .then((posts) => renderPosts(posts))
//     .catch((error) => console.log(error));
// });

// function fetchPosts() {
//   const params = new URLSearchParams({
//     _limit: 5,
//     // Change the group number here
//     _page: 3,
//   });

//   return fetch(`https://jsonplaceholder.typicode.com/posts?${params}`).then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     }
//   );
// }

// function renderPosts(posts) {
//   const markup = posts
//     .map(({ id, title, body, userId }) => {
//       return `<li>
//           <h2 class="post-title">${title.slice(0, 30)}</h2>
//           <p><b>Post id</b>: ${id}</p>
//           <p><b>Author id</b>: ${userId}</p>
//           <p class="post-body">${body}</p>
//         </li>`;
//     })
//     .join('');
//   userList.innerHTML = markup;
// }

// 'Приём «Загрузить ещё»	“Load more” technique';

// Для того чтобы динамически изменять номер группы на каждый последующий запрос, достаточно объявить еще одну глобальную переменную, назвем её page и установим начальное значение 1 - первая группа элементов.
// После каждого успешного запроса, в коллбэке метода then() будем увеличивать значение page на единицу. При составлении параметров запроса используем её значение.

// После загрузки первой группы элементов, текст на кнопке измениться, а сама кнопка опустится под список постов. Когда пользователь прокрутит страницу и опять кликнет по ней - выполнится запрос за второй группой элементов, которая добавиться к уже существующей разметке списка постов. Если при клике на кнопку «Fetch posts» постов для загрузки больше нет - показываем оповещение.

// Мы добавили проверку конца коллекции на фронтенде, потому что JSONPlaceholder API не реализует этот функционал на бэкенде. В нашем случае достаточно разделить общее количество элементов в коллекции на количество элементов в одной группе. Это похоже на случай, когда бэкенд возвращает не количество доступных страниц, а общее количество элементов в коллекции.

const fetchPostsBtn = document.querySelector('.btn');
const userList = document.querySelector('.posts');
const alertPopup = document.querySelector('.alert');
let isAlertVisible = false;

// Controls the group number
let page = 1;
// Controls the number of items in the group
let limit = 5;
// In our case total number of pages is calculated on frontend
const totalPages = 100 / limit;

fetchPostsBtn.addEventListener('click', () => {
  // Check the end of the collection to display an alert
  if (page > totalPages) {
    return toggleAlertPopup();
  }

  fetchPosts()
    .then((posts) => {
      renderPosts(posts);
      // Increase the group number
      page += 1;

      // Replace button text after first request
      if (page > 1) {
        fetchPostsBtn.textContent = 'Fetch more posts';
      }
    })
    .catch((error) => console.log(error));
});

function fetchPosts() {
  const params = new URLSearchParams({
    _limit: limit,
    _page: page,
  });

  return fetch(`https://jsonplaceholder.typicode.com/posts?${params}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

function renderPosts(posts) {
  const markup = posts
    .map(({ id, title, body, userId }) => {
      return `<li>
          <h2 class="post-title">${title.slice(0, 30)}</h2>
          <p><b>Post id</b>: ${id}</p>
          <p><b>Author id</b>: ${userId}</p>
          <p class="post-body">${body}</p>
        </li>`;
    })
    .join('');
  userList.insertAdjacentHTML('beforeend', markup);
}

function toggleAlertPopup() {
  if (isAlertVisible) {
    return;
  }
  isAlertVisible = true;
  alertPopup.classList.add('is-visible');
  setTimeout(() => {
    alertPopup.classList.remove('is-visible');
    isAlertVisible = false;
  }, 3000);
}
