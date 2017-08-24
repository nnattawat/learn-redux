let redux = require('redux');
let {searchTextReducer, todosReducer} = require('./../reducers/index')

export let configure = () => {
  // Simplify reducer using combine reducers
  let reducer = redux.combineReducers({
    searchText: searchTextReducer,
    todos: todosReducer
  });

  let store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}
