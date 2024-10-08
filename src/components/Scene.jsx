import { PerspectiveCamera } from "@react-three/drei";
import React, { useRef } from "react";
import * as THREE from "three";
import City from "../models/City";
const Scene = ({...props}) => {

  const g = useRef();
  
  return (
    <group>
      <directionalLight position={[1, 1, 1]} intensity={2} />
      <ambientLight intensity={1} />

      <hemisphereLight groundColor="#000000" color="#000000" intensity={1} />
      <PerspectiveCamera
        position={[6,15, 36]}
        rotation={[-0.35,0,0]}
        fov={30}
        makeDefault
      />
      <group ref={g}>
        <mesh>
          <meshBasicMaterial
            side={THREE.BackSide}
            opacity={0.2}
            transparent={true}
          />
        </mesh>
        <City/>
      </group>
    </group>
  );
};

export default Scene;
