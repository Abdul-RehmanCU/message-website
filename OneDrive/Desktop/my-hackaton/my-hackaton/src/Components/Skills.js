import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

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
        {name: "Python", image: ""  },
        {name: "JavaScript", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpuYdLEzBvwemix8pwsncUkLLOQqnByncadg&s"  },
        {name: "JavaScript", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpuYdLEzBvwemix8pwsncUkLLOQqnByncadg&s"  },
      ]
    },
    {
      id: 2,
      title: "Framework & Libraries",
      emoji: "📚",
      details: ["React", "Node.js", "Tailwind CSS", "Express"],
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
                className="absolute top-20 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 w-64 text-gray-700 dark:text-white z-10"
                style={{
                  transform: "translateY(-10px)",
                  transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
                }}
              >
                <h3 className="text-lg font-bold mb-2">{skill.title}</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {skill.details.map((detail, index) => (
                    <li
                      key={index}
                      className="flex flex-col items-center justify-center"
                    >
                      <img
                        src={detail.image}
                        alt={detail.name}
                        className="w-10 h-10"
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
