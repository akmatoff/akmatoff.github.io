import { useEffect, useRef } from "react";
import { bgMouseMove } from "../utils/utils";
import "../App.css";
import "./Projects.css";
const projects = require("../assets/data/projects.json");

function Projects() {
  const projectsContainer = useRef();
  const onMouseMove = (e) => bgMouseMove(e, projectsContainer);

  useEffect(() => {
    console.log(projects);
    window.addEventListener("mousemove", onMouseMove);
  });

  return (
    <div
      ref={projectsContainer}
      className="main-container flex-column centered"
      id="projects"
    >
      <h1 className="header-title" id="projectsTitle">
        PROJECTS
      </h1>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.project_id} className="project-card">
            <div className="title">{project.project_title}</div>
            <div className="type">{project.project_type}</div>
            <div className="description">{project.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
