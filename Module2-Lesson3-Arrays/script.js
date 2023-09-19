// Модуль 2 - Занятие 3 - Массивы	Module 2 - Lesson 3 - Arrays

// Создание - Arrays
// const clients = ['Mango', 'Poly', 'Ajax'];
// console.log(clients);

// Доступ к элементам - Access to elements
// const clients = ['Mango', 'Poly', 'Ajax'];

// Указывая в скобках индекс элемента мы получаем его значение
// console.log(clients);
// console.log(clients[0]); // Mango
// console.log(clients[1]); // Poly
// console.log(clients[2]); // Ajax"

// Переопределение	Overriding
// const clients = ['Mango', 'Poly', 'Ajax'];
// clients[0] = 'Kiwi';
// clients[1] = 'Pango';
// console.log(clients); // ["Kiwi", "Pango", "Ajax"]

// Длина массива	Array length
// const clients = ['Mango', 'Poly', 'Ajax'];
// console.log(clients.length); // 3

// Индекс последнего элемента	Last element's index
// const clients = ['Mango', 'Poly', 'Ajax'];
// const lastElementIndex = clients.length - 1;
// console.log(lastElementIndex); // 2
// console.log(clients[lastElementIndex]); // "Ajax"

// Итерация по массиву	Array Iteration

// Цикл for можно использовать для итерации по массиву, то есть «перебрать» его поэлементно.
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// Цикл for...of	for...of loop
// Конструкция for...of объявляет цикл, перебирающий итерируемые объекты, такие как массивы и строки. Тело цикла будет выполняться для значения каждого элемента. Это хорошая замена циклу for если не нужен доступ к счётчику итерации.
// for (const variable of iterable) {
//   // тело цикла
// }
// variable — переменная которая будет хранить значение элемента на каждой итерации.
// iterable — коллекция, которая имеет перечислимые элементы, например массив.

// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//   console.log(client);
// }

// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }

// Операторы break и continue	break and continue statements

// Будем искать имя клиента в массиве имен, если нашли - прервем цикл, так как нет смысла искать дальше, имена у нас уникальные.
// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let message;

// for (const client of clients) {
//   // На каждой итерации будем проверять совпадает ли элемент массива с
//   // именем клиента. Если совпадает то мы записываем в message сообщение
//   // об успехе и делаем break чтобы не искать дальше
//   if (client === clientNameToFind) {
//     message = 'Клиент с таким именем есть в базе данных!';
//     break;
//   }

//   // Если они не совпадают то запишем в message сообщение об отсутствии имени
//   message = 'Клиента с таким именем нету в базе данных!';
// }

// console.log(message); // "Клиент с таким именем есть в базе данных!"

// Другой вариант
// Можно изначально задать message значение неудачи поиска, а в цикле перезаписать его на успех, если нашли имя
// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let message = 'Клиента с таким именем нету в базе данных!';

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = 'Клиент с таким именем есть в базе данных!';
//     break;
//   }
//   // Если не совпадает, то на этой итерации ничего не делаем
// }

// console.log(message); // Клиент с таким именем есть в базе данных!

// Используем цикл для вывода только чисел больше определенного значения.
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// и управление передаётся на следующую итерацию.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// Методы массива
// Методы split() и join()	split() and join() methods

// Метод split(delimiter) превращает строку в массив, «разбив» её по разделителю delimiter. Если разделитель это пустая строка, то получится массив отдельных символов. Разделителем может быть один или несколько символов.

// const name = 'Mango';
// console.log(name.split('')); // ["M", "a", "n", "g", "o"]

// const message = 'JavaScript это интересно';
// console.log(message.split(' ')); // ["JavaScript", "это", "интересно"]

// Метод массивов join(delimiter) соединяет элементы массива в строку. В строке элементы будут разделены символом или группой символов указанных в delimiter. То есть это операция обратная методу строк split(delimiter).

// const words = ['JavaScript', 'это', 'интересно'];
// console.log(words);
// console.log(words.join('')); // "JavaScriptэтоинтересно"
// console.log(words.join(' ')); // "JavaScript это интересно"
// console.log(words.join('-')); // "JavaScript-это-интересно"

// Метод indexOf()	indexOf() method

// indexOf(value) возвращает первый индекс, в котором элемент со значением value был найден в массиве, или число -1, если такого элемента нет. Используйте indexOf тогда, когда необходимо получить непосредственно индекс элемента.

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.indexOf('Poly')); // 2
// console.log(clients.indexOf('Monkong')); // -1

// Проверка множественных условий с includes()	Checking multiple conditions with includes()

// // Выносим варианты в массив
// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// const fruit = 'cherry';
// // Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// Методы push() и pop()	push() and pop() methods

// Метод push() добавляет один или несколько элементов в конец массива, без необходимости указывать индексы добавляемых элементов. Возвращает длину массива после добавления элементов.

// const numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.push(5);
// console.log(numbers); // [1, 2, 3, 4, 5]

// Метод pop() удаляет последний элемент из конца массива и возвращает удаленный элемент. Если массив пустой, метод возвращает undefined.

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]

// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]

