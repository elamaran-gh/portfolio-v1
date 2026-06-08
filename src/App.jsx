import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./component/Header";
import Hero from "./component/Hero.jsx";
import About from "./component/About.jsx";
import Skill from "./component/Skill.jsx";
import Project from "./component/project.jsx";
import Contact from "./component/Contact.jsx";
import Footer from "./component/Footer.jsx";
import Resume from "./component/Resume.jsx";

// Home Page Layout
const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main Portfolio */}
        <Route path="/" element={<Home />} />

        {/* Resume Page */}
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
};

export default App;