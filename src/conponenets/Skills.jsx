import React from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiVite,
  SiCplusplus,
  SiMysql,
} from "react-icons/si";

function Skills() {
  const skills = [
    {
      icon: <FaHtml5 className="text-orange-500 text-5xl" />,
      name: "HTML5",
      level: "Advanced",
    },
    {
      icon: <FaCss3Alt className="text-blue-500 text-5xl" />,
      name: "CSS3",
      level: "Advanced",
    },
    {
      icon: <SiTailwindcss className="text-cyan-400 text-5xl" />,
      name: "Tailwind CSS",
      level: "Advanced",
    },
    {
      icon: <FaJs className="text-yellow-400 text-5xl" />,
      name: "JavaScript",
      level: "Intermediate",
    },
    {
      icon: <FaReact className="text-cyan-300 text-5xl animate-spin" />,
      name: "React",
      level: "Learning",
    },
    {
      icon: <SiVite className="text-violet-400 text-5xl" />,
      name: "Vite",
      level: "Intermediate",
    },
    {
      icon: <FaGitAlt className="text-orange-600 text-5xl" />,
      name: "Git",
      level: "Intermediate",
    },
    {
      icon: <FaGithub className="text-white text-5xl" />,
      name: "GitHub",
      level: "Intermediate",
    },
    {
      icon: <SiCplusplus className="text-blue-500 text-5xl" />,
      name: "C++",
      level: "Intermediate",
    },
    {
      icon: <SiMysql className="text-sky-500 text-5xl" />,
      name: "MySQL",
      level: "Intermediate",
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-blue-400 text-sm">
            MY SKILLS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Technologies I{" "}
            <span className="text-blue-500">Work With</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-7">
            These are the technologies I've learned and use while building
            modern, responsive, and user-friendly web applications.
          </p>

        </div>

        {/* Skills Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group bg-gray-800 rounded-2xl p-8 text-center border border-gray-700 hover:border-blue-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
            >

              <div className="flex justify-center mb-6 group-hover:scale-125 transition duration-300">
                {skill.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {skill.name}
              </h3>

              <p className="text-gray-400 mt-3">
                {skill.level}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;