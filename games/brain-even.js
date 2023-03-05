#!/usr/bin/env node

import readlineSync from 'readline-sync';
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log('Welcome to the Brain Games!')
const userName = readlineSync.question('May I have your name?: ');
console.log('Hello, ' + userName + '!')
console.log('Answer "yes" if the number is even, otherwise answer "no"')

let i = 0
loop: while (i < 3) {
var random = getRandomInt(2,100)
const number = readlineSync.question(`Question: ${random} \nYour answer: `);
if (number !== 'yes' && number !== 'no') {
    console.log(`'${number}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`)
    break 
}
if (random % 2 === 0 && number === 'yes') {
    console.log('Correct!')
    i = i + 1
    continue
} if (random % 2 === 0 && number === 'no') {
    console.log(`'${number}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`)
  break loop
} if (random % 2 !== 0 && number === 'no') {
    console.log('Correct!')
    i = i + 1
    continue
} if (random % 2 !== 0 && number === 'yes') {
console.log(`'${number}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`)
break loop
} 
}
if (i === 3) {
    console.log('Congratulations, ' + userName + '!')
}


