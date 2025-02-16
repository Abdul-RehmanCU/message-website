import { useState, useEffect } from "react";
import Navbar from "./Components/Navigation";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import NightModeCursor from "./NightModeCursor";
import ParticleBackground from "./Components/Particles3D";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };
    
    checkDarkMode();
    window.addEventListener("storage", checkDarkMode);
    return () => window.removeEventListener("storage", checkDarkMode);
  }, []);

  return (
    <div className={`relative w-full min-h-screen ${isDarkMode ? "dark" : ""}`}>
      {/* Global Particle Background with Theme Switching */}
      <ParticleBackground isDarkMode={isDarkMode} />

      {/* Content */}
      <Navbar setIsDarkMode={setIsDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
