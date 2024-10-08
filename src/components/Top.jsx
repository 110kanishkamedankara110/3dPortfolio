import { Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useRef, useEffect } from "react";
import Laptop from "../models/laptop";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Top = ({ ...props }) => {
  const canvasRef = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const canvas = canvasRef.current;

    const context = gsap.context(() => {
      ScrollTrigger.create({
        trigger: props.projects.current,
        start: "top top",
        end: "bottom bottom",
        onEnter: () => {
          onEnterAnimation();
          onEnter();
        },

        onLeaveBack: () => {
          onLeaveBackAnimation();
          onLeaveBack();
        },
      });
    });

    return () => context.revert();
  }, [props.projects, props.pages]);

  const onEnterAnimation = () => {
    gsap.to(canvasRef.current, {
      duration: 1,
      y: 0,
      ease: "power1.inOut",
    });
  };
  const onLeaveBackAnimation = () => {
    gsap.to(canvasRef.current, {
      duration: 1.5,
      y: 0,
      ease: "power1.inOut",
    });
  };

  const onEnter = () => {
    const canvas = document.getElementById("canvas");
    props.projects.current.appendChild(canvas);
  };

  const onLeaveBack = () => {
    const canvas = document.getElementById("canvas");
    props.pages.current.appendChild(canvas);
  };

  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 50,
        pointerEvents: "none",
      }}
      id="canvas"
      ref={canvasRef}
      gl={{ antialias: false }}
      className="flex justify-start"
    >
      <directionalLight position={[1, 1, 1]} intensity={2} />
      <ambientLight intensity={1} />
      <hemisphereLight groundColor="#000000" color="#FFFFFF" intensity={1} />

      <group>
        <Float floatIntensity={1} speed={1}>
          <Laptop home={props.home} projects={props.projects} />
        </Float>
      </group>
    </Canvas>
  );
};

export default Top;
