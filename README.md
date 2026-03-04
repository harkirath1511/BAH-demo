# BAH
🔷 TMC-1 Input Parsing
Reads mono image + metadata (sun elevation, azimuth, incidence) for processing. Supports ISRO’s TMC-1 format.

🔷 Shape-from-Shading Algorithm
Uses pixel brightness + lighting geometry to estimate terrain slope and depth — generates a seed DEM.

🔷 ASP Refinement
Uses NASA's Ames Stereo Pipeline (SfS tool) to enhance seed DEM into a smoother, higher-detail elevation map.

🔷 DEM Registry via SHA + IPFS
Each DEM is hashed with SHA-256, stored on IPFS, and listed with its metadata for verification and sharing.

🔷 Stereo Verification
Seed DEM is compared against stereo-derived DEMs for error metrics (e.g., RMSE) and visual difference mapping.

🔷 3D Visualization
Final DEMs are rendered as interactive or simulated 3D terrain, viewable with metadata and rotation controls.

🛠 Custom SfS Method (Simplified)
Our Shape-from-Shading pipeline uses TMC-1 image illumination parameters (sun azimuth, elevation, incidence) to compute surface normals and estimate depth variations. It assumes a Lunar-Lambertian reflectance model and integrates local slopes to build an initial DEM. This seed DEM is later refined using ASP’s SfS tool for enhanced detail and realism.
