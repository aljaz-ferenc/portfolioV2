import React, { useEffect, useRef, useState } from "react";
import "../main.scss";
import projectsFile from "../projects/projects.json";

import Project from "./Project";

export default function Projects() {
  const [projects, setProjects] = useState();

  useEffect(() => {
    setProjects(projectsFile);
  }, []);

  return (
    <div className="projects">
      <h1 className="projects__heading">PROJECTS</h1>
      <div className="projects-container">
        {projects &&
          projects.map((project) => (
            <Project project={project} key={project.id} />
          ))}
      </div>
    </div>
  );
}
