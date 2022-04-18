"use strict"

// function printNumbers(from, to) {
//     let current = from;

//     let timerId = setInterval(function() {
//       console.log(current);
//       if (current == to) {
//         clearInterval(timerId);
//       } else {
//       current++;
//         }
//     }, 1000);
//   }


//   printNumbers(5, 10);  сам не решил, подсмотрел


function printNumbers  (from, to) {
    let current = from;

    let timerId = setTimeout (function tick () {
        console.log(current);
        timerId = setTimeout(tick, 1000); // вопрос по этой строке: если мы делаем рекурсию в этом месте, разве не создается новая функция и соотвтетственно мы не должны переходить к if ниже????
        if (current == to) {
            clearInterval(timerId);
        } else {
            current++;
        }

    }, 3000);

};

// printNumbers(1, 5);



// Задача 2
// В приведённом ниже коде запланирован вызов setTimeout, а затем выполняется сложное вычисление, для завершения которого требуется более 100 мс.
// Когда будет выполнена запланированная функция?
// После цикла.
// Перед циклом.
// В начале цикла.
// Что покажет alert?

let i = 0;

setTimeout(() => alert(i), 100);

for(let j = 0; j < 100000000; j++) {
  i++;
}

// функция выполнена будет после цикла, alert покажет 1000000000


