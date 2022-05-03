"use strict";

// Задача 1 Независимы ли счётчики?

// function makeCounter() {
//     let count = 0;

//     return function() {
//       return count++;
//     };
//   }

//   let counter = makeCounter();
//   let counter2 = makeCounter();

//   alert( counter() ); // 0
//   alert( counter() ); // 1

//   alert( counter2() ); // ?
//   alert( counter2() ); // ?

//   да, счетчики независимы, counter2 покажет, 0, 1

// Задача 2 Объект счётчика. Здесь объект счётчика создан с помощью функции-конструктора. Будет ли он работать? Что покажет?

// function Counter() {
//     let count = 0;

//     this.up = function() {
//       return ++count;
//     };
//     this.down = function() {
//       return --count;
//     };
//   }

//   let counter = new Counter();

//   alert( counter.up() ); // ?
//   alert( counter.up() ); // ?
//   alert( counter.down() ); // ?

// покажет 1,2,1

// Задача 3 Функция в if. Посмотрите на код. Какой будет результат у вызова на последней строке?

// let phrase = "Hello";

// if (true) {
//   let user = "John";

//   function sayHi() {
//     alert(`${phrase}, ${user}`);
//   }
// }

// sayHi(); результатом будет ошибка потому что находится внутри блока, а вызов идет из глобального окружения

// Задача 4 Сумма с помощью замыканий. Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

function sum(a) {
  return function (b) {
    return a + b;
  };
}

// alert( sum(1)(2) );
// -------------------------------------------------------------------------

// Задача 5. У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.
// Сделайте набор «готовых к употреблению» фильтров:
// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.

// let arr = [1, 2, 3, 4, 5, 6, 7];

// function inBetween(a, b) {
//   return (item) => item >= a && item <= b;
// }

// let a = arr.filter(inBetween(3, 6));
// console.log(a);

// function inArray (a, b, ...rest) {
//   return (item) => item == a || item == b || item == rest;
// }

// let b = arr.filter(inArray(1, 2, 10));
// console.log(b);

// -------------------------------------------------------------------------
// Задача 6  Сортировать по полю

// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Aronson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
// ];

// const byField = (field) => {
//   return (a, b) => a[field] > b[field] ? 1 : -1
// };

// users.sort(byField('name'));

// console.log(users);

// -------------------------------------------------------------------------

// Задача 7 Армия функций

function makeArmy() {
  let shooters = [];

  for(let i = 0; i < 10; i++) {
    let shooter = function() { // функция shooter

      alert( i ); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    ;
  }

  return shooters;
}

let army = makeArmy();

army[0]();
army[5]();


