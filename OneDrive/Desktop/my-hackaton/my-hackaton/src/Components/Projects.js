import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="h-screen bg-gray-100 flex flex-col items-center dark:bg-gray-600 dark:text-white animate-fade transition duration-200">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white shadow-md rounded-lg p-4 dark:bg-gray-700">
          <h3 className="mt-4 text-xl font-bold dark:text-white">Project Title</h3>
          <p className="text-gray-700 mt-2 dark:text-white">Short description of the project.</p>
          <a href="#" className="text-blue-500 hover:underline mt-4 block dark:text-blue-300">View Project</a>
        </div>
      </div>
    </section>
  );
}
