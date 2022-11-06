import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function AlarmButton() {
  const { nodes, materials } = useGLTF("/public/models/alarm_button/model.glb");
  return (
    <group dispose={null} scale={'0.1'}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
      
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.lambert3SG}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/public/models/alarm_button/model.glb");
