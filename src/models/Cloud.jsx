import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import gsap from "gsap";
import cloud1 from "../assets/cloud-texture.png";
import cloud2 from "../assets/cloud-texture2.png";
import cloud3 from "../assets/cloud-texture3.png";
import cloud4 from "../assets/cloud-texture4.png";
import cloud5 from "../assets/cloud-texture5.png";


import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { get } from "lodash";

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}


function C(props) {

  const texture = [
    useLoader(TextureLoader, cloud1),
    useLoader(TextureLoader, cloud2),
    useLoader(TextureLoader, cloud3),
    useLoader(TextureLoader, cloud4),
    useLoader(TextureLoader, cloud5),
  ];
  

  const { camera, size, viewport, setSize } = useThree();

  const handleResize = () => {
    setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [camera, setSize]);

  const cloudRef = useRef();
  const mbm = useRef();
  const speed=getRandomNumber(0,0.04);
 
  useFrame(() => {
    cloudRef.current.position.y +=speed;
    cloudRef.current.position.x -= speed+0.01;

    if (cloudRef.current.position.y > viewport.height / 2) {
      cloudRef.current.position.y = -viewport.height / 2;

    }

    if (cloudRef.current.position.x < -viewport.width / 2) {
      cloudRef.current.position.x = viewport.width / 2;

    }
  });

const scale=getRandomNumber(4, 10);
  return (
    <group
      scale={[
        scale,
        scale,
        scale,
      ]}
    >
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
          <meshBasicMaterial ref={mbm} map={texture[Math.floor(getRandomNumber(0, texture.length))]} transparent />
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
        pointerEvents: "none",
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
        {Array.from({ length: 150 }, (_, index) => (
          <C key={index} index={index + 1} />
          
        ))}
      </group>
    </Canvas>
  );
};

export default Cloud;
