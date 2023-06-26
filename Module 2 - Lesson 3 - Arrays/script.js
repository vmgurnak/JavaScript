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
// удаление
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

const arrA = [3, 'Hello', null, 42, false];

for (let i = arrA.length - 1; i >= 0; i -= 1) {
  console.log(arrA[i]);
  if (typeof arrA[i] !== 'number') {
    arrA.splice(i, 1);
  }
}
console.log(arrA);

// Та же задача другой массив
// const arrB = ['world', true, 22, 41, undefined];
