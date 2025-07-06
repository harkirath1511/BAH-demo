import React from "react";
import { Link } from "react-router-dom";
 // Make sure you have this image!

const Home = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("https://cdn.mos.cms.futurecdn.net/HuGGeENt6kGyixe3hT9tnY.jpg")`,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backgroundBlendMode: "darken",
      }}
    >
      <div className="text-center px-6 max-w-3xl text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-snug drop-shadow-lg">
          Lunar DEM Platform 🌕  
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
          TMC-1 Based Digital Elevation Model Generation using Shape-from-Shading (SfS), ASP refinement, and IPFS-based DEM Registry.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            to="/upload"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Upload TMC-1 Image
          </Link>
          <Link
            to="/registry"
            className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Explore DEM Registry
          </Link>
          <Link
            to="/about"
            className="bg-transparent border border-white hover:bg-white hover:text-black font-semibold py-3 px-6 rounded-lg transition"
          >
            Learn How It Works
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
