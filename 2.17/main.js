"use strict"
// Задача №1 перепишите код с ипользованием функции стрелки

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }

//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );


let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no ();
}

ask (
    "Вы согласны?",
    () => alert('Вы согласились'),
    () => alert('ВЫ отменили выполнение')
)