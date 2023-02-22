#!/usr/bin/env node

import readlineSync from 'readline-sync';
import arifmetProg from '../../frontend-project-44/src/arifmetProg.js'
import getRandomInt from '../../frontend-project-44/src/random.js'
import del from '../../frontend-project-44/src/delitel.js'
import rand from '../../frontend-project-44/src/randOper.js'
import math_it_up from '../../frontend-project-44/src/math.js'


console.log('Welcome to the Brain Games!')
const userName = readlineSync.question('May I have your name?: ');
console.log('Hello, ' + userName + '!')
console.log('What number is missing in the progression?')
let i = 0
loop: while (i < 3) {
var randomNum = getRandomInt(2,80)
var randomNums = getRandomInt(5,10)
var randomPos = getRandomInt(1,9)
var arrTest = []
const number = readlineSync.question(`Question: ${arifmetProg(randomNum, randomNums)}\nYour answer: `);
if (+number === arrTest[randomPos]) {
    console.log('Correct!')
    i ++
    continue
} if (+number === 'q') {
    break loop
}
}