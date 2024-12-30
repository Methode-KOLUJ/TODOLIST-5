import React, { useState, useEffect } from "react";

const Heure = () => {
  const [time, setTime] = useState("");

  const updateTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    setTime(`${hours}h${minutes<10 ?`0${minutes}`:minutes}`);
  };

  useEffect(() => {
    updateTime(); // Set initial time
    const interval = setInterval(updateTime, 1000 * 60); 
    return () => clearInterval(interval); 
  }, []);

    return (<>{time}</>)
};

export default Heure;
