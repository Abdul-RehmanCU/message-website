import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import pythonImage from './images/python.png';
import javaImage from './images/java.png';
import CImage from './images/C.png';
import reactImage from './images/react.png'
import TailwindImage from './images/tailwind.png'
import NodeJSImage from './images/nodeJS.png'
import ExpressJSImage from './images/express.png'




export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null); // Track hovered skill

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // Skill data
  const skills = [
    {
      id: 1,
      title: "Programming Languages",
      emoji: "💻",
      details: [
        {name: "JavaScript", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpuYdLEzBvwemix8pwsncUkLLOQqnByncadg&s"  }, 
        {name: "Python", image: pythonImage },
        {name: "Java", image: javaImage  },
        {name: "JavaScript", image: CImage  },
      ]
    },
    {
      id: 2,
      title: "Framework & Libraries",
      emoji: "📚",
      details: [
        {name: "React", image : reactImage},
        {name: "NodeJS", image : NodeJSImage},
        {name: "TailWindCSS", image : TailwindImage},
        {name: "ExpressJS", image : ExpressJSImage},
          ],
    },
    {
      id: 3,
      title: "Tools & Platforms",
      emoji: "⚙️",
      details: ["Git", "Docker", "AWS", "VS Code"],
    },
  ];

  return (
    <section
      id="skills"
      className="h-screen bg-white flex flex-col items-center justify-center dark:bg-gray-700 dark:text-white animate-fade transition duration-200"
    >
      <h2 data-aos="fade-down" className="text-3xl font-bold">
        Skills
      </h2>
      <div
        data-aos="fade-down"
        className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8"
      >
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="relative flex flex-col items-center"
            onMouseEnter={() => setHoveredSkill(skill.id)} // Show details on hover
            onMouseLeave={() => setHoveredSkill(null)} // Hide details when not hovering
          >
            <div className="bg-white shadow-md rounded-lg p-4 dark:bg-gray-700 transition transform hover:scale-105">
              <span className="text-purple-500 text-5xl">{skill.emoji}</span>
              <p className="mt-2 text-gray-700 dark:text-white">{skill.title}</p>
            </div>

            {/* Pop-up Box */}
            {hoveredSkill === skill.id && (
              <div
                className="absolute top-20 bg-white dark:bg-gray-800 shadow-xl rounded-lg p-4 w-64 text-gray-700 dark:text-white z-10 animate-fade duration-300"
                style={{
                  transform: "translateY(-2px)",
                  transition: "opacity 0.3s ease-in-out, transform 0.7s ease-in-out",
                }}
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
                        className="w-15 h-10"
                      />
                      <span className="mt-2 text-sm">{detail.name}</span>
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
