import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // install lucide-react or replace with SVGs

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-gray-950 border-b border-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/home" className="flex items-center space-x-2">
          <img
            src="https://cdn-icons-png.flaticon.com/128/8094/8094454.png"
            alt="Moon Logo"
            className="w-8 h-8"
          />
          <span className="text-white text-xl font-bold tracking-wide">Lunar DEM</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-300 text-sm">
          <Link to="/home" className="hover:text-white transition">Home</Link>
          <Link to="/upload" className="hover:text-white transition">Generate</Link>
          <Link to="/registry" className="hover:text-white transition">Registry</Link>
          <Link to="/compare" className="hover:text-white transition">Compare</Link>
          <Link to="/visualize" className="hover:text-white transition">3D Viewer</Link>
          <Link to="/about" className="hover:text-white transition">Docs</Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300 hover:text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-gray-900 text-gray-300 text-sm">
          <Link to="/home" onClick={closeMenu} className="block hover:text-white">Home</Link>
          <Link to="/upload" onClick={closeMenu} className="block hover:text-white">Generate</Link>
          <Link to="/registry" onClick={closeMenu} className="block hover:text-white">Registry</Link>
          <Link to="/compare" onClick={closeMenu} className="block hover:text-white">Compare</Link>
          <Link to="/visualize" onClick={closeMenu} className="block hover:text-white">3D Viewer</Link>
          <Link to="/about" onClick={closeMenu} className="block hover:text-white">Docs</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
