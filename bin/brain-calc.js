#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getRandomInt from '../../frontend-project-44/src/random.js'
import rand from '../../frontend-project-44/src/randOper.js'
import math_it_up from '../../frontend-project-44/src/math.js'

var znaki = ['-', '+', '*']
var znak = znaki[rand]

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