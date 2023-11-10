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

// const fetchPostsBtn = document.querySelector('.btn');
// const userList = document.querySelector('.posts');
// const alertPopup = document.querySelector('.alert');
// let isAlertVisible = false;

// // Controls the group number
// let page = 1;
// // Controls the number of items in the group
// let limit = 50;
// // In our case total number of pages is calculated on frontend
// const totalPages = 100 / limit;

// fetchPostsBtn.addEventListener('click', () => {
//   // Check the end of the collection to display an alert
//   if (page > totalPages) {
//     return toggleAlertPopup();
//   }

//   fetchPosts()
//     .then((posts) => {
//       renderPosts(posts);
//       // Increase the group number
//       page += 1;

//       // Replace button text after first request
//       if (page > 1) {
//         fetchPostsBtn.textContent = 'Fetch more posts';
//       }
//     })
//     .catch((error) => console.log(error));
// });

// function fetchPosts() {
//   const params = new URLSearchParams({
//     _limit: limit,
//     _page: page,
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
//   userList.insertAdjacentHTML('beforeend', markup);
// }

// function toggleAlertPopup() {
//   if (isAlertVisible) {
//     return;
//   }
//   isAlertVisible = true;
//   alertPopup.classList.add('is-visible');
//   setTimeout(() => {
//     alertPopup.classList.remove('is-visible');
//     isAlertVisible = false;
//   }, 3000);
// }

// ЗАНЯТИЕ С ПРЕПОДАВАТЕЛЕМ

// ПРАКТИКА;

// Створи фільмотеку з популярними фільмами, для цього використай
// https://developer.themoviedb.org/reference/trending-movies

// Щоб отримати постер фільму потрібно підставити url з відповіді від бекенду та url з документації
// https://developer.themoviedb.org/docs/image-basics

// Відмалюй картки з фільмами
// Приклад картки  => https://prnt.sc/Hi_iLLg7Nd1F

// Реалізуй пагінацію
// 1 Кнопка "Load More"
// 2 Infinity scroll (https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

// *********************** Кнопка "Load More" ************************** \\

// WITH ERROR
// function serviceFilms(currentPage = '1') {
//   const params = new URLSearchParams({
//     page: currentPage,
//     api_key: '345007f9ab440e5b86cef51be6397df1',
//   });
//   return fetch(
//     `https://api.themoviedb.org/3/trending/movie/week?${params}`
//   ).then((resp) => resp.json());
//   // fetch(
//   //   'https://api.themoviedb.org/3/trending/movie/week?api_key=345007f9ab440e5b86cef51be6397df1&page=${page}'
//   // );
// }

// serviceFilms(3)
//   .then((data) => {
//     console.log(data);
//     // Прверка есть ли ключ success в объекте и находится в статусе false (когда ответ бэкенда негативный)
//     if ('success' in data && !data.success) {
//       throw new Error(data.status_message);
//     }
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// serviceFilms(25);

// -------------------LOAD - MORE-------------------

// // Объект элементов - Elements object
// const elements = {
//   container: document.querySelector('.js-movie-list'),
//   loadBtn: document.querySelector('.js-load-more'),
// };

// // Объект значений для разметки по умолчанию - Default markup values object
// const defaults = {
//   poster: 'https://www.reelviews.net/resources/img/default_poster.jpg',
//   title: 'Title not found',
//   date: 'XXXX-XX-XX',
//   average: 'XX.XX',
// };

// // Переменная для номера страницы бэкенда - Variable for backend page number
// let page = 1;

// // Слушатель на кнопке - Listener on a button
// elements.loadBtn.addEventListener('click', handlerLoadMore);

// // Коллбэк функция при нажатии на кнопку LoadMore, запрос на бэкенд, отрисовка разметки - Callback function when clicking the LoadMore button, request to the backend, rendering markup
// function handlerLoadMore() {
//   page += 1;
//   serviceFilms(page).then((data) => {
//     elements.container.insertAdjacentHTML(
//       'beforeend',
//       createMarkup(data.results)
//     );
//     if (data.page >= data.total_pages) {
//       elements.loadBtn.classList.replace('load-more', 'load-more-hidden');
//     }
//   });
// }

// // Функция для разметки - Markup function
// function createMarkup(arr) {
//   return arr
//     .map(
//       ({
//         poster_path,
//         original_title,
//         release_date,
//         vote_average,
//       }) => `<li class="movie-card">
//          <img src="${
//            poster_path
//              ? 'https://image.tmdb.org/t/p/w300' + poster_path
//              : 'default.poster'
//          }" alt="${original_title || defaults.title}">
//          <div class="movie-info">
//             <h2>${original_title || defaults.title}</h2>
//             <p>Release Date: ${release_date || defaults.date}</p>
//             <p>Vote Average: ${vote_average || defaults.average}</p>
//          </div>
//       </li>`
//     )
//     .join('');
// }

