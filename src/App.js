import React from "react";
import "./App.css";
import $ from "jquery";
// import Preloader from "./Components/Preloader";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Social from "./Components/Social";

const App = () => {
  $(document).ready(function () {
    $("a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        let hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          0,
          function () {
            window.location.hash = hash;
          }
        );
      }
    });
  });
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
