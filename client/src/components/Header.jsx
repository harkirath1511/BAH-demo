import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-950 border-b border-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/home" className="flex items-center space-x-2">
          <img
            src="https://cdn-icons-png.flaticon.com/128/8094/8094454.png" // use any lunar or astronomy icon here
            alt="Moon Logo"
            className="w-8 h-8"
          />
          <span className="text-white text-xl font-bold tracking-wide">
            Lunar DEM
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-300 text-sm">
          <Link to="/home" className="hover:text-white transition">Home</Link>
          <Link to="/upload" className="hover:text-white transition">Generate</Link>
          <Link to="/registry" className="hover:text-white transition">Registry</Link>
          <Link to="/compare" className="hover:text-white transition">Compare</Link>
          <Link to="/visualize" className="hover:text-white transition">3D Viewer</Link>
          <Link to="/about" className="hover:text-white transition">Docs</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
