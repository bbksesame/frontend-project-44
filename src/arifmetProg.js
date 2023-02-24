import getRandomInt from '../../frontend-project-44/src/random.js'
var arrProg = []
var arrTest = []
var randomStart = getRandomInt(2,10)
var randomStep2 = getRandomInt(2,10)
var randomPos = getRandomInt(1,9)
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
export default arifmetProg