import { useRef } from "react";

function ProjectCard({ project }) {
  const videoRef = useRef(null);

  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-800 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300">

      {/* Video */}

      <div
        onMouseEnter={() => {
          videoRef.current.play();
        }}
        onMouseLeave={() => {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }}
        className="overflow-hidden"
      >
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
        >
          <source src={project.video} type="video/mp4" />
        </video>
      </div>

      {/* Content */}

      <div className="p-6">

        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="text-gray-400 mt-3">
          {project.description}
        </p>

        {/* Tech */}

        <div className="flex flex-wrap gap-2 mt-5">

          {project.tech.map((item) => (
            <span
              key={item}
              className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm"
            >
              {item}
            </span>
          ))}

        </div>

        {/* Buttons */}

        <div className="flex gap-4 mt-6">

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="border border-blue-500 px-5 py-2 rounded-lg hover:bg-blue-500"
          >
            GitHub
          </a>

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;