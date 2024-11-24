import React from "react";

export default function About() {
  return (
    <section id="about" className="h-screen bg-gray-100 dark:bg-gray-600 dark:text-white flex items-center justify-center animate-fade transition duration-200">
      <div className="max-w-4xl text-center">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4 text-gray-700 dark:text-white">
         I am a Software Engineer specializing in WebDev and Full-Stack 
        </p>
      </div>
    </section>
  );
}
