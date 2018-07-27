let redux = require('redux');

// let todoId = 1;

// let defaultState = {
//   searchText: '',
//   showCompleted: false,
//   todos: []
// };
//
// let reducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case 'CHANGE_SEARCH_TEXT':
//       return {
//         ...state,
//         searchText: action.searchText
//       }
//       break;
//     case 'ADD_TODO':
//       return {
//         ...state,
//         todos: [
//           ...state.todos,
//           {
//             id: todoId++,
//             title: action.title
//           }
//         ]
//       }
//       break;
//     case 'REMOVE_TODO':
//       return {
//         ...state,
//         todos: state.todos.filter(todo => todo.id !== action.id)
//       }
//       break;
//     default:
//       return state;
//   }
// };


// searchText reducer and action generators
// let searchTextReducer = (state = '', action) => {
//   switch (action.type) {
//     case 'CHANGE_SEARCH_TEXT':
//       return action.searchText
//       break;
//     default:
//       return state;
//   }
// };
//
// let changeSearchText = (searchText) => {
//   return {
//     type: 'CHANGE_SEARCH_TEXT',
//     searchText
//   }
// };
//
// // todos reducer and action generators
// let todosReducer = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [
//         ...state,
//         {
//           id: todoId++,
//           title: action.title
//         }
//       ];
//       break;
//     case 'REMOVE_TODO':
//       return state.filter(todo => todo.id !== action.id);
//       break;
//     default:
//       return state;
//   }
// };
//
// let addTodo = (title) => {
//   return {
//     type: 'ADD_TODO',
//     title
//   }
// };
//
// let removeTodo = (id) => {
//   return {
//     type: 'REMOVE_TODO',
//     id: id
//   }
// };
//
// // Simplify reducer using combine reducers
// let reducer = redux.combineReducers({
//   searchText: searchTextReducer,
//   todos: todosReducer
// });
//
// let store = redux.createStore(reducer, redux.compose(
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// ));

let actions = require('./actions/index');
let store = require('./store/configureStore').configure();

// Subscribe to changes
let unsubscribe = store.subscribe(() => {
  let state = store.getState();
  console.log('state has changed to:', state);
});

console.log('init state:', store.getState());
store.dispatch(actions.changeSearchText('search 1'));

// You can unsubscribe to future changes
// unsubscribe();

store.dispatch(actions.changeSearchText('search 2'));

store.dispatch(actions.addTodo('Todo 1'));

store.dispatch(actions.addTodo('Todo 2'));

// store.dispatch(actions.removeTodo(1));
store.dispatch(store.dispatch(actions.addTodo('Todo 3')));
store.dispatch(store.dispatch(actions.removeTodo(1)));
