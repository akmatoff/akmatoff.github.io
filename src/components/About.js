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
        I am an 18 years old developer based in Kyrgyzstan. I build web apps
        that provide most common features which solve common problems. I'm
        constantly working on my knowledge and skills to create better apps
        people would enjoy using.
      </div>
      <div className="text-container">
        I've tried quite a lot of programming languages such as Python, Java, C#
        and Dart during my trip into programming. But my first, favorite and
        language which I'm most experienced with is JavaScript. 
      </div>
      <div className="text-container">
        Besides programming I make electronic music (
        <a className="link" href="https://cooroot.netlify.app">
          here is my musician profile link
        </a>
        ), play guitar and sing (probably I'm not a great singer).
      </div>
      <div className="text-container">
        Also I practice touch typing on websites like{" "}
        <a className="link" href="https://monkeytype.com">
          monkeytype
        </a>{" "}
        and{" "}
        <a className="link" href="https://10fastfingers.com">
          10fastfingers
        </a>
        . I really enjoy typing.
      </div>
    </div>
  );
}

export default About;
