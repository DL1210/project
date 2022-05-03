"use strict"


// Задача 1 Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.

Function.prototype.defer = function (ms) {
    return setTimeout(this, ms);
}


// Задача 2 Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.




Function.prototype.defer = function (ms, ...args) {
    return function (...args) {
        return setTimeout(this, ms);
    }
}













// Неправильное решение №1 ----------------------------------------------

// Function.prototype.defer = function (ms) {
//     return setTimeout(this, ms);
// }

// function deferDecorator (func) {
//     return function () {
//         let res = func();
//         return res;
//     }
// }

// Function.prototype.defer = deferDecorator (Function.prototype.defer);


