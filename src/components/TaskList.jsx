import React, { useState, useEffect } from "react";
import { FaTrash, FaCheckCircle } from "react-icons/fa";
import { useWindowSize } from "react-use";
import { Congratulations } from "./Congratulations";

export const TaskList = ({ tasks, onDeleteTask, onToggleTask, setTasks }) => {
  const [allCompleted, setAllCompleted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    const completedTasks = tasks.filter((task) => task.completed).length;
    if (completedTasks === tasks.length && tasks.length > 0) {
      setShowConfetti(true);
      setAllCompleted(true);
    } else {
      setShowConfetti(false);
      setAllCompleted(false);
    }
  }, [tasks]);

  const handleContinue = () => {
    const updatedTasks = tasks.map((task) => ({
      ...task,
      completed: false,
    }));
    setTasks(updatedTasks);
    setAllCompleted(false);
    setShowConfetti(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    if (allCompleted) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [allCompleted]);

  return (
    <>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {tasks.map((task, index) => (
          <li
            key={task.id}
            className={`flex items-center justify-between p-4 shadow-sm ${
              task.completed
                ? "bg-gray-200 dark:bg-gray-800 text-gray-500 line-through"
                : "bg-white dark:bg-[#1a2238] text-black dark:text-white"
            }`}
          >
            <div className="flex items-center space-x-4">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white font-bold dark:bg-blue-400">
                {index + 1}
              </span>
              <p className="text-md font-medium">{task.name}</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => onToggleTask(task.id)}
                className={`p-2 ${
                  task.completed
                    ? "text-green-400"
                    : "text-gray-500 hover:text-green-500"
                } transition-colors`}
                aria-label={`Valider la tâche ${task.name}`}
              >
                <FaCheckCircle className="w-5 h-5" />
              </button>
              <button
                onClick={() => onDeleteTask(task.id)}
                className="p-2 text-red-500 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                aria-label={`Supprimer la tâche ${task.name}`}
              >
                <FaTrash className="w-5 h-5" />
              </button>
            </div>
          </li>
        ))}
      </ul>

      <Congratulations
        allCompleted={allCompleted}
        showConfetti={showConfetti}
        width={width}
        height={height}
        handleContinue={handleContinue}
      />
    </>
  );
};
