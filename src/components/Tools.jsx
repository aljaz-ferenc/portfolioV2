import React from "react";
import CanvasComponent from "./Sphere";
import {motion} from 'framer-motion'
import ToolsMobile from './ToolsMobile'

export default function Tools() {
  const tools = [
    "vscode",
    "github",
    "html5",
    "css3",
    "sass",
    "javascript",
    "react",
    "photoshop",
  ];

  return (
    <>
    <motion.div 
    className="tools-container"
    exit={{y:"100vh", transition: {duration: 0.5}}}
    initial={{x:"-100vw"}}
    animate={{x:0, transition: {ease: 'easeInOut'}}}
    >
      <h3>Tools I use</h3>
      <div className="tools">
        {tools.map((tool, i) => (
          <CanvasComponent key={i} tool={tool} />
        ))}
      </div>
    </motion.div>
      <ToolsMobile />
          </>
  );
}
