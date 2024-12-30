import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-[#1a2238] text-gray-700 dark:text-gray-400 text-center py-6">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Tous droits réservés à{" "}
        <a
          href="tel:+243812539000"
          className="text-blue-500 dark:text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          KOLUJ_DEV
        </a>
      </p>
    </footer>
  );
};
