
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import island from "/3D/free_low_poly_game_assets.glb";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
const Island = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(island);
  const { actions } = useAnimations(animations, group);

  const water = useRef();
  const groupRefs = useRef([]);

  useEffect(() => {
    const groups = groupRefs.current;


    groups.forEach((group, index) => {
        const oriPos=group.position.y;
      gsap.fromTo(
        group.position, 
        { y: oriPos },
        {
          y: 1.5, 
          duration: 1,
          ease: "power1.inOut",
          delay: index * 0.5, 
          repeat: -1, 
          yoyo: true, 
        }
      );
    });

    return () => {
      gsap.killTweensOf(groups);
    };
  }, []);

  useFrame(() => {
    actions["Animation"].play();
  });

  return (
    <group
      ref={group}
      position={[0, 0, 0]}
      scale={[0.3, 0.3, 0.3]}
      {...props}
      dispose={null}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Plane_2" scale={90.623}>
                <mesh
                  name="Object_4"
                  geometry={nodes.Object_4.geometry}
                  material={materials["hex.001"]}
                />
              </group>
              <group name="BerrHouse_3" position={[-2.002, 3.995, 0.308]}>
                <mesh
                  name="Object_6"
                  geometry={nodes.Object_6.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Bridge_4" position={[2.143, 2.883, 3.779]}>
                <mesh
                  name="Object_8"
                  geometry={nodes.Object_8.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Cube002_5" position={[4.799, 1.966, 5.949]}>
                <mesh
                  name="Object_10"
                  geometry={nodes.Object_10.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Cube003_6" position={[6.47, 1.966, 3.158]}>
                <mesh
                  name="Object_12"
                  geometry={nodes.Object_12.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Cube004_7" position={[7.001, 1.966, 3.066]}>
                <mesh
                  name="Object_14"
                  geometry={nodes.Object_14.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Cube005_8" position={[5.01, 1.966, 2.288]}>
                <mesh
                  name="Object_16"
                  geometry={nodes.Object_16.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Cube006_9" position={[6.197, 1.966, 1.998]}>
                <mesh
                  name="Object_18"
                  geometry={nodes.Object_18.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Cube007_10" position={[5.947, 1.966, 0.007]}>
                <mesh
                  name="Object_20"
                  geometry={nodes.Object_20.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Cube008_11" position={[7.384, 1.966, -0.402]}>
                <mesh
                  name="Object_22"
                  geometry={nodes.Object_22.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Cube009_12" position={[4.852, 1.966, -2.327]}>
                <mesh
                  name="Object_24"
                  geometry={nodes.Object_24.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Cube010_13" position={[5.089, 1.966, -1.602]}>
                <mesh
                  name="Object_26"
                  geometry={nodes.Object_26.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Cube011_14" position={[5.881, 1.966, -1.418]}>
                <mesh
                  name="Object_28"
                  geometry={nodes.Object_28.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Cube012_15" position={[2.942, 1.966, 3.388]}>
                <mesh
                  name="Object_30"
                  geometry={nodes.Object_30.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Cube013_16" position={[2.441, 1.966, 3.072]}>
                <mesh
                  name="Object_32"
                  geometry={nodes.Object_32.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Cube014_17" position={[2.824, 1.966, 3.981]}>
                <mesh
                  name="Object_34"
                  geometry={nodes.Object_34.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Cube015_18" position={[1.492, 1.966, 4.298]}>
                <mesh
                  name="Object_36"
                  geometry={nodes.Object_36.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Cube016_19" position={[2.059, 1.966, 4.68]}>
                <mesh
                  name="Object_38"
                  geometry={nodes.Object_38.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Cube017_20" position={[-2.227, 1.966, 4.628]}>
                <mesh
                  name="Object_40"
                  geometry={nodes.Object_40.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Cube018_21" position={[-3.524, 1.966, 5.116]}>
                <mesh
                  name="Object_42"
                  geometry={nodes.Object_42.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Cube019_22" position={[-3.036, 1.966, 5.437]}>
                <mesh
                  name="Object_44"
                  geometry={nodes.Object_44.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Cube020_23" position={[-3.517, 1.966, 5.643]}>
                <mesh
                  name="Object_46"
                  geometry={nodes.Object_46.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Cube021_24" position={[1.559, 0.965, 7.675]}>
                <mesh
                  name="Object_48"
                  geometry={nodes.Object_48.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Cube022_25" position={[2.984, 0.965, 7.394]}>
                <mesh
                  name="Object_50"
                  geometry={nodes.Object_50.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Cube023_26" position={[2.571, 0.965, 8.358]}>
                <mesh
                  name="Object_52"
                  geometry={nodes.Object_52.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Cube024_27" position={[2.952, 2.967, -0.331]}>
                <mesh
                  name="Object_54"
                  geometry={nodes.Object_54.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Cube025_28" position={[2.908, 2.967, 0.256]}>
                <mesh
                  name="Object_56"
                  geometry={nodes.Object_56.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Cube026_29" position={[5.188, 2.967, -0.394]}>
                <mesh
                  name="Object_58"
                  geometry={nodes.Object_58.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Cube027_30" position={[4.574, 2.967, -0.824]}>
                <mesh
                  name="Object_60"
                  geometry={nodes.Object_60.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Cube028_31" position={[-0.938, 2.967, 1.103]}>
                <mesh
                  name="Object_62"
                  geometry={nodes.Object_62.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Cube029_32" position={[-0.435, 2.967, 1.431]}>
                <mesh
                  name="Object_64"
                  geometry={nodes.Object_64.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Cube030_33" position={[1.105, 4.973, -1.501]}>
                <mesh
                  name="Object_66"
                  geometry={nodes.Object_66.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Cube031_34" position={[-1.96, 4.973, -1.927]}>
                <mesh
                  name="Object_68"
                  geometry={nodes.Object_68.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Cube032_35" position={[-1.642, 4.973, -1.45]}>
                <mesh
                  name="Object_70"
                  geometry={nodes.Object_70.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Cube033_36" position={[-0.389, 4.973, -2.182]}>
                <mesh
                  name="Object_72"
                  geometry={nodes.Object_72.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Tower2_38" position={[3.915, 3.005, 1.7]}>
                <mesh
                  name="Object_74"
                  geometry={nodes.Object_74.geometry}
                  material={materials.lpb_gradient}
                />
                <group name="cannon_37" position={[0, 1.302, -0.006]}>
                  <mesh
                    name="Object_76"
                    geometry={nodes.Object_76.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
              </group>
              <group name="Tower001_39" position={[-1.1, 2.018, 5.6]}>
                <mesh
                  name="Object_78"
                  geometry={nodes.Object_78.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Crossbow001_40"
                position={[-1.1, 3.021, 5.6]}
                scale={0.215}
              >
                <mesh
                  name="Object_80"
                  geometry={nodes.Object_80.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Tower002_41" position={[3.3, 2.015, 5.6]}>
                <mesh
                  name="Object_82"
                  geometry={nodes.Object_82.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Crossbow002_42"
                position={[3.3, 3.018, 5.6]}
                scale={0.215}
              >
                <mesh
                  name="Object_84"
                  geometry={nodes.Object_84.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Tower003_43" position={[6.6, 2.016, -0.2]}>
                <mesh
                  name="Object_86"
                  geometry={nodes.Object_86.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Crossbow003_44"
                position={[6.6, 3.019, -0.2]}
                scale={0.215}
              >
                <mesh
                  name="Object_88"
                  geometry={nodes.Object_88.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Tower004_45" position={[-0.03, 3.995, -0.15]}>
                <mesh
                  name="Object_90"
                  geometry={nodes.Object_90.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Crossbow004_46"
                position={[-0.03, 4.998, -0.15]}
                scale={0.215}
              >
                <mesh
                  name="Object_92"
                  geometry={nodes.Object_92.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="farmHouse_47" position={[4.382, 2.995, 4.242]}>
                <mesh
                  name="Object_94"
                  geometry={nodes.Object_94.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="fan_48" position={[4.348, 3.716, 4.957]}>
                <mesh
                  name="Object_96"
                  geometry={nodes.Object_96.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="GoldTower_49" position={[5.5, 1.995, 1.7]}>
                <mesh
                  name="Object_98"
                  geometry={nodes.Object_98.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="GoldTower001_50" position={[-1.1, 4.985, -2]}>
                <mesh
                  name="Object_100"
                  geometry={nodes.Object_100.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="house_01_51" position={[4.4, 2.995, 0]}>
                <mesh
                  name="Object_102"
                  geometry={nodes.Object_102.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="house_01001_52"
                position={[5.5, 1.995, 5.6]}
                scale={0.855}
              >
                <mesh
                  name="Object_104"
                  geometry={nodes.Object_104.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="house_01002_53"
                position={[2.2, 1.025, 7.6]}
                scale={0.855}
              >
                <mesh
                  name="Object_106"
                  geometry={nodes.Object_106.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Circle_54" position={[0, 3.995, 0]} scale={1.27}>
                <mesh
                  name="Object_108"
                  geometry={nodes.Object_108.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Circle001_55"
                position={[3.3, 3.995, -1.9]}
                scale={1.27}
              >
                <mesh
                  name="Object_110"
                  geometry={nodes.Object_110.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Circle002_56"
                position={[1.1, 4.985, -1.9]}
                scale={1.27}
              >
                <mesh
                  name="Object_112"
                  geometry={nodes.Object_112.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Circle003_57"
                position={[-1.1, 4.985, -1.9]}
                scale={1.27}
              >
                <mesh
                  name="Object_114"
                  geometry={nodes.Object_114.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Circle004_58"
                position={[-2.2, 3.995, 0]}
                scale={1.27}
              >
                <mesh
                  name="Object_116"
                  geometry={nodes.Object_116.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Circle005_59"
                position={[-1.1, 3.005, 1.9]}
                scale={1.27}
              >
                <mesh
                  name="Object_118"
                  geometry={nodes.Object_118.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Circle006_60"
                position={[1.1, 3.995, 1.9]}
                scale={1.27}
              >
                <mesh
                  name="Object_120"
                  geometry={nodes.Object_120.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="Circle007_61" position={[0, 3, 3.8]} scale={1.27}>
                <mesh
                  name="Object_122"
                  geometry={nodes.Object_122.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Circle008_62"
                position={[2.2, 2.004, 3.8]}
                scale={1.27}
              >
                <mesh
                  name="Object_124"
                  geometry={nodes.Object_124.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Circle009_63"
                position={[3.3, 3.005, 1.9]}
                scale={1.27}
              >
                <mesh
                  name="Object_126"
                  geometry={nodes.Object_126.geometry}
                  material={materials.lpb_gradient}
                />
              </group>

              <group ref={water} name="water">
                {[
                  {
                    name: "Circle010_64",
                    position: [-3.3, 3.005, 1.9],
                    geometry: nodes.Object_128.geometry,
                  },
                  {
                    name: "Circle026_79",
                    position: [-4.39, 1.985, 3.8],
                    geometry: nodes.Object_158.geometry,
                  },
                  {
                    name: "Circle028_80",
                    position: [-2.2, 0.992, 7.6],
                    geometry: nodes.Object_160.geometry,
                  },
                  {
                    name: "Circle042_95",
                    position: [7.701, 0.992, 1.904],
                    geometry: nodes.Object_190.geometry,
                  },
                  {
                    name: "Circle043_96",
                    position: [8.799, 0.992, 3.809],
                    geometry: nodes.Object_192.geometry,
                  },
                  {
                    name: "Circle044_97",
                    position: [7.698, 0.992, 5.711],
                    geometry: nodes.Object_194.geometry,
                  },
                  {
                    name: "Circle029_81",
                    position: [0, 0.992, 7.6],
                    geometry: nodes.Object_162.geometry,
                  },
                  {
                    name: "Circle030_82",
                    position: [-1.1, 0.992, 9.5],
                    geometry: nodes.Object_164.geometry,
                  },
                  {
                    name: "Circle031_83",
                    position: [-3.3, 0.992, 9.5],
                    geometry: nodes.Object_166.geometry,
                  },
                  {
                    name: "Circle032_84",
                    position: [-4.4, 0.992, 7.6],
                    geometry: nodes.Object_168.geometry,
                  },
                  {
                    name: "Circle033_85",
                    position: [-5.5, 0.992, 5.7],
                    geometry: nodes.Object_170.geometry,
                  },
                  {
                    name: "Circle034_86",
                    position: [-6.59, 0.992, 3.79],
                    geometry: nodes.Object_172.geometry,
                  },
                  {
                    name: "Circle035_87",
                    position: [-5.5, 0.992, 1.9],
                    geometry: nodes.Object_174.geometry,
                  },
                  {
                    name: "Circle036_88",
                    position: [-4.4, 0.992, 0],
                    geometry: nodes.Object_176.geometry,
                  },
                  {
                    name: "Circle037_89",
                    position: [1.1, 0.992, 9.5],
                    geometry: nodes.Object_178.geometry,
                  },
                  {
                    name: "Circle038_90",
                    position: [3.3, 0.992, 9.5],
                    geometry: nodes.Object_180.geometry,
                  },
                  {
                    name: "Circle039_91",
                    position: [4.4, 0.992, 7.6],
                    geometry: nodes.Object_182.geometry,
                  },
                ].map((item, index) => (
                  <group
                    key={index}
                    ref={(el) => (groupRefs.current[index] = el)} // Store each ref
                    name={item.name}
                    position={item.position}
                    scale={1.27}
                  >
                    <mesh
                      name={item.name}
                      geometry={item.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                ))}
              </group>

              <group
                name="Circle011_65"
                position={[2.2, 2.995, 0]}
                scale={1.27}
              >
                <mesh
                  name="Object_130"
                  geometry={nodes.Object_130.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Circle012_66"
                position={[4.4, 2.995, 0]}
                scale={1.27}
              >
                <mesh
                  name="Object_132"
                  geometry={nodes.Object_132.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Circle013_67"
                position={[5.5, 2.015, 1.9]}
                scale={1.27}
              >
                <mesh
                  name="Object_134"
                  geometry={nodes.Object_134.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Circle014_68"
                position={[6.6, 2.015, 0]}
                scale={1.27}
              >
                <mesh
                  name="Object_136"
                  geometry={nodes.Object_136.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Circle015_69"
                position={[5.5, 2.015, -1.9]}
                scale={1.27}
              >
                <mesh
                  name="Object_138"
                  geometry={nodes.Object_138.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Circle016_70"
                position={[4.4, 2.995, 3.8]}
                scale={1.27}
              >
                <mesh
                  name="Object_140"
                  geometry={nodes.Object_140.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Circle017_71"
                position={[3.3, 1.99, 5.7]}
                scale={1.27}
              >
                <mesh
                  name="Object_142"
                  geometry={nodes.Object_142.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Circle018_72"
                position={[1.1, 1.99, 5.7]}
                scale={1.27}
              >
                <mesh
                  name="Object_144"
                  geometry={nodes.Object_144.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Circle019_73"
                position={[-1.1, 1.99, 5.7]}
                scale={1.27}
              >
                <mesh
                  name="Object_146"
                  geometry={nodes.Object_146.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Circle020_74"
                position={[-2.19, 2.004, 3.8]}
                scale={1.27}
              >
                <mesh
                  name="Object_148"
                  geometry={nodes.Object_148.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Circle022_75"
                position={[1.1, 3.993, -1.9]}
                scale={1.27}
              >
                <mesh
                  name="Object_150"
                  geometry={nodes.Object_150.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Circle023_76"
                position={[0, 5.977, -3.8]}
                scale={1.27}
              >
                <mesh
                  name="Object_152"
                  geometry={nodes.Object_152.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Circle024_77"
                position={[5.5, 1.985, 5.7]}
                scale={1.27}
              >
                <mesh
                  name="Object_154"
                  geometry={nodes.Object_154.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Circle025_78"
                position={[2.2, 0.992, 7.6]}
                scale={1.27}
              >
                <mesh
                  name="Object_156"
                  geometry={nodes.Object_156.geometry}
                  material={materials.lpb_gradient}
                />
              </group>

              <group name="Circle040_92" position={[4.4, 2, 3.8]} scale={1.27}>
                <mesh
                  name="Object_184"
                  geometry={nodes.Object_184.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Circle041_93"
                position={[6.599, 1.985, 3.805]}
                scale={1.27}
              >
                <mesh
                  name="Object_186"
                  geometry={nodes.Object_186.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Circle027_94"
                position={[-3.29, 1.99, 5.705]}
                scale={1.27}
              >
                <mesh
                  name="Object_188"
                  geometry={nodes.Object_188.geometry}
                  material={materials.lpb_gradient}
                />
              </group>

              <group
                name="Circle021_98"
                position={[2.217, 5.977, -11.597]}
                scale={1.27}
              >
                <mesh
                  name="Object_196"
                  geometry={nodes.Object_196.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Circle045_99"
                position={[-9.961, 5.977, -1.945]}
                scale={1.27}
              >
                <mesh
                  name="Object_198"
                  geometry={nodes.Object_198.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Circle046_100"
                position={[-11.054, 5.977, -3.842]}
                scale={1.27}
              >
                <mesh
                  name="Object_200"
                  geometry={nodes.Object_200.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Circle047_101"
                position={[-12.124, 5.977, -1.977]}
                scale={1.27}
              >
                <mesh
                  name="Object_202"
                  geometry={nodes.Object_202.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Circle048_102"
                position={[-12.147, 5.977, 9.622]}
                scale={1.27}
              >
                <mesh
                  name="Object_204"
                  geometry={nodes.Object_204.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Circle049_103"
                position={[-11.061, 5.977, 7.663]}
                scale={1.27}
              >
                <mesh
                  name="Object_206"
                  geometry={nodes.Object_206.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Circle050_104"
                position={[-5.552, 5.977, -9.741]}
                scale={1.27}
              >
                <mesh
                  name="Object_208"
                  geometry={nodes.Object_208.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Circle051_105"
                position={[14.337, 5.977, -5.702]}
                scale={1.27}
              >
                <mesh
                  name="Object_210"
                  geometry={nodes.Object_210.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Circle052_106"
                position={[12.174, 5.977, -5.734]}
                scale={1.27}
              >
                <mesh
                  name="Object_212"
                  geometry={nodes.Object_212.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="farmHouse001_107" position={[-0.372, 2.995, 3.729]}>
                <mesh
                  name="Object_214"
                  geometry={nodes.Object_214.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Tower2001_108"
                position={[2.979, 3.154, 2.104]}
                rotation={[0, Math.PI / 2, 0]}
              >
                <mesh
                  name="Object_216"
                  geometry={nodes.Object_216.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Tower2002_109"
                position={[0.805, 2.138, 5.518]}
                rotation={[0, 0.526, 0]}
              >
                <mesh
                  name="Object_218"
                  geometry={nodes.Object_218.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="th_110" position={[1, 3.995, 2]}>
                <mesh
                  name="Object_220"
                  geometry={nodes.Object_220.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="pine3_111" position={[-0.106, 5.974, -4.222]}>
                <mesh
                  name="Object_222"
                  geometry={nodes.Object_222.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine2_112"
                position={[-0.429, 5.967, -3.367]}
                scale={0.817}
              >
                <mesh
                  name="Object_224"
                  geometry={nodes.Object_224.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine1_113"
                position={[0.496, 5.961, -3.442]}
                scale={0.763}
              >
                <mesh
                  name="Object_226"
                  geometry={nodes.Object_226.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine0_cut_114"
                position={[3.706, 2.981, 4.267]}
                scale={0.775}
              >
                <mesh
                  name="Object_228"
                  geometry={nodes.Object_228.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="pine3001_115" position={[1.263, 4.98, -2.517]}>
                <mesh
                  name="Object_230"
                  geometry={nodes.Object_230.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine2001_116"
                position={[1.841, 4.968, -1.833]}
                scale={0.817}
              >
                <mesh
                  name="Object_232"
                  geometry={nodes.Object_232.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine2002_117"
                position={[0.461, 4.968, -2.058]}
                scale={0.817}
              >
                <mesh
                  name="Object_234"
                  geometry={nodes.Object_234.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine1001_118"
                position={[3.226, 3.982, -2.586]}
                scale={0.763}
              >
                <mesh
                  name="Object_236"
                  geometry={nodes.Object_236.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="pine3002_119" position={[4.018, 3.983, -2.101]}>
                <mesh
                  name="Object_238"
                  geometry={nodes.Object_238.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine1002_120"
                position={[2.565, 3.982, -1.626]}
                scale={0.763}
              >
                <mesh
                  name="Object_240"
                  geometry={nodes.Object_240.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine1003_121"
                position={[3.538, 3.982, -1.232]}
                scale={0.763}
              >
                <mesh
                  name="Object_242"
                  geometry={nodes.Object_242.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine2003_122"
                position={[3.228, 3.966, -1.865]}
                scale={0.817}
              >
                <mesh
                  name="Object_244"
                  geometry={nodes.Object_244.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine2004_123"
                position={[5.181, 2.969, 3.549]}
                scale={0.817}
              >
                <mesh
                  name="Object_246"
                  geometry={nodes.Object_246.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="pine3003_124" position={[4.718, 2.992, 2.973]}>
                <mesh
                  name="Object_248"
                  geometry={nodes.Object_248.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine0_cut001_125"
                position={[4.785, 1.971, 5.268]}
                scale={0.775}
              >
                <mesh
                  name="Object_250"
                  geometry={nodes.Object_250.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine0_cut002_126"
                position={[6.276, 1.971, 6.109]}
                scale={0.775}
              >
                <mesh
                  name="Object_252"
                  geometry={nodes.Object_252.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine0_cut003_127"
                position={[6.16, 1.971, 5.123]}
                scale={0.775}
              >
                <mesh
                  name="Object_254"
                  geometry={nodes.Object_254.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine0_cut004_128"
                position={[1.496, 0.966, 7.197]}
                scale={0.775}
              >
                <mesh
                  name="Object_256"
                  geometry={nodes.Object_256.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine0_cut005_129"
                position={[2.946, 0.966, 8.054]}
                scale={0.775}
              >
                <mesh
                  name="Object_258"
                  geometry={nodes.Object_258.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine0_cut006_130"
                position={[0.281, 1.977, 5.585]}
                scale={0.775}
              >
                <mesh
                  name="Object_260"
                  geometry={nodes.Object_260.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine0_cut007_131"
                position={[-2.533, 1.977, 5.252]}
                scale={0.775}
              >
                <mesh
                  name="Object_262"
                  geometry={nodes.Object_262.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine1004_132"
                position={[-1.677, 1.985, 4.269]}
                scale={0.763}
              >
                <mesh
                  name="Object_264"
                  geometry={nodes.Object_264.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine2005_133"
                position={[-1.523, 1.987, 3.476]}
                scale={0.817}
              >
                <mesh
                  name="Object_266"
                  geometry={nodes.Object_266.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine2006_134"
                position={[-2.222, 1.987, 3.052]}
                scale={0.817}
              >
                <mesh
                  name="Object_268"
                  geometry={nodes.Object_268.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine1005_135"
                position={[-2.376, 1.985, 3.871]}
                scale={0.763}
              >
                <mesh
                  name="Object_270"
                  geometry={nodes.Object_270.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine1006_136"
                position={[-2.891, 1.994, 3.36]}
                scale={0.672}
              >
                <mesh
                  name="Object_272"
                  geometry={nodes.Object_272.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine0_cut008_137"
                position={[-2.996, 3.99, 0.432]}
                scale={0.775}
              >
                <mesh
                  name="Object_274"
                  geometry={nodes.Object_274.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="pine3004_138" position={[2.111, 5.974, -12.018]}>
                <mesh
                  name="Object_276"
                  geometry={nodes.Object_276.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine2007_139"
                position={[1.788, 5.967, -11.164]}
                scale={0.817}
              >
                <mesh
                  name="Object_278"
                  geometry={nodes.Object_278.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine1007_140"
                position={[2.713, 5.961, -11.239]}
                scale={0.763}
              >
                <mesh
                  name="Object_280"
                  geometry={nodes.Object_280.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="pine3005_141" position={[-10.067, 3.988, -2.367]}>
                <mesh
                  name="Object_282"
                  geometry={nodes.Object_282.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine2008_142"
                position={[-10.39, 3.981, -1.513]}
                scale={0.817}
              >
                <mesh
                  name="Object_284"
                  geometry={nodes.Object_284.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="pine3006_143" position={[-11.594, 4.937, -4.134]}>
                <mesh
                  name="Object_286"
                  geometry={nodes.Object_286.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine1009_144"
                position={[-11.379, 4.924, -3.28]}
                scale={0.763}
              >
                <mesh
                  name="Object_288"
                  geometry={nodes.Object_288.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="pine3007_145" position={[-12.23, 5.974, -2.399]}>
                <mesh
                  name="Object_290"
                  geometry={nodes.Object_290.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine2010_146"
                position={[-12.553, 5.967, -1.545]}
                scale={0.817}
              >
                <mesh
                  name="Object_292"
                  geometry={nodes.Object_292.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine1010_147"
                position={[-11.628, 5.961, -1.619]}
                scale={0.763}
              >
                <mesh
                  name="Object_294"
                  geometry={nodes.Object_294.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine1008_148"
                position={[-10.678, 4.924, -4.342]}
                scale={0.763}
              >
                <mesh
                  name="Object_296"
                  geometry={nodes.Object_296.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="pine3008_149" position={[-12.253, 3.988, 9.2]}>
                <mesh
                  name="Object_298"
                  geometry={nodes.Object_298.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine2009_150"
                position={[-12.576, 3.981, 10.054]}
                scale={0.817}
              >
                <mesh
                  name="Object_300"
                  geometry={nodes.Object_300.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="pine3009_151" position={[-11.6, 4.937, 7.371]}>
                <mesh
                  name="Object_302"
                  geometry={nodes.Object_302.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine1011_152"
                position={[-11.386, 4.924, 8.224]}
                scale={0.763}
              >
                <mesh
                  name="Object_304"
                  geometry={nodes.Object_304.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine1012_153"
                position={[-10.685, 4.924, 7.163]}
                scale={0.763}
              >
                <mesh
                  name="Object_306"
                  geometry={nodes.Object_306.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="pine3010_154" position={[-5.658, 5.974, -10.163]}>
                <mesh
                  name="Object_308"
                  geometry={nodes.Object_308.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine2011_155"
                position={[-5.981, 5.967, -9.309]}
                scale={0.817}
              >
                <mesh
                  name="Object_310"
                  geometry={nodes.Object_310.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine1013_156"
                position={[-5.056, 5.961, -9.383]}
                scale={0.763}
              >
                <mesh
                  name="Object_312"
                  geometry={nodes.Object_312.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="pine3011_157" position={[14.231, 3.988, -6.124]}>
                <mesh
                  name="Object_314"
                  geometry={nodes.Object_314.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine2012_158"
                position={[13.908, 3.981, -5.269]}
                scale={0.817}
              >
                <mesh
                  name="Object_316"
                  geometry={nodes.Object_316.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group name="pine3012_159" position={[12.069, 5.974, -6.156]}>
                <mesh
                  name="Object_318"
                  geometry={nodes.Object_318.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine2013_160"
                position={[11.746, 5.967, -5.302]}
                scale={0.817}
              >
                <mesh
                  name="Object_320"
                  geometry={nodes.Object_320.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="pine1014_161"
                position={[12.671, 5.961, -5.376]}
                scale={0.763}
              >
                <mesh
                  name="Object_322"
                  geometry={nodes.Object_322.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Tree1_162"
                position={[2.195, 2.955, -0.008]}
                scale={[0.768, 1, 0.768]}
              >
                <mesh
                  name="Object_324"
                  geometry={nodes.Object_324.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Tree1001_163"
                position={[1.861, 1.961, 5.753]}
                scale={[0.768, 1, 0.768]}
              >
                <mesh
                  name="Object_326"
                  geometry={nodes.Object_326.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Tree1002_164"
                position={[5.774, 1.987, -2.274]}
                scale={[0.768, 1, 0.768]}
              >
                <mesh
                  name="Object_328"
                  geometry={nodes.Object_328.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Tree1003_165"
                position={[-2.548, 3.977, -0.727]}
                scale={[0.768, 1, 0.768]}
              >
                <mesh
                  name="Object_330"
                  geometry={nodes.Object_330.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="WaterHouse_166"
                position={[-1.74, 2.995, 1.885]}
                rotation={[0, -Math.PI / 2, 0]}
              >
                <mesh
                  name="Object_332"
                  geometry={nodes.Object_332.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
              <group
                name="Cylinder_167"
                position={[-2.086, 3.37, 1.85]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_334"
                  geometry={nodes.Object_334.geometry}
                  material={materials.lpb_gradient}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload(island);
export default Island;
