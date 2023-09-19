// Module 4 - Lesson 8 - Iterating Array Methods

// Чистые функции	Pure Functions

// Функция с побочными эффектами	Side-effect function
// Функция с побочными эффектами - это функция которая в процессе выполнения может изменять или использовать глобальные переменные, изменять значение аргументов ссылочного типа, выполнять операции ввода-вывода и т. п.

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// dirtyMultiply(numbers, 2);
// // Произошла мутация исходных данных - массива numbers
// console.log(numbers); // [2, 4, 6, 8, 10]

// Чистая функция (pure function) - это функция результат которой зависит только от значений переданных аргументов. При одинаковых аргументах она всегда возвращает один и тот же результат и не имеет побочных эффектов, то есть не изменяет значения аргументов.

// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach((element) => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Не произошло мутации исходных данных
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функция вернула новый массив с изменёнными данными
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// Перебирающие методы массива	Array Iteration Methods

// Они создают новый массив, заполняют его, применяя к значению каждого элемента указанную коллбек-функцию, после чего возвращают этот новый массив.

// array.method(callback[(currentValue, index, array)]);

// В большинстве методов, аргументами callback-функции являются значение элемента currentValue (первый параметр), позиция элемента index (второй параметр) и сам исходный массив array (третий параметр).

// array.method((item, idx, arr) => {
//   // логика которая будет применяться на каждой итерации
// });

// Все параметры, кроме значения элемента item, необязательны. Названия параметров могут быть любые, но есть неофициальные соглашения.

// array.method((item) => {
//   // логика которая будет применяться на каждой итерации
// });

// Метод map()	map() Method

// Метод map(callback) используется для трансформации массива. Он вызывает коллбек-функцию для каждого элемента исходного массива, а результат её работы записывает в новый массив, который и будет результатом выполнения метода.

// массив.map((element, index, array) => {
//   // Тело коллбек-функции
// });

// Его можно использовать для того, чтобы изменить каждый элемент массива. Оригинальный массив используется как эталон, на базе которого можно сделать другую коллекцию.

// const planets = ["Земля", "Марс", "Венера", "Юпитер"];

// const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
// console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПИТЕР']

// const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());
// console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпитер']

// // Оригинальный массив не изменился
// console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпитер']

// Массив объектов	Array of objects
// Используя метод map() можно перебрать массив объектов, и в коллбек-функции вернуть значение свойства каждого из них.

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];

// const names = students.map((student) => student.name);
// console.log(names); // ['Манго', 'Поли', 'Аякс', 'Киви', 'Хьюстон']

// Метод flatMap()	flatMap() Method

// Метод flatMap(callback) аналогичен методу map(), но применяется в случаях когда результат это многомерный массив который необходимо «разгладить».

// массив.flatMap((element, index, array) => {
//   // Тело коллбек-функции
// });

// const students = [
//   { name: "Манго", courses: ["математика", "физика"] },
//   { name: "Поли", courses: ["информатика", "математика"] },
//   { name: "Киви", courses: ["физика", "биология"] },
// ];

// console.log(students.map((student) => student.courses));
// // [['математика', 'физика'], ['информатика', 'математика'], ['физика', 'биология']]

// console.log(students.flatMap((student) => student.courses));
// // ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];

// Метод filter()	filter() Method

// Метод filter(callback) используется для единственной операции - фильтрации массива, то есть когда необходимо выбрать более одного элемента из коллекции по какому-то критерию

