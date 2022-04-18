"use strict"


class Clock {

   constructor () {
       this.date = date;
   }

    get date () {
        return this.date = new Date ().getDate();
    }

    set date (num) {
        return this.date.setDate(num);
    }

}

let qwer = new Clock ();
console.log(qwer.date);

