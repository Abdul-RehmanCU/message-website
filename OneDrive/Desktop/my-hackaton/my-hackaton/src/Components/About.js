import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Modal from "./Modal"; 


export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <section
      id="about"
      className="relative h-screen flex items-center justify-center text-white transition duration-200 px-4 sm:px-6"
    > 

      <div data-aos="fade-down" className="relative z-10 max-w-2xl w-full text-center">
        <h2 className="text-3xl font-bold text-black dark:text-white">About Me</h2>
        <p className="mt-4 text-gray-800 dark:text-gray-300 text-xl font-bold">
          I am a Software Engineer specializing in Web Development and Full-Stack engineering.
        </p>
      
        {/* Resume Button */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setIsModalOpen(true);
          }}
          className="mt-8 inline-block bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded transition"
        >
          View My Resume
        </a>
      </div>

      {/* Resume Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pdfUrl="/AbdulCV.pdf"
      />
    </section>
  );
}
