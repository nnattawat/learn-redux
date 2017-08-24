export let changeSearchText = (searchText) => {
  return {
    type: 'CHANGE_SEARCH_TEXT',
    searchText
  }
};

export let addTodo = (title) => {
  return {
    type: 'ADD_TODO',
    title
  }
};

export let removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id: id
  }
};
