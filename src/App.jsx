import "./main.scss";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import SingleProject from "./pages/SingleProject";
import { AnimatePresence } from "framer-motion";
// import Tools from "./components/Tools";
import Projects from "./components/Projects";
import Navigation from "./components/Navigation";
import Contact from "./pages/Contact";
import Mouse from "./components/Mouse";
// import Tools2 from "./components/Tools2";
import Stack from "./pages/Stack";

function App() {
  const location = useLocation();

  return (
    <>
    <Navigation/>
    <Mouse/>
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />}></Route>
        <Route path="tools" element={<Stack />}></Route>
        <Route path="projects" element={<Projects />}></Route>
        <Route path="/:project" element={<SingleProject />} />
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
    </AnimatePresence>
    </>
  );
}

export default App;
