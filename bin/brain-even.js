#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getRandomInt from '../../frontend-project-44/src/random.js'


console.log('Welcome to the Brain Games!')
const userName = readlineSync.question('May I have your name?: ');
console.log('Hello, ' + userName + '!')
console.log('Answer "yes" if the number is even, otherwise answer "no"')

let i = 0
loop: while (i < 3) {
var random = getRandomInt(2,100)
const number = readlineSync.question(`Question: ${random} \nYour answer: `);
if (number !== 'yes' && number !== 'no') {
    console.log("Wrong answer ;(. Correct answer was 'yes'. \nLet's try again, " + userName + '!')
    break 
}
if (random % 2 === 0 && number === 'yes') {
    console.log('Correct!')
    i = i + 1
    continue
} if (random % 2 === 0 && number === 'no') {
    console.log("'no' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, " + userName + '!')
  break loop
} if (random % 2 !== 0 && number === 'no') {
    console.log('Correct!')
    i = i + 1
    continue
} if (random % 2 !== 0 && number === 'yes') {
console.log("'yes' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, " + userName + '!')
break loop
} 
}
if (i === 3) {
    console.log('Congratulations, ' + userName + '!')
}


