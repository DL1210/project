"use strict";

// Задача 1 Переведите текст вида border-left-width в borderLeftWidth

function camelize(str) {
  return str
    .split("-") // разбивает 'my-long-word' на массив ['my', 'long', 'word']
    .map(
      // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
      // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
      (word, index) =>
        index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(""); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}

// console.log(camelize("border-left-width"));
//   не решил сам

// Задача 2 Фильтрация по диапазону

// let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  let newArr = arr.filter((index) => index >= a && index <= b);
  return newArr;
}

// console.log(filterRange(arr, 1, 4));

// Задача 3 Фильтрация по диапазону "на месте"
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // удалить, если за пределами интервала
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

//   let arr = [5, 3, 8, 1, 7, 9, 101, 250];

//   filterRangeInPlace(arr, 10, 102); // удалены числа вне диапазона 1..4

//   console.log( arr ); // не решил сам

// Задача 4 Сортировать в порядке по убыванию

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// Задача 5 Скопировать и отсортировать массив

// let arr = ["HTML", "JavaScript", "CSS"];

// function copySorted (arr) {
//     let newArr = arr.concat();
//     newArr.sort();
//     return newArr;
// }

// let sorted = copySorted(arr);

// alert( sorted );
// alert( arr );
// -------------------------------------------------------------------------

// Задача 6 Создать расширяемый калькулятор

function Calculator () {

  this["+"] = function (x, y) {return x + y};
  this["-"] = function (x, y) {return x - y};


  this.calculate = function (str) {
    const arr = str.split(' ');

    const x = +arr[0];
    const y = +arr[2];
    const method = arr[1];

    return this[method](x, y);
  }

  this.addMethod = function (name, func) {
    this[name] = func;
  }

}





// -------------------------------------------------------------------------
// Задача 7 Трансформировать в массив имён

// let vasya = { name: "Вася", age: 25};
// let petya = { name: "Петя", age: 30};
// let masha = { name: "Маша", age: 28};

// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name);

// console.log(names);

// Задача 8 Трансформировать в объекты

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(user => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id
// }));

// console.log(usersMapped[0].id);

// Задача 9 Отсортировать пользователей по возрасту

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 15 };

// let arr = [ vasya, petya, masha ];

// function sortByAge(arr) {
//   arr.sort (function (a, b) {
//     if(a.age > b.age) {
//       return 1;
//     } else if (a.age < b.age) {
//       return - 1;
//     } else {
//       return 0;
//     }
//   })
//   return arr;
// }

// console.log(sortByAge(arr));

// Задача 10 Перемешайте массив

// let arr = [1, 2, 3];

// function shuffle (arr) {
//   arr.sort (function (){
//     return 0.5 - Math.random()
//   })

//   return arr;
// }

// console.log(shuffle(arr));

// Задача 11 Получите средний возраст

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 48 };
let masha2 = { name: "Маша", age: 80 };
let masha3 = { name: "Маша", age: 5 };

// let arr = [vasya, petya, masha, masha2, masha3];

function getAverageAge(users) {
  let newArr = [];
  let sum = null;

  users.forEach((user) => {
    newArr.push(user.age);
  });

  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i];
  }

  return (sum = Math.floor(sum / newArr.length));
}

// console.log(getAverageAge(arr));

// Задача 12 Оставить уникальные элементы массива

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

function unique(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (newArr.includes(arr[i])) continue;

    newArr.push(arr[i]);
  }
  return newArr;
}

// console.log(unique(strings));
