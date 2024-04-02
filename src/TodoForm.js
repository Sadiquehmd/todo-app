
import React from 'react';

// This component represents the form for adding todos
const TodoForm = ({ handleSubmit }) => {
  return (
    <form className="d-flex" onSubmit={handleSubmit}>
      {/* Input field for entering new todo */}
      <input className="form-control me-2" placeholder="Enter Task" name="task" />
      {/* Button to submit the form */}
      <button className="btn btn-outline-light" type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
