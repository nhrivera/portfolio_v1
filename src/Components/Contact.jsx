import React from "react";
import "../Styling/contact.css";

const Contact = () => {
  return (
    <div className="contactComponent">
      <div className="contactContainer" id="contact">
        <form action="https://formspree.io/meqrlrpl" method="POST">
          <h1 className="header">Get In Touch</h1>
          <p className="subHead">
            Feel free to ask me any questions. I'll respond as soon as possible!
          </p>
          <div className="form-input">
            <label>Email</label>
            <input type="text" name="_replyto" />
          </div>
          <div className="form-input">
            <label for="your_name">Name</label>
            <input
              id="your_name"
              type="text"
              name="your_name"
              autocomplete="off"
            />
          </div>

          <div className="form-input">
            <label for="your_message">Message</label>
            <textarea
              name="your_message"
              id="your_message"
              cols="40"
              rows="10"
            ></textarea>
          </div>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
