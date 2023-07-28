// Модуль 3 - Занятие 5 - Объекты	Module 3 - Lesson 5 - Objects

// Объекты	Objects

// Создание объекта	Object creation

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// Вложенные свойства	Nested properties

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// Обращение к свойствам через точку	Dot notation to access properties

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book.genres;
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const bookPrice = book.price;
// console.log(bookPrice); // undefined

// Обращение к вложенным свойствам	Accessing nested properties

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swimming", "music", "sci-fi"],
// };

// const loc = user.location;
// console.log(loc); // object location

// const country = user.location.country;
// console.log(country); // 'Jamaica'

// const hobbies = user.hobbies;
// console.log(hobbies); // ['swiming', 'music', 'sci-fi']

// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // 'swiming'

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3

// Обращение к свойствам через квадратные скобки	Accessing properties through square brackets

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book["title"];
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book["genres"];
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const propKey = "author";
// const bookAuthor = book[propKey];
// console.log(bookAuthor); // 'Bernard Cornwell'

// Изменение значения свойства	Property value change

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.rating = 9;
// book.isPublic = false;
// book.genres.push("драма");

// console.log(book.rating); // 9
// console.log(book.isPublic); // false
// console.log(book.genres); // ['historical prose', 'adventures', 'драма']

// Добавление свойств	Adding properties

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // 'en'
// console.log(book.translations); // ['ua', 'ru']

// console.log(book);

// Короткие свойства	Shorthand properties
// при объявлении объекта достаточно указать только имя свойства, а значение будет взято из переменной с аналогичным именем.

// const name = "Henry Cibola";
// const age = 25;

// const user = {
//   name,
//   age,
// };

// console.log(user.name); // "Henry Cibola"
// console.log(user.age); // 25
// console.log(user);

// Вычисляемые свойства	Computed properties
// Значением вычисляемого свойства может быть любое валидное выражение.

const propName = "name";
// const user = {
//   age: 25,
//   // Имя этого свойства будет взято из значения переменной propName
//   [propName]: "Генри Сибола",
// };

// console.log(user.name); // 'Генри Сибола'
// console.log(user);

// Методы объекта	Object methods

// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Это метод объекта
//   getBooks() {
//     console.log("Этот метод будет возвращать все книги - свойство books");
//   },
//   // Это метод объекта
//   addBook(bookName) {
//     console.log("Этот метод будет добавлять новую книгу в свойство books");
//   },
// };

// bookShelf.getBooks();
// bookShelf.addBook("Новая книга");

// Доступ к свойствам объекта в методах	Accessing object properties in methods

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     console.log(this);
//   },
// };

// // Перед точкой стоит объект bookShelf,
// // поэтому при вызове метода, this будет хранить ссылку на него.
// bookShelf.getBooks();
// // {books: ['The Last Kingdom'], getBooks: f}

// Для того чтобы получить доступ к свойствам объекта в методах, мы обращаемся к нему через this и дальше как обычно - «через точку» к свойствам.

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

// Перебор объекта	Iteration

// Цикл for...in	for...in loop
// Для перебора объектов используется специальный цикл for...in, который перебирает ключи объекта object.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значение свойства с таким ключом
//   console.log(book[key]);
// }

// Метод hasOwnProperty()	hasOwnProperty() method

// Собственные и несобственные свойств объекта

// Метод Object.create(animal) создаёт и возвращает новый объект, связывая его с объектом animal. Поэтому можно получить значение свойства legs обратившись к нему как dog.legs, хотя его нет в объекте dog - это несобственное свойство из объекта animal.

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(animal);
// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4

// // ❌ Возвращает true для всех свойств
// console.log("name" in dog); // true
// console.log("legs" in dog); // true

// // ✅ Возвращает true только для собственных свойств
// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false

// при переборе циклом for...in необходимо на каждой итерации добавить проверку на собственное свойство.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Если это собственное свойство - выполняем тело if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }

//   // Если это не собственное свойство - ничего не делаем
// }

