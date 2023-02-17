import readlineSync from 'readline-sync';
import nameCheck from '../../frontend-project-44/src/cli.js'

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const random = getRandomInt(0,100)

const numbers = (text) => {
console.log('Answer "yes" if the number is even, otherwise answer "no"')
const number = readlineSync.question(`Question: ${random} \nYour answer: `);
if (random % 2 === 0 && number === 'yes') {
    return 'Correct!'
} if (random % 2 === 0 && number === 'no') {
    return "'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, Bill!"
} if (random % 2 !== 0 && number === 'no') {
    return 'Correct!'
} if (random % 2 !== 0 && number === 'yes')
return "'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, Bill!"
}
console.log(numbers('qwerty'))