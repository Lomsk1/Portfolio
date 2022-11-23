import {
  Environment,
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useFrame, extend, useLoader } from "@react-three/fiber";
import { Fragment, useEffect, useRef } from "react";
import { angleToRadians } from "../../utils/angle";
import * as THREE from "three";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";


gsap.registerPlugin(MotionPathPlugin);

function HomeCanvas() {


  // Orbit Control
  const orbitControlsRef = useRef(null);

  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;
      // revolve round with mouse
      orbitControlsRef.current.setAzimuthalAngle(x * angleToRadians(20));
      //   vertical round with mouse
      orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30));
      orbitControlsRef.current.update();
    }
  });

  return (
    <Fragment>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[4, 1, 4]} />
      <OrbitControls
        ref={orbitControlsRef}
        minPolarAngle={angleToRadians(60)}
        maxPolarAngle={angleToRadians(80)}
        enableZoom={false}
        enablePan={false}
        // zoom0={2}
        maxZoom={1.5}
        minZoom={0.5}
      />

      <mesh rotation={[-angleToRadians(90), 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <MeshReflectorMaterial
          mirror={1}
          blur={[500, 900]}
          mixBlur={12}
          mixStrength={1.5}
        />
      </mesh>

      {/* Ambient Light */}
      <ambientLight args={["#F3B8B8", 0.25]} />

      {/* Spot Light */}
      <spotLight
        args={["#F7EFEF", 2, 18, angleToRadians(45), 0.4]}
        position={[-6, 2, 0]}
        castShadow
      />

      {/* Environment */}
      <Environment background>
        <mesh>
          <sphereGeometry args={[50, 100, 100]} />
          <meshBasicMaterial color="#020118" side={THREE.BackSide} />
        </mesh>
      </Environment>
    </Fragment>
  );
}

export default HomeCanvas;
