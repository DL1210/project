"use strict";

// вопрос по задаче из теории учебника ниже: когда мы вызываем call что ВО что мы оборачиваем? функцию в юзера и админа, или наоборот: оборачиваем юзера админа в функцию? это получается "прокидывание"?

// function sayHi() {
//     alert(this.name);
//   }

//   let user = { name: "John" };
//   let admin = { name: "Admin" };

// используем 'call' для передачи различных объектов в качестве 'this'
//   sayHi.call( user ); // John
//   sayHi.call( admin ); // Admin

// -------------------------------------------------------------------------
// Задача 1 Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.
// Каждый вызов должен сохраняться как массив аргументов.

function work(a, b) {
  alert(a + b); // произвольная функция или метод
}

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.add(args.toString());
    return func(...args);
  }

  wrapper.calls = new Set();

  return wrapper;
}

// work = spy(work);

// work(1, 2);

// console.log(work.calls);

// -------------------------------------------------------------------------
// Задача 2 Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд.

// function f(x) {
//     alert(x);
//   }

// создаём обёртки
//   let f1000 = delay(f, 1000);
//   let f1500 = delay(f, 1500);

//   f1000("test"); // показывает "test" после 1000 мс
//   f1500("test"); // показывает "test" после 1500 мс

//   Другими словами, delay(f, ms) возвращает вариант f с «задержкой на ms мс».
// В приведённом выше коде f – функция с одним аргументом, но ваше решение должно передавать все аргументы и контекст this.

function f(x) {
  alert(x);
}
function delay(func, ms) {
  return function () {
    return setTimeout(func, ms);
  };
}

let f1000 = delay(f, 1000);

f1000("test");

//  Неправильное решение №1

// function delay(func, ms) {
//   return function () {
//     let result = func(x);
//     setTimeout(result, ms);
//   };
// }

//  Неправильное решение №2

// function delay(f, ms) {
//   let output = setTimeout(f.apply(this, x), ms);
//   return output;
// }

// let res = delay(f(2), 1000);
