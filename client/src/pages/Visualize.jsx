import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import * as GeoTIFF from "geotiff";

const TerrainMesh = ({ elevation }) => {
  const width = 256;
  const height = 256;
  const geometry = new THREE.PlaneGeometry(30, 30, width - 1, height - 1);

  // Apply elevation data
  for (let i = 0; i < geometry.attributes.position.count; i++) {
    geometry.attributes.position.setZ(i, elevation[i]);
  }

  // Calculate colors based on final Z values
  const colors = [];
  const zValues = Array.from({length: geometry.attributes.position.count}, (_, i) => 
    geometry.attributes.position.getZ(i)
  );
  const minZ = Math.min(...zValues);
  const maxZ = Math.max(...zValues);
  
  for (let i = 0; i < geometry.attributes.position.count; i++) {
    const z = geometry.attributes.position.getZ(i);
    const normalized = (z - minZ) / (maxZ - minZ);
    const color = new THREE.Color();
    
    // Simple but effective color mapping that preserves terrain character
    if (normalized < 0.3) {
      // Low areas - blue to green
      color.setHSL(0.6 - normalized * 0.3, 0.8, 0.3 + normalized * 0.4);
    } else if (normalized < 0.7) {
      // Mid areas - green to brown
      color.setHSL(0.3 - (normalized - 0.3) * 0.5, 0.7, 0.4 + normalized * 0.3);
    } else {
      // High areas - brown to white
      color.setHSL(0.1, 0.4 - (normalized - 0.7) * 0.4, 0.5 + normalized * 0.4);
    }
    
    colors.push(color.r, color.g, color.b);
  }

  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geometry.computeVertexNormals();

  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      geometry={geometry}
      castShadow
      receiveShadow
    >
      <meshStandardMaterial
        vertexColors={true}
        flatShading={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

// Simple downsampling that preserves terrain features
const downsample2D = (data, originalWidth, originalHeight, targetWidth, targetHeight) => {
  const downsampled = new Array(targetWidth * targetHeight);
  const xRatio = originalWidth / targetWidth;
  const yRatio = originalHeight / targetHeight;

  for (let y = 0; y < targetHeight; y++) {
    for (let x = 0; x < targetWidth; x++) {
      // Use nearest neighbor to preserve sharp features
      const originalX = Math.floor(x * xRatio);
      const originalY = Math.floor(y * yRatio);
      const originalIndex = originalY * originalWidth + originalX;
      const targetIndex = y * targetWidth + x;
      
      downsampled[targetIndex] = data[originalIndex];
    }
  }

  return downsampled;
};

const Visualize = () => {
  const [elevationData, setElevationData] = useState(null);
  const [dataStats, setDataStats] = useState(null);

  useEffect(() => {
    const loadDEM = async () => {
      try {
        console.log("Loading DEM file...");
        const response = await fetch("/assets/abc_new_dem.tif");
        const arrayBuffer = await response.arrayBuffer();
        const tiff = await GeoTIFF.fromArrayBuffer(arrayBuffer);
        const image = await tiff.getImage();
        const raster = await image.readRasters();
        const data = raster[0];

        // Get actual dimensions
        const originalWidth = image.getWidth();
        const originalHeight = image.getHeight();
        
        console.log("Original dimensions:", originalWidth, "x", originalHeight);
        console.log("Original data length:", data.length);

        // Downsample to 256x256 using nearest neighbor to preserve features
        const targetWidth = 256;
        const targetHeight = 256;
        const downsampledData = downsample2D(data, originalWidth, originalHeight, targetWidth, targetHeight);
        
        console.log("Downsampled to:", targetWidth, "x", targetHeight);
        console.log("Downsampled data length:", downsampledData.length);

        // Calculate statistics
        const min = Math.min(...downsampledData);
        const max = Math.max(...downsampledData);
        const mean = downsampledData.reduce((a, b) => a + b, 0) / downsampledData.length;
        const range = max - min;
        
        console.log("Data statistics:");
        console.log("  Min:", min);
        console.log("  Max:", max);
        console.log("  Mean:", mean);
        console.log("  Range:", range);
        
        setDataStats({ min, max, mean, range });

        // Normalize and scale elevation - keep original approach but with better scaling
        const heightScale = 4 / range; // Scale so the full range spans 5 units
        const normalized = downsampledData.map((val) => (val - min) * heightScale);

        console.log("Height scale factor:", heightScale);
        console.log("Normalized range:", Math.min(...normalized), "to", Math.max(...normalized));
        
        setElevationData(normalized);
      } catch (error) {
        console.error("Error loading DEM:", error);
      }
    };

    loadDEM();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex justify-between items-center px-6 py-4">
        <h2 className="text-3xl font-bold">3D DEM Viewer</h2>
        {dataStats && (
          <div className="text-sm text-gray-300">
            <div>Elevation Range: {dataStats.min.toFixed(1)} - {dataStats.max.toFixed(1)}</div>
            <div>Mean: {dataStats.mean.toFixed(1)} | Range: {dataStats.range.toFixed(1)}</div>
          </div>
        )}
      </div>

      <div className="h-[75vh] bg-gray-800 rounded-xl shadow-inner mx-6">
        <Canvas camera={{ position: [0, 15, 30], fov: 45 }} shadows>
          <ambientLight intensity={0.6} />
          <directionalLight
            castShadow
            position={[10, 20, 10]}
            intensity={1.0}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <OrbitControls />
          {elevationData && <TerrainMesh elevation={elevationData} />}
        </Canvas>
      </div>
    </div>
  );
};

export default Visualize;