// Метод Object.keys()	Object.keys() method
// Object.keys(obj), который принимает объект и возвращает массив ключей его собственных свойств.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// console.log(book);

// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']

// Скомбинировав результат Object.keys() и цикл for...of можно удобно перебрать собственные свойства объекта, не прибегая к использованию архаического цикла for...in с проверками принадлежности свойств.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значение свойства
//   console.log(book[key]);
// }

// Метод Object.values()	Object.values() method
//  метод Object.values(obj) возвращает массив значений его собственных свойств

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// задача посчитать общее количество продуктов в объекте формата имя-продукта: количество. Тогда подойдет метод Object.values() для того, чтобы получить массив всех значений и потом удобно их сложить.

// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// console.log(goods);

// const values = Object.values(goods); // [6, 3, 4, 7]

// console.log(values);

// let total = 0;

// for (const value of values) {
//   total += value;
// }

// console.log(total); // 20

// Метод Object.entries()	Object.entries() method
// Метод Object.entries(obj) возвращает массив записей, каждым элементом которого будет еще один массив из 2-х элементов: имени свойства и значения этого свойства из объекта obj.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };

// console.log(book);

// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// const entries = Object.entries(book);
// console.log(entries);
// // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]

// Массив обьектов	Array of Objects
// В стандартный набор повседневных задач разработчика входит манипуляция массивом однотипных объектов. Это значит что все объекты в массиве гарантированно будут иметь одинаковый набор свойств, но с разными значениями.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смешного человека",
//     author: "Федор Достоевский",
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//   // Объект книги
//   console.log(book);
//   // Название
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }

// // получим список названий всех книг в коллекции books

// const bookNames = [];

// for (const book of books) {
//   bookNames.push(book.title);
// }

// console.log("list of book titles in collection", bookNames); // ["The Last Kingdom", "На берегу спокойных вод", "Сон смешного человека"]

// // Узнаем средний рейтинг всей нашей коллекции.

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = (totalRating / books.length).toFixed(1);
// console.log("Average rating collection", averageRating); // 8.2

// LESSON WITH THE TEACHER

// KAHOOT

// Question 1

// const userA = {
//   username: "Mango",
//   age: 20,
// };

// const userB = userA;
// userB.age = 30;
// console.log(userA.age, userB.age);
// 30 30;

// Question 2

// const user = {
//   username: "Mango",
//   age: 20,
//   status: "online",
// };

// const keys = Object.keys(user);
// console.log(keys);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze

// Об'єкт
// const user = {
//     name: 'Test user',
//     skills: {
//         html: true,
//         css: true,
//         react: false
//     },
// }

// Звернення до властивостей об'єкта

// console.log(user.name);
// console.log('css', user.skills.css);

// const objectKey = 'name';

// console.log(user[objectKey]);
// console.log(user['name']);

// const user = {
//   name: "Test user",
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// };
// console.log(user.name);
// function getKey(key){ // 'name' 'skills'
//     console.log(user[key])//user['name']
// }
// getKey('name')
// getKey('skills')

// const objectKey = "skills";
// const skillKey = "css";

// console.log(user["skills"]["css"]);

// console.log(user[objectKey][skillKey]);
// console.log(user.skills[skillKey]);
// console.log(user[objectKey].css);

// Зміна значення властивості

// const user = {
//     name: 'Test user',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }

// user.city = 'Lviv';
// user['age'] = 28;
// console.log(user);

// user.city = 'Odessa';
// console.log(user);

// const user = {
//   name: "Test user",
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// };
// Object.freeze(user.skills);
// user.name = "Artem";
// user.city = "Lviv";
// user.skills.html = true;
// console.log(user);

// const user = {
//   name: "Test user",
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// };

// user.city = "Lviv";
// // delete user.city;
// console.log(user);

// Методи об'єкта

// const user = {
//   name: "Artem",
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
//   sayHello(city) {
//     //  console.log(city);
//     console.log(`Hello my name ${this.name}`);
//   },
// };