// массив.filter((element, index, array) => {
//   // Тело коллбек-функции
// });

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter((value) => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = values.filter((value) => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = values.filter((value) => value > 1000);
// console.log(bigValues); // []

// // The original array has not changed
// console.log(values); // [51, -3, 27, 21, -68, 42, -37]

// Фильтрация уникальных элементов	Filtering unique elements

// "Используя метод filter() можно выполнить фильтрацию массива так, что в нём останутся только уникальные элементы. Этот приём работает только с массивом примитивных значений - не объектов.

// Используя array.indexOf(course) выполняем поиск первого совпадения текущего элемента course и получаем его индекс в оригинальном массиве всех курсов. В параметре index хранится индекс текущего элемента course при переборе массива методом filter"

// const students = [
//   { name: "Манго", courses: ["математика", "физика"] },
//   { name: "Поли", courses: ["информатика", "математика"] },
//   { name: "Киви", courses: ["физика", "биология"] },
// ];

// console.log(students);

// const allCourses = students.flatMap((student) => student.courses);
// // ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];

// console.log(allCourses);

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );

// console.log(uniqueCourses);

// Массив объектов	Array of objects

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];

// const best = students.filter((student) => student.score >= HIGH_SCORE);
// console.log(best); // Массив объектов с именами Манго и Киви

// const worst = students.filter((student) => student.score < LOW_SCORE);
// console.log(worst); // Массив с одним объектом Аякс

// // В коллбек-функции удобно деструктуризировать свойства объекта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Массив объектов с именами Поли и Хьюстон

// Метод find()	find() Method

// Метод find() используется для одной задачи - поиска элемента по уникальному значению свойства. Например, поиск пользователя по почте, автомобиля по серийному номеру, книги по названию и т. п.

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// console.log(colorPickerOptions.find((option) => option.label === "blue"));
// // { label: 'blue', color: '#2196F3' }

// console.log(colorPickerOptions.find((option) => option.label === "pink"));
// // { label: 'pink', color: '#E91E63' }

// console.log(colorPickerOptions.find((option) => option.label === "white"));
// // undefined

// Метод findIndex()	findIndex() Method

// Метод findIndex(callback) это современная замена методу indexOf(). Позволяет выполнять поиск по более сложным условиям чем просто равенство. Используется как для поиска в массиве примитивов, так и в массиве обьектов.

// array.findIndex((element, index, array) => {
//   // Callback body
// });

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// console.log(colorPickerOptions.findIndex((option) => option.label === "blue"));
// // 2

// console.log(colorPickerOptions.findIndex((option) => option.label === "pink"));
// // 3

// console.log(colorPickerOptions.findIndex((option) => option.label === "white"));
// // -1

// Методы every() и some()	every() and some() Methods

// Метод every()	every() Method

// Проверяет проходят ли все элементы массива тест предоставляемый коллбек-функцией. Возвращает true или false.

// array.every((element, index, array) => {
//   // Callback body
// });

// // Are all elements greater than or equal to zero? - yes
// [1, 2, 3, 4, 5].every(value => value >= 0); // true

// // Are all elements greater than or equal to zero? - no
// [1, 2, 3, -10, 4, 5].every(value => value >= 0); // false

// Метод some()	some() method

// Проверяет проходит ли хотя бы один элемент массива тест предоставляемый коллбек-функцией. Возвращает true или false.

// array.some((element, index, array) => {
//   // Callback body
// });

// // Есть хотя бы один элемент больше либо равный нулю? - да
// [1, 2, 3, 4, 5].some(value => value >= 0); // true

// // Есть хотя бы один элемент больше либо равный нулю? - да
// [-7, -20, 3, -10, -14].some(value => value >= 0); // true

// // Есть хотя бы один элемент меньше нуля? - нет
// [1, 2, 3, 4, 5].some(value => value < 0); // false

// // Есть хотя бы один элемент меньше нуля? - да
// [1, 2, 3, -10, 4, 5].some(value => value < 0); // true

// Массив объектов	Array of objects

// При работе с массивом объектов проверяется значение какого-то их свойства Например, есть массив объектов фруктов, необходимо узнать все ли фрукты есть в наличии и есть ли в наличии хоть какие-то фрукты более 0 штук.

// const fruits = [
//   { name: "apples", amount: 100 },
//   { name: "bananas", amount: 0 },
//   { name: "grapes", amount: 50 },
// ];

