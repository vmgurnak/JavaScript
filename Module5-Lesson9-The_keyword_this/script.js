// Module 5 - Lesson 9 - The keyword this

// 'use strict';

// Контекст выполнения функции	Function Execution Context

// // Petya is running fast because Petya is trying to catch the train.
// const petya = {
//   username: "Petya",
//   showName() {
//     console.log(petya.username);
//   },
// };

// petya.showName();

// Внутри функций можно использовать зарезервированное ключевое слово this. Во время исполнения функции, в this записывается ссылка на объект, в контексте которого она была вызвана. Таким образом, в теле функции мы можем получить доступ к свойствам и методам этого объекта.

// // Petya is running fast because he (this) is trying to catch the train.
// const petya = {
//   username: "Petya",
//   showName() {
//     console.log(this.username);
//   },
// };

// petya.showName();

// Методы getAuthors и addAuthor это функции (методы объекта), которые вызываются в контексте объекта bookShelf. Во время их выполнения в this записывается ссылка на объект bookShelf и мы можем обратиться к его свойствам и методам.

// const bookShelf = {
//   authors: ["Бернард Корнуэлл", "Роберт Шекли"],
//   getAuthors() {
//     return this.authors;
//   },
//   addAuthor(authorName) {
//     this.authors.push(authorName);
//   },
// };

// console.log(bookShelf.getAuthors()); // ["Бернард Корнуэлл", "Роберт Шекли"]
// bookShelf.addAuthor("Ли Танит");
// console.log(bookShelf.getAuthors()); // ["Бернард Корнуэлл", "Роберт Шекли", "Ли Танит"]

// Правила определения this	How to Determine this

// Необходимо усвоить всего одно правило для определения this - значение контекста внутри функции (не стрелочной) определятся не в момент ее создания, а в момент вызова. То есть значение this определяется тем, как вызывается функция, а не где она была объявлена.

// this в глобальной области видимости	this in the global scope

// В глобальной области видимости, если скрипт выполняется не в строгом режиме, this ссылается на объект window. В строгом режиме значение this, в глобальной области видимости, будет undefined.

// function foo() {
//   console.log(this);
// }

// foo(); // window без "use strict" и undefined с "use strict"

// this в методе объекта	this in object method

// Если функция была вызвана как метод объекта, то контекст будет ссылаться на объект, частью которого является метод.

// const petya = {
//   username: "Petya",
//   showThis() {
//     console.log(this);
//   },
//   showName() {
//     console.log(this.username);
//   },
// };

// petya.showThis(); // {username: "Petya", showThis: ƒ, showName: ƒ}
// petya.showName(); // 'Petya'

// function showThis() {
//   console.log("this in showThis: ", this);
// }

// // Вызываем в глобальном контексте
// showThis(); // this in showThis: Window

// const user = {
//   username: "Mango",
// };

// // Записываем ссылку на функцию в свойство объекта
// // Обратите внимание, что это не вызов - нет ()
// user.showContext = showThis;

// // Вызываем функцию в контексте объекта
// // this будет указывать на текущий объект, в контексте
// // которого осуществляется вызов, а не на глобальный объект.
// user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}

// this в callback-функциях	this in callback functions

// При передаче методов объекта как колбэк-функций, контекст не сохраняется. Колбэк это ссылка на метод, которая присваивается как значение параметра, вызываемого без объекта.

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() это вызов метода getFullName без объекта
//   console.log(`Обрабатываем заявку от ${callback()}.`);
// }

// makeMessage(customer.getFullName); // Будет ошибка при вызове функции

// this в стрелочных функциях	this in arrow functions

// Стрелочные функции не имеют своего this. В отличии от обычных функций, изменить значение this внутри стрелки после её объявления нельзя.
// Контекст внутри стрелки определяется местом её объявления, а не вызова и ссылается на контекст родительской функции.
// Стрелочные функции также игнорируют наличие строгого режима. Если стрелка запомнила глобальный контекст, то this в ней будет содержать ссылку на window независимо от того, выполняется скрипт в строгом режиме или нет.

// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// showThis(); // this in showThis: window

// const user = {
//   username: "Mango",
// };
// user.showContext = showThis;

// user.showContext(); // this in showThis: window

