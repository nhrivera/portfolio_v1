import React from "react";
import "./App.css";
// import Preloader from "./Components/Preloader";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Social from "./Components/Social";

const App = () => {
  return (
    <div>
      <Navigation />
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
      <Social />
    </div>
  );
};

export default App;
