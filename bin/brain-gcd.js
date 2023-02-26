#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getRandomInt from '../../frontend-project-44/src/random.js'
import del from '../../frontend-project-44/src/delitel.js'
import rand from '../../frontend-project-44/src/randOper.js'
import math_it_up from '../../frontend-project-44/src/math.js'


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