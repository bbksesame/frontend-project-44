import getRandomNum from '../getRandomNum.js';
import startGame from '../index.js';

const description = 'What number is missing in the progression?';

const randomNum = getRandomNum(2, 80);
const randomNums = getRandomNum(6, 10);
let randomStart = getRandomNum(2, 10);
const randomStep2 = getRandomNum(2, 10);
const randomPos = getRandomNum(1, 5);

const getQuestionAndAnswer = () => {
  const arrAnswer = [];
  let arrQuestion = [];
  for (let i = 0; i < randomNums; i += 1) {
    arrAnswer.push(randomNum + randomStart);
    randomStart += randomStep2;
  }
  arrQuestion = arrAnswer.slice();
  arrQuestion[randomPos] = '..';
  const question = arrQuestion.join(' ');
  const answer = arrAnswer[randomPos];
  return [question, String(answer)];
};

const start = () => startGame(getQuestionAndAnswer, description);

export default start;
