import React, {
  Suspense,
  useState,
} from "react";
import { Canvas } from "@react-three/fiber";

import Scene from "./Scene";


const Experience = () => {

  const [scrollPos, setScrollPos] = useState(0);

  return(
      <Canvas style={{ width: "100vw", height: "100vh", position: "fixed", top: 0, left: 0,pointerEvents: "none"
      }} gl={{ antialias: false }}>
        <Suspense fallback={null}>
            <Scene scrollOffset={scrollPos}/>    
        </Suspense>
      </Canvas>
  );

};

export default Experience;
