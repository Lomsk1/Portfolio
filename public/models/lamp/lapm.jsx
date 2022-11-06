import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Light() {
  const { nodes, materials } = useGLTF("/public/models/lamp/model.glb");
  return (
    <group scale={'0.15'} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder14_light__0.geometry}
            material={materials.light}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface12_lambert2_0.geometry}
            material={materials.lambert2}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/public/models/lamp/model.glb");