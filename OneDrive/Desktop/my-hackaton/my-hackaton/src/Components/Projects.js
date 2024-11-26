import {React, useEffect} from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Projects() {
  useEffect(() =>{
    Aos.init({duration: 500});
  }, [])

  return (
    <section id="projects" className="h-screen bg-gray-100 flex flex-col items-center justify-center dark:bg-gray-600 dark:text-white animate-fade transition duration-200">
      <h2 data-aos ="fade-down" className="text-3xl font-bold">Projects</h2>
      <div data-aos ="fade-down" className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white shadow-md rounded-lg p-4 dark:bg-gray-700">
          <h3 className="mt-4 text-xl font-bold dark:text-white">Proj Title</h3>
          <p className="text-gray-700 mt-2 dark:text-white">Desc.</p>
          <a href="#" className="text-blue-500 hover:underline mt-4 block dark:text-blue-300">View Project</a>
        </div>
      </div>
    </section>
  );
}
