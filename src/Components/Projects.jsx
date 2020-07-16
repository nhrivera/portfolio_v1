import React from "react";
import "../Styling/projects.css";
import quaranRead from "../Images/quaranRead.png";
import smartAgenda from "../Images/smartAgenda.png";
import GTS from "../Images/GTS.png";

const Projects = () => {
  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
  const myFunction = (num) => {
    let array = [0, 1, 2];
    array.splice(num, 1);
    console.log(array);
    document.getElementById(`${num}`).classList.toggle("show");
    array.map((x) =>
      document.getElementsByClassName(`dropbtn`)[x].classList.toggle("hide")
    );
  };

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      let array = [0, 1, 2];
      let dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
      array.map((x) =>
        document.getElementsByClassName(`dropbtn`)[x].classList.remove("hide")
      );
    }
  };
  return (
    <div className="projectsComponent" id="projects">
      <div className="dropdown">
        <h1 className="projectHeader">Projects</h1>
        <button onClick={() => myFunction("0")} className="dropbtn">
          SmartAgenda
        </button>
        <div id="0" className="dropdown-content">
          <p className="description">
            A Wyncode Academy project completed in a 2 week sprint. SmartAgenda
            is a web application for users such as Entrepreneurs and business
            owners to manage their work, including a clients list, appointment
            creator for clients to set their appointment date and a calendar
            with all appointments scheduled.
            <p className="tech">
              Technologies used: MongoDB, Express, React, Node.js, bootstrap,
              Fullcalendar, bcryptjs, moment
            </p>
          </p>

          <img src={smartAgenda} alt="Smart Agenda" className="projectImg" />
          <a href="https://smartagenda-wyncode.herokuapp.com/" className="url">
            Visit Smart Agenda
          </a>
        </div>
        <button onClick={() => myFunction("1")} className="dropbtn">
          QuaranRead
        </button>
        <div id="1" className="dropdown-content">
          <p className="description">
            A Wyncode Academy project completed in a 1 week sprint. With the
            major impact on COVID-19, the purpose of QuaranRead is for users to
            find new books to read (including free or paid books) with the
            options of a simple search of a word/phrase or a random book result
            using the random book tab.
            <p className="tech">
              Technologies used: React, Node.js, google books API, Bootstrap,
              Faker.js
            </p>
          </p>
          <img src={quaranRead} alt="quaranRead" className="projectImg" />
          <a href="https://quaranread.herokuapp.com/" className="url">
            Visit QuaranRead
          </a>
        </div>
        <button onClick={() => myFunction("2")} className="dropbtn">
          GuessThatSong
        </button>
        <div id="2" className="dropdown-content">
          <p className="description">
            A simple javascript game that runs on the Terminal. The objective of
            this game is for the player to guess the name of the song with the
            lyrics given. The player only has three tries before the game ends.
            <p className="tech">
              Technologies used: Javasctipt, node.js, Readline-sync
            </p>
          </p>
          <img src={GTS} alt="Guess That Song" className="projectImg" />
          <a href="https://github.com/nhrivera/guess_that_song" className="url">
            Github Repo Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
