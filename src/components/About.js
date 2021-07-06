import { useRef, useEffect } from "react";
import { bgMouseMove } from "../utils/utils";
import "../App.css";
import "./About.css";

function About() {
  const aboutContainer = useRef();
  const onMouseMove = (e) => bgMouseMove(e, aboutContainer.current);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div
      ref={aboutContainer}
      className="main-container flex-column centered"
      id="about"
    >
      <h1 className="header-title">About</h1>
      <div className="text-container">
        I'm a JavaScript developer with more than 3 years experience in
        HTML/CSS/JS and 1 year experience in React and Express.
      </div>
      <div className="text-container">
        I build web apps that provide most common features which solve common
        problems. Besides web apps I build mobile applications using Flutter.
      </div>
      <div className="text-container">
        I'm constantly working on my knowledge and skills to create better apps
        people would enjoy using.
      </div>
    </div>
  );
}

export default About;
