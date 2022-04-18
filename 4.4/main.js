"use strict"

//Задача 1 Каким будет результат выполнения этого кода?

// let user = {
//     name: "Джон",
//     go: function() { alert(this.name) }
//   }

//   (user.go)()

// будет ошибка, но я думал что из за доп скобок вокруг юзер.гоу а не отстутствия точки с запятой

// Задача 2 В представленном ниже коде мы намерены вызвать obj.go() метод 4 раза подряд.
// Но вызовы (1) и (2) работают иначе, чем (3) и (4). Почему?

// let obj, method;

// obj = {
//   go: function() { alert(this); }
// };

// obj.go();               // (1) [object Object]

// (obj.go)();             // (2) [object Object]

// (method = obj.go)();    // (3) undefined

// (obj.go || obj.stop)(); // (4) undefined


// (1) и (2) по сути одно и то же, в (3) в method сохраняется функция из obj, и далее она вызывается но без объекта поэтому undefined,  а (4) потому что метод вычисляемый


//Задача 3 Здесь функция makeUser возвращает объект.
// Каким будет результат при обращении к свойству объекта ref? Почему?

// function makeUser() {
//     return {
//       name: "Джон",
//       ref: this
//     };
//   };

//   let user = makeUser();

//   alert( user.ref.name )

// ошибка

// Задача 4 Создайте калькулятор

// let calculator = {
//     a: null,
//     b: null,
//     c: null,
//     d: null,
//     read () {
//         this.a = +prompt('a?','');
//         this.b = +prompt('b?', '');
//     },
//     sum () {
//         this.c = this.a + this.b;
//         return this.c;
//     },
//     mul () {
//         this.d = this.a * this.b;
//         return this.d;
//     }


// }

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());


//Задача 5


let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // показывает текущую ступеньку
      alert( this.step );
      return this;
    }
  };

  ladder.up().up().up().down().showStep(); // 2
