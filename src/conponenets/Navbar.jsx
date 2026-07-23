import React from "react";
import { Link, NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-400">
          Sami<span className="text-white">.</span>
        </Link>

        {/* Navigation */}
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-row items-center gap-3 md:gap-8">

          <li className="text-center" >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive
                    ? "text-blue-500"
                    : "text-gray-300 hover:text-orange-500"
                }`
              }
            >
              Home
            </NavLink>
          </li>

          <li className="text-center">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive
                    ? "text-blue-500"
                    : "text-gray-300 hover:text-orange-500"
                }`
              }
            >
              About
            </NavLink>
          </li>

          <li className="text-center">
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive
                    ? "text-blue-500"
                    : "text-gray-300 hover:text-orange-500"
                }`
              }
            >
              Skills
            </NavLink>
          </li>

          <li className="text-center">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive
                    ? "text-blue-500"
                    : "text-gray-300 hover:text-orange-500"
                }`
              }
            >
              Projects
            </NavLink>
          </li>

          <li className="text-center">
            <NavLink
              to="/education"
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive
                    ? "text-blue-500"
                    : "text-gray-300 hover:text-orange-500"
                }`
              }
            >
              Education
            </NavLink>
          </li>

          <li className="text-center">
            <NavLink
              to="/certificates"
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive
                    ? "text-blue-500"
                    : "text-gray-300 hover:text-orange-500"
                }`
              }
            >
              Certificates
            </NavLink>
          </li>

          <li className="text-center">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive
                    ? "text-blue-500"
                    : "text-gray-300 hover:text-orange-500"
                }`
              }
            >
              Contact
            </NavLink>
          </li>

        </ul>

        {/* Download CV */}
        <a
          href="/resume.pdf"
          download
          className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg transition-colors duration-300 w-full md:w-auto text-center"
        >
          Download CV
        </a>

      </div>
    </nav>
  );
}

export default Navbar;