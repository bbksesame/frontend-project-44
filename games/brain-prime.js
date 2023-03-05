#!/usr/bin/env node

import readlineSync from 'readline-sync';

const prime = (n) => {
  if (n === 1) {
    return 'false';
  }
  if (n === 2) {
    return 'true';
  }
  for (let x = 2; x < n; x += 1) {
    if (n % x === 0) {
      return 'false';
    }
  }
  return 'true';
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let i = 0;
while (i < 3) {
  const num = getRandomInt(1, 100);
  const p = prime(num);
  const number = readlineSync.question(`Question: ${num}\nYour answer: `);
  if (number !== 'yes' && number !== 'no') {
    console.log(`Wrong answer ;(. Correct answer was 'yes'. \nLet's try again, ${userName}!`);
    break;
  } else if (p !== 'false' && number === 'yes') {
    console.log('Correct!');
    i += 1;
  } else if (p !== 'false' && number === 'no') {
    console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, ${userName}!`);
    break;
  } else if (p !== 'true' && number === 'no') {
    console.log('Correct!');
    i += 1;
  } else if (p !== 'true' && number === 'yes') {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${userName}!`);
    break;
  }
}
if (i === 3) {
  console.log(`Congratulations, ${userName}!`);
}
