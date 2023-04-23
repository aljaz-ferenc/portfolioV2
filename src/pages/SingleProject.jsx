import React, { useEffect, useState } from "react";
import projectsFile from "../projects/projects.json";
import { useParams } from "react-router";
import "../main.scss";
import { motion } from "framer-motion";

export default function Project() {
  const { project } = useParams();
  const [thisProject, setThisProject] = useState();

  useEffect(() => {
    setThisProject(projectsFile[project]);
  }, []);

  return (
    <motion.div
      initial={{x: "100vw"}}
      exit={{x: "100vw"}}
      animate={{x: 0, transition: {ease: 'circOut'}}}
    >
      {thisProject && (
        <div className="single-project">
          <div className="single-project__image">
          {/* <button className="back-btn">Go Back</button> */}
            <img
              src={`/projects-images/${thisProject.image}1000.webp`}
              alt=""
            />
            <div className="single-project__links">
              <div><a href={thisProject.urls[0].github} target="_blank"><img src="/icons/github.svg" alt="" /></a></div>
              <div><a href={thisProject.urls[0].netlify} target="_blank"><img src="/icons/netlify.svg" alt="" /></a></div>
            </div>
          </div>
          <div className="single-project__text">
            <h1 className="single-project__text--title">{thisProject.title}</h1>
            <h2 className="single-project__text--subtitle">
              {thisProject.subtitle}
            </h2>
            <div className="single-project__text--paragraphs">
              {thisProject.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
