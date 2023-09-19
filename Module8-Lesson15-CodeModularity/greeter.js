// Модульность кода	Code Modularity

// Конструкция import и export

// const helloMessage = 'hello!';
// const goodbyeMessage = 'goodbye!';

// export const hello = () => helloMessage;
// export const goodbye = () => goodbyeMessage;

// Первый способ - это использовать ключевое слово export перед всеми сущностями, которые необходимо экспортировать.

// const sqrt = Math.sqrt;

// export const square = (x) => x * x;
// export const diag = (x, y) => sqrt(square(x) + square(y));

// Второй способ - это явно указать объект со свойствами для экспорта.

// const sqrt = Math.sqrt;
// const square = (x) => x * x;
// const diag = (x, y) => sqrt(square(x) + square(y));

// export { square, diag };

// Default export

// Часто модуль экспортирует всего одну сущность, такой экспорт удобен для импорта. Экспорт по умолчанию - самое главное экспортируемое значение, которое может быть чем угодно: переменной, функцией, классом и т. д.

export default function myFunc() {
  console.log('Hello');
}
