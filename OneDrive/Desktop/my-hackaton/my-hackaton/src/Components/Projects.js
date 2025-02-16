import { React, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <section
      id="projects"
      className="h-screen flex flex-col items-center justify-center dark:text-white animate-fade transition duration-200 px-6 py-12 sm:px-8 md:px-12 lg:px-16"
    >
      {/* Section Title */}
      <h2 data-aos="fade-down" className="text-3xl font-bold">
        Projects
      </h2>

      {/* Projects Grid */}
      <div
        data-aos="fade-down"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 w-full max-w-6xl"
      >
        {/* Weather App */}
        <div className="bg-white shadow-md rounded-lg p-6 dark:bg-gray-700">
          <h3 className="mt-4 text-xl font-bold dark:text-white">
            Weather App
          </h3>
          <p className="text-gray-700 mt-2 dark:text-gray-300">
            Uses OpenWeather API for weather data and forecasting, Google API for city search autofill.
          </p>
          <p className="text-gray-700 mt-2 dark:text-gray-300">
            React for the Front End and TailwindCSS for the design/animations.
          </p>
          <a
            href="https://github.com/Abdul-RehmanCU/weatherApp"
            className="text-blue-500 hover:underline mt-4 block dark:text-blue-300"
          >
            See GitHub
          </a>
        </div>

        {/* Canadian Income vs Housing Prices */}
        <div className="bg-white shadow-md rounded-lg p-6 dark:bg-gray-700">
          <h3 className="mt-4 text-xl font-bold dark:text-white">
            Canadian Income vs Housing Prices
          </h3>
          <p className="text-gray-700 mt-2 dark:text-gray-300">
            Website using React, TailwindCSS, and Recharts.
          </p>
          <p className="text-gray-700 mt-2 dark:text-gray-300">
            Displays Canadian housing prices vs income per province.
          </p>
          <a
            href="https://github.com/Abdul-RehmanCU/Canadian-Income-Analytics"
            className="text-blue-500 hover:underline mt-4 block dark:text-blue-300"
          >
            See GitHub
          </a>
        </div>

        {/* WildFireX */}
        <div className="bg-white shadow-md rounded-lg p-6 dark:bg-gray-700">
          <h3 className="mt-4 text-xl font-bold dark:text-white">
            WildFireX - 1st Place Winner (SAP Challenge)
          </h3>
          <p className="text-gray-700 mt-2 dark:text-gray-300">
            Website to optimize wildfire resources and predict future wildfires.
          </p>
          <p className="text-gray-700 mt-2 dark:text-gray-300">
            Built using Next.js (frontend) & Python + XGBoost (ML).
          </p>
          <a
            href=""
            className="text-blue-500 hover:underline mt-4 block dark:text-blue-300"
          >
            See GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
