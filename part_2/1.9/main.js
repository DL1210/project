"use strict";

// Задача 1 Найти размер прокрутки снизу

// let div = document.querySelector("div");

// let res = div.scrollHeight - div.clientHeight - div.scrollTop;



// Задача 2 Найти ширину стандартной полосы прокрутки

// let div = document.querySelector("div");

// const scrollBar = div.offsetWidth - div.clientLeft * 2 - div.clientWidth;
// если элемент без рамок и отступов то просто div.offsetWidth - div.clientWidth;


// Задача 3 Поместить мяч в центр поля

// let midWidth = field.clientWidth/2 - ball.clientWidth/2;

// ball.style.marginLeft = midWidth + "px";

// let midHeight = field.clientHeight/2 - ball.clientHeight/2;

// ball.style.marginTop = midHeight + "px";



// Задача 4  В чём отличие CSS-свойств width и clientWidth


// 1. Если Width = auto, то мы не получим конкретный размер через CSS (getComputedStyle), а clientWidth выдаст конкретное значение в цифрах
// 2. CSS (getComputedStyle) если есть полоса прокрутки, выдаст ширину элемента вместе с ней, а clientWidth выдаст только ширину элемента
// 3. в зависимости от браузера CSS (getComputedStyle) может выдавать разные значения

// 4. CSS (getComputedStyle) возвращает строку, а clientWidth число