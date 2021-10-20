"use strict"

// Задача 1

// alert( null || 2 || undefined ); выведет 2

// Задача 2

// alert( alert(1) || 2 || alert(3) ); // выведет 1, затем 2

// Задача 3

// alert( 1 && null && 2 ); // выведет null

// Задача 4

// alert( alert(1) && alert(2) ); // выведет 1 и 2
// Непонятно почему выведет 1 а затем undefined

// Задача 5

// alert( null || 2 && 3 || 4 ); // выведет 3

// Задача 6

// let age = 14;
// if (age >= 14 && age <= 90) {
//     alert(age);
// }

// Задача 7

// let age = 88;
// if (!(age >=14 && age <=90)) {
//     alert(age);
// }

// if (age < 14 || age > 90) {
//     alert(age);
// }

// Задача 8

// if (-1 || 0) alert( 'first' ); // выполнится, -1 это число, а значит true
// if (-1 && 0) alert( 'second' ); // не выполнится, т.к. && ищет первое ложное значение (0)
// if (null || -1 && 1) alert( 'third' ); // последнее значение будет 1, алерт выполнится

// Задача 9

// const login = prompt ('Введите ваш логин','');
//     if (login === 'Админ') {
//         const password = prompt ('Пароль','')

//             if (password === 'Я Главный') {
//                 alert('Здравствуйте!');
//             } else if (password === '' || password === null) {
//                 alert('Отменено');
//             } else {
//                 alert('Неверный пароль');
//             }

//     } else if (login === '' || login === null) {
//         alert('Отменено');

//     } else {
//         alert('Я вас не знаю');
//     };