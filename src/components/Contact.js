import "./Contact.css";

function Contact() {
  return (
    <div id="contact" className="main-container flex-column centered">
      <form id="contactForm" className="flex-column">
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
      </form>
    </div>
  );
}

export default Contact;
