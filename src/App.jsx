import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./component/Header";
import Hero from "./component/Hero.jsx";
import About from "./component/About.jsx";
import Skill from "./component/Skill.jsx";
import Project from "./component/Project.jsx";
import Contact from "./component/Contact.jsx";
import Footer from "./component/Footer.jsx";
import Resume from "./component/Resume.jsx";
import CustomCursor from "./component/CustomCursor.jsx";

// Fixed, cinematic backdrop shared by every page.
const Ambient = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
  >
    <div className="absolute inset-0 bg-night-950" />
    <div className="aurora-blob aurora-a -left-32 -top-40 h-[46rem] w-[46rem] bg-blue-600/25" />
    <div className="aurora-blob aurora-b -right-40 top-[15%] h-[40rem] w-[40rem] bg-purple-600/20" />
    <div className="aurora-blob aurora-c -bottom-48 left-[18%] h-[38rem] w-[38rem] bg-pink-600/15" />
    <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(99,102,241,0.15),transparent_70%)]" />
    <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_75%_55%_at_50%_0%,black_15%,transparent_70%)]" />
    <div className="bg-noise absolute inset-0 opacity-[0.035]" />
  </div>
);

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
      <div className="relative">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-night-950"
        >
          Skip to content
        </a>
        <Ambient />
        <CustomCursor />
        <main id="main" className="relative z-10">
          <Routes>
            {/* Main Portfolio */}
            <Route path="/" element={<Home />} />

            {/* Resume Page */}
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
