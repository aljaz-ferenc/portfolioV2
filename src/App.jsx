import React, { useEffect, useRef, useState, lazy, Suspense } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import "./main.scss";
import ParticlesComponent from "./components/Particles";
import Tools from "./components/Tools";
import Contact from "./components/Contact";
import ToolsMobile from "./components/ToolsMobile";

function App() {
  return (
    <div className="App" id="app">
      <Hero />
      <Tools />
      <ToolsMobile />
      <Projects />
      <Contact />
      <ParticlesComponent />
    </div>
  );
}

export default App;
