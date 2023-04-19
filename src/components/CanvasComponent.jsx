import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useTexture } from "@react-three/drei";

export default function CanvasComponent({ tool }) {
  return (
    <Canvas style={{ cursor: "pointer", height:"15rem" }}>
      <ambientLight intensity={1} />
      <Sphere tool={tool} />
    </Canvas>
  );
}

function Sphere({ tool }) {
  const texture = useTexture(`./icons/${tool}-box.png`);

  return (
    <mesh>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={.95}
        maxPolarAngle={2.05}
        autoRotate={true}
        autoRotateSpeed={3}
      />
      <boxGeometry args={[3, 3, 3, 1, 1, 1]} />
      <meshStandardMaterial map={texture}/>
    </mesh>
  );
}
