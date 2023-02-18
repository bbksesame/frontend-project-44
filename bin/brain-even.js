import readlineSync from 'readline-sync';
import getRandomInt from '../../frontend-project-44/src/random.js'
const random = getRandomInt(0,100)

console.log('Welcome to the Brain Games!')
const userName = readlineSync.question('May I have your name?: ');
console.log('Hello' + userName + '!')
console.log('Answer "yes" if the number is even, otherwise answer "no"')
const number = readlineSync.question(`Question: ${random} \nYour answer: `);
if (random % 2 === 0 && number === 'yes') {
    console.log('Correct!')
} if (random % 2 === 0 && number === 'no') {
    console.log("'no' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, " + userName + '!')
} if (random % 2 !== 0 && number === 'no') {
    console.log('Correct!')
} if (random % 2 !== 0 && number === 'yes')
console.log("'yes' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, " + userName + '!')
