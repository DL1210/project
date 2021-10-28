"use strict"

//- вывести true, если n и m равны, иначе false

function outputTrueOrFalseOne () {
    let n = prompt('Введите число n','');
    let m = prompt('Введите число m','');
    if (m === n) {
        alert(true);
    } else {
        alert(false);
    }

}

// outputTrueOrFalseOne();

// - вывести true, если n > m, иначе false

function outputTrueOrFalseTwo () {
    let n = prompt('Введите число n','');
    let m = prompt('Введите число m','');
    if (n > m) {
        alert(true);
    } else {
        alert(false);
    }

}

// outputTrueOrFalseTwo();


// - вывести true, если m > n, иначе false

function outputTrueOrFalseThree () {
    let n = prompt('Введите число n','');
    let m = prompt('Введите число m','');
    if (n < m) {
        alert(true);
    } else {
        alert(false);
    }

}

// outputTrueOrFalseThree();

// - вывести true, если m > n > k, иначе false

function outputTrueOrFalseFour () {
    let n = prompt('Введите число n','');
    let m = prompt('Введите число m','');
    let k = prompt('Введите число k','');
    if (n > k && n < m && m > k) {
        alert(true);
    } else {
        alert(false);
    }

}

// outputTrueOrFalseFour();

// - вывести true, если m > n < k, иначе false

function outputTrueOrFalseFive () {
    let n = prompt('Введите число n','');
    let m = prompt('Введите число m','');
    let k = prompt('Введите число k','');
    if (n < k && n < m) {
        alert(true);
    } else {
        alert(false);
    }

}

// outputTrueOrFalseFive();


// - вывести true, если m,n,k четные, иначе false

function outputTrueOrFalseSix () {
    let n = prompt('Введите число n','');
    let m = prompt('Введите число m','');
    let k = prompt('Введите число k','');
    if (m % 2 === 0 && n % 2 === 0 && k % 2 ===0) {
        alert(true);
    } else {
        alert(false);
    }

}

// outputTrueOrFalseSix();

// - вывести true, если m и n равны, и n < k, иначе false

function outputTrueOrFalseSeven () {
    let n = prompt('Введите число n','');
    let m = prompt('Введите число m','');
    let k = prompt('Введите число k','');
    if (m === n && n < k && m < k) {
        alert(true);
    } else {
        alert(false);
    }

}

// outputTrueOrFalseSeven();

// - вывести true, если m + n равны k, иначе false

function outputTrueOrFalseEight () {
    let n = +prompt('Введите число n','');
    let m = +prompt('Введите число m','');
    let k = +prompt('Введите число k','');
    if (m + n === k) {
        alert(true);
    } else {
        alert(false);
    }

}

// outputTrueOrFalseEight();

// - вывести true, если m + k < n, иначе false

function outputTrueOrFalseNine () {
    let n = +prompt('Введите число n','');
    let m = +prompt('Введите число m','');
    let k = +prompt('Введите число k','');
    if (m + k < n) {
        alert(true);
    } else {
        alert(false);
    }

}

// outputTrueOrFalseNine();