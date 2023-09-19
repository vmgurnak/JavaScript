// Module 9 - Lesson 18 - Promises

// Промисы	Promises

// Promise (обещание, промис) - объект представляющий текущее состояние асинхронной операции. Это обёртка для значения, неизвестного на момент создания промиса. Позволяет обрабатывать результаты асинхронных операций так, как если бы они были синхронными: вместо конечного результата асинхронной операции возвращается своего рода обещание получить результат в будущем.

// Промис может находиться в трёх состояниях:
// Ожидание (pending) - начальное состояние при создании промиса.
// Исполнено (fulfilled) - операция исполнена успешно, с каким-то результатом.
// Отклонено (rejected) - операция отклонена с ошибкой.

// Создание	Creation

// Промис создается как экземпляр класса Promise, который принимает функцию (executor) в качестве аргумента и сразу вызывает её, ещё до создания и возврата промиса.

// Функция executor
//  - оповещает экземпляр (промис), когда и как операция, с которой он связан, будет завершена.
//  - В ней можно выполнять любую асинхронную операцию, по завершении которой нужно вызвать resolve() при успешном выполнении (состояние fulfilled), или reject() при ошибке (состояние rejected).
//  - Значение возвращаемое этой функции игнорируется.

// const promise = new Promise((resolve, reject) => {
//   // Asynchronous operation
// });

// Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }, 2000);
// });

// console.log(promise);

// Метод then()	then() method

// Метод then() принимает два аргумента - callback-функции которые будут вызваны когда промис изменит своё состояние. Результат промиса, значение или ошибку, они получат как аргументы.

// promise.then(onResolve, onReject);

// В примере, callback-функция onResolve будет вызвана через две секунды если обещание выполнится успешно, а onReject вызовется через две секунды в том случае, если обещание выполнится с ошибкой.

// Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }, 2000);
// });

// // Will run first
// console.log('Before promise.then()');

// // Registering promise callbacks
// promise.then(
//   // onResolve will run third or not at all
//   (value) => {
//     console.log('onResolve call inside promise.then()');
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   // onReject will run third or not at all
//   (error) => {
//     console.log('onReject call inside promise.then()');
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );

// Will run second
// console.log('After promise.then()');

// Метод catch()

// Коллбек-функция будет вызвана при выполнении промиса с ошибкой, и получит её как аргумент.

// promise.catch((error) => {
//   // Promise rejected
// });

// Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }, 2000);
// });

// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//   Метод finally()	finally() method

// Этот метод может быть полезен если необходимо выполнить код после того, как обещание будет разрешено (fulfilled или rejected), независимо от результата. Позволяет избежать дублирования кода в обработчиках then() и catch().
// Коллбэк-функция не получит никаких аргументов, поскольку нельзя определить выполнено ли обещание или отклонено. Тут будет выполняться код, который необходимо запустить в любом случае.

// Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }, 2000);
// });

// promise
//   .then((value) => console.log(value)) // "Success! Value passed to resolve function"
//   .catch((error) => console.log(error)) // "Error! Error passed to reject function"
//   .finally(() => console.log('Promise settled')); // "Promise settled"

// Цепочки промисов	Promises chaining

// Метод then() результатом своего выполнения возвращает еще один промис, значением которого будет то, что вернет его callback-функция onResolve. Это позволяет строить асинхронные цепочки из промисов.

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// promise
//   .then((value) => {
//     console.log(value); // 5
//     return value * 2;
//   })
//   .then((value) => {
//     console.log(value); // 10
//     return value * 3;
//   })
//   .then((value) => {
//     console.log(value); // 30
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('Final task');
//   });

//   Промисификация функций	Promisification of functions

// Промисификация - это преобразование функции с колбеками так, чтобы она не принимала коллбэки, а возвращала промис.

// const fetchUserFromServer = (username, onSuccess, onError) => {
//   console.log(`Fetching data for ${username}`);

//   setTimeout(() => {
//     // Change value of isSuccess variable to simulate request status
//     const isSuccess = true;

//     if (isSuccess) {
//       onSuccess('success value');
//     } else {
//       onError('error');
//     }
//   }, 2000);
// };

// const onFetchSuccess = (user) => {
//   console.log(user);
// };

// const onFetchError = (error) => {
//   console.error(error);
// };

// fetchUserFromServer('Mango', onFetchSuccess, onFetchError);

// Промисификация;

// const fetchUserFromServer = (username) => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for ${username}`);

//     setTimeout(() => {
//       // Change value of isSuccess variable to simulate request status
//       const isSuccess = true;

