import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Modal from "./Modal"; // Import the Modal component

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal state

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <section
      id="about"
      className="h-screen bg-gray-100 dark:bg-gray-600 dark:text-white flex items-center justify-center animate-fade transition duration-200 px-4 sm:px-6"
    >
      <div data-aos="fade-down" className="max-w-2xl w-full text-center">
        {/* About Me Content */}
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4 text-gray-700 dark:text-white">
          I am a Software Engineer specializing in Web Development and Full-Stack engineering.
        </p>

        {/* Resume Button */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault(); // Prevent default link behavior
            setIsModalOpen(true); // Open the modal
          }}
          className="mt-8 inline-block bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded"
        >
          View My Resume
        </a>
      </div>

      {/* Resume Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Close the modal
        pdfUrl="/AbdulCV.pdf" // Correct public path to your resume PDF
      />
    </section>
  );
}
