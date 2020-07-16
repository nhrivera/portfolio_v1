import React from "react";
import "../Styling/navigation.css";
import $ from "jquery";

const Navigation = () => {
  $(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on("click", function (event) {
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        let hash = this.hash;

        //Setting scroll-snap-type to none to allow smooth scrolling animation
        $("html").css({
          "scroll-snap-type": "none",
        });

        // Using jQuery's animate() method to add smooth page scroll
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            // Add hash (#) to URL when done scrolling (default click behavior) and reverting scroll-snap-type to y mandatory.
            window.location.hash = hash;
            $("html").css({
              "scroll-snap-type": "y mandatory",
            });
          }
        );
      }
    });
  });
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
