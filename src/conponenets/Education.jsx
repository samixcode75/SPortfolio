import React from "react";
function Education() {
  const education = [
    {
      degree: "BS Computer Science",
      institute: "University of Central Punjab (UCP)",
      duration: "2024 – Present",
      status: "Current Semester: 5",
      grade: "CGPA: 3.83 / 4.00",
      courses: [
        "Programming Fundamentals",
        "Object-Oriented Programming",
        "Data Structures & Algorithms",
        "Database Systems",
        "Computer Organization & Assembly Language",
        "Software Engineering",
      ],
    },
    {
      degree: "Intermediate (ICS - Physics)",
      institute: "Punjab College",
      duration: "2022 – 2024",
      status: "Completed",
      grade: "",
      courses: [
        "Computer Science",
        "Physics",
        "Mathematics",
      ],
    },
    {
      degree: "Matriculation (Biology)",
      institute: "Allied School",
      duration: "2020 – 2022",
      status: "Completed",
      grade: "",
      courses: [
        "Biology",
        "Chemistry",
        "Physics",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">
          <p className="uppercase tracking-[6px] text-blue-400 text-sm">
            Academic Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            My <span className="text-blue-500">Education</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            My academic journey has provided me with a strong foundation in
            computer science while I continue building practical experience
            through modern web development projects.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative border-l-4 border-blue-500 ml-5">

          {education.map((item, index) => (
            <div
              key={index}
              className="mb-16 ml-8 relative"
            >
              {/* Timeline Dot */}

              <div className="absolute -left-[46px] top-4 w-6 h-6 bg-blue-500 rounded-full border-4 border-black shadow-lg shadow-blue-500/40"></div>

              {/* Card */}

              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">

                <h3 className="text-2xl font-bold text-blue-400">
                  {item.degree}
                </h3>

                <h4 className="text-xl mt-2 font-semibold">
                  {item.institute}
                </h4>

                <p className="text-gray-400 mt-2">
                  📅 {item.duration}
                </p>

                <p className="text-gray-300 mt-2">
                  🎓 {item.status}
                </p>

                {item.grade && (
                  <p className="text-green-400 font-semibold mt-2">
                    ⭐ {item.grade}
                  </p>
                )}

                <div className="mt-6">
                  <h5 className="text-lg font-semibold mb-3 text-white">
                    Relevant Coursework
                  </h5>

                  <div className="flex flex-wrap gap-3">
                    {item.courses.map((course) => (
                      <span
                        key={course}
                        className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full border border-blue-500/30 hover:bg-blue-500 hover:text-white transition duration-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Education;