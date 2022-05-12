"use strict";

// Задача 1
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//        ...
//       return confirm('Родители разрешили?');
//     }
//   }
// ВОПРОС 1: ОБЯЗАТЕЛЕН ЛИ ELSE?
//ОТВЕТ: else обязателен т.к. если age > 18 ложно, то мы переходим к выполнению блока else и если мы хотим вывести confirm



// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   ...
//   return confirm('Родители разрешили?');
// }
// ВОПРОС 2: Будет ли эта функция работать как-то иначе, если убрать else??
//ОТВЕТ: если убрать else, функция остановится на вызове return true

// Задача 2
// let age = prompt('Введите свой возраст?', '');
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }
//   checkAge(age);

// let age = prompt('Введите свой возраст?', '');

// function checkAge(age) {
// checkAge = (age > 18) ? true : confirm('Родители разрешили?');
// }
// checkAge(age);

// function checkAge(age) {
// checkAge = (age > 18) || confirm('Родители разрешили?');
// }
// checkAge(age);

// Задача 3

// function returnLesserOfTheNumbers (a,b) {
//     if (a < b) {
//         alert(a);
//     } else {
//         alert(b);
//     }
// }
// returnLesserOfTheNumbers(-3,0);

// Задача 4

// function pow() {
//     let x = prompt('Введите число x','');
//     let n = prompt('Введите число n', '');
//     alert(x**n);
// }

// pow();