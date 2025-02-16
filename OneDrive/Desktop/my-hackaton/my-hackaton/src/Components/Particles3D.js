import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";

function ParticleField({ isDarkMode }) {
  const pointsRef = useRef();
  const [positions, setPositions] = useState([]);
  const [particleColor, setParticleColor] = useState("#00ccff"); 

  useEffect(() => {
    const numParticles = 6000;
    const positionsArray = new Float32Array(numParticles * 3);

    for (let i = 0; i < numParticles * 3; i++) {
      positionsArray[i] = (Math.random() - 0.5) * 20;
    }

    setPositions(positionsArray);
  }, []);

 
  useEffect(() => {
    setParticleColor(isDarkMode ? "#00ccff" : "#1E40AF"); 
  }, [isDarkMode]);

  useFrame(({ clock, mouse }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.02;
      pointsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.02;

      // Subtle movement with mouse
      pointsRef.current.position.x = mouse.x * 0.1;
      pointsRef.current.position.y = -mouse.y * 0.1;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} frustumCulled={false}>
      <PointMaterial
        size={0.06}
        color={particleColor} 
        depthWrite={false}
        transparent
        opacity={0.7}
      />
    </Points>
  );
}

export default function ParticleBackground({ isDarkMode }) {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full -z-10 transition-colors duration-500"
      style={{
        backgroundColor: isDarkMode ? "#121212" : "#f0f0f0", 
      }}
    >
      <Canvas camera={{ position: [0, 0, 7], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <ParticleField isDarkMode={isDarkMode} />
      </Canvas>
    </div>
  );
}
