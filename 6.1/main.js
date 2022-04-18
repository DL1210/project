"use strict"

// Задача 1 Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n. Сделайте три варианта решения:
// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.

// Решение 1
// let n = 100;
// let result = null;
// for (let i = n; i > 0; i-- ) {
//     result += i;
// }
// console.log(result);


// Решение 2
function sumTo (n) {

    if (n == 1) {
        return n;
    } else {
        return n + sumTo(n-1);
    }
}
// console.log(sumTo(3));

// Решение 3
function sumTo(n) {
    return n * (n + 1) / 2;
  }

//   alert( sumTo(5) );
  // подсмотрел



// Задача 2 Вычислить факториал

function factorial(n) {
    if (n == 1) return n;
    return n * factorial(n-1);
}
// console.log(factorial(5));

// Задача 3 Число Фибоначчи

function fib(n) {

    if (n <= 1) {
      return n;
    } else {
      return fib(n-1) + fib(n-2);
    }
}

console.log(fib(20));

// Задача 4 Вывод односвязного списка

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

//   function printList(list) {
//     let tmp = list;

//     while (tmp) {
//       console.log(tmp.value);
//       tmp = tmp.next;
//     }

//   }
// подсмотрел -----------------------------------------


// function printList(list) {

//     if (list.next == null) {
//         return list.next;
//     } else {
//         return console.log(list.value), printList(list.next);
//     }

// }

// мое корявое решение выше -------------------------------



function printList(list) {

    alert(list.value); // выводим текущий элемент

    if (list.next) {
      printList(list.next); // делаем то же самое для остальной части списка
    }

  }


// printList(list);

// подсмотрел решение из учебника выше -------------------







// Задача 5 Вывод односвязного списка в обратном порядке


//   function printReverseList(list) {
//     let arr = [];
//     let tmp = list;

//     while (tmp) {
//       arr.push(tmp.value);
//       tmp = tmp.next;
//     }

//     for (let i = arr.length - 1; i >= 0; i--) {
//       alert( arr[i] );
//     }
//   }

//   printReverseList(list);

//   подсмотрел решение -------------------------------

function printReverseList(list) {

    if (list.next) {
      printReverseList(list.next);
    }

    console.log(list.value);
  }

  // printReverseList(list);

  //   подсмотрел решение -------------------------------