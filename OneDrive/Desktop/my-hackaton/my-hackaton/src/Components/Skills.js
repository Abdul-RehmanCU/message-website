import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import pythonImage from "./images/python.png";
import javaImage from "./images/java.png";
import CImage from "./images/C.png";
import reactImage from "./images/react.png";
import TailwindImage from "./images/tailwind.png";
import NodeJSImage from "./images/nodeJS.png";
import ExpressJSImage from "./images/express.png";
import VScode from "./images/VSCode.png";
import IntelliJ from "./images/IntelliJ.png";
import Firebase from "./images/Firebase.png";
import Github from "./images/Github.png";

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null); // Track hovered skill

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const isMobile = window.innerWidth <= 768; // Check if user is on mobile

  const handleSkillClick = (id) => {
    if (isMobile) {
      setHoveredSkill((prev) => (prev === id ? null : id)); // Toggle on mobile
    }
  };

  // Skill data
  const skills = [
    {
      id: 1,
      title: "Programming Languages",
      emoji: "💻",
      details: [
        { name: "JavaScript", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpuYdLEzBvwemix8pwsncUkLLOQqnByncadg&s" },
        { name: "Python", image: pythonImage },
        { name: "Java", image: javaImage },
        { name: "C", image: CImage },
      ],
    },
    {
      id: 2,
      title: "Framework & Libraries",
      emoji: "📚",
      details: [
        { name: "React", image: reactImage },
        { name: "NodeJS", image: NodeJSImage },
        { name: "TailWindCSS", image: TailwindImage },
        { name: "ExpressJS", image: ExpressJSImage },
      ],
    },
    {
      id: 3,
      title: "Tools & Platforms",
      emoji: "⚙️",
      details: [
        { name: "VSCode", image: VScode },
        { name: "IntelliJ", image: IntelliJ },
        { name: "Firebase", image: Firebase },
        { name: "GitHub", image: Github },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-white flex flex-col items-center justify-center dark:bg-gray-700 dark:text-white px-4 sm:px-6 md:px-8 animate-fade transition duration-200"
    >
      <h2 data-aos="fade-down" className="text-2xl sm:text-3xl font-bold">
        Skills
      </h2>
      <div
        data-aos="fade-down"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 w-full"
      >
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="relative flex flex-col items-center"
            onMouseEnter={() => !isMobile && setHoveredSkill(skill.id)} // Desktop Hover
            onMouseLeave={() => !isMobile && setHoveredSkill(null)} // Desktop Hover Out
            onClick={() => handleSkillClick(skill.id)} // Mobile Click Toggle
          >
            <div className="bg-white shadow-md rounded-lg p-4 dark:bg-gray-700 transition transform hover:scale-105">
              <span className="text-purple-500 text-4xl sm:text-5xl">{skill.emoji}</span>
              <p className="mt-2 text-gray-700 dark:text-white text-base sm:text-lg">
                {skill.title}
              </p>
            </div>

            {/* Pop-up Box */}
            {hoveredSkill === skill.id && (
              <div
                className={`absolute top-20 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6 ${
                  isMobile ? "w-full px-6" : "w-64"
                } text-gray-700 dark:text-white z-10 animate-fade duration-300`}
              >
                <h3 className="text-lg font-bold mb-2">{skill.title}</h3>
                <ul className="grid grid-cols-2 gap-4">
                  {skill.details.map((detail, index) => (
                    <li
                      key={index}
                      className="flex flex-col items-center justify-center"
                    >
                      <img
                        src={detail.image}
                        alt={detail.name}
                        className="w-12 h-10 md:w-19 md:h-12"
                      />
                      <span className="mt-2 text-xs sm:text-sm md:text-base">
                        {detail.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
