import Navbar from "./Components/Navigation";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Particle from "./Components/Particle";
import NightModeCursor from "./NightModeCursor";

function App() {
  return (
    <div>
      <NightModeCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
