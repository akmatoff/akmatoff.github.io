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
    <div ref={aboutContainer} className="main-container flex-row" id="about">
      <div className="container-inner flex-column">
        <h1 className="header-title">About</h1>
        <div className="text-container">
          I'm mostly a self-taught front-end developer who is open to build web
          apps that solve problems. I have passion for solving problems using
          coding and I am (almost) always open to learn new things!
        </div>
        <div className="text-container">
          I've tried quite a lot of programming languages such as Python, Java,
          C# and Dart during my trip into programming. But my first, favorite
          and language which I'm most experienced with is JavaScript, even
          though it's a bit weird language.
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

      <div id="cactus-3d-container">
        <canvas id="cactus-3d" />
      </div>
    </div>
  );
}

export default About;
