import React from "react";
import Header from "./Components/Header";
import { Route,Routes } from "react-router-dom";
import Home from "./Components/Home"
import AboutMe from "./Components/AboutMe"
import Portfolio from "./Components/Portfolio";
import Resume from "./Components/Resume";

function App() {
  return (
    <React.Fragment>
      <header><Header /></header>
      <main className="MainBody">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} exact/>
          <Route path="/portfolio" element={<Portfolio />} exact/>
          <Route path="/resume" element={<Resume />} exact/>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;