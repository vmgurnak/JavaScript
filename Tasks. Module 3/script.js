// Tasks. Module 3

// Module 3 Objects

// TASK1
// Присвой переменной apartment объект описывающий квартиру со следующими характеристиками:

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// console.log(apartment);

// TASK2
// Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце. Добавь ему следующие свойства:

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// console.log(apartment);

// TASK 3
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

// console.log(aptRating);

// TASK 4
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];

// console.log(lastTag);

// TASK 5
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment используя синтаксис «квадратных скобок».

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];

// console.log(aptTags);

// TASK 6
// Дополни код обновив значения свойств объекта apartment:

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // apartment.price = 5000;
// apartment["price"] = 5000;
// apartment.rating = 4.7;
// // apartment.owner.name = "Henry Sibola";
// apartment["owner"]["name"] = "Henry Sibola";
// apartment.tags.push("trusted");

// console.log(apartment);

// TASK 7
// Добавь объекту apartment несколько новых свойств:

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston",
// };

// console.log(apartment);

// TASK 8
// Короткие свойства	Shorthand properties

// Дополни код объявления объекта так, чтобы у него были свойства name, price, image и tags со значениями из переменных с аналогичными именами. Обязательно используй синтаксис коротких свойств.

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   name,
//   price,
//   image,
//   tags,
// };

// console.log(product);

// TASK 9
// Синтаксис вычисляемых свойств (computed properties)

// Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: email и password, имена которых хранятся в переменных emailInputName и passwordInputName.

// Значением свойства email должна быть строка "henry.carter@aptmail.com", а значением свойства password - строка "jqueryismyjam".

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
// };

// console.log(credentials);

// TASK 10

// Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

// TASK 11
// Метод Object.create() создаёт и возвращает новый объект, связывая его с объектом
// Оператор in, который используется в цикле for...in, не делает различия между собственными и несобственными свойствами объекта.
// метод hasOwnProperty(key) проверяет есть в объекте собственное свойство или нет возвращает true или false

// Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
// }

// console.log(advert);
// console.log(apartment);

// console.log(keys);
// console.log(values);

// TASK 12
// ЗАДАЧА.ПОДСЧЁТ СВОЙСТВ

// Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта.

// function countProps(object) {
//   //   let propCount = 0;

//   //   const keys = Object.keys(object);

//   const propCount = Object.keys(object).length;

//   //   console.log(object);
//   //   console.log(keys);
//   //   console.log(propCount);

//   return console.log(propCount);
// }

// countProps({});
// // возвращает 0
// countProps({ name: "Mango", age: 2 });
// // возвращает 2
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });
// // возвращает 3

// TASK 13
// Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   //   console.log(key);
//   //   console.log(apartment[key]);
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

// TASK 14
// ЗАДАЧА. ПОДСЧЁТ СВОЙСТВ 2.0
// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, но необязательно, цикл for...of.

// function countProps(object) {
// Change code below this line
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   const keys = Object.keys(object);

//   console.log(keys);

//   for (const key of keys) {
//     propCount += 1;
//   }

//   return console.log(propCount);
//   // Change code above this line
// }

// countProps({});
// // возвращает 0
// countProps({ name: "Mango", age: 2 });
// возвращает 2
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });
// // возвращает 3

// TASK 15
// Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в переменную values массив всех значений его свойств. Используй методы Object.keys() и Object.values().

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(apartment);
// console.log(keys);
// console.log(values);

// TASK 16

// ЗАДАЧА. РАСХОДЫ НА ЗАРПЛАТУ
// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   console.log(salaries);

//   const arrSalary = Object.values(salaries);
//   console.log(arrSalary);

//   for (const oneSalary of arrSalary) {
//     console.log(oneSalary);
//     totalSalary += oneSalary;
//   }

//   return console.log(totalSalary);
// }

// countTotalSalary({});
// // возвращает 0
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// // возвращает 330
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });
// // возвращает 400

// TASK 17
// Массив обьектов
// В стандартный набор повседневных задач разработчика входит манипуляция массивом однотипных объектов. Это значит что все объекты в массиве гарантированно будут иметь одинаковый набор свойств, но с разными значениями.

// Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// TASK 18
// ЗАДАЧА. ПОИСК ОБЪЕКТА ПО ЗНАЧЕНИЮ СВОЙСТВА
// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   let price = null;
//   for (const product of products) {
//     //  console.log(product);
//     //  console.log(product.name);
//     if (productName === product.name) {
//       price = product.price;
//     }
//   }
//   return console.log(price);
// }

// getProductPrice("Radar");
// // возвращает 1300.
// getProductPrice("Grip");
// // возвращает 1200.
// getProductPrice("Scanner");
// // возвращает 2700.
// getProductPrice("Droid");
// // возвращает 400.
// getProductPrice("Engine");
// // возвращает null.