// Ограничивая стрелочные функции постоянным контекстом, JavaScript-движки могут лучше их оптимизировать, в отличие от обычных функций, значение this которых может быть изменено.

// const hotel = {
//   username: "Resort hotel",
//   showThis() {
//     const foo = () => {
//       // Стрелки запоминают контекст во время объявления,
//       // из родительской области видимости
//       console.log("this in foo: ", this);
//     };

//     foo();
//     console.log("this in showThis: ", this);
//   },
// };

// hotel.showThis();
// // this in foo: {username: 'Resort hotel', showThis: ƒ}
// // this in showThis: {username: 'Resort hotel',showThis: ƒ}

// Методы функций	Function Methods

// Бывают ситуации когда функцию нужно вызвать в контексте какого-то объекта, при этом функция не является его методом. Для этого у функций есть методы call, apply и bind.

// Метод call()	call() method

// Метод call вызовет функцию foo так, что в this будет ссылка на объект obj, а также передаст аргументы arg1, arg2 и т. д.

// foo.call(obj, arg1, arg2, ...)

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: "Mango",
// };
// const poly = {
//   username: "Poly",
// };

// greetGuest.call(mango, "Welcome"); // Welcome, Mango.
// greetGuest.call(poly, "Welcome back"); // Welcome back, Poly.

// Метод apply	apply method

// Метод apply вызовет функцию foo так, что в this будет ссылка на объект obj, а также передаст элементы массива как отдельные аргументы arg1, arg2 и т. д.

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: "Mango",
// };
// const poly = {
//   username: "Poly",
// };

// greetGuest.apply(mango, ["Welcome"]); // Welcome, Mango.
// greetGuest.apply(poly, ["Welcome back"]); // Welcome back, Poly.

// Метод bind()	bind() method

// "Методы call и apply вызывают функцию «на месте», то есть сразу. Но в случае колбэк-функций, когда необходимо не сразу вызвать функцию, а передать ссылку на неё, причём с привязанным контекстом, используется метод bind.

// foo.bind(obj, arg1, arg2, ...)

// function greet(clientName) {
//   return `${clientName}, добро пожаловать в «${this.service}».`;
// }

// const steam = {
//   service: "Steam",
// };

// const steamGreeter = greet.bind(steam);

// console.log(steamGreeter("Манго")); // "Манго, добро пожаловать в «Steam»."

// const gmail = {
//   service: "Gmail",
// };

// const gmailGreeter = greet.bind(gmail);
// gmailGreeter("Поли"); // "Поли, добро пожаловать в «Gmail».

// bind() и методы объекта	bind() and object methods

// При передаче методов объекта как колбэк-функций, контекст не сохраняется. Колбэк это ссылка на метод, которая присваивается как значение параметра, вызываемого без объекта.

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() это вызов метода getFullName без объекта
//   console.log(`Обрабатываем заявку от ${callback()}.`);
// }

// // makeMessage(customer.getFullName); // Будет ошибка при вызове функции

// // В строгом режиме, значение this в методе getFullName, при вызове как колбэк-функции callback(), будет undefined. При обращении к свойствам firstName и lastName будет ошибка, так как undefined это не объект.

// // Метод bind используется для привязки контекста при передаче методов объекта как колбэк-функций. Передадим колбэком не оригинальный метод getFullName, а его копию с привязанным контекстом к объекту customer.

// makeMessage(customer.getFullName.bind(customer)); // Обрабатываем заявку от Jacob Mercer.

// ЗАНЯТИЕ С ПРЕПОДАВАТЕЛЕМ

// Типы функций

// 1. function declaration

// foo()
// function foo(){
// }
// foo()

// 2. function expression

// const foo = function () {
// }
// foo()

// 3.arrow function

// const foo = () => {
// }
// foo()

// В зависимости от вида функции делим на два блока

// 1.declaration expression

// 2.arrow

// Нужно определить как написан метод, с помощью какой функции

// const obj = {
//   name: 'Test name',
//   // function declaration
//   hello() {
//     console.log(this);
//     console.log(this.name);
//   },
// };

// // для function declaration кто стоит левее метода, тот и будет this
// obj.hello();
// // { name: 'Test name', hello: ƒ }
// // Test name

// const objA = {
//   name: 'User name',
//   hello: obj.hello,
// };

// objA.hello();
// // {name: 'User name', hello: ƒ}
// // User name

