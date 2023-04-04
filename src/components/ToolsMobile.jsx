import React from "react";
import "../main.scss";

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
    <div className="toolsM-container">
      <h3>Tools I use</h3>
      <div className="toolsM">
        {tools.map((tool, i) => (
          <div key={i} className="toolM">
            <img src={`./icons/mobile-icons/${tool}.svg`} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
