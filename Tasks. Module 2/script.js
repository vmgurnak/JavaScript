// Tasks. Module 2

// TASK 1

// (паттерн) «ранний возврат».

// Запиши условие в инструкции if так, чтобы функция работала правильно.

// function checkAge(age) {
//   if (age >= 18) {
//     return 'You are an adult';
//   }

//   return 'You are a minor';
// }

// console.log(checkAge(20));
// console.log(checkAge(14));

// TASK 2

// ПРОВЕРКА ПАРОЛЯ(РАННИЙ ВОЗВРАТ)

// Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.

// Проведи рефакторинг кода функции checkPassword используя паттерн «ранний возврат»:

// удали переменную message
// удали else
// код должен работать так же, как и до оптимизации

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';

//   if (password === ADMIN_PASSWORD) {
//     return 'Welcome!';
//   }

//   return 'Access denied, wrong password!';
// }

// checkPassword('mangohackzor');
// checkPassword('jqueryismyjam');

// TASK 3

// ЗАДАЧА: СКЛАД ТОВАРОВ 3.0

// Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате. Она принимает два параметра, значения которых будут задаваться во время её вызова.

// available - доступное количество товаров на складе
// ordered - количество единиц товара в заказе
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }

//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }

//   return 'The order is accepted, our manager will contact you';
// }

// checkStorage(100, 50);
// checkStorage(70, 0);
// checkStorage(200, 250);

// TASK 4

// Массивы

// Объяви переменную fruits и присвой ей массив фруктов - строк "apple", "plum", "pear" и "orange".

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// console.log(fruits);

// TASK 5

// Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.

// Имя переменной	Значение переменной
// firstElement	первый элемент массива
// secondElement	второй элемент массива
// lastElement	последний элемент массива

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// // Change code below this line

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// TASK 6

// Переопредели значения элементов с индексами 1 и 3. Замени "plum" на "peach", а "orange" на "banana".

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// fruits[1] = 'peach';
// fruits[3] = 'banana';

// TASK 7

// Объяви переменную fruitsArrayLength и присвой ей длину массива fruits используя свойство length.

// const fruits = ['apple', 'peach', 'pear', 'banana'];

// const fruitsArrayLength = fruits.length;

// TASK 8

// Объяви две переменные:

// Имя переменной	Ожидаемое значение
// lastElementIndex	Индекс последнего элемента масcива fruits через длина_массива - 1
// lastElement	Значение последнего элемента массива

// const fruits = ['apple', 'peach', 'pear', 'banana'];

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// TASK 9

// ЗАДАЧА: КРАЙНИЕ ЭЛЕМЕНТЫ МАССИВА

// Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

// function getExtremeElements(array) {
//   const result = array.splice(1, array.length - 2);

//   return console.log(array);
// }

// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(['apple', 'peach', 'pear', 'banana']);

// TASK 10

// Дополни код функции splitMessage(message, delimiter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimiter - массив строк.

// function splitMessage(message, delimiter) {
//   let words;
//   words = message.split(delimiter);
//   return console.log(words);
// }

// splitMessage('Mango hurries to the train', ' ');
// splitMessage('best_for_week', '_');

// TASK 11

// ЗАДАЧА: ГРАВИРОВКА УКРАШЕНИЙ

// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.

// Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).

// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

// function calculateEngravingPrice(message, pricePerWord) {
//   const numbersWords = message.split(' ').length;
//   const totalPrice = numbersWords * pricePerWord;
//   return console.log(totalPrice);
// }

// calculateEngravingPrice('JavaScript is in my blood', 10);
// calculateEngravingPrice('Web-development is creative work', 40);

// TASK 12

// Дополни код функции makeStringFromArray(array, delimiter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimiter - строку.

// function makeStringFromArray(array, delimiter) {
//   let string;
//   string = array.join(delimiter);
//   return console.log(string);
// }

// makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' ');
// makeStringFromArray(['top', 'picks', 'for', 'you'], '_');

// TASK 13

// ЗАДАЧА: ГЕНЕРАТОР SLUG

// Термин slug - это человеко-понятный уникальный идентификатор, который используется в веб-разработке для создания читабельных URL-адресов.

