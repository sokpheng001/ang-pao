// components/Firework.js
'use client'
import React, { useEffect } from "react";
import styles from "./Firework.module.css";

const FireworkComponent = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      createFirework();
    }, 2000); // Adjust interval as needed

    return () => clearInterval(interval);
  }, []);

  const createFirework = () => {
    const container = document.querySelector(".firework-container");
    const firework = document.createElement("div");
    firework.classList.add(styles.firework);
    firework.style.left = `${Math.random() * 100}%`; // Random horizontal position

    container.appendChild(firework);

    setTimeout(() => {
      firework.remove();
    }, 3000); // Adjust duration as needed
  };

  return <div className="firework-container mt-32" />;
};

export default FireworkComponent;
