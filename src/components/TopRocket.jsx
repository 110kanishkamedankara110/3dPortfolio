import { Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Rocket from "./Rocket";

const TopRocket = ({ ...props }) => {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none"
      }}
      gl={{ antialias: false }}
      className="flex justify-start absolute"
      position={[0, 0, 0]}
    >
      <directionalLight position={[1, 1, 1]} intensity={2} />
      <ambientLight intensity={1} />
      <hemisphereLight groundColor="#000000" color="#FFFFFF" intensity={1} />

      <group>
        <Float floatIntensity={0.1} speed={0.1}>
          <Rocket rocket={props.rocket} end={props.end} position={[0, 0, 1]} />
        </Float>
      </group>
      
    </Canvas>
  );
};

export default TopRocket;
