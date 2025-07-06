import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side Info */}
        <div className="text-center md:text-left">
          <h4 className="text-white font-bold text-lg mb-1">Lunar DEM Platform</h4>
          <p className="text-sm">A frontend mockup to visualize DEM generation from TMC-1 images using SfS + ASP refinement.</p>
        </div>

        {/* Right Side Links */}
        <div className="text-sm text-center md:text-right space-y-2">
          <p>
            <Link to="/about" className="hover:text-white underline">Docs</Link> · 
            <a href="https://github.com/yourusername/lunar-dem-platform" target="_blank" rel="noreferrer" className="ml-2 hover:text-white underline">
              GitHub
            </a>
          </p>
          <p>Made with 🛰️ in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
