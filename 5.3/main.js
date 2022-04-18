"use strict"

//Задача 1
function ucFirst (str) {
    return str[0].toUpperCase() + str.slice(1);


   }
   console.log(ucFirst("вася"));

   //Задача 2

   function checkSpam (str) {
     let newStr = str.toLowerCase();
     if (newStr.includes("viagra")) {
       return true;
     } else {
       return false;
     }
   }
   console.log(checkSpam("buy ViAgRA now"));

   // задача 3

   function truncate(str, maxlength) {
     if (str.length > maxlength) {
       console.log(str.slice(0, maxlength - 1) + "…");
     } else {
       console.log(str);
     }
   }

   truncate("здарова", 4);

   // задача 4

   function extractCurrencyValue(str) {
     str = str.slice(1);
     let num = Number(str);
     return num;
   }

   console.log(extractCurrencyValue("₽2000"));