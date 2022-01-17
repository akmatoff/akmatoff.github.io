import { useRef, useEffect } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiReact } from "react-icons/di";
import { SiRedux, SiReduxsaga, SiTypescript, SiExpress } from "react-icons/si";
import { IoCube } from "react-icons/io5";
import { FaAsterisk } from "react-icons/fa";
import { bgMouseMove } from "../utils/utils";
import "./About.css";

function Stack() {
  const stackContainer = useRef();
  const onMouseMove = (e) => bgMouseMove(e, stackContainer.current);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
  }, []);
  return (
    <div
      className="main-container flex-column centered"
      id="stack"
      ref={stackContainer}
    >
      <h1 className="header-title">Stack</h1>
      <div className="text-container">
        I'm familiar with technologies like:
        <div className="stack-container flex-row">
          <div className="stack-card flex-row centered">
            <AiFillHtml5 className="stack-card__icon" /> HTML
          </div>
          <div className="stack-card flex-row centered">
            <DiCss3 className="stack-card__icon" /> CSS
          </div>
          <div className="stack-card flex-row centered">
            <DiReact className="stack-card__icon" />
            React
          </div>
          <div className="stack-card flex-row centered">
            <SiExpress className="stack-card__icon" />
            Express
          </div>
          <div className="stack-card flex-row centered">
            <SiRedux className="stack-card__icon" />
            Redux
          </div>
          <div className="stack-card flex-row centered">
            <SiReduxsaga className="stack-card__icon" />
            Redux-Saga
          </div>
          <div className="stack-card flex-row centered">
            <SiTypescript className="stack-card__icon" />
            TypeScript
          </div>
          <div className="stack-card flex-row centered">
            <FaAsterisk className="stack-card__icon" />
            P5js
          </div>
          <div className="stack-card flex-row centered">
            <IoCube className="stack-card__icon" />
            Threejs
          </div>
        </div>
      </div>

      <div className="resume-container flex-column centered">
        <p>
          I am currently open for new opportunities and free to hire! Feel free
          to get in touch!
        </p>
        <a className="resume-link" href="front-end-dev-resume.pdf" download>
          View Resume
        </a>
      </div>
    </div>
  );
}

export default Stack;
