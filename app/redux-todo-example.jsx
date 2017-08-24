let redux = require('redux');

let defaultState = {
  searchText: '',
  showCompleted: false,
  todos: []
};

let reducer = (state = defaultState, action) => {
  return state;
};

let store = redux.createStore(reducer);

let currentState = store.getState();
console.log(currentState);
