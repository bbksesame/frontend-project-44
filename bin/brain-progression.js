#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getRandomInt from '../../frontend-project-44/src/random.js'




console.log('Welcome to the Brain Games!')
const userName = readlineSync.question('May I have your name?: ');
console.log('Hello, ' + userName + '!')
console.log('What number is missing in the progression?')
let k = 0
loop: while (k < 3) {
    var arrProg = []
var arrTest = []
var randomStart = getRandomInt(2,10)
var randomStep2 = getRandomInt(2,10)
var randomPos = getRandomInt(1,5)
var randomNum = getRandomInt(2,80)
var randomNums = getRandomInt(6,10)


    const arifmetProg = (num,numProg) => {
        for (let i = 0; i < numProg; i++) {
          arrTest.push(num + randomStart)
          randomStart = randomStart +  randomStep2
        } 
       arrProg = arrTest.slice()
        arrProg[randomPos] = '..'
        return arrProg
      }
      var go = arifmetProg(randomNum, randomNums)

const number = readlineSync.question(`Question: ${go}\nYour answer: `);
if (+number !== arrTest[randomPos]) {
    console.log(`'${number}' is wrong answer ;(. Correct answer was '${arrTest[randomPos]}'. \nLet's try again, ${userName}!`)
    break loop
} if (+number === arrTest[randomPos]) {
    console.log('Correct!')
    k++
    continue
} 
}
if (k === 3) {
    console.log('Congratulations, ' + userName + '!')
}