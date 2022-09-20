function myFunction(num) {
    return num - 1
}

let num = 10
let add = 3
add = myFunction(add)
add = myFunction(add)

// What is the value of ADD and NUM at the end of the program? Why?
//
// - NUM will be 10
// - ADD will be 2 after line 7 and 1 after line 8
// - The ADD variable is setting itself to the returned value of the function 
// - that it is being called with the same variable as its parameter.
// - The function will then subtract 1 from the parsed value (ADD).
// - It is called twice, so -2. ADD is 3 at the start, will be 1 at the end.

console.log(`Add: ${add} num: ${num}`)
