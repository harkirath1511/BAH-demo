import React, { useState } from "react";
import sfsDEM from "../assets/abc.jpg"; // Replace with your static DEM image
// import stereoDEM from "../assets/stereo-dem.jpg"; // Replace with your stereo DEM
 // Fake elevation error map

const Compare = () => {
  const [showDiff, setShowDiff] = useState(true);

  return (
    <div className="min-h-screen bg-[url('https://cdn.mos.cms.futurecdn.net/HuGGeENt6kGyixe3hT9tnY.jpg')] bg-cover bg-center bg-no-repeat bg-black/70 bg-blend-darken"
>
      <h2 className="text-3xl font-bold mb-6 text-center">
        SfS vs Stereo DEM Comparison
      </h2>

      {/* RMSE Metric Section */}
      <div className="text-center mb-10">
        <p className="text-lg text-gray-300">
          <strong>RMSE:</strong> <span className="text-green-400">15.42 meters</span>
        </p>
        <p className="text-gray-500 text-sm">(* Simulated metric, for demonstration only)</p>
      </div>

      {/* DEM Comparison Images */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">SfS DEM Output</h3>
          <img
            src={sfsDEM}
            alt="SfS DEM"
            className="rounded-lg shadow-md max-h-72 border border-gray-700"
          />
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Stereo DEM Output</h3>
          <img
            src={'https://www.researchgate.net/profile/Teemu-Oehman/publication/276294107/figure/fig3/AS:667667451105286@1536195733133/A-perspective-view-of-graben-and-central-pit-craters-in-eastern-Alba-Mons-created-with.png'}
            alt="Stereo DEM"
            className="rounded-lg shadow-md max-h-72 border border-gray-700"
          />
        </div>
      </div>

      {/* Elevation Error Map */}
      <div className="text-center mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={showDiff}
            onChange={() => setShowDiff(!showDiff)}
            className="form-checkbox h-5 w-5 text-blue-600 mr-2"
          />
          <span className="text-gray-300">Show Elevation Difference Map</span>
        </label>
      </div>

      {showDiff && (
        <div className="flex justify-center">
          <img
            src={'https://community.esri.com/t5/image/serverpage/image-id/99438i52098E235C2EF19D?v=v2'}
            alt="Elevation Difference Map"
            className="rounded-lg border border-red-500 shadow-lg max-w-full md:max-w-3xl"
          />
        </div>
      )}
    </div>
  );
};

export default Compare;
