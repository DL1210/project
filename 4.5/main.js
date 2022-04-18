"use strict"

//Задача 1 Возможно ли создать функции A и B в примере ниже, где объекты равны new A()==new B()?

// let obj = {};

// function A() { return obj; }
// function B() { return obj; }

// alert( new A() == new B() ); // true // само условие задачи не понял, решение подсмотрел


// Задача 2 Создайте калькулятор

function Calculator () {
    this.read = function() {
        this.a = (+prompt("a"));
        this.b = (+prompt("b"));
    }

    this.sum = function() {
        return this.a + this.b;
    }

    this.mul = function() {
        return this.a * this.b;
    }

}

// let calc = new Calculator();
// calc.read();
// alert( "Sum=" + calc.sum());
// alert( "Mul=" + calc.mul());


// Задача 3 Создайте аккумулятор

function Accumulator (startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.a = +prompt("введите число");
        this.value += this.a;
    }

}

let accumulator = new Accumulator(3);
accumulator.read();
accumulator.read();
console.log(accumulator.value);

