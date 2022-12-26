import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Resume from "./Pages/Resume";
import Skills from "./Pages/Skills"
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Mode from "./Components/Mode";
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { optionsDarkShadow } from "./Helpers/ParticlesConfig-dark";
import { optionsLightShadow } from "./Helpers/ParticlesConfig-light";
import { optionsDarkSnow } from "./Helpers/ParticlesConfig-dark";
import { optionsLightSnow } from "./Helpers/ParticlesConfig-light";
import { changeTheme } from "./Helpers/ChangeTheme"

function App() {
  const particlesInit = async (main) =>{
    await loadFull(main);
  }
  const location = useLocation();

  const [theme, setTheme] = useState();
  const handleClick = () => {
    setTheme(!theme)
    changeTheme(theme)
  }

  return (
    <div className="app">
      <React.Fragment>
      {
        location.pathname==="/" ?  
          theme ? 
            <Particles id="tsparticles" init={particlesInit} options = {optionsLightShadow} /> :
            <Particles id="tsparticles" init={particlesInit} options = {optionsDarkShadow} /> 
        : ""
      }
      <header className="app-header"><Header /></header>
      <main className="app-main">
        <Mode onChange={handleClick} theme={theme}/>
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
    </div>
  );
}

export default App;