import React from "react";
import "../Styling/projects.css";

const Projects = () => {
  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
  const myFunction = (num) => {
    document.getElementById(`${num}`).classList.toggle("show");
    let dropdowns = document.getElementsByClassName("dropdown-content");

    let openDropdown = dropdowns[0];
    if (openDropdown.classList.contains("show")) {
      openDropdown.classList.remove("show");
    }
  };

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
  return (
    <div className="projectsComponent" id="projects">
      <div className="dropdown">
        <h1 className="projectHeader">Projects</h1>
        <button onClick={() => myFunction("1")} className="dropbtn">
          SmartAgenda
        </button>
        <div id="1" className="dropdown-content">
          <div>
            <p>
              A Wyncode Academy project completed in a 2 week sprint.
              SmartAgenda is a web application for users such as Entrepreneurs
              and business owners to manage their work, including a clients
              list, appointment creator for clients to set their appointment
              date and a calendar with all appointments scheduled.
            </p>
            <p>
              Technologies used: MongoDB, Express, React, Node.js, bootstrap,
              Fullcalendar, bcryptjs, moment
            </p>
            <a href="https://smartagenda-wyncode.herokuapp.com/">SmartAgenda</a>
          </div>
        </div>
        <button onClick={() => myFunction("2")} className="dropbtn">
          QuaranRead
        </button>
        <div id="2" className="dropdown-content">
          <div>
            <p>
              A Wyncode Academy project completed in a 1 week sprint. With the
              major impact on COVID-19, the purpose of QuaranRead is for users
              to find new books to read (including free or paid books) with the
              options of a simple search of a word/phrase or a random book
              result using the random book tab.
            </p>
            <p>
              Technologies used: React, Node.js, google books API, Bootstrap,
              Faker.js
            </p>
            <a href="https://quaranread.herokuapp.com/">QuaranRead</a>
          </div>
        </div>
        <button onClick={() => myFunction("3")} className="dropbtn">
          GuessThatSong
        </button>
        <div id="3" className="dropdown-content">
          <p>
            A simple javascript game that runs on the Terminal. The objective of
            this game is for the player to guess the name of the song with the
            lyrics given. The player only has three tries before the game ends.
          </p>
          <a href="https://github.com/nhrivera/guess_that_song">
            Github Repo Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
