import React, { useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { color } from "three/webgpu";
gsap.registerPlugin(ScrollTrigger);

const AnimatedText = forwardRef(({ text, canvas },ref) => {
    const textRef = useRef();
  
    useFrame(() => {
      if (textRef.current) {
        textRef.current.position.y = Math.sin(Date.now() * 0.002) * 0.5;
      }
    });
  
    useEffect(() => {
      if (textRef.current) {
        gsap.fromTo(
          textRef.current.position,
          { z: -100 }, 
          {
            z: 0,
            duration: 1, 
            ease: "power2.out", 
            scrollTrigger:{
                trigger:canvas.current,
                start:'top 10%',
                end:'bottom bottom',
                scrub:1,
            }
          }
        );
  
        return () => {
          animation.kill();
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
      }
    }, [canvas]);
  
    return (
      <Text ref={textRef} color={"#D91656"} fontSize={3}>
        {text}
      </Text>
    );
  });



const MyComponent = forwardRef((props,ref) => {
    const textRef = useRef();
    
    useImperativeHandle(ref, () => ({
      getCanvas: () => textRef.current,
    }));


    const com=<div>
    <Canvas
      style={{
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none"
      }}
      ref={textRef}
      gl={{ antialias: false }}
    >
      <directionalLight position={[1, 1, 1]} intensity={2} />
      <ambientLight intensity={1} />
      <AnimatedText canvas={textRef} text={props.children} />
    </Canvas>
  </div>

  return (
    com
  );
});

export default MyComponent;
