"use strict";

// Задача 1

// class Dictionary {

//     constructor (obj) {
//         this.obj = {};
//     }

//     newEntry (key, value) {
//         this.obj[key] = value;
//     }

//     look (key) {
//         if (!this.obj.hasOwnProperty(key)) return `${key} в словаре нет`
//         return (Object.values(this.obj[key]).join(""));
//     }

// }

// let d = new Dictionary ();

// d.newEntry("Арбуз", "растет на земле");
// d.newEntry("Apple", "растет на деревьях");
// d.newEntry("Банан", "растет на деревьях");

// console.log(d.look("Бананы"));

// ---------------------------------------------------------------------------
// Задача 3

// Object.prototype.myNewMethod1 = function (str) {
//     return str.toUpperCase();
// }

// Object.prototype.myNewMethod2 = function (str) {
//     console.log(this);
// }

// console.log(myNewMethod1("asdsa"));
// "asd".myNewMethod2();

// String.prototype.newMethod = function () {
//         return this.toUpperCase();
//     }

//     console.log("qwerty".newMethod());

// class UpString extends String {
//     newMethod (){
//         return this.toUpperCase();
//     }
// }
// let str = new UpString ("zxcvb");
// console.log(str.newMethod());

// ---------------------------------------------------------------------------
// Задача 4 Ключевое слово

// function KeywordCipher(abc, keyword) {
//     this.encode = function (str) {
//       // ...
//     }
//     this.decode = function (str) {
//       // ...
//     }
//   }

//   let abc = "абвгдезж";
//   let key = "дева";
//   let cipher = new KeywordCipher(abc, key);

// let a = "абвгдежз";

// let b = Array.from(a);

// let keyWord = "дева";

// for (let i = 0; i < keyWord.length; i++) {
//     if (b.indexOf(keyWord[i], 0) !== -1) {
//         b.splice(b.indexOf(keyWord[i], 0), 1)

//     }

//     console.log(b);
// }

// let result = keyWord.split("").concat(b);
// console.log(result);

// var abc = "абвгдежз";
// var key = "дева";

// function KeywordCipher(abc, keyword) {

//     this.encode = function (str) {

//         let newStr = Array.from(abc);
//         str = keyword;

//         for (let i = 0; i < keyword.length; i++) {
//             if (newStr.indexOf(keyword[i], 0) !== -1) {
//                 newStr.splice(newStr.indexOf(keyword[i], 0), 1)
//             }
//         }

//         let res = keyword.split("").concat(newStr).join("");
//         return res;
//     }

//     this.decode = function (str) {
//         str = abc;
//         return str;
//     }
//   }

//   let result = new KeywordCipher (abc, key);
//   console.log(result.encode());
//   console.log(result.decode());

// class KeywordCipher {

//     constructor (abc, keyword) {

//         this.abc = abc;
//         this.keyword = keyword;

//     }

//     init () {
//         this.dictionary = Array.from(this.abc);
//         for (let i = 0; i < this.keyword.length; i++) {
//             if (this.dictionary.indexOf(this.keyword[i], 0) !== -1) {
//                 this.dictionary.splice(this.dictionary.indexOf(this.keyword[i], 0), 1)
//             }
//         }

//         this.dictionary = this.keyword.split("").concat(this.dictionary).join("");

//     }

//     encode (str) {
//         for (let i = 0; i < str.length; i++) {

//         }
//     }

//     decode (str) {

//     }

// }

class KeywordCipher {
  constructor(keyword) {
      this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
      this.cyphAlphabet = [];
      this.keyword = keyword;
  }

  initCypher() {
      let alphabet = [...this.alphabet];
      for (let char of this.keyword) {
          alphabet.splice(alphabet.indexOf(char), 1)
      }
      this.cyphAlphabet = alphabet;
      const res = this.keyword.split('').concat(this.cyphAlphabet);
      this.cyphAlphabet = res;
  }

  decode(word) {
      return this.changeWord(this.alphabet, this.cyphAlphabet, word);
  }

  encode(word) {
      return this.changeWord(this.cyphAlphabet, this.alphabet, word);
  }

  changeWord(cyphAlphabet, alphabet, word) {
      const w = [];
      for (let i = 0; i < word.length; i++) {
          const index = alphabet.indexOf(word[i]);
          const letter = cyphAlphabet[index];

          w.push(letter);

      }

      return w.join('');
  }
}

// const cypher = new KeywordCipher ('keyword');
// cypher.initCypher();

// console.log(cypher.encode('abchij'))
// console.log(cypher.decode('keyabc'))



// ---------------------------------------------------------------------------
// Задача ТЫ квадрат

// function isSquare (n){

//     if (Number.isInteger(Math.sqrt(n))) {
//         return true;
//     }
//     else return false;
// }

// Задача маскировка кредитной карты

// function maskify(cc) {

//   let output = "";

//   if (cc.length <= 4) {
//     return cc;
//   } else {
//     for (let i = 0; i < cc.length - 4; i++) {
//       output += "#";
//     }
//   }
//   let numbers = cc.slice(cc.length - 4);
//   return output + numbers;
// }

// ---------------------------------------------------------------------------
// Задача esrever gnirtS


// String.prototype.reverse = function (str) {

//     for (let i = this.length - 1; i > 0; i--) {
//       for (let j = 0; j < this.length; j++){
//         str[j] = str[i];
//       }
//     }
// }


// ---------------------------------------------------------------------------
// Зал славы


class HallOfFame {

  constructor(playerNum = 5, arrayOfPlayers) {

      this.initialArrayOfPlayers = arrayOfPlayers;

      if (!this.initialArrayOfPlayers) {
        this.initialArrayOfPlayers = [];
        this.initialArrayOfPlayers.length = 5;

        for (let i = 0; i < this.initialArrayOfPlayers.length; i++) {
          this.initialArrayOfPlayers[i] = '';
       }
      }

      this.playerNum = playerNum;
      this.arrayOfPlayers = [];

  }

  get list() {
    this.arrayOfPlayers = this.initialArrayOfPlayers.sort(function(a, b) {
      if (a[1] == b[1]) {
        if (a[0] > b [0]) {
          return 1;
        } else if (a[0] < b [0]) {
          return - 1
        } else return 0;
      }
        return b[1] - a[1];
    });

    return this.arrayOfPlayers.map(function(item){
      if (!item) return item = "";
      item = item.join(": ");
      return item;
    }).slice(0, this.playerNum);
   }


  add(player) {
    this.initialArrayOfPlayers.unshift(player);
    return this;
  }
}

// ---------------------------------------------------------------------------