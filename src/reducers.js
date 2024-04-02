
// This file contains the reducer function for managing todos

// Initial state for todos
const initialState = [];

// Reducer function to manage todo state
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    // Add a new todo to the state
    case 'ADD_TODO':
      return [...state, action.payload];
    // Toggle the completion status of a todo
    case 'TOGGLE_TODO':
      return state.map((todo, index) =>
        index === action.payload.index ? { ...todo, completed: !todo.completed } : todo
      );
    // Delete a todo from the state
    case 'DELETE_TODO':
      return state.filter((todo, index) => index !== action.payload.index);
    default:
      return state;
  }
};

export default todoReducer;
