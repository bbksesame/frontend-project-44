import readlineSync from 'readline-sync';

const nameCheck = (text) => {
console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name?: ');
return text + name
}
export default nameCheck
