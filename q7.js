let counter = 1

function myFunction() {
    counter++
    return counter
}

myFunction()
const num = myFunction()

// What will the value of counter be at the end of this program? Why?
//
// - Initially counter is 1
// - Function is called in line 8, so counter is going to add 1. counter is 2
// - Function is called again in line 9 though the const num. counter is 3
// - It should be 3 at the end

console.log(counter)