//       if (isSuccess) {
//         resolve('success value');
//       } else {
//         reject('error');
//       }
//     }, 2000);
//   });
// };

// fetchUserFromServer('Mango')
//   .then((user) => console.log(user))
//   .catch((error) => console.error(error));

// Методы класса Promise	Promise Class Methods

// Есть задачи, в которых необходимо работать с целым набором промисов. В одном случае необходимо дождаться выполнения всех сразу, и только потом обрабатывать их результат, а в другом достаточно дождаться выполнения любого, проигнорировав остальные и т. п.

// Promise.all()	Promise.all()

// Принимает массив промисов, ждет их исполнения и возвращает промис. Если все промисы выполнятся успешно, возвращаемый промис перейдет в состояние fulfilled, а его значением будет массив результатов исполнения каждого промиса. В случае когда хотя бы один из промисов будет отклонён, то возвращаемый промис перейдет в состояние rejected, а его значением будет ошибка.

// Promise.all([promise1, promise2, promise3, ...])

// Напишем функцию которая принимает текст для resolve() и задержку в миллисекундах, а результатом своего выполнения возвращает промис. Затем создадим два промиса с разным временем задержки.

// Коллбэк метода then() будет вызван спустя три секунды, то есть когда выполнится промис promiseB. Промис promiseA выполнится через одну секунду и просто будет ожидать. Если какой либо из промисов будет отклонён, то будет вызван коллбэк метода catch().

// const makePromise = (text, delay) => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(text), delay);
//   });
// };

// const promiseA = makePromise('promiseA value', 1000);
// const promiseB = makePromise('promiseB value', 3000);

// Promise.all([promiseA, promiseB])
//   .then((value) => console.log(value)) //["promiseA value", "promiseB value"]
//   .catch((error) => console.log(error));

// Promise.race();

// Возвращает выполненный или отклонённый промис, в зависимости от того, с каким результатом завершится самый «быстрый» из переданных промисов, со значением или причиной его отклонения.

// Promise.race([promise1, promise2, promise3, ...])

// const makePromise = (text, delay) => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(text), delay);
//   });
// };

// const promiseA = makePromise('promiseA value', 1000);
// const promiseB = makePromise('promiseB value', 3000);

// Promise.race([promiseA, promiseB])
//   .then((value) => console.log(value)) // "promiseA value"
//   .catch((error) => console.log(error));

// Promise.resolve() и Promise.reject()

// Статические методы для создания мгновенно выполняющихся успешно или отклонённых промисов. Работают аналогично new Promise() за исключением возможности указать задержку, но имеют более краткий синтаксис.

// // Fulfilled promise
// new Promise((resolve) => resolve('success value')).then((value) =>
//   console.log(value)
// );

// Promise.resolve('success value').then((value) => console.log(value));

// // Rejected promise
// new Promise((resolve, reject) => reject('error')).catch((error) =>
//   console.error(error)
// );

// Promise.reject('error').catch((error) => console.error(error));

// Эти методы используются при промисификации функций, когда необходимо построить цепочку промисов и начальное значение уже есть. Выполним рефакторинг следующего кода.

// const makeGreeting = (guestName) => {
//   if (guestName === '' || guestName === undefined) {
//     return {
//       success: false,
//       message: 'Guest name must not be empty',
//     };
//   }

//   return {
//     success: true,
//     message: `Welcome ${guestName}`,
//   };
// };

// const result = makeGreeting('Mango');

// if (result.success) {
//   console.log(result.message);
// } else {
//   console.error(result.message);
// }

// При использовании колбеков отпадает необходимость возвращать сложные объекты со статусом операции и проверять его во внешнем коде.

// const makeGreeting = (guestName, onSuccess, onError) => {
//   if (guestName === '' || guestName === undefined) {
//     return onError('Guest name must not be empty');
//   }
//   onSuccess(`Welcome ${guestName}`);
// };

// makeGreeting(
//   'Mango',
//   (greeting) => console.log(greeting),
//   (error) => console.error(error)
// );

// Последним шагом будет промисификация функции makeGreeting(), для того чтобы полностью убрать её зависимость от внешнего кода.

const makeGreeting = (guestName) => {
  if (guestName === '' || guestName === undefined) {
    return Promise.reject('Guest name must not be empty');
  }

  return Promise.resolve(`Welcome ${guestName}`);
};

makeGreeting('Mango')
  .then((greeting) => console.log(greeting))
  .catch((error) => console.error(error));
