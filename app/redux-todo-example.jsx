let redux = require('redux');

let defaultState = {
  searchText: '',
  showCompleted: false,
  todos: []
};

let todoId = 1;

let reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      }
      break;
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: todoId++,
            title: action.title
          }
        ]
      }
      break;
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      }
      break;
    default:
      return state;
  }
};

let store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
let unsubscribe = store.subscribe(() => {
  let state = store.getState();
  console.log('state has changed to:', state);
});

console.log('init state:', store.getState());
store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'search 1'
});

// You can unsubscribe to future changes
// unsubscribe();

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'search 2'
});

store.dispatch({
  type: 'ADD_TODO',
  title: 'Todo 1'
});

store.dispatch({
  type: 'ADD_TODO',
  title: 'Todo 2'
});


store.dispatch({
  type: 'REMOVE_TODO',
  id: 1
});
