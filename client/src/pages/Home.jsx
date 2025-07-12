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

        {/* Caution Section */}
        <div className="bg-yellow-600 bg-opacity-80 border border-yellow-500 rounded-lg p-4 mb-8 text-black">
          <h2 className="text-xl font-semibold mb-2 flex items-center justify-center">
            ⚠️ Important Notice
          </h2>
          <p className="text-sm md:text-base mb-3">
            The QR code provided in the presentation may have expired. If it doesn't work, click the link below to access the SFS algorithm technical documentation and implementation directly.
          </p>
          <p className="text-sm md:text-base mb-3">
            It contains in-depth analysis of the SFS algorithm and can be tested directly with just Docker - no further setup required. Test data is included too.
          </p>
          <a
            href="https://github.com/vaidikcode/SFS-Shape-From-Shading-"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            📖 SFS Algorithm Technical Docs & Implementation
          </a>
        </div>

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
