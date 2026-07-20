import profilePic from "./download.png";

function About() {
  const highlights = [
    {
      title: "🎓 Education",
      value: "BS Computer Science",
      desc: "University of Central Punjab",
    },
    {
      title: "💻 Focus",
      value: "Frontend Development",
      desc: "React • Tailwind CSS",
    },
    {
      title: "🚀 Goal",
      value: "Software Engineer",
      desc: "Building real-world projects",
    },
    {
      title: "📍 Location",
      value: "Pakistan",
      desc: "Always learning new technologies",
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "Vite",
    "C++",
    "MY SQL"
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[6px] text-blue-400 text-sm">
            Get To Know Me
          </p>

          <h2 className="text-5xl font-bold mt-3">
            About <span className="text-blue-500">Me</span>
          </h2>

          <div className="w-24 h-1 bg-blue-500 mx-auto mt-5 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Image */}
          <div className="lg:w-2/5 flex justify-center">

            <div className="relative group">

              <div className="absolute -inset-1 bg-blue-500 rounded-3xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>

              <img
                src={profilePic}
                alt="Profile"
                className="relative w-80 h-80 object-cover rounded-3xl border-4 border-gray-800 group-hover:scale-105 transition duration-500"
              />

            </div>

          </div>

          {/* Right */}
          <div className="lg:w-3/5">

            <h3 className="text-4xl font-bold mb-6">
              Hi, I'm <span className="text-blue-500">Sami ur Rehman</span> 👋
            </h3>

            <p className="text-gray-300 leading-8 text-lg mb-8">
              I am a Computer Science student passionate about building modern,
              responsive, and user-friendly web applications. I enjoy learning
              new technologies, solving real-world problems, and continuously
              improving my frontend development skills using React, JavaScript,
              and Tailwind CSS.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 mb-10">

              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2 rounded-full bg-gray-800 border border-gray-700 hover:bg-blue-500 hover:border-blue-500 hover:scale-105 transition duration-300 cursor-pointer"
                >
                  {skill}
                </span>
              ))}

            </div>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 gap-6">

              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 hover:-translate-y-2 transition duration-300"
                >
                  <h4 className="text-blue-400 font-semibold text-lg mb-2">
                    {item.title}
                  </h4>

                  <p className="font-bold text-xl">
                    {item.value}
                  </p>

                  <p className="text-gray-400 mt-2">
                    {item.desc}
                  </p>
                </div>
              ))}

            </div>

            {/* Button */}

            <div className="mt-12">

              <a
                href="#contact"
                className="inline-block bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-xl font-semibold transition duration-300 hover:scale-105"
              >
                Let's Connect →
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;