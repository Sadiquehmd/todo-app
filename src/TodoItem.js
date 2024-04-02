
import React from 'react';

// This component represents a single todo item in the list
const TodoItem = ({ todo, index, changeTaskStatus, handleDelete }) => {
  return (
    <div className="rounded mt-4 p-2 d-flex" style={{ backgroundColor: todo.completed ? '#87FC68' : 'LightGray' }}>
      <div className="me-auto">{todo.task}</div>
      <div>
        {/* When clicked, toggle the completion status of the todo */}
        <i className={'h5 me-2 ' + (todo.completed ? 'bi bi-check-square' : 'bi bi-square')} style={{ cursor: 'pointer' }} onClick={() => changeTaskStatus(index)}></i>
        {/* When clicked, delete the todo */}
        <i className="bi bi-trash text-danger h5" style={{ cursor: 'pointer' }} onClick={() => handleDelete(index)}></i>
      </div>
    </div>
  );
};

export default TodoItem;
