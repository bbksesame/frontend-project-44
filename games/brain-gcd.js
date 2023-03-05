#!/usr/bin/env node

import readlineSync from 'readline-sync';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const del = (num1, num2) => {
    let arr1 = []
    let arr2 = []
    for (let i = 0; i <= num1; i++) {
    let fun1 = (num1 % i === 0) ? arr1.push(i) : i = i
    }  
    for (let j = 0; j <= num2; j++) {
    let fun2 = (num2 % j === 0) ? arr2.push(j) : j = j
    } 
   
    let result = arr1.filter(num => arr2.includes(num))
    return Math.max.apply(null, result)
  }



console.log('Welcome to the Brain Games!')
const userName = readlineSync.question('May I have your name?: ');
console.log('Hello, ' + userName + '!')
console.log('Find the greatest common divisor of given numbers')
let i = 0
loop: while (i < 3) {
var random1 = getRandomInt(13,99)
var random2 = getRandomInt(13,99)
var otv = del(random1,random2)
const number = readlineSync.question(`Question: ${random1} ${random2} \nYour answer: `);
if (+number === otv) {
    console.log('Correct!')
    i ++
    continue
} if (+number !== otv) {
    console.log(`'${number}' is wrong answer ;(. Correct answer was '${otv}'. \nLet's try again, ${userName}!`)
    break loop
}
}
if (i === 3) {
    console.log('Congratulations, ' + userName + '!')
}