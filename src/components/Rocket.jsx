
import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import rocket2 from "../assets/3D/rocket_bomb.glb";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const Rocket = (props) => {
  const { nodes, materials } = useGLTF(rocket2);

  const rocket = useRef();
  const roc = useRef();

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
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    rocket.current.position.x = -viewport.width;
    rocket.current.position.y = viewport.height / 2;

    rocket.current.rotation.x = Math.PI;

    gsap.to(roc.current.rotation, {
      x: Math.PI * 2,
      duration: 2,
      ease: "none",
      repeat: -1,
    });
  });

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const { width, height } = viewport; 

    gsap.fromTo(
      rocket.current.position,
      {
        x: -width,
        y: height,
      },
      {
        x: 0,
        y: 0,
        immediateRender: false,
        scrollTrigger: {
          trigger: props.rocket.current,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      rocket.current.position,
      {
        x: 0,
        y: 0,
      },
      {
        x: width,
        y: -height,
        immediateRender: false,
        scrollTrigger: {
          trigger: props.rocket.current,
          start: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [props.rocket, viewport]); 

  return (
    <group
      ref={rocket}
      rotation={[0, Math.PI, ((7 * Math.PI) / 4)+0.3]}
      scale={[2, 2, 2]}
      {...props}
      dispose={null}
    >
      <group ref={roc} scale={0.318}>
        <group>
          <group position={[0, 0, -8.99]}>
            <group
              position={[2.527, 0.991, -0.014]}
              scale={[1.188, 0.584, 0.228]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.rocket7_lambert1_0.geometry}
                material={materials["lambert1.001"]}
                position={[-0.189, 0.217, 39.697]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rocket1_lambert1_0.geometry}
              material={materials.lambert1}
              position={[-0.7, 0.125, 8.99]}
              rotation={[-Math.PI, 0, 0]}
              scale={[0.317, 0.164, 0.317]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rocket10_lambert1_0.geometry}
              material={materials["lambert1.001"]}
              position={[1.74, -0.246, 8.976]}
              rotation={[-Math.PI, 0, 0]}
              scale={[1.373, 0.698, 0.228]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rocket11_lambert1_0.geometry}
              material={materials["lambert1.001"]}
              position={[1.74, 1.014, 7.744]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[1.373, 0.698, 0.228]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rocket2_lambert1_0.geometry}
              material={materials["lambert1.001"]}
              position={[-0.7, 1.875, 8.99]}
              scale={[0.317, 0.164, 0.317]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rocket8_lambert1_0.geometry}
              material={materials["lambert1.001"]}
              position={[0, 1, 8.99]}
              rotation={[0, 0, Math.PI / 2]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rocket9_lambert1_0.geometry}
              material={materials["lambert1.001"]}
              position={[1.74, 0.986, 10.236]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[1.373, 0.698, 0.228]}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload(rocket2);
export default Rocket;