// TASK 19
// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   arrValue = [];

//   for (const product of products) {
//     //  console.log(product);
//     //  console.log(product[propName]);

//     const arrKey = Object.keys(product);
//     //  console.log(arrKey);

//     if (arrKey.includes(propName)) {
//       arrValue.push(product[propName]);
//     }

//     //   Вариант с помощью перебора switch
//     //  switch (propName) {
//     //    case "name":
//     //      arrKey.push(product.name);
//     //      break;
//     //    case "price":
//     //      arrKey.push(product.price);
//     //      break;
//     //    case "quantity":
//     //      arrKey.push(product.quantity);
//     //      break;
//     //  }
//   }
//   return console.log(arrValue);
// }

// getAllPropValues("name");
// // возвращает["Radar", "Scanner", "Droid", "Grip"]
// getAllPropValues("quantity");
// // возвращает[(4, 3, 7, 9)];
// getAllPropValues("price");
// // возвращает[1300, 2700, 400, 1200]
// getAllPropValues("category");
// // возвращает[]

// TASK 20
// ЗАДАЧА. ОБЩАЯ СТОИМОСТЬ ТОВАРА
// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;

//   for (const product of products) {
//     //  console.log(product);

//     if (product.name === productName) {
//       totalPrice += product.quantity * product.price;
//     }
//   }
//   return console.log(totalPrice);
// }

// calculateTotalPrice("Blaster");
// // возвращает 0
// calculateTotalPrice("Radar");
// // возвращает 5200
// calculateTotalPrice("Droid");
// // возвращает 2800
// calculateTotalPrice("Grip");
// // возвращает 10800
// calculateTotalPrice("Scanner");
// // возвращает 8100

// TASK 21
// Деструктуризация объектов
// Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за три дня (meanTemperature). Замени объявления переменных yesterday, today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures.

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;

// const { yesterday, today, tomorrow } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

// TASK 22
// Значения по умолчанию
// В прогнозе максимальных температур также может быть необязательное свойство icon - иконка погоды. Замени объявления переменных yesterday, today, tomorrow и icon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для icon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// // const icon = highTemperatures.icon;

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);
// console.log(icon);

// TASK 23
// Изменение имени переменной
// Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для highIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// console.log(meanTemperature);

// TASK 24
// Деструктуризация в циклах
// Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// for (const color of colors) {
//   const { hex, rgb } = color;
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// TASK 25
// Глубокая деструктуризация
// Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами, а также необязательными иконками. Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast. Задай значение по умолчанию для иконок, переменных todayIcon и tomorrowIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;

// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;

// console.log(highToday);
// console.log(lowToday);
// console.log(todayIcon);

// console.log(highTomorrow);
// console.log(lowTomorrow);
// console.log(todayIcon);

// TASK 26
// Паттерн «Объект параметров»
// Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект температур на два дня следующего формата.
// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh одной операцией деструктуризации свойств объекта forecast.

// function calculateMeanTemperature(forecast) {
//   //   const todayLow = forecast.today.low;
//   //   const todayHigh = forecast.today.high;
//   //   const tomorrowLow = forecast.tomorrow.low;
//   //    const tomorrowHigh = forecast.tomorrow.high;

//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

//   // Change code above this line
//   return console.log((todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4);
// }

// calculateMeanTemperature({
//   today: { low: 28, high: 32 },
//   tomorrow: { low: 25, high: 29 },
// });
// // возвращает 28.5

// calculateMeanTemperature({
//   today: { low: 37, high: 40 },
//   tomorrow: { low: 33, high: 38 },
// });
// // возвращает 37

// TASK 27
// spread: передача аргументов
// Синтаксис ... (spread) позволяет распылить коллекцию элементов (массив, строку или объект) в место, где ожидается набор отдельных значений.

// В переменной scores хранится массив результатов тестирования. Используя распыление и методы Math.max() и Math.min() дополни код так, чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line

// console.log(scores);
// console.log(...scores);

// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);

// TASK 28

// spread: создание нового массива
// В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся результаты тестирования отдельных групп. Используя распыление дополни код так, чтобы:

// В переменной allScores хранился массив всех результатов от первой до третьей группы.
// В переменной bestScore был самый высокий общий балл.
// В переменной worstScore был самый низкий общий балл.

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];

// console.log(allScores);

// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(bestScore);
// console.log(worstScore);

// TASK 29

// spread: создание нового объекта

// В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию которые хранятся в переменной defaultSettings. Во время создания теста, все или часть настроек можно переопределить, они хранятся в переменной overrideSettings.

