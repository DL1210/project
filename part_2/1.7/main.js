"use strict";

// Задача 1 и 3 устные

// Задача 2 Очистите элемент


//-----мое решение (почему написано в учебнике что for of работать не будет, если он работает?)

        // function clear(elem) {
        //     elem = document.getElementById('elem');
        //     let list = elem.querySelectorAll(":scope > li");

        //     for (let num of list) {
        //         num.remove();
        //     }

        // }

        // ----- учебник

        // function clear(elem) {
        //     while (elem.firstChild) {
        //         elem.firstChild.remove();
        //     }
        // }

        // function clear(elem) {
        //     elem.innerHTML = '';
        // }

        // clear(elem);



// Задача 4 Создайте список

// function createList() {
//   let b;
//   do {
//     b = prompt("введите текст для элемента списка");
//     if (b !== "" && b !== null) {
//       ul.insertAdjacentHTML("beforebegin", `<li> ${b} </li>`);
//     }
//   } while (b !== "" && b !== null);
// }

// createList();




// Задача 5 Создайте дерево из объекта

const data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};

const container = document.querySelector('.container');


function createTree(container, data) {
    let ul = document.createElement('ul');
    container.append(ul);

    for (let key in data) {
        let li = document.createElement('li')
        li.innerHTML = key;

        ul.append(li);

        if (Object.keys(data[key]).length) {
            createTree(li, data[key])
        }
    }
}

// createTree(container, data); // создаёт дерево в контейнере





// Задача 6 Выведите список потомков в дереве


// ДОДЕЛАТЬ
function fillData(element) {
   if (!element.getElementsByTagName('ul').length) {
       return 0;
   } else {
       // количество потомков каждого узла это сумма количества его прямых и непрямых потомков
       let nDesc = element.getElementsByTagName('ul')[0].children.length;

       // сейчас nDesc в себе содержит только количество прямых потомков рассматриваемого element
       // теперь надо посчитать непрямых потомков (с использованием рекурсии)
       // ...
       // fillData(...);
       // ...

       element.firstChild.data += `[${nDesc}]`
   }
}

// fillData(document)





// Задача 7 Создайте календарь в виде таблицы -------------


const elem = document.querySelector('.container');
function createCalendar(elem, year, month) {

    const lastDay = new Date(year, month, 0);

    const firstDay = new Date(year, month - 1);

    let weekDay = firstDay.getDay();
    if (weekDay == 0) {
        weekDay = 7;
    }

    const table = document.createElement('table'); // создаем таблицу
    elem.append(table); // добавляем таблицу

    const trHeader = document.createElement('tr'); // создаем строку для заголовка
    table.append(trHeader); // добавляем строку для заголовка

    const weekDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']

    for (let i = 0; i < weekDays.length; i++) {
        const th = document.createElement('th'); // создаем ячейки заголовка таблицы
        trHeader.append(th); // добавляем ячейки заголовка таблицы в trHeader

        th.innerHTML = weekDays[i]; // записываем значения в заголовки по индексам weekDays[i]
    }

    let tr = document.createElement('tr'); // создаем строку для чисел
    table.append(tr); // добавляем строку для чисел

    for (let i = 0; i < weekDay - 1; i++) {
        const td = document.createElement('td');
        tr.append(td); // создаем пустые ячейки перед первым числом месяца через цикл
    }

    let counter = weekDay - 1; // счетчик

    // daysNum - количество дней в месяце
    const daysNum = lastDay.getDate();

    // цикл на заполнение дней месяца в таблицу
    for (let i = 1; i <= daysNum; i++) {

        if (counter == 0) {
            tr = document.createElement('tr');
            table.append(tr);
        } // если счетчик равен 0 (т.е. "ПН"), создаем и переходим новую строку

        const td = document.createElement('td');
        tr.append(td); // создаем ячейки и добавляем в них значение i (даты месяца)
        td.innerHTML = i;

        counter++;

        if (counter == 7) {
            counter = 0;
        }

    }


    let lastTr = tr; // выбираем последнюю строку

    while (lastTr.cells.length < 7) {
        let td = document.createElement('td');
        lastTr.append(td);
    }  // если длина последней строки меньше 7 ячеек, то добавляем пустые ячейки в конец строки
}


createCalendar(elem, 2012, 2)


// const elem = document.querySelector('.container');
// function createCalendar(elem, year, month) {

//     const lastDay = new Date(year, month, 0);

//     const firstDay = new Date(year, month - 1);

//     let weekDay = firstDay.getDay();
//     if (weekDay == 0) {
//         weekDay = 7;
//     }

//     const table = document.createElement('table');
//     elem.append(table);

//     const trHeader = document.createElement('tr');
//     table.append(trHeader);

//     const weekDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']

//     for (let i = 0; i < weekDays.length; i++) {
//         const th = document.createElement('th');
//         trHeader.append(th);

//         th.innerHTML = weekDays[i];
//     }

//     const daysNum = 30;

//     let counter = weekDay - 1;
//     let tr = document.createElement('tr');
//     table.append(tr);

//     for (let i = 0; i < weekDay - 1; i++) {
//         const td = document.createElement('td');
//         tr.append(td);
//     }

//     for (let i = 1; i <= daysNum; i++) {
//         if (counter == 0) {
//             tr = document.createElement('tr');
//             table.append(tr);
//         }

//         const td = document.createElement('td');
//         tr.append(td);
//         td.innerHTML = i;

//         counter++;

//         if (counter == 7) {
//             counter = 0;
//         }

//     }
// }








// Задача 8 Цветные часы --------------------------------






// задача 9 Вставьте HTML в список

// let a = document.querySelector('one');
// a.insertAdjacentHTML('beforeend', '<li>2</li><li>3</li>');



// задача 10 Сортировка таблицы -------------------------