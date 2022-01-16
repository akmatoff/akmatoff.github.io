import { useRef, useEffect } from "react";
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
          <div className="stack-card">HTML</div>
          <div className="stack-card">CSS</div>
          <div className="stack-card">React</div>
          <div className="stack-card">Redux</div>
          <div className="stack-card">Redux-Saga</div>
          <div className="stack-card">TypeScript</div>
          <div className="stack-card">P5js</div>
          <div className="stack-card">Threejs</div>
        </div>
      </div>

      <div className="text-container">
        You can download my resume{" "}
        <a className="link" href="front-end-dev-resume.pdf" download>
          here
        </a>
      </div>
    </div>
  );
}

export default Stack;
