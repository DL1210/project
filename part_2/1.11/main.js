"use strict";

// Задача 1 Найдите координаты точек относительно окна браузера

// function getCoords(elem) {
//     let box = elem.getBoundingClientRect();

//     return {
//       top: box.top,
//       left: box.left,
//       right: box.right,
//       bottom: box.bottom,
//       height: box.height,
//       width: box.width,
//     };
//   }

//   let coords = getCoords(document.querySelector("#field"));
//   let field = document.querySelector("#field");

//   let coord1 = console.log(`Координата 1: X - ${coords.left}; Y - ${coords.top}`);
//   let coord2 = console.log(`Координата 2: X - ${coords.left + coords.width}; Y - ${coords.top + coords.height}`); // можно было просто coords.right, coords.bottom
//   let coord3 = console.log(`Координата 3: X - ${coords.left + field.clientLeft}; Y - ${coords.top + field.clientTop}`);
//   let coord4 = console.log(`Координата 4: X - ${coords.left + field.clientLeft + field.clientWidth}; Y - ${coords.top + field.clientTop+field.clientHeight}`);

// -------------------------------------------------------------------------




// Задача 2, 3, 4


function positionAt(anchor, position, elem) {
  let coords = anchor.getBoundingClientRect();
  elem.style.position = "absolute";
  if (position == "top-out") {
    elem.style.left = coords.left + "px";
    elem.style.top = coords.top - elem.offsetHeight + "px";
  }
  if (position == "top-in") {
    elem.style.left = coords.left + "px";
    elem.style.top = coords.top  + "px";
  }

  if (position == "right-out") {
    elem.style.left = coords.left + coords.width + "px";
    elem.style.top = coords.top  + "px";
  }

  if (position == "right-in") {
    elem.style.left = coords.left + coords.width - elem.offsetWidth + "px";
    elem.style.top = coords.top  + "px";
  }

  if (position == "bottom-out") {
    elem.style.left = coords.left + "px";
    elem.style.top = coords.top + coords.height + "px";
  }

  if (position == "bottom-in") {
    elem.style.left = coords.left + "px";
    elem.style.top = coords.top + coords.height - elem.offsetHeight + "px";
  }

}



function showNote(anchor, position, html) {
  let note = document.createElement("div");
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}

// test it
let blockquote = document.querySelector("blockquote");

showNote(blockquote, "top-in", "note above");
showNote(blockquote, "right-in", "note at the right");
showNote(blockquote, "bottom-in", "note below");

document.body.style.height = "2000px";


