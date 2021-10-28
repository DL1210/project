"use strict"
// "запрашивать числа через prompt, пока пользователь не отправит пустое число или не нажмет "Отмена", затем вывести эти числа"
// let arr = [];

// let enteredNumber;

// do {
// enteredNumber = prompt('enter the number','');
// if (!isNaN(enteredNumber) && enteredNumber !== null) {
// arr.push(enteredNumber)};
// } while (enteredNumber !== null && enteredNumber !== "");

// for (let i = 0; i < arr.length; i++) {
// alert(arr[i]);
// }



// "запрашивать числа через prompt, пока пользователь не отправит пустое число или не нажмет "Отмена", затем вывести true для четных чисел и false для нечетных чисел"

// let arr = [];

// let enteredNumber;

// do {
// enteredNumber = prompt('enter the number','');
// if (!isNaN(enteredNumber) && enteredNumber !== null) {
// arr.push(enteredNumber)};
// } while (enteredNumber !== null && enteredNumber !== "");

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 ===0) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }

// }



// «- запрашивать числа через prompt, пока пользователь не отправит пустое число или не нажмет "Отмена", затем выводить сколько разрядов в числе ( 0 < n < 10 - один разряд , 9 < n < 100 - два разряда,  99 < n < 1000 - три разряда, и т.д)»

// let arr = [];

// let enteredNumber;

// do {
//   enteredNumber = prompt('enter the number','');
//   if (!isNaN(enteredNumber) && enteredNumber !== null) {
//     arr.push(enteredNumber)
//   }
// } while (enteredNumber !== null && enteredNumber !== "");

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0 && arr[i] < 10 ) {
//         console.log(1);
//     } else if (arr[i] > 9 && arr[i] < 100 ) {
//         console.log(2);
//     }
//     else if (arr[i] > 99 && arr[i] < 1000 ) {
//         console.log(3);
//     } else {
//         console.log('много разрядов!');
//     }

// }

// "запрашивать числа через prompt, и сразу же показывать результат их деления на числа в массиве [1, 2, 3] до тех пор пока пользователь не нажмет "Отмена" или не отправит пустую строку"

// let num;
// let arr = [1, 2, 3];
// let result;

// do {
//     num = +prompt('Введите число', '')
//     if (num === 0 || num === '') break;
//     for (let i = 0; i < arr.length; i++) {
//         result = num / arr[i];
//         alert(result);

//     }

// } while (num !== 0 && num !== '')

