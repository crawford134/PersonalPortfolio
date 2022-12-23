import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Resume from "./Pages/Resume";
import Skills from "./Pages/Skills"
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";

function App() {
  return (
    <React.Fragment>
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