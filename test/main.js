"use strict";

// function numberOfElements() {
//   let children = document.querySelector("ul").children;
//   let number = null;

//   for (let i = 0; i < children.length; i++) {
//     number++;
//   }

//   document.querySelector('li').firstChild.data += `[${number}]`;
// }

// numberOfElements();


// Животные ---------------------------------------

let a = document.querySelector("ul > li:first-child");

if (a.getElementsByTagName("li").length > 0) {
   a.firstChild.data += `[${a.getElementsByTagName("li").length}]`;
}

// Млекопитающие ----------------------------------

let b = a.querySelector('li');

if (b.getElementsByTagName("li").length > 0) {
    b.firstChild.data += `[${b.getElementsByTagName("li").length}]`;
 }
// Другие -----------------------------------------------


 let c = b.nextElementSibling;

 if (c.getElementsByTagName("li").length > 0) {
    c.firstChild.data += `[${c.getElementsByTagName("li").length}]`;
 }


// Рыбы -----------------------------------------------

let d = a.nextElementSibling;

if (d.getElementsByTagName("li").length > 0) {
    d.firstChild.data += `[${d.getElementsByTagName("li").length}]`;
 }


//  второе решение более сложное без переменной d

//  if (a.nextElementSibling.getElementsByTagName("li").length > 0) {
//     a.nextElementSibling.firstChild.data += `[${a.nextElementSibling.getElementsByTagName("li").length}]`;
//  }

// Аквариумные ------------------------------------------

 let e = d.querySelector('li');

 if (e.getElementsByTagName("li").length > 0) {
    e.firstChild.data += `[${e.getElementsByTagName("li").length}]`;
 }

// Морские -----------------------------------------------


let f = e.nextElementSibling;

if (f.getElementsByTagName("li").length > 0) {
   f.firstChild.data += `[${f.getElementsByTagName("li").length}]`;
}


// if (b.getElementsByTagName("li").length > 0) {
//     b.firstChild.data += `[${b.getElementsByTagName("li").length}]`;
//  }





// let a = document.querySelector("ul > li:first-child");

// let b = a.getElementsByTagName("li");

// a.firstChild.data += `[${b.length}]`;



// let c = a.nextElementSibling;

// let d = c.getElementsByTagName("li");

// c.firstChild.data += `[${d.length}]`;


// let e = a.querySelector('ul > li').parentNode;









// class arrayArithmetic {

//   constructor (array, number) {
//     this.array = array;
//     this.number = number;
//   }

//   sum () {

//   }

// }




function noSpace(x) {

   for (let i = 0; i < x.length; i++) {
      if (x[i].includes("a")) {
         x.slice(x[i], 1);
      }
   }
   return x;
}

