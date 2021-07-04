import { useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import { bgMouseMove } from "../utils/utils";
import "./Contact.css";

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_USER_ID
    );
    e.target.reset();
  };

  const contactRef = useRef();

  const onMouseMove = (e) => bgMouseMove(e, contactRef.current);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div
      ref={contactRef}
      id="contact"
      className="main-container flex-column centered"
    >
      <h1 className="header-title">Contact</h1>

      <form id="contactForm" className="flex-column" onSubmit={sendEmail}>
        <div className="input-container flex-column">
          <label htmlFor="name">Your name</label>
          <input name="name"></input>
        </div>
        <div className="input-container flex-column">
          <label htmlFor="email">Your email address</label>
          <input name="email"></input>
        </div>
        <div className="input-container flex-column">
          <label htmlFor="message">Message</label>
          <textarea name="message"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