// // every returns true only if all fruits are greater than 0
// const allAvailable = fruits.every((fruit) => fruit.amount > 0); // false

// console.log(allAvailable);

// // some returns true if at least one fruit is greater than 0
// const anyAvailable = fruits.some((fruits) => fruits.amount > 0); // true

// console.log(anyAvailable);

// Метод reduce()	reduce() Method

// Первый параметр коллбек-функции (previousValue) это аккумулятор, то есть промежуточный результат. Значение которое вернёт коллбек-функция на текущей итерации, будет значением этого параметра на следующей.

// Вторым аргументом для reduce() можно передать необязательное начальное значение аккумулятора - параметр initialValue.

// массив.reduce((previousValue, element, index, array) => {
//   // Тело коллбек-функции
// }, initialValue);

// Метод reduce(callback, initialValue) используется для последовательной обработки каждого элемента массива с сохранением промежуточного результата, как аккумулятор.
// Легче всего представить его работу на примере подсчёта суммы элементов массива.

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 32

// Массив объектов	Array of objects

// При работе с массивом объектов выполняется редуцирование по значению какого-то свойства. Например, есть массив студентов с баллами за тест. Необходимо получить средний бал.

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];

// // Название аккумулятора может быть произвольным, это просто параметр функции
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// console.log(totalScore);

// const averageScore = totalScore / students.length;

// console.log(averageScore);

// Продвинутый reduce	Advanced reduce

// Допустим у нас есть следующая задача: из массива постов твиттера отдельного пользователя необходимо посчитать сумму всех лайков. Можно перебрать циклом for или forEach, каждое из этих решений потребует дополнительного кода. А можно использовать reduce.

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// // Пройдем по всем элементам коллекции и прибавим значения свойства likes
// // к аккумулятору, начальное значение которого укажем 0.

// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// console.log(likes); // 32

// // Наверное подсчет лайков не одиночная операция, поэтому напишем функцию
// // для подсчета лайков из коллекции
// const countLikes = (tweets) => {
//   return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// };

// console.log(countLikes(tweets)); // 32

// Продолжая тему reduce, мы соберем в массив все теги, которые встречаются в постах.

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// Пройдем по всем элементам коллекции и добавим значения свойства tags
// к аккумулятору, начальное значение которого укажем пустым массивом [].
// На каждой итерации пушим в аккумулятор все элементы tweet.tags и возвращаем его.

// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// console.log(tags);

// // Наверное сбор тегов не одиночная операция, поэтому напишем функцию
// // для сбора тегов из коллекции
// const getTags = (tweets) =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// console.log(getTags(tweets));

// После того, как мы собрали все теги из постов, хорошо бы было посчитать количество уникальных тегов в массиве. И снова reduce тут как тут.

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// console.log(tweets);

// const getTags = (tweets) =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);

// console.log(tags);

// Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
// Это стандартная практика если callback-функция довольно большая.

// Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// то создаем его и записывает ему значение 0.
// В противном случае увеличиваем значение на 1.

// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Начальное значение аккумулятора это пустой объект {}
// const countTags = (tags) => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

// Метод sort()	sort() Method
// Метод sort() сортирует элементы массива, но в отличии от остальных перебирающих методов, он сортирует исходный массив.

// const scores = [61, 19, 74, 35, 92, 56];
// scores.sort();
// console.log(scores); // [19, 35, 56, 61, 74, 92]

// Сортировка происходит путём приведения значений к строке и сравнения порядковых номеров в таблице Unicode."

// const scores = [27, 2, 41, 4, 7, 3, 75];
// scores.sort();
// console.log(scores); // [2, 27, 3, 4, 41, 7, 75]

// Массив строк сортируется по алфавиту.

// const students = ["Vika", "Andrey", "Oleg", "Julia", "Boris", "Katya"];
// students.sort();
// console.log(students); // ['Andrey', 'Boris', 'Julia', 'Katya', 'Oleg', 'Vika'];

