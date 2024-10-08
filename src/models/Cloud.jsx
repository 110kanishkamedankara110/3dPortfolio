import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import gsap from "gsap";
import cloud from "../assets/cloud-texture.png";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

function C(props) {


  const { camera, size, viewport, setSize } = useThree();

  const handleResize = () => {
    setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix(); 
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const cloudRef = useRef();
  const texture = useLoader(TextureLoader, cloud);
  function getRandomNumber(mi, ma) {
    const min = mi;
    const max = ma;
    return Math.random() * (max - min) + min;
  }



  useFrame(() => {
    cloudRef.current.position.y += 0.02;
    cloudRef.current.position.x -= 0.02;

    if (cloudRef.current.position.y > viewport.height / 2) {
      cloudRef.current.position.y = -viewport.height / 2;
    }

    if (cloudRef.current.position.x < -viewport.width / 2) {
      cloudRef.current.position.x = viewport.width / 2;
    }
  });



  return (
    <group scale={[4, 4, 4]}>
      <group>
        <mesh
          position={[
            getRandomNumber(-viewport.width / 2, viewport.width),
            getRandomNumber(-viewport.height / 2, viewport.height),
            0,
          ]}
          rotation={[0, 0, Math.PI / 4]}
          ref={cloudRef}
        >
          <planeGeometry />
          <meshBasicMaterial  map={texture}
           
            transparent
          />
        </mesh>
      </group>
    </group>
  );
}

const Cloud = (props) => {
  gsap.registerPlugin(ScrollTrigger);
  const cloud = useRef();

  const can = useRef();

  useGSAP(() => {
    gsap.fromTo(
      can.current,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: props.rocket.current,
          start: "top top",
          end: "bottom bottom",
          onEnter: () => {
            gsap.fromTo(
              can.current,
              { opacity: 0 },
              {
                opacity: 1,
              }
            );
          },
          onLeave: () => {
            gsap.fromTo(
              can.current,
              { opacity: 1 },
              {
                opacity: 0,
              }
            );
          }, // Hide cloud on leave
          onEnterBack: () => {
            gsap.fromTo(
              can.current,
              { opacity: 0 },
              {
                opacity: 1,
              }
            );
          }, // Show cloud when scrolling back
          onLeaveBack: () => {
            gsap.fromTo(
              can.current,
              { opacity: 1 },
              {
                opacity: 0,
              }
            );
          }, // Hide cloud when scrolling back
        },
      }
    );
  });

  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        zIndex: 50,
        pointerEvents: "none"
      }}
      ref={can}
      gl={{ antialias: false }}
      className="flex justify-start absolute h-full"
      position={[0, 0, 0]}
      {...props}
    >
      <directionalLight position={[1, 1, 1]} intensity={2} />
      <ambientLight intensity={1} />
      <hemisphereLight groundColor="#000000" color="#FFFFFF" intensity={1} />

      <group ref={cloud}>
        {Array.from({ length: 100 }, (_, index) => (
          <C key={index} index={index + 1} />
        ))}
      </group>
    </Canvas>
  );
};

export default Cloud;
