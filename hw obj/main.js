"use strict"

//Создать объект пользователя, в котором будут следующие данные:
// - Имя
// - Фамилия
// - Дата рождения в формате ISO 8601 а именно DD-MM-YYYY
// - Почта
// - Данные о собаке пользователя, а именно:
//     - Порода
//     - Цвет шерстки
//     - Характер
//     - Дата рождения в формате ISO 8601 а именно DD-MM-YYYY

// Добавить методы объекту, которые будут:
// - Выводить полное имя пользователя
// - Выводить информацию о собаке пользователя в формате:
// Порода: (значение),
// Цвет шерстки: (значение),
// Характер: (значение),
// Дата рождения: (значение)
// - Добавить метод, который будет редактировать данные о породе собаки пользователя, пример - user.setPetBreed('dachshund') где dachshund - новое значение породы
// - Сделать так, что бы любой метод "чейнился", т.е. вызывался цепочкой, т.е. можно было вызывать их вот так: user.method1().method2().method3()...

const user = {
    name: "Дима",
    surname: "Лаевский",
    "date of birth": "12.10.1993",
    mail: "6964438@mail.ru",
        pet: {
         breed: "Грифон",
         "fur color": "Коричневый",
         character: "Шкодливый",
         "date of birth": "10.01.2018",
    },

    outputFullNameUser () {
        console.log(`${this.name} ${this.surname}`);
    },
    displayingInfoAboutThePet () {
        console.log(`Порода: ${this.pet.breed}; `
        + `Цвет шерстки: ${this.pet["fur color"]}; `
        + `Характер: ${this.pet.character}; `
        + `Дата рождения: ${this.pet["date of birth"]}.`);

    },
    changePetBreed () {
        this.pet.breed = "Такса";
    }

}
user.outputFullNameUser();

user.displayingInfoAboutThePet();
user.changePetBreed();


// сделать 2 функции, первая создает пользователя с данными, переданными в функцию (без собаки), вторая - создает объект собаки с данными переданными в функцию, создать пользователя, поместить объект собаки созданный второй функцией в свойство pet у пользователя

let newUser = {};
function createNewUser () {
  newUser = {
     name: prompt("Ваше имя"),
     surname: prompt("Ваша фамилия"),
     "date of birth": prompt("Дата рождения"),
     mail: prompt("Ваша почта"),

 }
}

// createNewUser();

let newUsersPet = {};

function createNewUsersPet () {
    newUsersPet = {
        breed: prompt("Порода собаки"),
         "fur color": prompt("Цвет шерстки"),
         character: prompt("Характер"),
         "date of birth": prompt("Дата  рождения"),
    }

}

// createNewUsersPet ();

newUser.pet = newUsersPet;


// Клонируйте объект пользователя тремя способами - с помощью Object.assign, JSON.parse/stringify и с помощью cloneDeep от lodash

// let copyObj = Object.assign({}, user); // object.assign делает клонирование объекта, только если объект состоит из примитивов, если же в объекте лежат другие объекты или функции, они будут скопированы по ссылке

// let copyObj2 = JSON.parse(JSON.stringify(newUser)); // этот способ делает неглубокое клонирование, т.е. не включает в новый объект методы и функции из клонируемого, только примитивы и объекты

let copyObj3 = _.cloneDeep(newUser); //cloneDeep делает глубокое клонирование, т.е может копировать объект в объекте, в отличии от object.assign


// - Выведите фамилию пользователя тремя способами - через точку, через скобки [] со строкой внутри, и через [] с переменной внутри

// console.log(user.surname);
// console.log(user["surname"]);
// console.log([user.surname]); // выводит массивом


// - Опишите как вы понимаете "ссылки" у объектов своими словами, что такое вложенные ссылки? (можно в личку)

// Если верить учебнику что объекты хранятся где то в памяти, то ссылка это путь/адрес к этому объекту (ключ к ящику), вложенные ссылки - ссылки которые находятся внутри объектов или массивов

// - Говорить, сколько дней осталось до дня рождения пользователя ***

let now = new Date();
console.log(now);
let birthday = new Date(2022, 9, 12);
console.log(birthday);
let timeToBirthday = (birthday - now);
console.log(timeToBirthday);
let days = timeToBirthday / 3600 / 1000 / 24;
console.log(days);





