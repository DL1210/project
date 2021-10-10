"use strict";

// Задача 1
if ("0") {
  alert("Привет");
} // выведется, потому что 0 в данном случае строка, а не число

// Задача 2

let nameJavaScript = prompt('Какое "официальное" название JavaScript?', "");

if (nameJavaScript === "ECMAScript") {
  alert("Верно!");
} else {
  alert("Не знаете? ECMAScript!");
}

// Задача 3
let number = prompt ('Введите число', '');
if (number > 0) {
  alert(1);
} else if (number < 0) {
  alert(-1);
} else {
  alert(0);
}

// Задача 4

let a = 2;
let b = 1;
let result = (a + b < 4) ? 'Мало' : 'Много';
alert(result);

// Задача 5

let login = prompt('Ваш логин?', '');
let message = (login == 'Сотрудник' ) ? 'Привет' :
 (login == 'Директор') ? 'Здравствуйте' :
 '' ;
alert(message);