import React from "react";
import "../main.scss";
import { motion } from "framer-motion";

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
    <motion.div 
    className="toolsM-container"
    exit={{ y: "100vh", transition: { duration: 0.5 } }}
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
    >
      <h3>Tools I use</h3>
      <div className="toolsM">
        {tools.map((tool, i) => (
          <motion.div
            key={i}
            className="toolM"
            
          >
            <img src={`./icons/mobile-icons/${tool}.svg`} alt="" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
