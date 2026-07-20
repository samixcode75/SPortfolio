import React from 'react'

function Navbar() {

  const navLinks=[

    {name:"About",path:"#about"},
      { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Education", path: "#education" },
    { name: "Certificates", path: "#certificates" },
    { name: "Contact", path: "#contact" },
  ]
  return (
   


    <nav  className="bg-gray-900 text-white shadow-md sticky top-0 z-50">


      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <a href="/" className="text-2xl font-bold text-blue-400">
          Sami<span className="text-white">.</span>
        </a>


<ul className="flex items-center gap-8">
  {navLinks.map((link) => (
    <li key={link.name}>
      <a
        href={link.path}
        className="hover:text-blue-400 transition-colors duration-300"
      >
        {link.name}
      </a>
    </li>
  ))}
</ul>

<a 
href='/resume.pdf'
download
className="hidden md:inline-block bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg transition-colors duration-300">
  Download CV
</a>

      </div>
    </nav>
  )
}

export default Navbar