import readlineSync from 'readline-sync';

const nameCheck = (text) => {
console.log('Welcome to the Brain Games!')
const userName = readlineSync.question('May I have your name?: ');
return text + userName + '!'
}
export default nameCheck
