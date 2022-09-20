function getSomeValue() {
    return 2
}
  
function myFunction(num1) {
    const num2 = getSomeValue()
    return num1 * getSomeValue()
}
  
const result = myFunction(5)

// What will be the value of result when this code runs? Why?
//
// - Same thing as question 12 but num2 is never used.
// - 10

console.log(result)
