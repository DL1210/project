"use strict";

// Задача 1 Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

// const date = new Date (2012, 1, 20, 3, 12, 0, 0);
// console.log(date);

// Задача 2 Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

// let date = new Date(2012, 5, 25);

// function getWeekDay(date) {
//     const weekDay = date.getDay();
//     if (weekDay === 0) {
//         alert("ВС");
//     } else if (weekDay === 1) {
//         alert("ПН");
//     } else if (weekDay === 2) {
//         alert("ВТ");
//     } else if (weekDay === 3) {
//         alert("СР");
//     } else if (weekDay === 4) {
//         alert("ЧТ");
//     } else if (weekDay === 5) {
//         alert("ПТ");
//     } else if (weekDay === 6) {
//         alert("СБ");
//     }
// }

function getWeekDay(date) {
  const week = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

  return week[date.getDay()];
}

// console.log(getWeekDay(date));

// Задача 3 В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

// let date = new Date(2012, 0, 7);

// function getLocalDay(date) {

//     if (date.getDay() === 0) {
//         return date.getDay() + 7;
//     }
//     return date.getDay();
// }

// console.log(getLocalDay(date));

// Задача 4 Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
// Функция должна надёжно работать при значении days=365 и больших значениях:

// Мое решение
// let date = new Date ();
// let newDate = date.getTime();
// let newDate2;

// function getDateAgo(date, days) {
//    days = days*24*3600*1000;

//    newDate = date - days;
//    newDate2 = new Date (newDate);

//    return newDate2.getDate();

// }

// console.log(getDateAgo(date, 1));

// Решение из учебника

// function getDateAgo(date, days) {
//     let dateCopy = new Date(date);

//     dateCopy.setDate(date.getDate() - days);
//     return dateCopy.getDate();
//   }

// let date = new Date(2015, 0, 2);

// console.log(getDateAgo(date, 10));

// Задача 5 Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
// Параметры:
// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1);
  let date2 = new Date(date.setDate(0));
  return date2.getDate();
}
// console.log(getLastDayOfMonth(2012, 1));

// Задача 6 Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

function getSecondsToday() {
  let date = new Date();
  date.setHours(0, 0, 0);
  let date2 = new Date();
  let result = date2 - date;
  return result / 1000;
}

// console.log(getSecondsToday());

// Задача 7 Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
// Например, если сейчас 23:00, то:

function getSecondsToTomorrow() {
  let today = new Date();

  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow = new Date(tomorrow);
  tomorrow.setHours(0, 0, 0, 0);

  let result = Math.round((tomorrow - today) / 1000);
  return result;
}

// console.log(getSecondsToTomorrow());

// Задача 8 Напишите функцию formatDate(date), форматирующую date по следующему принципу:
// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

function formatDate(date) {
  let dateNow = new Date();

  let res = dateNow - date;

  if (res < 1000) {
    alert("Прямо сейчас");
  } else if (res < 60 * 1000) {
    alert(`${res / 1000} сек. назад`);
  } else if (res < (3600 * 1000)) {
    alert(`${res / (60 * 1000)} мин. назад`);
  } else {
      if (date.getMonth()+1 < 10) {
          alert(`${date.getDate()}.0${(date.getMonth()+1)}.${(date.getFullYear()-2000)} ${date.getHours()}:${date.getMinutes()}`);
        } else {
        alert(`${date.getDate()}.${(date.getMonth()+1)}.${(date.getFullYear()-2000)} ${date.getHours()}:${date.getMinutes()}`)
        }
  }
  console.log(res);
}

formatDate(new Date(new Date - 86400 * 1000));
