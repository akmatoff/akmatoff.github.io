import { useEffect, useRef } from "react";
import { bgMouseMove } from "../utils/utils";
import "../App.css";
import "./Projects.css";

function Projects() {
  const projectsContainer = useRef();
  const onMouseMove = (e) => bgMouseMove(e, projectsContainer);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
  });

  return (
    <div className="main-container flex-column centered" id="projects">
      <div ref={projectsContainer} className="projects-container">
        <h1 className="header-title">PROJECTS</h1>
      </div>
    </div>
  );
}

export default Projects;