// Например, вместо того чтобы пользователь увидел в адресной строке mysite.com/posts/1q8fh74tx, можно сделать slug из названия статьи. В результате адрес получится более приятным для восприятия: mysite.com/posts/arrays-for-begginers.

// Slug это всегда строка в нижнем регистре, слова которой разделены тире.

// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.

// Значением параметра title будут строки, слова которых разделены только пробелами
// Все символы slug должны быть в нижнем регистре
// Все слова slug должна быть разделены тире

// function slugify(title) {
//   let slug;
//   slug = title.toLowerCase().split(' ').join('-');
//   return console.log(slug);
// }

// slugify('Arrays for begginers');
// slugify('How to become a JUNIOR developer in TWO WEEKS');

// TASK 14

// Метод slice(begin, end)

// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.

// firstTwoEls - массив из первых двух элементов
// nonExtremeEls - массив из всех элементов кроме первого и последнего
// lastThreeEls - массив из трёх последних элементов

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);

// TASK 15

// Метод concat();

// Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);

// TASK 16

// ЗАДАЧА: КОМПОЗИЦИЯ МАССИВОВ

// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов. В противном случае функция должна вернуть новый массив целиком.

// function makeArray(firstArray, secondArray, maxLength) {
//   let result = firstArray.concat(secondArray);
//   let resultLength = result.length;

//   if (resultLength > maxLength) {
//     result = result.slice(0, maxLength);
//   }

//   return console.log(result);
// }

// makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3);
// makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 4);

// TASK 17

// цикл for

// Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log(i);
// }

// TASK 18

// ЗАДАЧА: СУММА ЧИСЕЛ (ЦИКЛ FOR)

// Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

// function calculateTotal(number) {
//   let sum = 0;

//   for (let i = 1; i <= number; i += 1) {
//     sum += i;
//   }

//   return console.log(sum);
// }

// calculateTotal(18);
// calculateTotal(7);

// TASK 19

// Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

// Complete the code of the for loop so that it sequentially logs all the elements of the fruits array.

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// TASK 20

// ЗАДАЧА: ПОДСЧЁТ СУММЫ ПОКУПКИ
// TASK: PURCHASE COST CALCULATION

// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.
// Write a function calculateTotalPrice(order), that takes one order parameter, an array of numbers, and calculates the total of its elements. The total sum of the elements must be stored in the total variable, which is returned as a result of the function.

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

//   return console.log(total);
// }

// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([412, 371, 94, 63, 176]);

// TASK 21

// ЗАДАЧА: ПОИСК САМОГО ДЛИННОГО СЛОВА
// TASK: FIND THE LONGEST WORD

// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.
// Write a function called findLongestWord that takes a string consisting of words separated by spaces as a parameter (string). The function should find and return the longest word in the string.

// function findLongestWord(string) {
//   let longestWord = '';
//   const words = string.split(' ');

//   for (let i = 0; i < words.length - 1; i += 1) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }
//   return console.log(longestWord);
// }

// findLongestWord('The quick brown fox jumped over the lazy dog');
// findLongestWord('May the force be with you');

// TASK 22

// push() method

// Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.
// Modify the code of the createArrayOfNumbers(min, max) function so that it returns an array of all integers from the value min to max.

// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }

//   return console.log(numbers);
// }

// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);

// TASK 23

// ЗАДАЧА: ФИЛЬТРАЦИЯ МАССИВА ЧИСЕЛ
// TASK: FILTERING AN ARRAY OF NUMBERS

// Напиши функцию filterArray(numbers, value), которая принимает массив чисел(параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value(число).
// Write a function called filterArray(numbers, value) that takes an array of numbers(numbers) and a value(value) as parameters.Inside the function, create an empty array called newArray.Use a for loop to iterate over each element in the numbers array.Inside the loop, add an if statement to check if the current element is greater than the value.If it is, use the push method to add the element to the newArray.Finally, return the newArray as the result.

// function filterArray(numbers, value) {
//   const rezNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       rezNumbers.push(numbers[i]);
//     }
//   }
//   return console.log(rezNumbers);
// }

// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([12, 24, 8, 41, 76], 38);

// TASK 24

// Метод includes(value)

// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.
// Дополни код функции так, что если:
// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.
// The checkFruit(fruit) function takes a string with the name of the fruit (the fruit parameter), and checks if there is such a fruit in the fruits array.
// Complete the function's code so that if:
// the fruit is in the array, then the function returns true;
// there is no fruit in the array, then the function returns false.

// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];

//   return fruits.includes(fruit);
// }

// checkFruit('plum');
// checkFruit('mandarin');

// TASK 25

// ЗАДАЧА: ОБЩИЕ ЭЛЕМЕНТЫ
// TASK: COMMON ELEMENTS

// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.

// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

// Write a function called getCommonElements(array1, array2) that accepts two arrays (array1 and array2 ) of any length as parameters. Inside the function, create an empty array called newArray. Use a for loop to iterate over each element in array1. Inside the loop, check if the current element exists in array2 using the includes method. If it does, add the element to the newArray using the push method. Finally, return the newArray as the result.

// function getCommonElements(array1, array2) {
//   const rezArray = [];

//   for (const arr of array1) {
//     if (array2.includes(arr)) {
//       rezArray.push(arr);
//     }
//   }

//   return console.log(rezArray);
// }

// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);

// TASK 26

// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

// Refactor the code for the calculateTotalPrice(order) function by replacing the for loop with for...of.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   // for (let i = 0; i < order.length; i += 1) {
//   //   total += order[i];
//   // }

//   for (const ord of order) {
//     total += ord;
//   }

//   // Change code above this line
//   return console.log(total);
// }

// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);

// TASK 27

// ЗАДАЧА: ФИЛЬТРАЦИЯ МАССИВА ЧИСЕЛ 2.0
// TASK: FILTERING AN ARRAY OF NUMBERS 2.0

// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

// Refactor the filterArray(numbers, value) function by replacing the for loop with for...of.

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   const number = numbers[i];

//   //   if (number > value) {
//   //     filteredNumbers.push(number);
//   //   }
//   // }

//   for (const num of numbers) {
//     if (num > value) {
//       filteredNumbers.push(num);
//     }
//   }

//   return console.log(filteredNumbers);
//   // Change code above this line
// }

// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([12, 24, 8, 41, 76], 38);

// TASK 28

// Дополни выражения остатка от деления так, чтобы код проходил тесты.

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 3;

// TASK 29

// ЗАДАЧА: ЧЁТНЫЕ ЧИСЛА
// TASK: EVEN NUMBERS

// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).

// Write a function getEvenNumbers(start, end) that returns an array of all even numbers from start to end. An even number is a number that is divisible by 2 without a remainder (10 % 2 === 0).Use for loop.

// function getEvenNumbers(start, end) {
//   // Change code below this line

//   const evenNumbers = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }
//   return console.log(evenNumbers);

//   // Change code above this line
// }

// getEvenNumbers(3, 11);
// getEvenNumbers(6, 12);

// TASK 30

// Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.

// Complete the code so that the first number in the range from start to end which is divisible by 5 without a remainder is written into the variable number.

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// TASK 31

// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:

// возвращала первое число от start до end, которое делится на divisor без остатка
// не использовала оператор break
// не использовала переменную number

// Refactor the findNumber(start, end, divisor) function so that it:

// returns the first number from in the range start to end, which is divisible by divisor without a remainder
// does not use the break operator
// does not use the variable number

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return console.log(number);
//     }
//   }

//   // Change code above this line
// }

// findNumber(2, 6, 5);
// findNumber(16, 35, 7);

// TASK 32

// ЗАДАЧА: ФУНКЦИЯ INCLUDES()
// TASK: INCLUDES() FUNCTION

// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

// function includes(array, value) {
//   // Change code below this line
//   let rez = false;

//   for (const arr of array) {
//     if (arr === value) {
//       rez = true;
//       return rez;
//     }
//   }

//   return rez;
//   // Change code above this line
// }

// includes([1, 2, 3, 4, 5], 3);
// includes([1, 2, 3, 4, 5], 17);