// При этом порядковый номер заглавных букв меньше чем у прописных.

// const letters = ["b", "B", "a", "A", "c", "C"];
// letters.sort();
// console.log(letters); // ['A', 'B', 'C', 'a', 'b', 'c']

// Свой порядок сортировки чисел	Custom sort order for numbers
// Для указания своего порядка сортировки методу sort(compareFunction) нужно передать коллбек-функцию с двумя параметрами. Это функция сравнения (compare function), порядок сортировки зависит от её результата. Метод sort() будет вызывать её для произвольных двух элементов.
// a - первый элемент для сравнения.
// b - второй элемент для сравнения.

// const scores = [61, 19, 74, 35, 92, 56];
// console.log(scores);

// const ascendingScores = [...scores].sort((a, b) => a - b);
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// const scores = [61, 19, 74, 35, 92, 56];
// const descendingScores = [...scores].sort((a, b) => b - a);
// console.log(descendingScores); // [92, 74, 61, 56, 35, 19]

// Свой порядок сортировки строк	Custom sort order for strings
// Для сортировки строк в алфавитном порядке, по возрастанию или убыванию, используется метод строк localeCompare().
// Он вызывается на строке которую нужно сравнить (firstString) с той, что передана ему как аргумент (secondString).

// firstString.localeCompare(secondString);

// Возвращает отрицательное значение если firstString должна быть перед secondString.
// Возвращает положительное значение больше нуля если firstString должна быть после secondString.
// Если строки одинаковы, возвращается ноль.

// console.log("a".localeCompare("b")); // -1
// "b".localeCompare("a"); // 1
// "a".localeCompare("a"); // 0
// "b".localeCompare("b"); // 0

// Это удобно использовать при сортировке строк, так как метод sort() ожидает такие же значения от коллбек-функции.

// const students = ["Vika", "Andrey", "Oleg", "Julia", "Boris", "Katya"];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // ['Andrey', 'Boris', 'Julia', 'Katya', 'Oleg', 'Vika']

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // ['Vika', 'Oleg', 'Katya', 'Julia', 'Boris', 'Andrey']

// Сортировка объектов	Sorting objects
// При работе с массивом объектов сортировка выполняется по числовому или строчному значению какого-то свойства. Например, есть группа студентов с баллами за тест. Необходимо отсортировать массив объектов по возрастанию и убыванию количества баллов, и по имени студента.

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
// ];

// console.log(students);

// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// console.log(inAscendingScoreOrder);

// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// console.log(inDescendingScoreOrder);

// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );

// console.log(inAlphabeticalOrder);

// Цепочки методов	Method Chaining

const students = [
  { name: "Манго", score: 83, courses: ["математика", "физика"] },
  { name: "Поли", score: 59, courses: ["информатика", "математика"] },
  { name: "Аякс", score: 37, courses: ["физика", "биология"] },
  { name: "Киви", score: 94, courses: ["литература", "информатика"] },
];

// Необходимо получить массив их имён отсортированный по возрастанию баллов за тест. Для этого мы отсортируем копию массива методом sort(), после чего методом map() составим массив значений свойства name из сортированного массива.

const names = [...students]
  .sort((a, b) => a.score - b.score)
  .map((student) => student.name);

console.log(names); // ['Аякс', 'Поли', 'Манго', 'Киви']

// Получим сортированный по алфавиту массив уникальных посещаемых предметов.

// На исходном массиве вызываем flatMap() и делаем разглаженный массив всех курсов.
// К результату метода flatMap() применяем метод filter() для фильтрации уникальных элементов.
// На результате метода filter() вызываем sort().
// Переменной uniqueSortedCourses присваивается результат работы метода sort().

const uniqueSortedCourses = students
  .flatMap((student) => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .sort((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses); // ['biology', 'informatics', 'literature', 'mathematics', 'physics']
