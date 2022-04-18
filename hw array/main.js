"use strict"

// Задача 1 Объединить два массива

// let arr1 = ["a", "b", "c"];
// let arr2 = [1, 2, 3];
// let result = arr1.concat(arr2);



// Задача 2 Добавить в массив ["a", "b", "c"] буквы "d", "e", "f" (они лежат не в массиве), 2 вариант - добавьте буквы в начало массива

// let arr1 = ["a", "b", "c"];
// arr1.push("d", "e", "f"); // добавление в конец
// arr1.unshift("d", "e", "f"); // добавление в начало



// Задача 3 Превратить массив [1, 2, 3] в [3, 2, 1]

// let arr2 = [1, 2, 3];
// arr2.reverse();



// Задача 4 Отсортировать массив [1, 2, 235, 2345356, 3, 2] по возрастанию и по убыванию

// let arr3 = [1, 2, 235, 2345356, 3, 2];

// arr3.sort((a, b) => a - b); // по возрастанию
// arr3.sort((a, b) => b - a); // по убыванию



// Задача 5 Дан массив [1, 234, 2345, 234, 234523, 2, 1, 1, 453, 345] необходимо удалить повторяющиеся элементы в массиве

// let arr = [1, 234, 2345, 234, 234523, 2, 1, 1, 453, 345, 2, 45, 47, 3, 3, 1, 22];

// let newArr = [];

// arr.forEach(function(number) {

//     if (newArr.includes(number, 0)) {
//             return;
//         } else {
//             newArr.push(number);
//         }
// })



// Задача 6 - Дан массив [3, 345, 234, 3452, 2236, 13] необходимо объединить его с массивом [345, 234, 2345, 12, 45, 1, 3] без дублирования элементов

// let arr = [3, 345, 234, 3452, 2236, 13];
// let arr2 = [345, 234, 2345, 12, 45, 1, 3];

// for (let i = 0; i <arr2.length; i++) {
//     if (arr.indexOf(arr2[i]) === -1) {
//         arr.push(arr2[i]);
//     }
// }

// Задача 7 - Дан массив [1, 2345, 'a', 'q', 3, 43, 235, 'a', 'q', 1, 'a'] необходимо вывести самый "популярный" элемент массива

// let arr = [1, 2345, 'a', 'q', 3, 43, 235, 'a', 'q', 1, 'a'];



// Задача 8 - Сделать из строки "Не грози южному централу попивая сок у себя в квартале" массив из первых букв т.е. ['Н', 'г', 'ю', 'ц', 'п', 'с', 'у', 'с', 'в', 'к']

// let str = "Не грози южному централу попивая сок у себя в квартале";

// let newArr = str.split(" ");

// let result = newArr.map(function(item){
//     if (item.length >= 1) {
//         let result2 = item.slice(0, 1);
//         return result2;
//     }
// })

// console.log(result);


// Задача 9 - Написать свою реализацию метода map

function map (arr, item) {
    let newArr = [];
        for (let i = 0; i <arr.length; i++) {
            newArr.push(item(arr[i]));
   }
   return newArr;
}

console.log(map(['avdw','wer','3'], (item) =>{
    return item.length;
}));



// Задача 10 - Написать свою реализацию метода filter

function filter (arr, item) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (item(arr[i])) {
            newArr.push(arr[i]);
        }

    }
    return newArr;

}


// console.log(filter([1,2,3,4,5], item => item > 6));





// Задача 11 - Написать свою реализацию метода find

function find (arr, item) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (item(arr[i])) {
            newArr.push(arr[i]);
            break;
        }

    }
    return newArr;

}

// console.log(find([1, 2, 3, 1, 3], item => item > 4));


// Задача 12 - Написать свою реализацию метода reverse

// function reverse (arr) {
//     let i = arr.length - 1;
//     let j = 0;
//     let t = i;
//     while (i >= 0 && j <= arr.length - 1) {
//         arr[i] = arr[j];
//         arr[j] = t;
//         i--;
//         j++;
//     }
//     return arr;
// }
// console.log(reverse([1, 2, 3, 4])); через мутирование массива не допер пока что

// Решение через новый массив

// function reverse (arr) {
//     let newArr = [];
//     for (let i = arr.length; i > 0; i--) {
//          newArr.push(i);
//     }
//     return newArr;
// }
// console.log(reverse([1, 2, 3, 4, 5, 6]));



// Задача 13 - Написать свою реализацию метода concat

// function concat (arr, arr2) {
//     let newArr = arr.slice();
//     for (let i = 0; i < arr2.length; i++) {
//         newArr.push(arr2[i]);
//     }
//     return newArr;
// }


// console.log(concat([66,43,2], ["asd", 55, 66]));

// Задача 14 - Написать свою реализацию метода forEach


// function forEach (arr, item) {

//         for (let i = 0; i <arr.length; i++) {
//             item(arr[i]);
//    }

// }

// forEach([1,2,3], (item) =>{
//     console.log(item);
// });



// Задача 15 - Написать свою реализацию метода includes

// function includes (arr, a) {
//     for (let i = 0; i < arr.length; i++) {
//         if (a === arr[i]) {
//             return true;

//         }
//         // if (a === NaN && arr[i] === NaN && arr[i] === a) {
//         //     return true;
//         // }

//     }
//     return false;
// }
// console.log(includes([NaN,2,NaN], NaN));

// Задача 16 - Написать свою реализацию метода sort


