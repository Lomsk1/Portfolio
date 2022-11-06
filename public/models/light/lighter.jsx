
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Lighter() {
  const { nodes, materials } = useGLTF("/public/models/light/model.glb");
  return (
    <group scale={'0.1'} dispose={null}>
      <group position={[2.29, 1.41, -0.58]} rotation={[3.02, 1.53, 1.2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.BaseMaterial2222}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.BaseMaterial0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.BaseMaterial3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.BaseMaterial4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.BaseMaterial1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.BaseMaterial4}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/public/models/light/model.glb");