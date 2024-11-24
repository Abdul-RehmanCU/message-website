import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen bg-cover bg-center flex items-center justify-center text-white dark:bg-gray-700 dark:text-white animate-fade transition duration-200"
      style={{
        backgroundImage: "url('https://source.unsplash.com/random')",
      }}
    >
      <div className="text-center text-black dark:text-white">
        <h1 className="text-5xl font-bold ">Hello, I'm Abdul Rehman</h1>
        <p className="mt-4 text-lg">A passionate Full-Stack Developer</p>
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
