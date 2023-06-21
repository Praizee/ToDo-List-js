// TodoList.js
import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import AddTodoForm from "./AddTodoForm";
import "./styles.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="todo-list-container">
      <h1>Todo List</h1>
      <AddTodoForm addTask={addTask} />
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default TodoList;