// const user2 = {
//   name: "Den",
//   skills: {
//     html: true,
//     css: true,
//     react: true,
//   },
//   sayHello: user.sayHello,
// };

// user2.sayHello();
// user.sayHello("Lviv");

// console.log(user);

// Цикл for...in

// const testObj = {
//   name: "Artem",
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
//   sayHello(city) {
//     // console.log(city);
//     console.log(`Hello my name ${this.name}`);
//   },
// };

// const user = Object.create(testObj);
// user.city = "Lviv";
// console.log(user);
// console.log(testObj);

// for (const key in testObj) {
//   if (testObj.hasOwnProperty(key)) {
//     console.log(key, user[key]);
//   }
// }

// Метод Object.keys() - создает массив ключей

// const user = {
//   name: "Artem",
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// };
// console.log(user);

// // Создание массива ключей
// const keys = Object.keys(user);
// console.log(keys);

// // Перебор массива ключей с помощью цикла for of
// for (const key of keys) {
//   console.log(key, user[key]);
// }

// Метод Object.values() - возвращает значение объектов

// const user = {
//   name: "Artem",
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// };

// const values = Object.values(user);
// const skills = Object.values(user.skills);
// console.log(values);
// console.log(skills);

// Метод Object.entries() - возвращает массив комбинаций - ключ, значение обключа

// const user = {
//   name: "Artem",
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// };

// const entries = Object.entries(user);
// const entries = Object.entries(user.skills);
// console.log(entries);

// Practice //

// Task - 1
// Створи функцію яка буде приймати 3 параметри та формувати об'єкт покупки
// 1 Назва продукту
// 2 Кількість одиниць
// 3 Ціна за 1 одиницю товару
// Функція має повертати сформований об'єкт з ключами name, price, quantity, totalPrice.

// Вариант решения используются короткие свойства
// function createBasket(name, quantity, price) {
//   const totalPrice = quantity * price;

//   const basket = {
//     name,
//     quantity,
//     price,
//     totalPrice,
//   };
//   return basket;
// }

// console.log(createBasket("pizza", 3, 120));
// console.log(createBasket("aplle", 13, 1200));

// Вариант решения используется полная запись и короткая
// function createBasket(product, numb, cost) {
//   const totalPrice = numb * cost;

//   const basket = {
//     name: product,
//     quantity: numb,
//     price: cost,
//     totalPrice,
//   };
//   return basket;
// }

// console.log(createBasket("pizza", 3, 120));
// console.log(createBasket("aplle", 13, 1200));

// Вариант сразу делается return объекта
// function createBasket(product, quantity, price) {
//   const totalPrice = quantity * price;

//   return {
//     name: product,
//     quantity,
//     price,
//     totalPrice,
//   };
// }
// console.log(createBasket("pizza", 3, 120));
// console.log(createBasket("aplle", 13, 1200));

// Task - 2
// Створи функцію для ведення статистики комп'ютерного клубу. Функція приймає 1 параметр це об'єкт користувачів де ключ це ім'я користувача, а значення це час оренди у хвилинах.
// Функція повертає рядок з інформацією про те скільки було користувачів та який середній час оренди комп'ютер.

// const players = {
//   Den: 60,
//   Kate: 130,
//   William: 45,
//   Matthew: 120,
//   Ethan: 40,
//   David: 55,
// };

// function getTime(obj) {
//   const values = Object.values(obj);
//   let total = 0;
//   console.log(values);
//   for (const value of values) {
//     total += value;
//   }

//   return `Count of players ${values.length}, average time ${
//     total / values.length
//   }`;
// }

// console.log(getTime(players));

// Task - 3

// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги

// Функція повертає Імена юзерів (формат стрінги) в яких є дана книга ("Harry Potter") \\\ "Anna, Oleksii"

