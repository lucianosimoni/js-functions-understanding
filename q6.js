function myFunction(num, num1) {
    console.log(num1)
}

let num = 10
let num1 = 2

myFunction(num1, num)

// What value will be logged inside the function call? Why?
//
// - The function's code block only uses the num1 parameter. num is never used
// - It is being called with 2 parameter (2, 10).
// - The num1 is the second parameter in the function, so the second input will be
// - its value. In this case: 10.
// - 10 will be logged.

// run...

// Yep. 10