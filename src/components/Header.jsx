import React, { useState, useEffect } from "react";
import LOGO from "../assets/KOLUJ_DEV.jpeg";
import { Lelo } from "./Date";

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Charger le mode depuis localStorage au montage du composant
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedTheme);
    if (savedTheme) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Basculer le mode et sauvegarder dans localStorage
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("darkMode", newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
  };

  return (
    <header className="flex items-center justify-between bg-white dark:bg-[#1a2238] p-4 shadow-md text-black dark:text-white transition-colors duration-300">
      <div className="flex items-center space-x-4">
        <img
          src={LOGO}
          alt="Logo"
          className="w-12 h-12 rounded-full hover:scale-110 transition-transform duration-300"
        />
        <h1 className="text-2xl sm:text-2xl md:text-3xl xl:text-4xl font-bold tracking-wide">TASK</h1>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm sm:text-xs font-light hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200">
          <Lelo/>
        </span>
        <button
          onClick={toggleTheme}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:shadow-lg transition-all"
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-yellow-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1.5M16.364 4.636l-1.06 1.06M21 12h-1.5M16.364 19.364l-1.06-1.06M12 21v-1.5M7.636 19.364l1.06-1.06M3 12h1.5M7.636 4.636l1.06 1.06M12 8.25a3.75 3.75 0 013.75 3.75 3.75 3.75 0 01-3.75 3.75 3.75 3.75 0 01-3.75-3.75 3.75 3.75 0 013.75-3.75z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0117.25 16.5c-5.385 0-9.75-4.365-9.75-9.75 0-1.694.43-3.29 1.187-4.67a.75.75 0 00-1.24-.818A11.218 11.218 0 004.5 6.75C4.5 12.135 8.865 16.5 14.25 16.5c1.694 0 3.29-.43 4.67-1.187a.75.75 0 00-.818-1.24c-.464.264-.952.488-1.452.67z"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};
