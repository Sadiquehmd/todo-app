
// This file creates the Redux store and handles state persistence using local storage

import { createStore } from 'redux';
import todoReducer from './reducers';

// Load state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('todoState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

// Save state to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('todoState', serializedState);
  } catch {
    // Ignore write errors
  }
};

// Initialize state with data from local storage
const persistedState = loadState();

// Create the Redux store with the todoReducer and persisted state
const store = createStore(
  todoReducer,
  persistedState
);

// Subscribe to store changes and save state to local storage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
