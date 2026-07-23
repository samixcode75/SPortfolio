import React from "react";
import { Link, NavLink } from "react-router";

function Navbar() {
  const navLink = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive
        ? "text-blue-500"
        : "text-gray-300 hover:text-orange-500"
    }`;

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">

        {/* Mobile Layout */}
        <div className="flex md:hidden justify-between items-start gap-6">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-400 flex-shrink-0"
          >
            Sami<span className="text-white">.</span>
          </Link>

          {/* Right Side */}
          <div className="flex flex-col items-end">

            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">

              <li>
                <NavLink to="/" end className={navLink}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" className={navLink}>
                  About
                </NavLink>
              </li>

              <li>
                <NavLink to="/skills" className={navLink}>
                  Skills
                </NavLink>
              </li>

              <li>
                <NavLink to="/projects" className={navLink}>
                  Projects
                </NavLink>
              </li>

              <li>
                <NavLink to="/education" className={navLink}>
                  Education
                </NavLink>
              </li>

              <li>
                <NavLink to="/certificates" className={navLink}>
                  Certificates
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" className={navLink}>
                  Contact
                </NavLink>
              </li>

            </ul>

            <a
              href="/resume.pdf"
              download
              className="mt-3 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors duration-300 text-sm"
            >
              Download CV
            </a>

          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-400">
            Sami<span className="text-white">.</span>
          </Link>

          {/* Navigation */}
          <ul className="flex items-center gap-8">

            <li>
              <NavLink to="/" end className={navLink}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className={navLink}>
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/skills" className={navLink}>
                Skills
              </NavLink>
            </li>

            <li>
              <NavLink to="/projects" className={navLink}>
                Projects
              </NavLink>
            </li>

            <li>
              <NavLink to="/education" className={navLink}>
                Education
              </NavLink>
            </li>

            <li>
              <NavLink to="/certificates" className={navLink}>
                Certificates
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={navLink}>
                Contact
              </NavLink>
            </li>

          </ul>

          {/* Download CV */}
          <a
            href="/resume.pdf"
            download
            className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg transition-colors duration-300"
          >
            Download CV
          </a>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;