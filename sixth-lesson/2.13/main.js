"use strict"

// Задача 1

// let i = 3;

// while (i) {
//   alert( i-- );
// }  //выведет 3, 2, 1, т.к -- стоит справа от i, и алерт будет выводить старое значение перед понижением на единицу

// Задача 2

// let i = 0;
// while (++i < 5) alert( i ); // выведет 1, 2, 3, 4

// let i = 0;
// while (i++ < 5) alert( i ); // выведет 1, 2, 3, 4, 5

// Задача 3

// for (let i = 0; i < 5; i++) alert( i );
// for (let i = 0; i < 5; ++i) alert( i ); // в обоих случаях выведет от 0 до 4

// Задача 4

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 !==0) continue;
//     alert (i);
//     }

// Задача 5

// let i = 0;
// while (i < 3) {
// alert(`number ${i}!`);
// i++;
// }

// Задача 6

//  let num;

// do {
//     num = prompt("Введите число, большее 100?", 0);
//   } while (num <= 100 && num);

// Проверка && num вычисляется в false, когда num имеет значение null или пустая строка ''. В этом случае цикл while тоже нужно прекратить. ПОЯСНИТЬ!!!!!!!
// Кстати, сравнение num <= 100 при вводе null даст true, так что вторая проверка необходима.



// Задача 7 вывод простых чисел

// outer: for (let i = 2; i < 10; i++) {
//         for (let j = i-1; j > 1; j--) {
//             if (i % j == 0) continue outer;

//     };
//     console.log(i);
// };
