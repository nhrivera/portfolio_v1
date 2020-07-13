import React from "react";
import "../Styling/home.css";

const Home = () => {
  return (
    <div className="homeComponent" id="home">
      <div className="homeContainer">
        <div className="layer">
          <p className="intro1">Hello there! My name is</p>
          <h1 className="intro2">Nestor Rivera,</h1>
          <h2 className="intro3">and I'm a Web Developer.</h2>
          <p className="shortBio">
            Along with being a web developer, I am also currently serving in the
            military as an Air Force Reservist. During the 2020 COVID-19
            pandemic, I took the initiative to expand my knowledge in coding and
            attended Wyncode Academy from which I learned Full Stack Web
            Development...
          </p>
          <a href="#about" className="readMore">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
