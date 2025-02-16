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
import TSImage from "./images/TS.png";
import HTMLImage from "./images/HTML.png";
import CSSImage from "./images/CSS.png";
import FlaskImage from "./images/Flask.png";
import NextJSImage from "./images/NextJS.png";

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null); 

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const isMobile = window.innerWidth <= 768; 

  const handleSkillClick = (id) => {
    if (isMobile) {
      setHoveredSkill((prev) => (prev === id ? null : id)); 
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
        { name: "TypeScript", image: TSImage },
        { name: "HTML", image: HTMLImage },
        { name: "CSS", image: CSSImage },
      ],
    },
    {
      id: 2,
      title: "Frameworks & Libraries",
      emoji: "📚",
      details: [
        { name: "React", image: reactImage },
        { name: "NextJS", image: NextJSImage },
        { name: "NodeJS", image: NodeJSImage },
        { name: "TailwindCSS", image: TailwindImage },
        { name: "ExpressJS", image: ExpressJSImage },
        { name: "Flask", image: FlaskImage },
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
      className="min-h-screen flex flex-col items-center justify-center dark:text-white px-4 sm:px-6 md:px-8 animate-fade transition duration-200"
    >
      <h2 data-aos="fade-down" className="text-2xl sm:text-3xl font-bold">
        Skills
      </h2>

      {/* Skill Boxes Grid */}
      <div
        data-aos="fade-down"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 w-full max-w-5xl"
      >
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="relative flex flex-col items-center"
            onMouseEnter={() => !isMobile && setHoveredSkill(skill.id)}
            onMouseLeave={() => !isMobile && setHoveredSkill(null)}
            onClick={() => handleSkillClick(skill.id)}
          >
            <div className="bg-white shadow-md rounded-lg p-3 dark:bg-gray-700 transition transform hover:scale-105">
              <span className="text-purple-500 text-3xl sm:text-4xl">
                {skill.emoji}
              </span>
              <p className="mt-1 text-gray-700 dark:text-white text-sm sm:text-base">
                {skill.title}
              </p>
            </div>

            {/* Pop-up Box */}
            {hoveredSkill === skill.id && (
              <div
                className={`absolute top-16 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 shadow-xl rounded-lg p-4 text-gray-700 dark:text-white z-10 animate-fade ${
                  isMobile ? "w-full px-4" : "w-52"
                }`}
              >
                <h3 className="text-sm sm:text-base font-bold mb-1">
                  {skill.title}
                </h3>
                <ul className="grid grid-cols-2 gap-3">
                  {skill.details.map((detail, index) => (
                    <li key={index} className="flex flex-col items-center">
                      <img
                        src={detail.image}
                        alt={detail.name}
                        className="w-10 h-8 md:w-12 md:h-12"
                      />
                      <span className="mt-1 text-xs sm:text-sm">
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
