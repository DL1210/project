"use strict"

// Измените код makeCounter() так, чтобы счётчик мог увеличивать и устанавливать значение:
// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.
function makeCounter() {

    function counter() {
      return counter.count++;
    };

    counter.count = 0;

    counter.set = function func (value) {
        return counter.count = value;
    }

    counter.decrease = function func() {
        return counter.count - 1;
    }

    return counter;
  }

  let counter = makeCounter();
  // alert( counter() ); // 1
  // console.log(counter.set(4));
  // console.log(counter.decrease(4));
  // console.log(counter.count);


  function sum(a) {

    let currentSum = a;

    function f(b) {
      currentSum += b;
      return f;
    }

    f.toString = function() {
      return currentSum;
    };

    return f;
  }


 console.log( sum(1)(2) ); // 3
alert( sum(5)(-1)(2) ); // 6
alert( sum(6)(-1)(-2)(-3) ); // 0
alert( sum(0)(1)(2)(3)(4)(5) ); // 15
