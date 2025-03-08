
import { useGLTF } from '@react-three/drei'
import city from "/3D/city.glb";
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const City=(props)=>{
  const { nodes, materials } = useGLTF(city)
 const lpt=useRef();
  useGSAP(()=>{
    gsap.to(lpt.current.rotation,{
      y:Math.PI*2,
      duration:2,
      scrollTrigger:{
        scrub:1,
      }
    });
  });

  return (
    <group {...props} ref={lpt} rotation={[0,0,0]} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials['Ocean.004']}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload(city)
export default City;