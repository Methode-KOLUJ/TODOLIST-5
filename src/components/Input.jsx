import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export const AddTaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return; 
    onAddTask(task.trim());
    setTask(""); 
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center space-x-4 bg-white dark:bg-[#1a2238] p-4 border-2 border-grey-500 dark:border-gray-900 shadow-md text-gray-800 dark:text-white transition-all"
    >
      <input
        type="text"
        placeholder="Fixez vos objectifs du jours ..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-grow p-2 border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:border-[gray] focus:border-[1px] focus:ring-0 dark:focus:border-[gray] rounded"
      />
      <button
        type="submit"
        className="px-4 py-3 bg-blue-500 text-white hover:bg-blue-600 transition-all dark:bg-blue-700 dark:hover:bg-blue-800 rounded"
      >
         <FaPaperPlane className="h-5 w-5" />
      </button>
    </form>
  );
};
