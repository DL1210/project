"use strict";

// Задача 1 Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.

// const text = document.querySelector("#text");

// hider.onclick = function () {
//     text.style.display = "none";
// }
// ---------------------------------------------------------------------------
// Задача 2 Создайте кнопку, которая будет скрывать себя по нажатию.

// hider.onclick = function () {
//     hider.hidden = "true";
// }

// ---------------------------------------------------------------------------
// Задача 3 В переменной button находится кнопка. Изначально на ней нет обработчиков.Который из обработчиков запустится? Что будет выведено при клике после выполнения кода?

// hider.addEventListener("click", () => alert("1"));

// hider.removeEventListener("click", () => alert("1"));

// hider.onclick = () => alert(2);

// выведется 1, затем 2, remove не сработает т.к передана новая анонимная функция

// ---------------------------------------------------------------------------
// Задача 4 Передвиньте мяч по полю

const ball = document.querySelector("#ball");

ball.style.position = "absolute";

ball.style.transition = "1s all"; // анимацию в учебнике подсмотрел

const field = document.querySelector("#field");

// field.mouseover = function () {

// }

field.onclick = function (event) {
  //  по оси X
  if (
    event.clientX >=
    field.clientLeft +
      field.offsetLeft +
      field.clientWidth -
      ball.offsetWidth / 2
  ) {
    ball.style.left =
      field.clientLeft +
      field.offsetLeft +
      field.clientWidth -
      ball.offsetWidth +
      "px";
  } else if (
    event.clientX <=
    field.clientLeft + field.offsetLeft + ball.offsetWidth / 2
  ) {
    ball.style.left = field.clientLeft + field.offsetLeft + "px";
  } else {
    ball.style.left = event.clientX - ball.offsetWidth / 2 + "px";
  }

  // по оси Y
  if (
    event.clientY >=
    field.clientTop +
      field.offsetTop +
      field.clientHeight -
      ball.offsetHeight / 2
  ) {
    ball.style.top =
      field.clientTop +
      field.offsetTop +
      field.clientHeight -
      ball.offsetHeight +
      "px";
  } else if (
    event.clientY <=
    field.clientTop + field.offsetTop + ball.offsetHeight / 2
  ) {
    ball.style.top = field.clientTop + field.offsetTop + "px";
  } else {
    ball.style.top = event.clientY - ball.offsetHeight / 2 + "px";
  }

};

// ---------------------------------------------------------------------------
// Задача 5 Создать меню, которое по нажатию открывается либо закрывается


// const arrowDown = document.querySelector(".arrowDown");
// const arrowRight = document.querySelector(".arrowRight");

// arrowDown.hidden = true;

// const list = document.querySelector("ul");
// list.hidden = true;


// function show () {
//     list.hidden = false;
//     arrowRight.hidden = true;
//     arrowDown.hidden = false;
// }

// function hide () {
//     list.hidden = true;
//     arrowRight.hidden = false;
//     arrowDown.hidden = true;
// }



// arrowRight.addEventListener("click", show);
// arrowDown.addEventListener("click", hide);

// ---------------------------------------------------------------------------
// Задача 6 При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия.


// const buttons = document.querySelectorAll("button");


// for (let i = 0; i < buttons.length; i++) {

//   let div = buttons[i].closest("div");

//   function close () {
//     div.hidden = true;
//   }
//   buttons[i].addEventListener ("click", close);
//   }

// ---------------------------------------------------------------------------
// Задача 7 Создайте «Карусель» –- ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

let i = 1;
    for(let li of document.querySelectorAll('li')) {
      li.style.position = 'relative';
      li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
      i++;
    }

