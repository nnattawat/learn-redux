let redux = require('redux');

console.log('Start redux example')

// Pure function
// * don't require or update variable outside a function
// * giving the same params always returns same output
// * params are not modified
// * no async call
let add = (a, b) => a + b;
console.log(add(1, 2));

// Function in redux have to be pure function
