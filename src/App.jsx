import React from "react";
import { Link, NavLink } from "react-router";

function Navbar() {
  const navLink = ({ isActive }) =>
    `block px-4 py-2 rounded-lg duration-200 ${
      isActive
        ? "text-blue-500 bg-gray-800"
        : "text-gray-300 hover:text-orange-500 hover:bg-gray-800"
    }`;

  return (
    <>
      {/* ================= Desktop Navbar ================= */}
      <nav className="hidden md:flex fixed top-0 left-0 w-full h-16 bg-gray-900 text-white items-center justify-between px-8 shadow-lg z-50">
        <Link to="/" className="text-2xl font-bold text-blue-400">
          Sami<span className="text-white">.</span>
        </Link>

        <ul className="flex items-center gap-8">
          <li><NavLink to="/" end className={navLink}>Home</NavLink></li>
          <li><NavLink to="/about" className={navLink}>About</NavLink></li>
          <li><NavLink to="/skills" className={navLink}>Skills</NavLink></li>
          <li><NavLink to="/projects" className={navLink}>Projects</NavLink></li>
          <li><NavLink to="/education" className={navLink}>Education</NavLink></li>
          <li><NavLink to="/certificates" className={navLink}>Certificates</NavLink></li>
          <li><NavLink to="/contact" className={navLink}>Contact</NavLink></li>
        </ul>

        <a
          href="/resume.pdf"
          download
          className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg"
        >
          Download CV
        </a>
      </nav>

      {/* ================= Mobile Sidebar ================= */}
      <aside className="fixed left-0 top-0 w-24 h-screen bg-gray-900 text-white flex flex-col justify-between md:hidden">

        <div>
          <div className="p-4 border-b border-gray-700">
            <Link to="/" className="text-xl font-bold text-blue-400">
              Sami.
            </Link>
          </div>

          <ul className="flex flex-col mt-4 gap-2 px-2">
            <li><NavLink to="/" end className={navLink}>Home</NavLink></li>
            <li><NavLink to="/about" className={navLink}>About</NavLink></li>
            <li><NavLink to="/skills" className={navLink}>Skills</NavLink></li>
            <li><NavLink to="/projects" className={navLink}>Projects</NavLink></li>
            <li><NavLink to="/education" className={navLink}>Education</NavLink></li>
            <li><NavLink to="/certificates" className={navLink}>Certificates</NavLink></li>
            <li><NavLink to="/contact" className={navLink}>Contact</NavLink></li>
          </ul>
        </div>

        <div className="p-2">
          <a
            href="/resume.pdf"
            download
            className="block text-center bg-blue-500 hover:bg-blue-600 py-2 rounded-lg text-sm"
          >
            CV
          </a>
        </div>

      </aside>
    </>
  );
}

export default Navbar;