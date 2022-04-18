"use strict"


// Задача 1 Напишите деструктурирующее присваивание, которое:
// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)


let user = {
    name: "John",
    years: 30
  };

  let {name, years: age, isAdmin = false} = user;

  console.log(name);
  console.log(age);
  console.log(isAdmin);


//   Задача 2 Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.

let salaries = {
    "John": 200,
    "Pete": 100,
    "Mary": 400,
    "Cyte": 1000,
    "Quentin": 500,
  };



// Мое решение


  // function topSalary(salaries) {

  //       const num = Object.entries(salaries);

  //       if (num.length === 0) {
  //           return null;
  //       }

  //       let [[name1, salarie1 = null],[name2, salarie2 = null],[name3, salarie3 = null]] = num;

  //       if (salarie1 >= salarie2 && salarie1 >= salarie3) {
  //           return name1;

  //       } else if (salarie2 >= salarie1 && salarie2 >= salarie3) {
  //           return name2;

  //       } else {
  //           return name3;

  //       }

  // }

// Решение из учебника (хорошее решение, все понял, но сам недодумался)

// function topSalary(salaries) {

//     let max = 0;
//     let maxName = null;

//     for(const [name, salary] of Object.entries(salaries)) {
//       if (max < salary) {
//         max = salary;
//         maxName = name;
//       }
//     }

//     return maxName;
//   }

  console.log(topSalary(salaries));



