import React from "react";
import "../Styling/aboutMe.css";
import me from "../Images/IMG_1223.jpeg";

const AboutMe = () => {
  return (
    <div className="aboutMeComponent" id="about">
      <div className="about">
        <h1 className="aboutMe">About Me</h1>
        <p className="bio">
          Along with being a web developer, I am also currently serving in the
          military as an Air Force Reservist.During the 2020 COVID-19 pandemic,
          I took the initiative to expand my knowledge in coding and attended
          Wyncode Academy from which I learned Full Stack Web Development. My
          new skill set includes knowledge in HTML, CSS, JavaScript, MongoDB,
          Express, React, Node.js, SQL, Bootstrap, and more as I continually
          learn new concepts and technologies day by day.
        </p>
        <img src={me} alt="Nestor Rivera" className="headshot"></img>
      </div>
    </div>
  );
};

export default AboutMe;
