import React, { useState, useEffect } from "react"; 
import { AddTaskForm } from "./Input";
import { TaskList } from "./TaskList";

export const TodoApp = () => {
  const [tasks, setTasks] = useState(() => {
    // Charger les tâches depuis localStorage au premier rendu
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    // Sauvegarder les tâches dans localStorage à chaque modification
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (name) => {
    const newTask = { id: Date.now(), name, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <AddTaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        setTasks={setTasks} // Passer setTasks ici
        onDeleteTask={deleteTask}
        onToggleTask={toggleTaskCompletion}
      />
    </div>
  );
};
