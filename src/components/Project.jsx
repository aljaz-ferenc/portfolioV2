import { motion } from "framer-motion";
import "../main.scss";
import { useState, useRef} from "react";
import Portal2 from "./Portal2";

export default function Project({ project }) {
  const [isOpen, setIsOpen] = useState(false);
  const [textIsShown, setTextIsShown] = useState(false);
  const projectRef = useRef();

  const animationSpeed = 1000;

  function handleShowDetails() {
    setIsOpen(true);
    if (!isOpen) {
    }
    setTimeout(() => {
      setTextIsShown(true);
    }, animationSpeed);
  }

  function checkClick() {
    setIsOpen(false);
  }

  const scrollVariants = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: animationSpeed / 1000,
        delay: project.id / 10,
      },
    },
  };

  return (
    <motion.div
      className="project-container"
      initial="initial"
      whileInView="animate"
      variants={scrollVariants}
      viewport={{ once: true }}
    >
      <div className="project" ref={projectRef}>
        <div className="project__closed">
          <img
            className="project__image"
            src={`/projects-images/${project.image}1000.webp`}
            alt="project image"
            onClick={handleShowDetails}
          />

          {!isOpen && (
            <h2 onClick={handleShowDetails} className="project__title--closed">
              {project.title}
            </h2>
          )}
        </div>
      </div>
      {isOpen && (
        <Portal2 checkClick={checkClick} isOpen={isOpen} project={project} />
      )}
    </motion.div>
  );
}
