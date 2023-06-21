// TodoItem.js
import React from "react";

const TodoItem = ({ task, deleteTask }) => {
  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
