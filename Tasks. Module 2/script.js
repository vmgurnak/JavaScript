// Tasks. Module 2

// Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

// function getExtremeElements(array) {
//   const result = array.splice(1, array.length - 2);

//   return console.log(array);
// }

// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(["apple", "peach", "pear", "banana"]);
// getExtremeElements(["Earth", "Mars", "Venus"]);

// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.

// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.
// функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).

// function calculateEngravingPrice(message, pricePerWord) {
//   const numbersWords = message.split(" ").length;
//   const totalPrice = numbersWords * pricePerWord;

//   const total = `В гравировке "${message}" - ${numbersWords} слов.
//    Цена гравировки одного слова - ${pricePerWord}.
//    Общая стоимость гравировки - ${totalPrice}`;

//   return console.log(total);
// }

// calculateEngravingPrice("JavaScript is in my blood", 10);
// calculateEngravingPrice("JavaScript is in my blood", 20);
// calculateEngravingPrice("Web-development is creative work", 40);
// calculateEngravingPrice("Web-development is creative work", 20);

// ЗАДАЧА: ГЕНЕРАТОР SLUG
// Термин slug - это человеко-понятный уникальный идентификатор, который используется в веб-разработке для создания читабельных URL-адресов.
// Например, вместо того чтобы пользователь увидел в адресной строке mysite.com/posts/1q8fh74tx, можно сделать slug из названия статьи. В результате адрес получится более приятным для восприятия: mysite.com/posts/arrays-for-begginers.
// Slug это всегда строка в нижнем регистре, слова которой разделены тир

// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.

// Значением параметра title будут строки, слова которых разделены только пробелами
// Все символы slug должны быть в нижнем регистре
// Все слова slug должна быть разделены тире

// function slugify(title) {
//   let slug;
//   slug = title.toLowerCase().split(" ").join("-");
//   return console.log(slug);
// }

// slugify("Arrays for begginers");
// // "arrays-for-begginers"
// slugify("English for developer");
// // "english-for-developer";
// slugify("How to become a JUNIOR developer in TWO WEEKS");
// //"how-to-become-a-junior-developer-in-two-weeks";

// Метод slice
// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);

// console.log(fruits);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// ЗАДАЧА: КОМПОЗИЦИЯ МАССИВОВ

// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов.В противном случае функция должна вернуть новый массив целиком.

// function makeArray(firstArray, secondArray, maxLength) {
//   let result = firstArray.concat(secondArray);
//   console.log(result);
//   let resultLength = result.length;

//   if (resultLength > maxLength) {
//     result = result.slice(0, maxLength);
//   }

//   console.log(result);
//   console.log(maxLength);
//   console.log(resultLength);
// }

// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// // ["Mango", "Poly", "Ajax"]
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
// // ["Earth", "Jupiter", "Neptune", "Uranus"];
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
// // ["Mango", "Poly", "Houston", "Ajax"];

// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);
// // [];

// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
// // ["Mango", "Ajax", "Chelsea"];

// ЗАДАЧА: СУММА ЧИСЕЛ (ЦИКЛ FOR)
// Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

// function calculateTotal(number) {
//   let sum = 0;

//   for (let i = 1; i <= number; i += 1) {
//     sum += i;
//   }

//   console.log(sum);
// }

// calculateTotal(18);
// // 171;
// calculateTotal(24);
// // 300;

// ЗАДАЧА: ПОДСЧЁТ СУММЫ ПОКУПКИ

// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов.Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

//   console.log(total);
// }

// calculateTotalPrice([12, 85, 37, 4]);
// // 138;
// calculateTotalPrice([412, 371, 94, 63, 176]);
// // 1116;

// ЗАДАЧА: ПОИСК САМОГО ДЛИННОГО СЛОВА

// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// function findLongestWord(string) {
//   let longestWord = "";
//   const words = string.split(" ");

//   for (let i = 0; i < words.length; i += 1) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }
//   return console.log(longestWord);
// }

// findLongestWord("The quick brown fox jumped over the lazy dog");
// // jumped;
// findLongestWord("Google do a roll");
// // Google;
// findLongestWord("May the force be with you");
// // force;

// Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.

// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }

//   return console.log(numbers);
// }

// createArrayOfNumbers(14, 17);
// // [14, 15, 16, 17];
// createArrayOfNumbers(29, 34);
// // [29, 30, 31, 32, 33, 34];

// ЗАДАЧА: ФИЛЬТРАЦИЯ МАССИВА ЧИСЕЛ

// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).

// function filterArray(numbers, value) {
//   const rezNumbers = [];

//   // 1-й вариант цикл for
//    for (let i = 0; i < numbers.length; i += 1) {
//      if (numbers[i] > value) {
//  console.log(rezNumbers.push(numbers[i]));
//      }
//    }
//     console.log(rezNumbers);

//      // 2-1 вариант цикл for of
//     for (const number of numbers) {
//       //  console.log(number);
//       if (number > value) {
//         rezNumbers.push(number);
//       }
//     }

// //   Вместо if тернарный оператор
//   number > value ? rezNumbers.push(number) : rezNumbers;

//     console.log(rezNumbers);
// }

// filterArray([1, 2, 3, 4, 5], 3);
// // возвращает[4, 5]
// filterArray([12, 24, 8, 41, 76], 20);
// // возвращает[24, 41, 76]

// ЗАДАЧА: ОБЩИЕ ЭЛЕМЕНТЫ
// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

// function getCommonElements(array1, array2) {
//   const rezArray = [];

//   for (const arr of array1) {
//     if (array2.includes(arr)) {
//       rezArray.push(arr);
//     }
//   }

//   return console.log(rezArray);
// }

// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// // возвращает [1, 2]
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// // возвращает[12, 27, 3]

// ЗАДАЧА: ЧЁТНЫЕ ЧИСЛА

// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).

// function getEvenNumbers(start, end) {
//   const evenNumbers = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }
//   return console.log(evenNumbers);
// }

// getEvenNumbers(3, 11);
// // возвращает[4, 6, 8, 10]
// getEvenNumbers(6, 12);
// // // возвращает[6, 8, 10, 12]

// ЗАДАЧА: ФУНКЦИЯ INCLUDES()
// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

// function includes(array, value) {
//   let rez = false;

//   for (const arr of array) {
//     //  console.log(arr);
//     if (arr === value) {
//       rez = true;
//       return console.log(rez);
//     }
//   }

//   return console.log(rez);
// }

// includes([1, 2, 3, 4, 5], 3);
// // // возвращает true
// includes([1, 2, 3, 4, 5], 17);
// // возвращает false
