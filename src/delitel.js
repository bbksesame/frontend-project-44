const del = (num1, num2) => {
    let arr1 = []
    let arr2 = []
    for (let i = 0; i <= num1; i++) {
    let result = (num1 % i === 0) ? arr1.push(i) : i = i
    }  console.log(arr1)
    for (let j = 0; j <= num2; j++) {
    let result = (num2 % j === 0) ? arr2.push(j) : j = j
    } console.log(arr2)
  
    result = arr1.filter(num => arr2.includes(num))
    return Math.max.apply(null, result)
  }
  console.log(del(27,12))