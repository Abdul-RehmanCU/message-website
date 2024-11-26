import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Particle from "./Particle";

export default function Hero() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section
      id="hero"
      className="h-screen bg-cover bg-center flex items-center justify-center text-white dark:bg-gray-700 dark:text-white animate-fade transition duration-200"
    >
    
      <div
        data-aos="fade-down"
        data-aos-easing="ease-in-out"
        data-aos-delay="300"
        className="text-center text-black dark:text-white"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Hello, I'm Abdul Rehman
        </h1>
        <p className="mt-4 text-sm md:text-lg lg:text-xl">
          A passionate Full-Stack Developer
        </p>
        <a
          href="#projects"
          className="mt-6 inline-block bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
