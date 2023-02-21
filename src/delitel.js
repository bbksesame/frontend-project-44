const del = (num1, num2) => {
    let arr1 = []
    let arr2 = []
    for (let i = 0; i <= num1; i++) {
    let fun1 = (num1 % i === 0) ? arr1.push(i) : i = i
    }  
    for (let j = 0; j <= num2; j++) {
    let fun2 = (num2 % j === 0) ? arr2.push(j) : j = j
    } 
   
    let result = arr1.filter(num => arr2.includes(num))
    return Math.max.apply(null, result)
  }


  export default del