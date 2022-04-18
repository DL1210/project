"use strict"


// Задача 1

// мое решение
// let a = document.body.firstElementChild.getAttribute('data-widget-name');

// из учебника (понятное и более правильное)

// let elem = document.querySelector('[data-widget-name]');

// читаем значение
// alert(elem.dataset.widgetName);



// Задача 2


// let a = document.querySelectorAll('a[href]');


// a.forEach(element => {
//     if () {

//     }
// });

// for (let i = 0; i < a.length; i++) {
//     if (a[i].matches('a[href="zip"]')) {

//     }
// }



// let a = document.getElementsByTagName('a');

// for (let i = 0; i < a.length; i++) {
//     if (a[i].matches('a[href="ftp://ftp.com/my.zip"]')) {
//         a[i].style.color = 'red';
//     }
// }