function myFunction(num, num1) {
    console.log(num1)
}

let num = 10
let num1 = 2

myFunction(num)

// What value will be logged inside the function call? Why?
//
// - Once only the second parameter of the function is used in the code block:
// - The logged value will be NULL or UNDEFINED due to num1 never being assigned a value
// - The function is only being called with 1 parameter, which in teory will be the
// - num. num1 is never assigned.

// run..

// Yep. Undefined as expected.