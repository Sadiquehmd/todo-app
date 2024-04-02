
// This file contains action creators for Redux

// Action creator to add a new todo
export const addTodo = (task) => ({
  type: 'ADD_TODO',
  payload: {
    task,
    completed: false
  }
});

// Action creator to toggle the completion status of a todo
export const toggleTodo = (index) => ({
  type: 'TOGGLE_TODO',
  payload: {
    index
  }
});

// Action creator to delete a todo
export const deleteTodo = (index) => ({
  type: 'DELETE_TODO',
  payload: {
    index
  }
});
