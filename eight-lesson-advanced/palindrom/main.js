"use strict"

const str = "довод";

let i = 0;
for (let j = str.length - 1; j >= 0; j--) {
    if(str[i] === str[j]) {
        alert("палиндром");
    } else {
        alert("лох");
    }
    i++;
}
