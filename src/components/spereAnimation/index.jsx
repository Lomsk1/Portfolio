import * as THREE from "three";
import { Fragment, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF, useTexture } from "@react-three/drei";
import { EffectComposer, SSAO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
} from "@react-three/rapier";

THREE.ColorManagement.legacyMode = false;
const bubleMaterial = new THREE.MeshLambertMaterial({
  color: "#c0a0a0",
  emissive: "red",
});
const capMaterial = new THREE.MeshStandardMaterial({
  metalness: 0.75,
  roughness: 0.15,
  color: "#8a492f",
  emissive: "#600000",
  envMapIntensity: 20,
});
const sphereGeomery = new THREE.SphereGeometry(1, 28, 28);
const bubles = [...Array(50)].map(() => ({
  scale: [0.75, 0.75, 1, 1, 1.25][Math.floor(Math.random() * 5)],
}));

function Buble({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
}) {
  const { nodes } = useGLTF("/public/models/sphere/model.glb");
  const api = useRef();
  useFrame((state, delta) => {
    delta = Math.min(0.1, delta);
    api.current.applyImpulse(
      vec
        .copy(api.current.translation())
        .normalize()
        .multiply({
          x: -50 * delta * scale,
          y: -150 * delta * scale,
          z: -50 * delta * scale,
        })
    );
  });
  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
      dispose={null}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeomery}
        material={bubleMaterial}
      />
      <mesh
        castShadow
        scale={2.5 * scale}
        position={[0, 0, -1.8 * scale]}
        // geometry={nodes.Mesh_1.geometry}
        material={capMaterial}
      />
    </RigidBody>
  );
}

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef();
  useFrame(({ mouse, viewport }) => {
    vec.lerp(
      {
        x: (mouse.x * viewport.width) / 2,
        y: (mouse.y * viewport.height) / 2,
        z: 0,
      },
      0.2
    );
    ref.current.setNextKinematicTranslation(vec);
  });
  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

function SphereAnimation() {
  // const backgroundTexture = useTexture('/public/textures/bg-images/photo-1509718443690-d8e2fb3474b7.jpg')
  // backgroundTexture.wrapS = THREE.RepeatWrapping
  // backgroundTexture.wrapT = THREE.RepeatWrapping
  // backgroundTexture.repeat.set(2, 2)
  return (
    <Fragment>
      <ambientLight intensity={1} />
      <spotLight
        position={[20, 20, 25]}
        penumbra={1}
        angle={0.2}
        color="white"
        castShadow
        shadow-mapSize={[512, 512]}
      />
      <directionalLight position={[0, 5, -4]} intensity={4} />
      <directionalLight position={[0, -15, -0]} intensity={4} color="red" />
      <Physics gravity={[0, 0, 0]}>
        <Pointer />
        {bubles.map((props, i) => (
          <Buble key={i} {...props} />
        ))}
      </Physics>
      <Environment background>
        <mesh >
          <sphereGeometry args={[50, 100, 100]} />
          <meshBasicMaterial 
          // map={backgroundTexture} 
          // depthTest={false} 
          color='#04012B'
          side={THREE.BackSide} />
        </mesh>
      </Environment>
      
    </Fragment>
  );
}

export default SphereAnimation;
