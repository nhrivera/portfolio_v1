import React from "react";
import "../Styling/navigation.css";

const Navigation = () => {
  return (
    <div className="navContainer">
      <div className="name">
        <a href="#home">Nestor Rivera</a>
      </div>
      <div className="tabs">
        <a href="#about">About me</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Get In Touch</a>
      </div>
    </div>
  );
};

export default Navigation;
