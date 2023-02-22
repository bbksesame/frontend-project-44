import getRandomInt from '../../frontend-project-44/src/random.js'

const arifmetProg = (num,numProg) => {
    var arrProg = []
    var arrTest = []
    var randomStart = getRandomInt(2,4)
    var randomStep2 = getRandomInt(2,10)
    var randomPos = getRandomInt(1,9)
    for (let i = 0; i < numProg; i++) {
      arrTest.push(num + randomStart)
      randomStart = randomStart +  randomStep2
    }
    arrProg = arrTest
    arrProg[randomPos] = '..'
    return arrProg
  }

  export default arifmetProg


