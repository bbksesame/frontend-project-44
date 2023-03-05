#!/usr/bin/env node

import readlineSync from 'readline-sync';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${userName}!`);
console.log('What number is missing in the progression?');
let k = 0;
while (k < 3) {
  let arrProg = [];
  const arrTest = [];
  let randomStart = getRandomInt(2, 10);
  const randomStep2 = getRandomInt(2, 10);
  const randomPos = getRandomInt(1, 5);
  const randomNum = getRandomInt(2, 80);
  const randomNums = getRandomInt(6, 10);

  const arifmetProg = (num, numProg) => {
    for (let i = 0; i < numProg; i += 1) {
      arrTest.push(num + randomStart);
      randomStart += randomStep2;
    }
    arrProg = arrTest.slice();
    arrProg[randomPos] = '..';
    arrProg = arrProg.join(' ');
    return arrProg;
  };
  const go = arifmetProg(randomNum, randomNums);

  const number = readlineSync.question(`Question: ${go}\nYour answer: `);
  if (+number !== arrTest[randomPos]) {
    console.log(`'${number}' is wrong answer ;(. Correct answer was '${arrTest[randomPos]}'. \nLet's try again, ${userName}!`);
    break;
  } else if (+number === arrTest[randomPos]) {
    console.log('Correct!');
    k += 1;
  }
}
if (k === 3) {
  console.log(`Congratulations, ${userName}!`);
}
