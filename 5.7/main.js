"use strict"

// Задача 1 Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

// function unique(arr) {
//     arr = new Set (arr);
//     let newArr = [];

//     arr.forEach((value) => {
//         newArr.push(value);
//     });
//     return newArr;
//   }

//   let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];

  // console.log(unique(values));


//   Задача 2 Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].split('').sort().join('').toLocaleLowerCase());
}

  let map = new Map ();

  for (let i = 0; i < arr.length; i++) {
    map.set(newArr[i], arr[i].toLocaleLowerCase());
  }

  let result = Array.from(map.values());


  return result;

}

console.log(aclean(arr));



// function aclean(arr) {
//   arr = new Set (arr);

  // let set = new Set ();

//   for (let i = 0; i < arr.length; i++){
//     newArr.push(arr[i].split('').sort().join(''));

// }

// return arr;
// }

// console.log(aclean(arr));






//   Задача 3 Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.

// Потому что push работает только с массивами, а мап не массив
// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.keys());
// keys.push("more");

// console.log(keys);