// this вне функции послылается на глобальный объект window

// arrow function или глобальный this 'use strict' не отрабатывает, только type="module"

// 'use strict';

// const person = {
//   name: 'Alice',
//   customThis: this,
// };
// console.log(person);

// function declaration при глобальном вызове, не в методе объекта, если нет строго режима и тайпмодуля, будет ссылаться на объект window
// function expression такое же поведение

// 'use strict';
// function foo() {
//   //expression
//   console.log(this);
// }
// foo();

// arrow function при глобальном вызове ссылается на объект window кроме type="module"

// 'use strict';
// const arrow = () => {
//   console.log(this);
// };

// arrow();

// function declaration, expression

// const person = {
//   name: 'Alice',
//   // hello() { // declaration
//   //     console.log(this.name);
//   // }
//   // hello: function() { // expression
//   //     console.log(this.name);
//   // }
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//     showSkills() {
//       console.log(this);
//       //  Массив ключей объекта
//       const keys = Object.keys(this);
//       console.log(keys);
//       //  Фильтр ключей со значением true и исключение с типом function
//       const skills = keys.filter(
//         (key) => this[key] && typeof this[key] !== 'function'
//       );
//       console.log(skills);
//     },
//   },
// };
// person.skills.showSkills();

// arrow function

const person = {
  name: 'Alice',
  years: 30,
  //   //   arrow function
  //   hello: () => {
  //     console.log(this);
  //   },
  //   arrow function
  hello() {
    console.log('declaration', this);
    const arrow = () => {
      console.log('arrow', this);
    };

    return arrow;
  },
};
const response = person.hello();

response();
response();

// const test = {
//     brand: 'BMW',
//     maxSpeed: 200,
//     price: 10000,
//     getPrice() {
//         console.log('getPrice',this);

//         const getMaxSpeed = () => {
//             console.log('arrow getMaxSpeed',this);

//             // const getBrand = () => {
//             //     console.log('arrow getBrand',this);
//             // }
//             // getBrand()
//         }
//         getMaxSpeed()
//     }
// }

// test.getPrice()

// const test = {
//     brand: 'BMW',
//     maxSpeed: 200,
//     price: 10000,
//     getPrice() {
//         console.log('getPrice',this);

//         function getMaxSpeed () {
//             console.log('declaration getMaxSpeed',this);
//         }
//         getMaxSpeed()
//     }
// }

// test.getPrice()

// const test = {
//     brand: 'BMW',
//     maxSpeed: 200,
//     price: 10000,
//     getPrice: () => {
//         console.log('arrow getPrice', this);

//         const getMaxSpeed = () => {
//             console.log('arrow getMaxSpeed', this);
//         }
//         getMaxSpeed()
//     }
// }

// test.getPrice()

// call apply bind
// const person = {
//     name: "Alice",
//     city: 'Lviv'
// }

// function foo(car, speed) {
//     console.log('car', car);
//     console.log('speed', speed);
//     console.log(this);
// }
// foo()
// foo.call(person, 'BMW', 90)
// const foo= function (car, speed) {
//     console.log('car', car);
//     console.log('speed', speed);
//     console.log(this);
// }

// const foo = (car, speed) => {
//     console.log('car', car);
//     console.log('speed', speed);
//     console.log(this);
// }

// foo.call(person, 'BMW', 90)

// apply

// function foo(car, speed) {
//     console.log('car', car);
//     console.log('speed', speed);
//     console.log(this);
// }
// foo.apply(person, ['BMW', 90,"hello", 345]);
// // foo.apply(person1, ['Audi', 90]);

// foo.call(person, ...['BMW', 90]);

// bind
// const person1 = {
//     name: "Kate",
//     city: 'Odessa'
// }
// function foo(car, speed) {
//     // console.log(arguments);
//     console.log('car', car);
//     console.log('speed', speed);
//     console.log(this);
// }

// const copy = foo.bind(person);
// // console.log(copy);
// copy('Volvo', 100)
// copy('Audi', 120)
// foo()

// foo('Volvo', 100)

// const foo = (car, speed) => {
//     // console.log(arguments);
//     console.log('car', car);
//     console.log('speed', speed);
//     console.log(this);
// }
// const copy = foo.bind(person1);
// copy('Volvo', 100)
