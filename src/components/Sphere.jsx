import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";

export default function CanvasComponent({ tool }) {
  return (
    <Canvas style={{ cursor: "pointer" }}>
      <ambientLight intensity={0.2} />
      <spotLight position={[15, 4, -15]} intensity={0.8} />
      <Sphere tool={tool} />
    </Canvas>
  );
}

function Sphere({ tool }) {
  const texture = useTexture(`./icons/${tool}.png`);

  return (
    <mesh>
      <OrbitControls
        enableZoom={false}
        minAzimuthAngle={1.3}
        maxAzimuthAngle={1.8}
        minPolarAngle={1.3}
        maxPolarAngle={1.8}
      />
      <sphereGeometry args={[3, 40, 40]} />
      <meshStandardMaterial map={texture} roughness={0} metalness={0.1} />
    </mesh>
  );
}
