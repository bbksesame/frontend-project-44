#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getRandomInt from '../../frontend-project-44/src/random.js'
import prime from '../../frontend-project-44/src/prime.js'


console.log('Welcome to the Brain Games!')
const userName = readlineSync.question('May I have your name?: ');
console.log('Hello, ' + userName + '!')
console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
let i = 0
loop: while (i < 3) {
    var num = getRandomInt(1,100)
var p = prime(num)
    const number = readlineSync.question(`Question: ${num}\nYour answer: `);
    if (number !== 'yes' && number !== 'no') {
        console.log("Wrong answer ;(. Correct answer was 'yes'. \nLet's try again, " + userName + '!')
        break loop
    }
    if (p !== 'false' && number === 'yes') {
        console.log('Correct!')
        i++
        continue
    } if (p !== 'false' && number === 'no') {
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, " + userName + '!')
        break loop

    } if (p !== 'true' && number === 'no') {
        console.log('Correct!')
        i++
        continue
    } if (p !== 'true' && number === 'yes') {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, " + userName + '!')
    break loop
    } 
    }
    if (i === 3) {
        console.log('Congratulations, ' + userName + '!')
    }