// console.log(numbers.pop()); //  2
// console.log(numbers); // [1]

// console.log(numbers.pop()); //  1
// console.log(numbers); // []

// Метод slice()	slice() method

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
// console.log(clients.slice(2)); // ["Poly", "Kiwi"]

// Метод splice()	splice() method

// Удаление	Removal
// const scores = [1, 2, 3, 4, 5];

// // Удаляем три элемента массива, начиная с первого элемента (индекс 0)
// const deletedScores = scores.splice(0, 3);

// // Теперь массив scores содержит два элемента
// console.log(scores); // [4, 5]
// console.log(scores.splice(0, 3));

// // А массив deletedScores содержит три удаленных элемента
// console.log(deletedScores); // [1, 2, 3]

// Добавление	Addition

// const colors = ['red', 'green', 'blue'];

// colors.splice(1, 0, 'yellow', 'pink');
// console.log(colors); // ["red", "yellow", "pink", "green", "blue"]

// Замена	Replacement

const languages = ['C', 'C++', 'Java', 'JavaScript'];

// Заменяем элемент с индексом 1 на новый
// languages.splice(1, 1, 'Python');
// console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// // Заменяем один элемент (с индексом 2) на несколько
// languages.splice(2, 1, 'C#', 'Swift', 'Go');
// console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]

// Метод concat()	concat() method

// Объединяет два или более массива в один. Он не изменяет массив на котором вызывается, а возвращает новый. Порядок аргументов метода влияет на порядок элементов нового массива.

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Monkong', 'Singu'];

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

// console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients); // ["Monkong", "Singu"]

// console.table(newClients);

// ЗАНЯТИЕ С ПРЕПОДАВАТЕЛЕМ

// kahoot
// console.log([1, 3, 5] === [1, 3, 5]);
// console.log([7, 8, 3, 9, 2].slice(3));
// console.log([8, 5, 3, 9, 3].indexOf(3));
// console.log([8, 5, 3, 9, 3].indexOf(4));
// console.log([3, 5, 12, 7, 4].includes(5));
// console.log([3, 5, 12, 7, 4].includes(8));
// console.log(['JS', 'is', 'awesome!']);
// console.log(['JS', 'is', 'awesome!'].join(' '));
// console.log([2, 4, 6].concat([1, 3], [5]));

// const array = ['Hello world', null, true, 15];

// Метод typeof не показывает тип массив
// console.log(typeof array); // object

// // Метод для проверки типа массив
// console.log(Array.isArray(array)); // true
// console.log(Array.isArray('hello')); // false

// const firstEl = array[0];
// console.log(firstEl);
// const lastIDX = array.length - 1;
// console.log(lastIDX);
// const lastEl = array[array.length - 1];
// console.log(lastEl);

// const array = ['Hello world', null, true, 15];

// for (let i = 0; i < array.length; i += 1) {
//   const item = array[i];
//   console.log(item);
// }

// for (const item of array) {
//   console.log(item);
// }

// Смена содержимого массива по индексу

// const array = [null, true, 'Hello world', 15, undefined, 'ok'];
// console.log(array);

// for (let i = 0; i < array.length; i += 1) {
//   if (typeof array[i] === 'string') {
//     array[i] = false;
//   }
// }
// console.log(array);

// Цикл for of меняет локальную переменную не элемент массива

// const array = [null, true, 'Hello world', 15, undefined, 'ok'];

// for (let item of array) {
//   if (typeof item === 'string') {
//     item = false;
//   }
//   console.log(item);
// }
// console.log(array);

// Примітивні типи даних - за значенням
// console.log(1 === 1);
// console.log([1] === [1]);

// let a = 15;
// let b = a;

// b += 1;

// console.log(a);
// console.log(b);
// console.log(a === b);

// Складні типи даних - за посиланням
// let a = [1, 2, 3];
// let b = a;

// b.push(4);

// console.log('a', a);
// console.log('b', b);

// console.log(a === b);

// push pop

// const numbers = [1, 2, 4];
// numbers.push(4);
// console.log(numbers.push(6));
// const result = numbers.pop();
// console.log(result);
// console.log(numbers);

// unshift shift
// unshift - добавляет элементы в начале массива
// shift - удаляет первый элемент массива

// const numbers = [1, 2, 3];
// // numbers.unshift(4, 5, 6);
// // console.log(numbers.unshift(4, 5, 6));
// const result = numbers.shift();
// console.log(result);
// console.log(numbers);

//slice - возвращает новый массив, содержащий копию части исходного массива, не изменяя его
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const result = numbers.slice(2, 5);
// console.log(result);
// console.log(numbers);

// splice - мутирующий метод, влияет изменяет начальный массиа

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// удаление;
// const result = numbers.splice(2, 2);
// console.log(result);
// console.log(numbers);

// замена
// numbers.splice(2, 1, 'hello world', false);
// console.log(numbers);

// добавление
// numbers.splice(2, 0, 'hello world');
// console.log(numbers);

//includes - возвращает true при совпадении элемента
// const str = ['a', 'b', 'c', 'd'];

