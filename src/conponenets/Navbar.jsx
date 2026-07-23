import React from "react";
import { Link, NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-400">
          Sami<span className="text-white">.</span>
        </Link>

        {/* Navigation */}
        <ul className="flex items-center gap-8">
          <li>
            <NavLink to="/" className={({isActive})=>(

              `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-blue-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
  )}>Home</NavLink>
          </li>

          <li>
            <NavLink to="/about" className={({isActive})=>(

              `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-blue-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
  )}>About</NavLink>
          </li>

          <li>
            <NavLink to="/skills" className={({isActive})=>(

              `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-blue-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
  )}>Skills</NavLink>
          </li>

          <li>
            <NavLink to="/projects" className={({isActive})=>(

              `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-blue-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
  )}>Projects</NavLink>
          </li>

          <li>
            <NavLink to="/education" className={({isActive})=>(

              `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-blue-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
  )}>Education</NavLink>
          </li>

          <li>
            <NavLink to="/certificates" className={({isActive})=>(

              `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-blue-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
  )}>Certificates</NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={({isActive})=>(

              `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-blue-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
  )}>Contact</NavLink>
          </li>
        </ul>

        <a
          href="/resume.pdf"
          download
          className="hidden md:inline-block bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg"
        >
          Download CV
        </a>
      </div>
    </nav>
  );
}

export default Navbar;