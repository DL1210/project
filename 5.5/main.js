"use strict"

// Задача 1 Переведите текст вида border-left-width в borderLeftWidth

// function camelize (str) {
//     let arr = str.split('-');

//     let changeRegister = arr.map(function(item){
//         return item.toUppercase();
//     });



// }

// let result = console.log(camelize("border-left-width"));

function camelize(str) {
    return str
      .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
      .map(
        // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
        // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
  }
//   не решил сам



// Задача 2 Фильтрация по диапазону

// let arr = [5, 3, 8, 1];

// function filterRange(arr, a, b) {
//     let newArr = arr.filter (index => index >= a && index <= b);
//     return newArr;
// }

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

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted (arr) {
    let newArr = arr.concat();
    newArr.sort();
    return newArr;
}

let sorted = copySorted(arr);

// alert( sorted );
// alert( arr );

// Задача 6 Создать расширяемый калькулятор








// Задача 7 Трансформировать в массив имён

// let vasya = { name: "Вася", age: 25};
// let petya = { name: "Петя", age: 30};
// let masha = { name: "Маша", age: 28};

// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name);

// console.log(names);

// Вопрос: можно ли сделать через filter, а не map

// Задача 8 Трансформировать в объекты

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(item => item.name + item.surname);

console.log(usersMapped);













