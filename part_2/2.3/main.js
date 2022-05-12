"use strict";

// Задача 1  Спрячьте сообщения с помощью делегирования

// const container = document.querySelector("#container");

// container.addEventListener("click", function (event) {
//     const target = event.target;

//     if (target.tagName != "BUTTON") return;

//     const text = target.closest("div");
//     text.hidden = true;

// })
// ----------------------------------------------------------------------

// Задача 2 Создайте дерево, которое по клику на заголовок скрывает-показывает потомков:

//  функция обертки li в span и сразу вопрос: переменную lists сначала сделал через querySelectorAll, но он не обернул все элементы li в span, а getElementsByTagName обернул, вопрос почему?

function wrapLiInSpan() {
  const ul = document.querySelector(".tree");
  const lists = ul.getElementsByTagName("li");

  for (let i = 0; i < lists.length; i++) {
    const list = lists[i];
    const span = document.createElement("span");

    span.innerHTML = `${list.innerHTML}`;
    list.innerHTML = "";
    list.prepend(span);
  }
}

wrapLiInSpan();



// скрываем дочерние элементы

const list = document.querySelector(".tree");

list.onclick = function (event) {
  const target = event.target;
  if (target.tagName != "SPAN") return;
  const lists = target.getElementsByTagName("li");

  if (lists.length != 0) {
    if (target.firstElementChild.hidden != true) {
      target.firstElementChild.hidden = true;
    } else target.firstElementChild.hidden = false;
  }
};


// добавляем выделение курсором на span
// вопрос по выделению текста жирным: target.style.fontWeight = "bold" если есть вложенные элементы выделяет и их, как это обойти?


list.addEventListener("mouseover", function(event) {
    const target = event.target;

    if (target.tagName == "SPAN") {
        target.style.cursor = "pointer";
        target.style.fontWeight = "bold";
    };
})

list.addEventListener("mouseout", function(event) {
    const target = event.target;

    if (target.tagName == "SPAN") {
        target.style = "";
    };
})



// list.addEventListener("mouseover", function(event) {
//     const target = event.target;

//     if (target.tagName == "SPAN") {
//         target.style.cursor = "pointer";
//         target.style.fontWeight = "bold";
//     };
// })

// list.addEventListener("mouseout", function(event) {
//     const target = event.target;

//     if (target.tagName == "SPAN") {
//         target.style = "";
//     };
// })

