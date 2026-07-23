import React from 'react'
import profilePic from "./download.png";
import { Link, NavLink } from "react-router";
function Hero() {



  return (
   <section
   id="hero"
      className="min-h-screen bg-gray-900 text-white flex items-center"
   >

    <div className="max-w-7xl mx-auto px-6 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">

 <div className="md:w-1/2 text-center md:text-left">
 
 <p className="text-lg text-gray-400 mb-2">
            Hi, I'm
          </p>
       <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Sami ur Rehman
          </h1>    

<h2 className="text-2xl text-blue-400 font-semibold mb-6">
            Frontend Developer | BS Computer Science Student
          </h2>

            <p className="text-gray-300 leading-7 mb-8">
            Passionate about building modern, responsive, and user-friendly web
            applications using React, JavaScript, and Tailwind CSS. I enjoy
            learning new technologies and turning ideas into real projects.
          </p>
 </div>

  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
    <Link to="/projects" 
    className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition duration-300">View Projects</  Link>

             <a
              href="/resume.pdf"
              download
              className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg transition duration-300"
            >
              Download CV
            </a>

  </div>


  <div className="md:w-1/2 flex justify-center">

          <img
            src={profilePic}
            alt="Sami ur Rehman"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-blue-500 shadow-lg"
          />

        </div>

    </div>
   </section>
  )
}

export default Hero