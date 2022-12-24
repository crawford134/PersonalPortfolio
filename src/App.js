import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Resume from "./Pages/Resume";
import Skills from "./Pages/Skills"
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { options } from "./Helpers/ParticlesConfig";

function App() {
  const particlesInit = async (main) =>{
    await loadFull(main);
  }
  const location = useLocation();

  return (
    <React.Fragment>
      {
        location.pathname==="/" ?  <Particles id="tsparticles" init={particlesInit} options = {options}  />
        : ""
      }
      <header><Header /></header>
      <main className="MainBody">
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<AboutMe />} exact/>
          <Route path="/resume" element={<Resume />} exact/>
          <Route path="/skills" element={<Skills />} exact/>
          <Route path="/portfolio" element={<Portfolio />} exact/>
          <Route path="/contact" element={<Contact />} exact/>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;