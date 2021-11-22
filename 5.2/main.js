"use strict"

//Задача 1 Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

// let a = parseFloat(prompt("введите число"));
// let b = parseFloat(prompt("введите число"));
// let result = a + b;
// console.log(result);


// Задача 2 правильно округлить 6.35

// console.log(Math.round(6.35 * 10)/10);


// Задача 3 Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
// Функция должна возвращать числовое значение.
// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

// let i;
// function readNumber () {
//     do {
//         i = prompt("введите число");
//         if (!isNaN(i) && i !== "") {
//             alert(`Число: ${i}`)
//             break;
//         } else {
//             continue;
//         }
//     } while (i !==null && i !=="");
// }
// readNumber();



//Задача 4 Этот цикл – бесконечный. Он никогда не завершится, почему?
// let i = 0;
// while (i != 10) {
//   i += 0.2;
// }
// будет бесконечный цикл из за проблемы в неточности дробных чисел


//Задача 5

function random(min, max) {
    return Math.random() * (max - min) + min;
  }
//   console.log(random(3,5));

// Задача 6

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
   console.log(getRandomIntInclusive(2, 9)); // подсмотрел решение в документации мозилы

















