import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { TodoApp } from "./components/Tasks";
import { Footer } from "./components/Footer";
import {Loader}  from "./components/Loader";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Loader />
      <main className="flex-grow">
        <TodoApp />
      </main>
      <Footer />
    </div>
  );
}

export default App;
