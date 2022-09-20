function getSomeValue() {
    return 2
}
  
function myFunction(num1) {
    const num2 = getSomeValue()
    return num1 * num2
}
  
const result = myFunction(5)

// What will be the value of result when this code runs? Why?
//
// - myFunc multiplies num1, which is parsed when called, with num2 which is the
// - returned value of the getSomeValue func (number 2 returned)
// - 5 * 2 = 10

console.log(result)