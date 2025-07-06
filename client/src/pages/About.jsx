import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-[url('https://cdn.mos.cms.futurecdn.net/HuGGeENt6kGyixe3hT9tnY.jpg')] bg-cover bg-center bg-no-repeat bg-black/70 bg-blend-darken"
>
      <h2 className="text-3xl font-bold mb-10 text-center">About the Lunar DEM Platform</h2>

      {/* Pipeline Modules */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">📌 Pipeline Overview</h3>
        <div className="space-y-6 text-gray-300">
          <div>
            <h4 className="text-xl font-semibold text-white">🔷 TMC-1 Input Parsing</h4>
            <p>Reads mono image + metadata (sun elevation, azimuth, incidence) for processing. Supports ISRO’s TMC-1 format.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white">🔷 Shape-from-Shading Algorithm</h4>
            <p>Uses pixel brightness + lighting geometry to estimate terrain slope and depth — generates a seed DEM.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white">🔷 ASP Refinement</h4>
            <p>Uses NASA's Ames Stereo Pipeline (SfS tool) to enhance seed DEM into a smoother, higher-detail elevation map.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white">🔷 DEM Registry via SHA + IPFS</h4>
            <p>Each DEM is hashed with SHA-256, stored on IPFS, and listed with its metadata for verification and sharing.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white">🔷 Stereo Verification</h4>
            <p>Seed DEM is compared against stereo-derived DEMs for error metrics (e.g., RMSE) and visual difference mapping.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white">🔷 3D Visualization</h4>
            <p>Final DEMs are rendered as interactive or simulated 3D terrain, viewable with metadata and rotation controls.</p>
          </div>
        </div>
      </section>

      {/* Technical Explanation */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">🛠 Custom SfS Method (Simplified)</h3>
        <p className="text-gray-300 leading-relaxed">
          Our Shape-from-Shading pipeline uses TMC-1 image illumination parameters (sun azimuth, elevation, incidence)
          to compute surface normals and estimate depth variations. It assumes a Lunar-Lambertian reflectance model
          and integrates local slopes to build an initial DEM. This seed DEM is later refined using ASP’s SfS tool
          for enhanced detail and realism.
        </p>
      </section>

      {/* Contact or GitHub */}
      <section className="text-center border-t border-gray-700 pt-6 text-gray-400">
        <p>Project Repository: <a href="https://github.com/yourusername/lunar-dem-platform" target="_blank" rel="noreferrer" className="text-blue-400 underline">GitHub</a></p>
        <p className="mt-1">Contact: contact@example.com</p>
      </section>
    </div>
  );
};

export default About;
