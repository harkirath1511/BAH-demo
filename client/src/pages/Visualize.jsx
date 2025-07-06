import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import * as GeoTIFF from "geotiff";

const TerrainMesh = ({ elevation }) => {
  const width = 256;
  const height = 256;
  const geometry = new THREE.PlaneGeometry(30, 30, width - 1, height - 1);

  // ✅ Apply elevation first
  for (let i = 0; i < geometry.attributes.position.count; i++) {
    geometry.attributes.position.setZ(i, elevation[i]);
  }

  // ✅ Then calculate color based on the final Z values
  const colors = [];
  for (let i = 0; i < geometry.attributes.position.count; i++) {
    const z = geometry.attributes.position.getZ(i);
    const color = new THREE.Color();
    color.setHSL(THREE.MathUtils.clamp(z / 50, 0, 1), 1.0, 0.5);
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
        flatShading={true}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const Visualize = () => {
  const [elevationData, setElevationData] = useState(null);

  useEffect(() => {
    const loadDEM = async () => {
      const response = await fetch("/assets/clean_dem.tif");
      const arrayBuffer = await response.arrayBuffer();
      const tiff = await GeoTIFF.fromArrayBuffer(arrayBuffer);
      const image = await tiff.getImage();
      const raster = await image.readRasters();
      const data = raster[0];

      // ✅ Normalize and scale elevation
      const min = Math.min(...data);
      const max = Math.max(...data);
      const normalized = data.map((val) => ((val - min) / (max - min)) * 10); // Scale height to 0–10

      console.log("Elevation data normalized:", normalized);
      setElevationData(normalized);
    };

    loadDEM();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <h2 className="text-center text-3xl font-bold py-6">3D DEM Viewer</h2>

      <div className="h-[75vh] bg-gray-800 rounded-xl shadow-inner">
        <Canvas camera={{ position: [0, 15, 30], fov: 45 }} shadows>
          <ambientLight intensity={0.5} />
          <directionalLight
            castShadow
            position={[10, 20, 10]}
            intensity={1.2}
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
