import React from 'react'
import currencyVideo from "../assets/Currency.mp4";
import Stone from "../assets/Stone.mp4"
import ProjectCard from "./ProjectCard";
import Ticktak from "../assets/Ticktak.mp4"
function Projects() {


    const projects=[
        {
            title: "Currency Converter",

      description:
        "Currency converter using React and a live exchange-rate API.",

      video: currencyVideo,

      tech: ["React", "API", "Tailwind"],

      live: "https://ncurrency-converter.vercel.app/",

      github: "https://github.com/samixcode75/ncurrency_converter.git"
        },
        {

            title: "Stone Paper Scissor",

      description:
        "Stone paper scissor game using DOM ",

      video: Stone,

      tech: ["JavaScript", "HTML", "CSS"],

      live:"https://stonepaperscissor-pearl.vercel.app/",

      github: "https://github.com/samixcode75/Stone_Paper_scissor.git"
        },
         {
            title: "Tick Tack Toe",

      description:
        "Tick Tak Toe using DOM and Event Handling",

      video: Ticktak,

      tech: ["JavaScript", "HTML", "CSS"],

      live: "https://tick-tac-toe-sand.vercel.app/",

      github: "https://github.com/samixcode75/tick_tac_toe.git"
        }
    ]
 return (

    <section
      id="projects"
      className="min-h-screen bg-black text-white py-24"
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-blue-400 text-sm">
            Portfolio
          </p>

          <h2 className="text-5xl font-bold mt-3">

            My <span className="text-blue-500">Projects</span>

          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">

            Here are some of the projects I've built while learning
            frontend development.

          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project) => (

            <ProjectCard
              key={project.title}
              project={project}
            />

          ))}

        </div>

      </div>

    </section>

  );
}

export default Projects