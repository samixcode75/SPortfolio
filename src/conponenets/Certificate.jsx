import CertificateCard from "./CertificateCard";

import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.png";
import s6 from "../assets/s6.png";
import s7 from "../assets/s7.png";

function Certificates() {

  const certificates = [

    {
      title: "React Basics",
      issuer: "Coursera",
      date: "September 15, 2025",
      duration: "29 Hours",
      image: s1,
      link: "#",
    },

    {
      title: "HTML and CSS in Depth",
      issuer: "Coursera",
      date: "August 31, 2025",
      duration: "30 Hours",
      image: s2,
      link: "#",
    },

    {
      title: "Version Control",
      issuer: "Coursera",
      date: "August 19, 2025",
      duration: "15 Hours",
      image: s3,
      link: "#",
    },

    {
      title: "Programming with JavaScript",
      issuer: "Coursera",
      date: "August 14, 2025",
      duration: "47 Hours",
      image: s4,
      link: "#",
    },

    {
      title: "Introduction to Front-End Development",
      issuer: "Coursera",
      date: "August 5, 2025",
      duration: "18 Hours",
      image: s5,
      link: "#",
    },

    {
      title: "Programming Foundations with JavaScript, HTML and CSS",
      issuer: "Coursera",
      date: "July 24, 2025",
      duration: "32 Hours",
      image: s6,
      link: "#",
    },

    {
      title: "Generative AI: Prompt Engineering Basics",
      issuer: "Coursera",
      date: "July 20, 2025",
      duration: "9 Hours",
      image: s7,
      link: "#",
    }

  ];

  return (

    <section
      id="certificates"
      className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-24"
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-blue-400 text-sm">
            Achievements
          </p>

          <h2 className="text-5xl font-bold mt-3">
            My <span className="text-blue-500">Certificates</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Professional certifications earned through Coursera,
            covering frontend development, JavaScript, React,
            version control, and AI.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((certificate) => (

            <CertificateCard
              key={certificate.title}
              certificate={certificate}
            />

          ))}

        </div>

      </div>

    </section>
  );
}

export default Certificates;