// // Функция для запроса на бэкенд - Function for backend request
// function serviceFilms(currentPage = '1') {
//   const params = new URLSearchParams({
//     page: currentPage,
//     api_key: '345007f9ab440e5b86cef51be6397df1',
//   });
//   return fetch(`https://api.themoviedb.org/3/trending/movie/week?${params}`)
//     .then((resp) => {
//       if (!resp.ok) {
//         throw new Error('Error');
//       }
//       return resp.json();
//     })
//     .catch((err) => {
//       console.log(err);
//       elements.loadBtn.classList.replace('load-more', 'load-more-hidden');
//     });

//   // fetch(
//   //   'https://api.themoviedb.org/3/trending/movie/week?api_key=345007f9ab440e5b86cef51be6397df1&page=${page}'
//   // );
// }

// // Вызов функции serviceFilms(), первая загрузка, отрисовка разметки - Calling the serviceFilms() function, first loading, rendering markup
// serviceFilms()
//   .then((data) => {
//     console.log(data);
//     elements.container.insertAdjacentHTML(
//       'beforeend',
//       createMarkup(data.results)
//     );
//     // Показваем кнопку при условии номер показываемой страницы меньше количества страниц бэкенда - We show the button if the number of the displayed page is less than the number of backend pages
//     if (data.page < data.total_pages) {
//       elements.loadBtn.classList.replace('load-more-hidden', 'load-more');
//     }
//   })
//   .catch((err) => {
//     console.log(err);
//     elements.loadBtn.classList.replace('load-more', 'load-more-hidden');
//   });

// ******************************** Infinity scroll ********************** \\
// https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

// Объект элементов - Elements object
const elements = {
  container: document.querySelector('.js-movie-list'),
  guard: document.querySelector('.js-guard'),
};

// Объект значений для разметки по умолчанию - Default markup values object
const defaults = {
  poster: 'https://www.reelviews.net/resources/img/default_poster.jpg',
  title: 'Title not found',
  date: 'XXXX-XX-XX',
  average: 'XX.XX',
};

// Переменная для номера страницы бэкенда - Variable for backend page number
let page = 1;

// Intersection Observer
const options = {
  // root: null,
  rootMargin: '300px',
  // threshold: 0,
};
const observer = new IntersectionObserver(handlerLoadMore, options);

// Функция для разметки - Markup function
function createMarkup(arr) {
  return arr
    .map(
      ({
        poster_path,
        original_title,
        release_date,
        vote_average,
      }) => `<li class="movie-card">
         <img src="${
           poster_path
             ? 'https://image.tmdb.org/t/p/w300' + poster_path
             : 'default.poster'
         }" alt="${original_title || defaults.title}">
         <div class="movie-info">
            <h2>${original_title || defaults.title}</h2>
            <p>Release Date: ${release_date || defaults.date}</p>
            <p>Vote Average: ${vote_average || defaults.average}</p>
         </div>
      </li>`
    )
    .join('');
}

// Функция для запроса на бэкенд - Function for backend request
function serviceFilms(currentPage = '1') {
  const params = new URLSearchParams({
    page: currentPage,
    api_key: '345007f9ab440e5b86cef51be6397df1',
  });
  return fetch(`https://api.themoviedb.org/3/trending/movie/week?${params}`)
    .then((resp) => {
      console.log(resp);
      if (!resp.ok) {
        throw new Error('Error');
      }
      return resp.json();
    })
    .catch((err) => {
      console.log(err);
    });

  // fetch(
  //   'https://api.themoviedb.org/3/trending/movie/week?api_key=345007f9ab440e5b86cef51be6397df1&page=${page}'
  // );
}

// Вызов функции serviceFilms(), первая загрузка, отрисовка разметки - Calling the serviceFilms() function, first loading, rendering markup
serviceFilms()
  .then((data) => {
    console.log(data);
    console.log(data.results);
    elements.container.insertAdjacentHTML(
      'beforeend',
      createMarkup(data.results)
    );
    // Вызов observer
    if (data.page < data.total_pages) {
      observer.observe(elements.guard);
    }
  })
  .catch((err) => {
    console.log(err);
  });

// Коллбэк функция для Intersection Observer
function handlerLoadMore(entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      page += 1;
      serviceFilms(page)
        .then((data) => {
          elements.container.insertAdjacentHTML(
            'beforeend',
            createMarkup(data.results)
          );
          if (data.page >= data.total_pages) {
            observer.unobserve(elements.guard);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
}
