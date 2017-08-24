let todoId = 1;

export let searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return action.searchText
      break;
    default:
      return state;
  }
};

export let todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: todoId++,
          title: action.title
        }
      ];
      break;
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id);
      break;
    default:
      return state;
  }
};
