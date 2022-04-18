"use strict"

// Задача 1
// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

const user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;


// Задача 2 Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

function isEmpty(user) {
    for (let key in user) {
        return (false)

    }
        return (true);
}
// isEmpty({});



//Задача  3 Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

// const user = {
//     name: "John"
//   };

// это будет работать?
//   user.name = "Pete";

// ОТВЕТ: свойство любого объекта можно изменить, даже объявленного через const

//Задача 4 Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
    Jack: 400,
    Mary: "dsf",
  }

let sum = 0;
for (let key in salaries) {
  if (typeof salaries[key] === "number") sum = sum + salaries[key];

  }

console.log(sum); // 790

//Задача 5 Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

let num = 2;
function multiplyNumeric(salaries) {
    for (let key in salaries) {
        if (typeof salaries[key] == 'number') {
            salaries[key] = salaries[key] * num;
        }
  }

}

// multiplyNumeric(salaries)





