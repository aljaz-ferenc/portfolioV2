import React from "react";
import CanvasComponent from "./Sphere";

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
    <div className="tools-container">
      <h3>Tools I use</h3>
      <div className="tools">
        {tools.map((tool, i) => (
          <CanvasComponent key={i} tool={tool} />
        ))}
      </div>
    </div>
  );
}
