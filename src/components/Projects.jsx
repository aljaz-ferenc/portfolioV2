import React, { useEffect, useRef, useState } from "react";
import "../main.scss";
import projectsFile from "../projects/projects.json";
import {motion} from 'framer-motion'
import Project from "./Project";

export default function Projects() {
  const [projects, setProjects] = useState();

  useEffect(() => {
    setProjects(projectsFile);
  }, []);

  return (
    <motion.div 
    className="projects"
    exit={{y:"100vh", transition: {duration: 0.5}}}

    initial={{x:"-100vw"}}
    animate={{x:0}}
    >
      <h1 className="projects__heading">PROJECTS</h1>
      <motion.div 
      className="projects-container"
      
      >
        {projects &&
          projects.map((project, i) => (
            <Project project={project} i={i} key={project.id} />
          ))}
      </motion.div>
    </motion.div>
  );
}
