// two rules for recursion
// the process has to be the same each time you 'open a new box' (or w/e you're doing w/ function calling itself)
// each time you 'open the box' it has to be operating on a smaller and smaller problem

// when we get 'the ball' , it's our 'base case' - when our if statement is true, stop opening GB.
// another gift box 'recursive case' - need the func to call itself again.
// need the if statement or else infinite loop (stack overflow)
//  but if statement needs to be true at some point or else ^^ 
// if statement also needs return in order to end the code - it still goes to the next line

// Call Stack

// non recurseive:
// call stack is the order of functions being called
// funcs that call each other - get placed on top of funcs that arent done running in call stack

// Factorial
// 4! is 4 * 3 * 2 * 1
// but we could also say 4! is 4* 3! and so on until we reach 1 (our base case)

function factorial(n) {
    if(n === 1) return 1
    return n * factorial(n - 1)
}

console.log(factorial(4))

// we call it like explained above.
// then, 1 is returned to 2 ( 2* 1 = 2)
// then 2 is returned to 3 (3 * 2 = 6)
// then 6 is returne dto 4 (4 * 6 = 24)
// returns 24