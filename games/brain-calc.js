#!/usr/bin/env node

import readlineSync from 'readline-sync';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var znaki = ['-', '+', '*'];
var rand = Math.floor(Math.random() * znaki.length);
var znak = znaki[rand];

const math_it_up = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y },
    '*': function (x, y) { return x * y }
}


console.log('Welcome to the Brain Games!')
const userName = readlineSync.question('May I have your name?: ');
console.log('Hello, ' + userName + '!')
console.log('What is the result of the expression?')
let i = 0
loop: while (i < 3) {
var random1 = getRandomInt(10,50)
var random2 = getRandomInt(10,30)
var randomSum = math_it_up[znak](random1, random2);
const number = readlineSync.question(`Question: ${random1} ${znak} ${random2} \nYour answer: `);
if (+number === randomSum) {
    console.log('Correct!')
    i ++
    continue
} if (number !== randomSum) {
    console.log(`'${number}' is wrong answer ;(. Correct answer was '${randomSum}'. \nLet's try again, ${userName}!`)
    break loop
}

}
if (i === 3) {
    console.log('Congratulations, ' + userName + '!')
}