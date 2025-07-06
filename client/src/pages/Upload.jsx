import React, { useState } from "react";
import { Link } from "react-router-dom";

const Upload = () => {
  const [selectedOption, setSelectedOption] = useState("custom");

  return (
    <div className="min-h-screen bg-[url('https://cdn.mos.cms.futurecdn.net/HuGGeENt6kGyixe3hT9tnY.jpg')] bg-cover bg-center bg-no-repeat bg-black/70 bg-blend-darken text-white px-6 py-10 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Upload & Generate DEM
      </h2>

      <div className="w-full max-w-3xl bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-700">
        {/* Upload Inputs */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Upload TMC-1 Mono Image:</label>
          <input
            type="file"
            accept="image/*"
            className="w-full bg-gray-700 p-2 rounded"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Upload Metadata File:</label>
          <input
            type="file"
            accept=".txt,.json"
            className="w-full bg-gray-700 p-2 rounded"
          />
        </div>

        {/* Option Selector */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Choose Generation Method:</label>
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="w-full bg-gray-700 p-2 rounded"
          >
            <option value="custom">Generate via Custom SfS</option>
            <option value="asp">Generate via ASP Refinement</option>
          </select>
        </div>

        {/* Generate Button */}
        <div className="mb-10 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded font-semibold">
            Generate DEM
          </button>
        </div>

        {/* Simulated DEM Result */}
        <div className="mb-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Simulated DEM Preview</h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJRHrI26oBAAxd3d9M55HrZgaJ7OqUyP0LKw&s"
            alt="Simulated DEM"
            className="mx-auto rounded-lg shadow-md border border-gray-700 max-h-80"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
          <Link to="/compare">
            <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded font-semibold">
              Compare with Stereo DEM
            </button>
          </Link>

          <Link to="/visualize">
            <button className="bg-yellow-600 hover:bg-yellow-700 px-6 py-3 rounded font-semibold">
              View in 3D
            </button>
          </Link>

          <Link to="/registry">
            <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded font-semibold">
              Save to Registry (IPFS)
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Upload;
