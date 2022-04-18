"use strict"

// задача 1 скопирован ли массив
//let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
//let shoppingCart = fruits;
//shoppingCart.push("Банан");

// что в fruits?
//alert( fruits.length );
//да, массив скопирован, в алерте выйдет цифра 4


//задача 2 операции с массивами
let styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");

styles[Math.floor(styles.length/2)] = "Классика";

styles.shift();

styles.unshift("Реп", "Регги");

// console.log(styles);


// Задача 3 Вызов в контексте массива Каков результат? Почему?

let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
})

// arr[2]();



//задача 4


function sumInput () {
 let arr = [];
 let enteredNumber;

 do {
   enteredNumber = prompt("введите число");
     if (!isNaN(enteredNumber)){
     arr.push(+enteredNumber);
 }
} while (enteredNumber !==null && enteredNumber !== "");

  let sum = 0;
  for (let num of arr) {
   sum += num;
  }
  alert(sum);
}

// sumInput();

 //задача 5

let arrNumbers = [2, -1, 2, 3, -9];

function getMaxSubSum (arr) {

  let index = 0;

  let theBiggestSum = 0 // наибольшая сумма
  let currentSum = 0; // текущая сумма

  let amountOfNum = 1; // кол-во элементов
  let bSumAmount = 0; // кол-во элем. составляющих наибольшую сумму

  for (let i = index; i < arr.length; i++) {
    for(let j = index; j < arr.length; j++) {
      currentSum += arr[j];
      // console.log(`currentSum ${currentSum}`);

      if (theBiggestSum < currentSum) {
        theBiggestSum = currentSum;
        bSumAmount++;
      };
      // console.log(`the biggestSum ${theBiggestSum}`);
      // console.log(bSumAmount);

      amountOfNum++;


    }
    currentSum = 0; // обновляем currentSum после завершения цикла j
    index++;

    return theBiggestSum;


  }


}

console.log(getMaxSubSum(arrNumbers));

// Спросить у Адель насчет вызова функции с массивом [2, -1, 2, 3, -9], выдает bSumAmount = 3, хотя на самом деле должно быть 4