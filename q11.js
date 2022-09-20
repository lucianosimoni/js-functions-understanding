function myFunction(num1, num2, num3) {
    return num1 + num2 + num3
}
  
const num1 = 10
const num2 = 1
const num3 = 20
  
const result = myFunction(1, 1, 1)

// What will be the value of result when this code runs? Why?
//
// - The function does the sum of all the 3 parameters together
// - When called, the parsed values are 1 1 and 1.
// - 1+1+1 = 3

console.log(result)