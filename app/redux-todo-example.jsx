let redux = require('redux');

let defaultState = {
  searchText: '',
  showCompleted: false,
  todos: []
};

let reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      }
      break;
    default:
      return state;
  }
};

let store = redux.createStore(reducer);

console.log(`init state:`);
console.log(store.getState());

let action = {
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'todo'
}
store.dispatch(action);

console.log(`state after dispatch CHANGE_SEARCH_TEXT:`);
console.log(store.getState());
