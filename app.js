'use strict'
function helloworld(){
    return "Hello world";
}
console.log(helloworld());

function sum(a,b){
    return a + b;
}
console.log(sum(2,23));

function myPromt(){
    const num = prompt('Введите число', '');
    const parsedNum = Number(num);

    if (!Number.isInteger(parsedNum)){
        alert('Некорректный ввод!');
        return;
    }

    const numCount = prompt('Введите систему счисления для числа', '');
    const parsedNumCount = Number(numCount);

    if (!Number.isInteger(parsedNumCount) || parsedNumCount < 2 || parsedNumCount > 36 ){
        alert('Некорректный ввод!');
        return;
    }

    const parseNum = parsedNum.toString(parsedNumCount);
    const resultText = `Ответ: число ${num} в ${parsedNumCount}-ой системе счисления = ${parseNum} `;
    alert(resultText);
}
myPromt()
//заданиие 6
const res = "B" + "a" + (1 - "hello");
console.log(res); //1) конкатенация строк "Ba" 2) число минус строка это NaN 3) BaNaN

const res2 = (true && 3) + "d";
console.log(res2); // 1) логическое && вернет первый false или последний true -> 3 2) конкатенация, будет '3d'

const res3 = Boolean(true && 3) + "d";
console.log(res3); // 1) логическое && вернет первый false или последний true -> 3 2) 3 это true 3) конкатенация 'trued'