"use strict"

// let obj = {
//     name: "Ivan",
//     surname: "Petrov"
// }

// console.log(obj);

// let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));


// clone.name = "Dima";
// clone.surname = "Ivanov";

// console.log(clone);


// Object.defineProperty(clone, "name", {
//     value: "Artem",
//     writable: false
// })

let animal = {
    eats: true
  };

  let rabbit = Object.create(animal, {
    jumps: {
      value: true
    }
  });

  let clone = Object.create(Object.getPrototypeOf(rabbit), Object.getOwnPropertyDescriptors(rabbit));

  Object.getOwnPropertyDescriptor(clone, "jumps");