// console.log(str.includes('c')); // true
// console.log(str.includes('e')); // false

//indexOf - возвращает первый индекс совпадающего элемента, или - 1
// const str = ['a', 'b', 'c', 'd', 'c'];

// console.log(str.indexOf('c')); //2
// console.log(str.indexOf('e')); //-1

// имитация метода includes (до ES6)
// console.log(str.indexOf('e') !== -1);

// concat - Объединяет два или более массива в один. Он не изменяет массив на котором вызывается, а возвращает новый.
// const str = ['a', 'b', 'c', 'd', 'c'];
// const strA = ['g', 'h'];
// const strB = ['w', 'e'];

// const result = str.concat(strA, strB);
// console.log(result);
// console.log(str);

// ПРАКТИКА

// Task-1
// Напиши скрипт який буде перебирати масив та видаляти з нього (мутувати) всі елементи що не є типом даних Number.

// const arrA = [3, 'Hello', null, 42, false];
// console.log(arrA);

// В этом варианте просходит переиндексация элементов, если не возвращать счетчик на минус 1, элементы будут пропускаться
// for (let i = 0; i < arrA.length; i += 1) {
//   if (typeof arrA[i] === 'number') {
//     //  console.log(arrA[i]);
//     continue;
//   }
//   arrA.splice(i, 1);
// }

// console.log(arrA);

// console.log(typeof null);

// Второй вариант решения
// for (let i = 0; i < arrA.length; i += 1) {
//   if (typeof arrA[i] !== 'number') {
//     arrA.splice(i, 1);
//     i -= 1;
//   }
// }

// console.log(arrA);

// Третий вариант решения - перебор массива с конца при реиндексации подъезжает уже переверенный элемент

// const arrA = [3, 'Hello', null, 42, false];

// for (let i = arrA.length - 1; i >= 0; i -= 1) {
//   console.log(arrA[i]);
//   if (typeof arrA[i] !== 'number') {
//     arrA.splice(i, 1);
//   }
// }
// console.log(arrA);

// Та же задача другой массив
const arrB = ['world', true, 22, 41, undefined];

// for (let i = arrB.length - 1; i >= 0; i -= 1) {
//   console.log(arrB[i]);

//   if (typeof arrB[i] !== 'number') {
//     arrB.splice(i, 1);
//   }
// }
// console.log(arrB);

// Task-2
// Потрібно створити функцію яка буде приймати 1 параметр
// Функція повина відібрати з масиву тільки ті елементи що дублюються в ньому та повернути їх в вигляді нового масиву як результат виконання функції

// function getCommonElements(arr) {
//   const result = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr.includes(arr[i], i + 1)) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// console.log(getCommonElements([1, 2, 3, 2, 1, 17, 19]));

// Task-3
//Потрібно створити функцію яка буде приймати 2 параметри
//1 параметр це масив всіх юзерів
//2 параметр це масив з чоловічими іменами.
//Функція повина відібрати з масиву всіх юзерів лише жіночі імена та повернути їх в результаті свого виканання.

// const users = [
//   'Artem',
//   'Anna',
//   'Larisa',
//   'Maksim',
//   'Svetlana',
//   'David',
//   'Roman',
//   'Olga',
// ];
// const men = ['Artem', 'Maksim', 'David', 'Roman'];

// function getWomen(users, men) {
//   const women = [];

//   for (const user of users) {
//     if (!men.includes(user)) {
//       women.push(user);
//     }
//   }

//   return women;
// }

// console.log(getWomen(users, men));

// Task-4 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок літер) і виводить його в консоль.

// const string = 'Welcome to the future';
// const SEPARATOR = '';
// const result = string.split(SEPARATOR).reverse().join(SEPARATOR);
// console.log(result);

// Task-5
// Напиши скрипт який буде перевіряти чи елементи в масиві розташовані в порядку зростання, якщо ні то замінювати елемент на вірнi
const numbers = [1, 2, 3, 1, 5, 6, 1, 1, 9];

// for (let i = 1; i < numbers.length; i += 1) {
//   const currentEl = numbers[i];
//   const prevEl = numbers[i - 1];
//   if (currentEl - prevEl !== 1) {
//     numbers[i] = numbers[i - 1] + 1;
//   }
// }
// console.log(numbers);

// Task-6
// Напиши функцію яка на основі масиву користувачів що поставили лайк формує та повертає рядок.
// Функцію має повернути текст, як вказано у прикладах:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// function createStr(arr) {
//   let message;
//   switch (arr.length) {
//     case 0:
//       message = 'no one likes this';
//       break;
//     case 1:
//       message = `${arr[0]} likes this`;
//       break;
//     case 2:
//       message = `${arr[0]} and ${arr[1]} like this`;
//       break;
//     case 3:
//       message = `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
//       break;
//     default:
//       message = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
//   }
//   return message;
// }

// console.log(createStr([]));
// console.log(createStr(['Peter']));
// console.log(createStr(['Jacob', 'Alex']));
// console.log(createStr(['Max', 'John', 'Mark']));
// console.log(createStr(['Mark', 'Alex', 'Jacob', 'Mark']));
