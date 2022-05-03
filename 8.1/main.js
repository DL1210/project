"use strict"

// Задача 1 В приведённом ниже коде создаются и изменяются два объекта.
// Какие значения показываются в процессе выполнения кода?

// let animal = {
//     jumps: null
//   };
//   let rabbit = {
//     __proto__: animal,
//     jumps: true
//   };

//   console.log( rabbit.jumps ); // ? покажет true

//   delete rabbit.jumps;

//   console.log( rabbit.jumps ); // ? покажет null

//   delete animal.jumps;

//   console.log( rabbit.jumps ); // ? (3) покажет undefined


// Задача 2
// С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head. Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
// Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? При необходимости составьте цепочки поиска и сравните их.


let head = {
    glasses: 1
  };

  let table = {
    pen: 3
  };

  let bed = {
    sheet: 1,
    pillow: 2
  };

  let pockets = {
    money: 2000
  };

  table.__proto__ = head;

  bed.__proto__ = table;

  pockets.__proto__ = bed;

//   Задача 3 Объект rabbit наследует от объекта animal.
// Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?


// let animal = {
//     eat() {
//       this.full = true;
//     }
//   };

//   let rabbit = {
//     __proto__: animal
//   };


//   получит rabbit, при вызове rabbtit.eat() this = rabbit.

// Задача 4 У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.
// Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?

let hamster = {
    stomach() {
        this.stomach = [];
    },

    eat(food) {
      this.stomach.push(food);
    }
  };

  let speedy = {
    __proto__: hamster
  };

  let lazy = {
    __proto__: hamster
  };


  speedy.stomach();
  speedy.eat("apple");
  speedy.eat("pineapple");