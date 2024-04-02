
import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './actions';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

// This component represents the entire todo list app
const TodoList = ({ todos, addTodo, toggleTodo, deleteTodo }) => {
  // Function to handle form submission for adding new todo
  function handleSubmit(e) {
    e.preventDefault();
    let task = e.target.task.value;
    if (!task) {
      alert('Please provide a valid task');
      return;
    }
    // Dispatch action to add new todo
    addTodo(task);
    e.target.reset();
  }

  // Function to toggle the completion status of a todo
  function changeTaskStatus(index) {
    // Dispatch action to toggle todo status
    toggleTodo(index);
  }

  // Function to delete a todo
  function handleDelete(index) {
    // Dispatch action to delete todo
    deleteTodo(index);
  }

  return (
    <>
      <div className="container my-5">
        <div className="mx-auto rounded border p-4" style={{ width: '600px', backgroundColor: '#08618d' }}>
          {/* Header for the todo app */}
          <h2 className="text-white text-center mb-5">ToDo App</h2>
          {/* Component for adding new todos */}
          <TodoForm handleSubmit={handleSubmit} />
          {/* Render each todo item */}
          {todos.map((todo, index) => (
            <TodoItem key={index} todo={todo} index={index} changeTaskStatus={changeTaskStatus} handleDelete={handleDelete} />
          ))}
        </div>
      </div>
    </>
  );
};

// Mapping state to props
const mapStateToProps = (state) => ({
  todos: state
});

// Mapping dispatch to props
const mapDispatchToProps = {
  addTodo,
  toggleTodo,
  deleteTodo
};

// Connect TodoList component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
