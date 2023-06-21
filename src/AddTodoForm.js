// AddTodoForm.js
import React, { useState } from "react";

const AddTodoForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      description,
      status: "not completed"
    };
    addTask(newTask);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="add-todo-form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          className="add-todo-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="add-todo-textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="add-todo-button">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTodoForm;
