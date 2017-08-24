let redux = require('redux');

console.log('Start redux example')

// Pure function
// * don't require or update variable outside a function
// * giving the same params always returns same output
// * params are not modified
// * no async call
let add = (a, b) => a + b;
console.log(add(1, 2));

// define reducer with default state
let reducer = (state = { name: 'Anonymous' }, action) => {
  return state;
};

// Function in createStore has to be pure function
let store = redux.createStore(reducer);

let currentState = store.getState();
console.log(currentState);