// Массив объектов пользователей
const friends = [
  { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
  { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
  { name: "Alice", books: ["War and peace", "Romeo and Juliet"] },
  {
    name: "Oleksii",
    books: ["Bible", "War and peace", "Harry Potter", "Romeo and Juliet"],
    age: 26,
  },
];

// function getUser(arr, bookName) {
//   const userNames = [];
//   for (const user of arr) {
//     if (user.books.includes(bookName)) {
//       userNames.push(user.name);
//       console.log(user.name);
//     }
//   }
//   console.log(userNames);
//   return userNames.join(", ");
// }

// console.log(getUser(friends, "Harry Potter"));

// 2 Порахувати вік всіх юзерів у яких є ключ age.

// function getTotalAge(arr) {
//   let totalAge = 0;
//   for (const user of arr) {
//     //  console.log(user);
//     //  console.log(user.name, user.hasOwnProperty("age"));
//     if (user.hasOwnProperty("age")) {
//       totalAge += user.age;
//       // console.log(totalAge);
//     }
//   }
//   return totalAge;
// }

// console.log(getTotalAge(friends));

// Второй вариант вместо проверки с помощью if (вместо user.hasOwnProperty("age")) - оператор key in object

// function getTotalAge(arr) {
//   let totalAge = 0;
//   for (const user of arr) {
//     console.log(user);
//     console.log(user.name, "age" in user);
//     if ("age" in user) {
//       totalAge += user.age;
//       // console.log(totalAge);
//     }
//   }
//   return totalAge;
// }

// console.log(getTotalAge(friends));

// Task - 4
// Массив объектов
// 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультета

// const hogvarts = {
//   griffindor: [
//     {
//       name: "Harry",

//     },
//     {
//       name: "Hermiona",
//       points: 19,
//     },
//     {
//       name: "Ron",
//       points: 14,
//     },
//   ],
//   slizerin: [
//     {
//       name: "Draco",
//       points: 17,
//     },
//     {
//       name: "Goyl",
//       points: 14,
//     },
//     {
//       name: "Crabbe",
//       points: 5,
//     },
//   ],
//   getUserList(faculty) {
//     if (!(faculty in this)) {
//       return "faculty not found";
//     }
//     const students = [];
//     for (const student of this[faculty]) {
//       // console.log(student);
//       students.push(student.name);
//     }
//     //  console.log(students);
//     //  console.log(this[faculty]);

//     return students.join(", ");
//   },

//   getTotalPoinst(faculty) {
//     if (!(faculty in this)) {
//       return "Faculted not found";
//     }
//     let getTotalPoinst = 0;
//     for (const student of this[faculty]) {
//       if ("points" in student) {
//         getTotalPoinst += student.points;
//       }
//     }
//     return getTotalPoinst;
//   },
// };

// // console.log(hogvarts);

// console.log(hogvarts.getUserList("griffindor"));
// console.log(hogvarts.getUserList("slizerin"));
// console.log(hogvarts.getUserList("slitherin"));

// console.log(hogvarts.getTotalPoinst("griffindor"));
// console.log(hogvarts.getTotalPoinst("slizerin"));
// console.log(hogvarts.getTotalPoinst("slitherin"));

// const user = {
//   name: "Test user",
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// };

// let totalKeys = 0;

// for (const key in user) {
//     if (user.hasOwnProperty(key)) {
//         totalKeys += 1
//     }
// }

// console.log(totalKeys);

// console.log(Object.keys(user).length);

// console.log(800 === 000800);
// console.log(123 === 000123);

// 2) чо це ? 800 === 000800 true 123 === 000123 false
// 3) де можна дивитися інфу про оновлення всяких мов щоб бути в курсі всіх нових фішок ?
// 4) я знайшов додаток RunJS там не треба свторювати файли і писати логи там вже показується результат, ви знаєте про цей додаток ? пишу щоб всі змогли спробувати в ньому просто не треба зайвих файлів і браузер відкривати його навіть на заннятях можна використовувати, що скажете ? якраз практика без логів які все одно треба буде потім прибирати
// 5) бачив у вас в джс сніпети для розгортки коду чи можна буде іх отримати в слек ?
// 6) чи є у вас вигорання і якщо є як з ним справлятися ?
