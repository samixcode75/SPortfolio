import React from "react";
import { Link, NavLink } from "react-router";

function Navbar() {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white fixed left-0 top-0 flex flex-col justify-between">

      <div>
        {/* Logo */}
        <div className="p-6 border-b border-gray-700">
          <Link to="/" className="text-2xl font-bold text-blue-400">
            Sami<span className="text-white">.</span>
          </Link>
        </div>

        {/* Navigation */}
        <ul className="flex flex-col mt-6 gap-2 px-4">

          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `block py-3 px-4 rounded-lg duration-200 ${
                  isActive ? "text-blue-700 bg-gray-800" : "text-gray-300"
                } hover:bg-gray-800 hover:text-orange-500`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block py-3 px-4 rounded-lg duration-200 ${
                  isActive ? "text-blue-700 bg-gray-800" : "text-gray-300"
                } hover:bg-gray-800 hover:text-orange-500`
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                `block py-3 px-4 rounded-lg duration-200 ${
                  isActive ? "text-blue-700 bg-gray-800" : "text-gray-300"
                } hover:bg-gray-800 hover:text-orange-500`
              }
            >
              Skills
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `block py-3 px-4 rounded-lg duration-200 ${
                  isActive ? "text-blue-700 bg-gray-800" : "text-gray-300"
                } hover:bg-gray-800 hover:text-orange-500`
              }
            >
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/education"
              className={({ isActive }) =>
                `block py-3 px-4 rounded-lg duration-200 ${
                  isActive ? "text-blue-700 bg-gray-800" : "text-gray-300"
                } hover:bg-gray-800 hover:text-orange-500`
              }
            >
              Education
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/certificates"
              className={({ isActive }) =>
                `block py-3 px-4 rounded-lg duration-200 ${
                  isActive ? "text-blue-700 bg-gray-800" : "text-gray-300"
                } hover:bg-gray-800 hover:text-orange-500`
              }
            >
              Certificates
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block py-3 px-4 rounded-lg duration-200 ${
                  isActive ? "text-blue-700 bg-gray-800" : "text-gray-300"
                } hover:bg-gray-800 hover:text-orange-500`
              }
            >
              Contact
            </NavLink>
          </li>

        </ul>
      </div>

      {/* Download CV */}
      <div className="p-4 border-t border-gray-700">
        <a
          href="/resume.pdf"
          download
          className="block text-center bg-blue-500 hover:bg-blue-600 py-3 rounded-lg transition-colors"
        >
          Download CV
        </a>
      </div>

    </aside>
  );
}

export default Navbar;