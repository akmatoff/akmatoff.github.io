import { useEffect, useRef } from "react";
import { bgMouseMove } from "../utils/utils";
import "../App.css";
import "./Projects.css";
import projects from "../assets/data/projects.json";

function Projects() {
  const projectsContainer = useRef();
  const onMouseMove = (e) => bgMouseMove(e, projectsContainer.current);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div
      ref={projectsContainer}
      className="main-container flex-column"
      id="projects"
    >
      <h1 className="header-title" id="projectsTitle">
        Projects
      </h1>
      <div className="projects-container flex-column">
        {projects
          .sort((p, p2) => p2.project_id - p.project_id)
          .map((project) => (
            <div
              key={project.project_id}
              className="project-card flex-row centered"
            >
              <div className="project-card__text flex-column">
                <div className="title">{project.project_title}</div>

                <div className="type">{project.project_type}</div>
                <div className="technology">{project.technology}</div>
                <div className="description">{project.description}</div>
                <div className="links">Links:</div>
                <div className="project-links flex-row">
                  {project.repositories.map((repo, index) => (
                    <a key={index} href={repo} rel="noreferrer" target="_blank">
                      <i className="fab fa-github project-icon"></i>
                    </a>
                  ))}
                  {project.app ? (
                    <a href={project.app} rel="noreferrer" target="_blank">
                      <i className="fas fa-globe project-icon"></i>
                    </a>
                  ) : null}
                </div>
              </div>
              <div
                className="picture flex-row centered"
                style={{
                  background: `url(${project.picture})`,
                  backgroundSize: "110%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {project.picture ? "" : project.project_title}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Projects;
