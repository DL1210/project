"use strict"


// Задача 1 Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
// Если объект salaries пуст, то результат должен быть 0.


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  function sumSalaries(salaries) {

    let val = Object.values(salaries);
    let sum = null;

        for (let value of val) {
            sum += value;
        }
        return sum;

    }


// console.log(sumSalaries(salaries));


// Задача 2 Напишите функцию count(obj), которая возвращает количество свойств объекта

let user = {
    name: 'John',
    age: 30,

  };

function count(user) {
    let num = Object.keys(user);
    alert(num.length);
}
// count(user);
