import { useRef, useEffect } from "react";
import { bgMouseMove } from "../utils/utils";
import "../App.css";
import "./About.css";

function About() {
  const aboutContainer = useRef();
  const onMouseMove = (e) => bgMouseMove(e, aboutContainer);

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
        I'm a beginning JavaScript developer with some experience in React,
        Express and ThreeJS. I build REST APIs using Express and Single Page
        Applications with React. Also build mobile apps with Flutter.
      </div>
    </div>
  );
}

export default About;