// Для того чтобы получить финальные настройки теста, необходимо взять настройки по умолчанию и поверх них применить переопределённые настройки. Дополни код так, чтобы в переменной finalSettings получился объект финальных настроек теста.

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// console.log(finalSettings);

// TASK 30

// ЗАДАЧА. КАРТОЧКИ ЗАДАЧ

// spread: создание нового объекта

// Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.

// Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data. В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.

// В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать. Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";

//   // Change code below this line

//   const newMakeTask = { category, priority, ...data, completed };

//   // Change code above this line

//   return console.log(newMakeTask);
// }

// makeTask({});
// // возвращает { category: "General", priority: "Normal", completed: false }

// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" });
// // возвращает { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }

// makeTask({ category: "Finance", text: "Take interest" });
// // возвращает { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
// makeTask({ priority: "Low", text: "Choose shampoo" });
// // возвращает { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
// makeTask({ text: "Buy bread" });
// // возвращает { category: "General", priority: "Normal", text: "Buy bread", completed: false }

// TASK 31
// Операция ... (rest)
// Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, считала и возвращала их сумму.

// function add(...args) {
//   console.log(args);
//   let sum = 0;
//   for (const arg of args) {
//     sum += arg;
//   }

//   return console.log(sum);
// }

// add(15, 27);
// // возвращает 42
// add(12, 4, 11, 48);
// // возвращает 75
// add(32, 6, 13, 19, 8);
// // возвращает 78
// add(74, 11, 62, 46, 12, 36);
// // возвращает 241

// TASK 32

// rest: сбор части аргументов функции

// Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело функции addOverNum() так, чтобы она считала сумму только тех аргументов, которые больше чем заданное число. Это число должно быть первым параметром функции.

// function addOverNum(firstNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstNumber) {
//       total += arg;
//     }
//   }

//   return console.log(total);
//   // Change code above this line
// }

// addOverNum(50, 15, 27);
// // возвращает 0
// addOverNum(10, 12, 4, 11, 48, 10, 8);
// // возвращает 71
// addOverNum(15, 32, 6, 13, 19, 8);
// // возвращает 51
// addOverNum(20, 74, 11, 62, 46, 12, 36);
// // возвращает 218

// TASK 33

// rest: сбор части аргументов функции

// ЗАДАЧА. МАССИВ СОВПАДЕНИЙ

// Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.

// Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.

// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только они есть в массиве первого аргумента.

// Change code below this line

// function findMatches(firstNumber, ...args) {
//   const matches = [];
//   //   console.log(firstNumber);
//   //   console.log(args);

//   for (const arg of args) {
//     if (firstNumber.includes(arg)) {
//       matches.push(arg);
//     }
//   }

//   // Change code above this line
//   return console.log(matches);
// }

// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// // возвращает [1, 2]
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
// // возвращает [17, 89, 2]
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 41);
// // возвращает [24, 9, 41]
// findMatches([63, 11, 8, 29], 4, 7, 16);
// // возвращает []

// TASK 34

// Методы объекта

// Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки по аналогии с getBooks() и addBook(bookName).

// Метод removeBook(bookName) будет удалять книгу по имени. Возвращает строку "Deleting book <имя книги>", где <имя книги> это значение параметра bookName.

// Метод updateBook(oldName, newName) будет обновлять название книги на новое. Возвращает строку "Updating book <старое имя> to <новое имя>", где <старое имя> и <новое имя>это значения параметров oldName и newName соотвественно.

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],

//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   // Change code above this line
//   removeBook(bookName) {
//     return `Deleting book ${bookName} `;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
// };

// console.log(bookShelf.books);

// console.log(bookShelf.getBooks());
// // возвращает строку "Returning all books"
// console.log(bookShelf.addBook("Haze"));
// // возвращает строку "Adding book Haze"
// console.log(bookShelf.removeBook("Red sunset"));
// // возвращает строку "Deleting book Red sunset"
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));
// // возвращает строку "Updating book Sands of dune to Dune"

// TASK 35

// Доступ к свойствам объекта в методах - this

// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books. Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line

//     const indexOldName = this.books.indexOf(oldName);
//     this.books.splice(indexOldName, 1, newName);

//     // Change code above this line
//      return console.log(this.books);
//   },
// };

// console.log(bookShelf.books);

// bookShelf.updateBook("Haze", "Dungeon chronicles");
// // массив["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

// bookShelf.updateBook("The last kingdom", "Dune");
// // массив ["Dune", "Haze", "The guardian of dreams"]

// TASK 36

// Добавление свойств

// ЗАДАЧА. ЛАВКА ЗЕЛИЙ «У СТАРОЙ ЖАБЫ»

