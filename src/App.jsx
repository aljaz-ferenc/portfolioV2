import React, { useEffect, useRef, useState, lazy, Suspense } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import "./main.scss";
import Tools from "./components/Tools";
import Contact from "./components/Contact";
import ToolsMobile from "./components/ToolsMobile";
import ProgressBar from "./components/ProgressBar";
import Mouse from "./components/Mouse";

function App() {
  return (
    <div className="App" id="app">
      <Mouse/>
      <ProgressBar/>
      <Hero />
      <Tools />
      <ToolsMobile />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
