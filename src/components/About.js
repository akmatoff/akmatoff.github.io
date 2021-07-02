import { useRef, useEffect } from "react";
import { bgMouseMove } from "../utils/utils";
import "../App.css";
import "./About.css";

function About() {
  const aboutContainer = useRef();
  const onMouseMove = (e) => bgMouseMove(e, aboutContainer.current);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
  });

  return (
    <div
      ref={aboutContainer}
      className="main-container flex-column centered"
      id="about"
    >
      <h1 className="header-title">About</h1>
      <div className="text-container">
        I'm a beginning JavaScript developer with some experience in React and
        Express. I'm here to build REST APIs using Express and Single Page
        Applications with React. I also design mobile apps with Flutter.
      </div>
      <div className="text-container">
        After spending years on not knowing exactly in what direction I want to
        move, looking for right technologies that I'd like to use I've come up
        with web development using JavaScript and Mobile Development using
        Flutter.
      </div>
    </div>
  );
}

export default About;
