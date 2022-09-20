function myFunction(num1, num2) {
    console.log(num3)
}

const num1 = 10
const num2 = 1
const num3 = 20

myFunction(num3, num1)

// What will be logged out on the console when this code rus? Why?
// 
// - The function has 2 parameters and none of them is called num3 as it is
// - being used on its code block.
// - SO the function is actually using the outer variable value which is 20.
// - The logged value will be 20.

// run..

// good