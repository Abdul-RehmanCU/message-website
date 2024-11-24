import React from "react";

export default function Skills() {
  return (
    <section id="skills" className="h-screen bg-white flex flex-col items-center justify-center dark:bg-gray-700 dark:text-white animate-fade transition duration-200">
      <h2 className="text-3xl font-bold">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 ">
        <div className="flex flex-col items-center">
          <span className="text-blue-500 text-5xl">💻</span>
          <p className="mt-2 text-gray-700 dark:text-white">HTML</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-yellow-500 text-5xl">⚙️</span>
          <p className="mt-2 text-gray-700 dark:text-white">CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-green-500 text-5xl">📜</span>
          <p className="mt-2 text-gray-700 dark:text-white">JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-purple-500 text-5xl">🛠️</span>
          <p className="mt-2 text-gray-700 dark:text-white">React</p>
        </div>
      </div>
    </section>
  );
}
