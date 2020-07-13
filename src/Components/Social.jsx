import React from "react";
import "../Styling/social.css";

const Social = () => {
  return (
    <div className="icons">
      <i
        className="fas fa-chevron-down"
        style={{ WebkitTransform: "scaleY(-1)", transform: "scaleY(-1)" }}
      ></i>
      <a
        href="https://github.com/nhrivera"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/nestorhrivera"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a
        href="https://www.instagram.com/storrmcodes/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram-square"></i>
      </a>
      <i className="fas fa-chevron-down"></i>
    </div>
  );
};

export default Social;
