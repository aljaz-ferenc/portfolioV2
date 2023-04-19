
import { Canvas} from "@react-three/fiber";
import {
  OrbitControls,
  useTexture,
} from "@react-three/drei";
import {motion} from 'framer-motion'

export default function CanvasComponent() {

  return (
    <motion.div    exit={{y:"100vh", transition: {duration: 0.5}}}

    initial={{opacity: 0, x:"-100vw"}}
    animate={{opacity: 1,x:0, transition: {ease: 'easeInOut'}}}>
    <h1 className="tools-header">TOOLS I USE IN MY DEVELOPMENT PROCESS</h1>
    <Canvas style={{ cursor: "pointer", height: "100vh" }}>
      <ambientLight intensity={.3} />
      <Boxes />
    </Canvas>
    </motion.div>
  );
}

function Boxes() {
    const tools = [
        "vscode",
        "github",
        "html5",
        "css3",
        "sass",
        "javascript",
        "react",
        "photoshop",
    ];
    
    const circleRadius = 3
    const angleStep = (2 * Math.PI) / 8
  return (
    <>
      {tools.map((tool, i) => (
        <mesh key={i} position={[circleRadius * Math.cos(i * angleStep),0, circleRadius * Math.sin(i * angleStep)]}>
          <OrbitControls
            enablePan={false}
            minPolarAngle={1.2}
            maxPolarAngle={1.8}
           autoRotate={true}
           autoRotateSpeed={0.1}
           rotateSpeed={.1}
          />
          <boxGeometry args={[.5, .5, .5, 1, 1, 1]} />
          <directionalLight args={['white', 0.2]} position={[3, 5, 5]} />
          <meshStandardMaterial map={useTexture(`./icons/${tools[i]}-box.png`)} />
        </mesh>
      ))}
    </>
  );
}
