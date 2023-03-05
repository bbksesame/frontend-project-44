#!/usr/bin/env node
/* eslint-disable func-names */

import readlineSync from 'readline-sync';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const znaki = ['-', '+', '*'];
const rand = Math.floor(Math.random() * znaki.length);
const znak = znaki[rand];

const mathItUp = {
  '+': function (x, y) { return x + y; },
  '-': function (x, y) { return x - y; },
  '*': function (x, y) { return x * y; },
};

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${userName}!`);
console.log('What is the result of the expression?');
let i = 0;
while (i < 3) {
  const random1 = getRandomInt(10, 50);
  const random2 = getRandomInt(10, 30);
  const randomSum = mathItUp[znak](random1, random2);
  const number = readlineSync.question(`Question: ${random1} ${znak} ${random2} \nYour answer: `);
  if (+number === randomSum) {
    console.log('Correct!');
    i += 1;
  } else if (number !== randomSum) {
    console.log(`'${number}' is wrong answer ;(. Correct answer was '${randomSum}'. \nLet's try again, ${userName}!`);
    break;
  }
}
if (i === 3) {
  console.log(`Congratulations, ${userName}!`);
}
