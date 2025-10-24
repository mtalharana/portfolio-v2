import "./assets/css/index.css";

import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

import { Route, Routes } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [isOnePage] = useState(false); // Change to true if you want single-page layout

  return (
    <>
      <Header />
      {isOnePage ? (
        <>
          <Hero />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Contact />
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}
    </>
  );
}
