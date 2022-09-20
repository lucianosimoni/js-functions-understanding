function myFunction(num) {
    return num - 1
}

let num = 10
num = myFunction(num)
num = myFunction(num)

// What is the value of NUM at the end of the program? Why?
//
// - The function receives the parameter NUM and subtracts 1 from it.
// - The function is being called with the input of the variable also called
// - ... num which has the value of 10.
// - Due to the function being called with a variable with value as its parameters
// - The function will process its code block with NUM as 10.
// - So the returned value should be 10-1, and once it is called again in line 7
// - 9-1, 8 as the final value.

console.log(num)
