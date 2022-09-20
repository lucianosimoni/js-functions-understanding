function getSomeValue() {
    return 2
}
  
function myFunction(num1) {
    return getSomeValue() * getSomeValue()
}
  
const result = myFunction(5)

// What will be the value of result when this code runs? Why?
//
// - MyFunc uses the returned value 2 to multiply twice.
// - 2 * 2 = 4

console.log(result)