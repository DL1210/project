"use strict"



// Задача 1

let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
  ];


let weakMap = new WeakMap ();

for (let i = 0; i < messages.length; i++) {
    weakMap.set(messages[i], 'не прочитано');
}

messages.shift();


// Задача 2

// let readDate = new WeakMap ();

// for (let i = 0; i < messages.length; i++) {
//     readDate.set(messages[i], new Date ());
// }
