function myFunction(num1) {
    if(false) {
      return -100
    }
  
    return num1 * 10
}
  
const result = myFunction(5)

// What will be the value of result when this code runs? Why?
//
// - will return num1 * 10.
// - 5 * 10 = 50

console.log(result)