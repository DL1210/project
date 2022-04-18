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

// Задача 5. У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.
// Сделайте набор «готовых к употреблению» фильтров:
// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.

let arr = [106, 226, 3, 45, 5665, 64, 709];

// function inBetween (a, b) {
//   if (arr[a]) {
//     a = arr.indexOf(a);
//     console.log(a);
//   }
//   if (arr[b]) {
//     b = arr.indexOf(b);
//     console.log(b);
//   }

// }

function inBetween(a, b) {
  let newArr = [];
  for (let i = arr.indexOf(a); i <= arr.indexOf(b); i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

// let a = arr.filter(inBetween(226, 64));
// console.log(a);

// function inBetween(a, b) {
//   a = arr.indexOf(a);
//   b = arr.indexOf(b, a);
//   let num = [];
//   num.push()
// }

// Задача 6  Сортировать по полю


let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];
// const field = 'name';

// users.sort();

const byField = (field) => {
  return (a, b) => a[field] > b[field] ? 1 : -1
};

users.sort(byField('name'));

console.log(users);

// Задача 7 Армия функций

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function() { // функция shooter
      alert( i ); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

// army[0]();
// army[5]();
