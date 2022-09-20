function myFunction(num1, num2) {
    num1 + num2
}

const result = myFunction(5, 5)

// What is the value of RESULT after calling this functions? Why?
//
// - The value will be NULL.
// - Because the function does not return any value when called.
// - It does the work inside and keeps it for itself.

console.log(result)

// I was wrong. The returned value was undefined... I thought that it was possible.
// Just didn't belived that the returned would be undefined once it was defined with a function.
// Even tho a function call as a value should not be read as a true value.