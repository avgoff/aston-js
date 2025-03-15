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

//hw-4
//1
function deepCopy(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj; // если не объект или null, вернуть сам объект
  }

  let copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    copy[key] = deepCopy(obj[key]); // рекурсивно копируем свойства объекта
  }

  return copy;
}

const ob = {a: 3, b: {c: 7}}

const obCopy = deepCopy(ob)

obCopy.a = 10
obCopy.b.c = 11

console.log('ob: ', ob.a) // 3
console.log('ob: ', ob.b.c) // 7
console.log('obCopy: ', obCopy.a) // 10
console.log('obCopy: ', obCopy.b.c) // 11

//2
const myArr = [1,2,3,4,5];
const myArr2 = [1,2,3,4,'str'];
const myArr3 = [5,2,3,1,3,3,5,4,];

function selectFromInterval (arr, a, b) {
    if(!Array.isArray(arr)){
        throw new Error ("first parameter must be an array!");
    }
    if(!arr.every(value => typeof(value) === 'number')){
        throw new Error ("There are not only numbers in the array!");
    }
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        throw new Error ("incorrect input parameters!");
    }

    const sortPos = [];
    sortPos.push(a,b)
    sortPos.sort((a,b)=> a-b);      
    return arr.filter(value=> value >= sortPos[0] && value <= sortPos[1]).sort((a,b)=> a-b)
}
console.log(selectFromInterval(myArr, 3, 1));
console.log(selectFromInterval(myArr3, 3, 1));
console.log(selectFromInterval(myArr2, 3, 1));//Error "There are not only numbers in the array!"

//3
const arr = [
    {name: 'Bob', age: '25'},
    {name: 'Ann', age: '30'},
    {name: 'Tom', age: '35'},
]

const fn = (arg) => {
    return (item)=>{
        console.log(item[arg]);
    }
}

arr.forEach(fn('name')) // Bob, Ann, Tom
arr.forEach(fn('age')) // 25, 30, 35

//4
let myStr1 = "Some string about something"
function reverseStr(str) {
    const strlSplitted = str.split(' ');
    const revStr = strlSplitted.map( (word)=>{
        return word.split('').reverse().join('')
    })
    return revStr.reverse().join(' ')
}
console.log(reverseStr(myStr1));

//hw-5
//1
function memoize(callback) {
    const cache = {}

    return function(...args) {
        const key = JSON.stringify(args.sort());
        console.log(key)
        console.log('cache before ', cache)

        if (cache[`${key}`] !== undefined ) {
            console.log('Get from cache')
            return cache[`${key}`]
        }

        console.log('First calculation')
        const result = callback(...args)
        cache[`${key}`] = result
        console.log('cache after ', cache)

        return result
    }
}
function sum(...args){
    return args.reduce((acc, item)=>{
        acc += item;
        return acc
    }, 0)
}

const sumWithCache = memoize(sum);
console.log(sumWithCache(1,2,3));
console.log(sumWithCache(2,1,3));
console.log(sumWithCache(3,2,1));

//2
function add(a) {
  return function(b) {
    if (b === undefined) {
      return a;
    }
    return add(a + b);
  };
}
console.log(add(1)(2)(3)()); // 6
console.log(add(1)(2)(3)(4)(5)()); // 15

//3
function logger() {
   console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

console.log(logger.call(obj));
console.log(logger.apply(obj));

const somVar = logger.bind(obj);
console.log(somVar());

//4
Function.prototype.bind = function(context) {
    const func = this; 
    return function(...args) { 
        return func.apply(context, args); 
    }
}