// К нам обратилась владелица лавки зелий «У старой жабы» и заказала программу для ведения инвентаря - добавления, удаления, поиска и обновления зелий. Добавь объекту atTheOldToad свойство potions, значением которого сделай пустой массив.

// const atTheOldToad = {
//   // Change code below this line
//   potions: [],
//   // Change code above this line
// };

// console.log(atTheOldToad);

// Значение свойства atTheOldToad.potions это массив []

// TASK 37

// Методы объекта

// ЗАДАЧА. ПОЛУЧАЕМ ВСЕ ЗЕЛЬЯ

// Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   // Change code above this line
// };

// console.log(atTheOldToad.getPotions());
// // возвращает["Speed potion", "Dragon breath", "Stone skin"]

// TASK 38

// ЗАДАЧА: ДОБАВЛЯЕМ НОВОЕ ЗЕЛЬЕ

// Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//     console.log(this.potions.push(potionName));
//     return console.log(this.potions);
//     // Change code above this line
//   },
// };

// atTheOldToad.addPotion("Invisibility");
// // в свойстве potions будет массив["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]

// atTheOldToad.addPotion("Power potion");
// // в свойстве potions будет массив["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"]

// TASK 39

// ЗАДАЧА. УДАЛЯЕМ ЗЕЛЬЕ

// Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const indexPotionName = this.potions.indexOf(potionName);
//     console.log(indexPotionName);
//     this.potions.splice(indexPotionName, 1);

//     return console.log(this.potions);

//     // Change code above this line
//   },
// };

// atTheOldToad.removePotion("Dragon breath");
// // в свойстве potions будет массив["Speed potion", Stone skin"]

// atTheOldToad.removePotion("Speed potion");
// // в свойстве potions будет массив["Stone skin"]

// TASK 40

// ЗАДАЧА: ОБНОВЛЯЕМ ЗЕЛЬЕ

// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const indexName = this.potions.indexOf(oldName);
//     this.potions.splice(indexName, 1, newName);
//     return console.log(this.potions);
//     // Change code above this line
//   },
// };

// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// // в свойстве potions будет массив["Speed potion", "Polymorth", "Stone skin"]

// atTheOldToad.updatePotionName("Stone skin", "Invisibility");
// // в свойстве potions будет массив ["Speed potion", "Polymorth", "Invisibility"]

// TASK 41

// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

// {
//   name: "Dragon breath",
//   price: 700
// }

// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions, но только если такого зелья еще нет в инвентаре. В противном случае возвращается строка.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
//    updatePotionName(oldName, newName) - обновляет свойство name объекта - зелья с названием oldName на newName в массиве potions.

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],

  getPotions() {
    return console.log(this.potions);
  },

  // addPotion(newPotion) {
  //   if (this.potions.includes(newPotion)) {
  //     return `Error! Potion ${newPotion} is already in your inventory!`;
  //   }
  //   this.potions.push(newPotion);
  // },

  addPotion(newPotion) {
    for (const potion of this.potions) {
      // console.log(potion);
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
    return this.potions;
  },

  // removePotion(potionName) {
  //   const potionIndex = this.potions.indexOf(potionName);

  //   if (potionIndex === -1) {
  //     return `Potion ${potionName} is not in inventory!`;
  //   }

  //   this.potions.splice(potionIndex, 1);
  // },

  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (potionName === this.potions[i].name) {
        this.potions.splice(i, 1);
        return this.potions;
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },

  // updatePotionName(oldName, newName) {
  //   const potionIndex = this.potions.indexOf(oldName);

  //   if (potionIndex === -1) {
  //     return `Potion ${oldName} is not in inventory!`;
  //   }

  //   this.potions.splice(potionIndex, 1, newName);
  // },

  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (oldName === this.potions[i].name) {
        this.potions[i].name = newName;
        return this.potions;
      }
    }
    return `Potion ${oldName} is not in inventory!`;
  },
};

// console.log(atTheOldToad.potions);

//   // Change code above this line

// atTheOldToad.getPotions();
// // для исходного объекта возвращает[{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]

// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// // в массиве potions последним элементом будет этот объект

// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// // в массиве potions последним элементом будет этот объект

// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// // массив potions не изменяется

// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// // возвращает строку "Error! Potion Dragon breath is already in your inventory!"

// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// // возвращает строку "Error! Potion Stone skin is already in your inventory!"

// console.log(atTheOldToad.removePotion("Dragon breath"));
// // в свойстве potions будет массив[{ name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 }]

// console.log(atTheOldToad.removePotion("Speed potion"));
// // в свойстве potions будет массив[{ name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]

console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// в свойстве potions будет массив[{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 }]

// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");
// // в свойстве potions будет массив[{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 }]
