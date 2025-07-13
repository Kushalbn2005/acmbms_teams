import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-white tracking-wide">
          <span className="text-[#38bdf8]">ACM</span> Chapter
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-white text-sm font-medium">
          <a href="#home" className="hover:text-[#38bdf8] transition-colors duration-300">
            Home
          </a>
          <a href="#about" className="hover:text-[#38bdf8] transition-colors duration-300">
            About
          </a>
          <a href="#team" className="hover:text-[#38bdf8] transition-colors duration-300">
            Team
          </a>
          <a href="#events" className="hover:text-[#38bdf8] transition-colors duration-300">
            Events
          </a>
          <a href="#contact" className="hover:text-[#38bdf8] transition-colors duration-300">
            Contact
          </a>
        </div>

        {/* Mobile Menu Icon Placeholder */}
        <div className="md:hidden text-white">
          ☰
        </div>
      </div>
    </nav>
  )
}

export default Navbar
