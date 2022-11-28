import {
    Environment,
    MeshReflectorMaterial,
    OrbitControls,
    PerspectiveCamera,
    useTexture,
} from "@react-three/drei";
import { useFrame, extend, useLoader } from "@react-three/fiber";
import { Fragment, useEffect, useRef } from "react";
import { angleToRadians } from "../../utils/angle";
import * as THREE from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

extend({ TextGeometry });

function HomeCanvas() {
    // Plagins
    gsap.registerPlugin(MotionPathPlugin);

    const woodenTexture = useTexture({
        map: "/textures/wooden/Wood_027_basecolor.jpg",
        displacementMap: "/textures/wooden/Wood_027_height.png",
        normalMap: "/textures/wooden/Wood_027_normal.jpg",
        roughnessMap: "/textures/wooden/Wood_027_roughness.jpg",
        aoMap: "/textures/wooden/Wood_027_ambientOcclusion.jpg",
    });

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

    // Font Loader
    const font = useLoader(FontLoader, "/models/fonts/Poor Story_Regular.json");

    // Box Animation

    const boxOneRef = useRef(null);
    const boxTwoRef = useRef(null);
    const boxThreeRef = useRef(null);
    useEffect(() => {
        if (!!boxOneRef.current && !!boxTwoRef && !!boxThreeRef) {
            // Timeline
            const timeline = gsap.timeline({ paused: true });

            gsap.to(boxOneRef.current.position, {
                y: 0.1,
                duration: 2,
                ease: "bounce.out",
            });

            gsap.to(
                boxTwoRef.current.position,
                {
                    y: 0.6,
                    duration: 1,
                    ease: "expo.out",
                },
                ">"
            );

            gsap.to(
                boxThreeRef.current.position,
                {
                    y: 1,
                    duration: 1,
                    ease: "expo.out",
                },
                ">"
            );

            timeline.play();
        }
    }, [boxOneRef.current, boxTwoRef.current, boxThreeRef.current]);

    // Words Animation

    const wordsOneRef = useRef(null);
    const wordsTwoRef = useRef(null);
    const wordsThreeRef = useRef(null);

    useEffect(() => {
        if (
            !!wordsOneRef.current &&
            !!wordsTwoRef.current &&
            !!wordsThreeRef.current
        ) {
            // Timeline
            const timeline = gsap.timeline({ paused: true });

            gsap.to(wordsOneRef.current.position, {
                y: 0.75,
                duration: 3,
                ease: "expo.out",
            });

            gsap.to(
                wordsTwoRef.current.position,
                {
                    y: 1.25,
                    duration: 1,
                    ease: "expo.out",
                },
                ">"
            );

            gsap.to(
                wordsThreeRef.current.position,
                {
                    y: 1.5,
                    duration: 1,
                    ease: "expo.out",
                },
                ">"
            );

            timeline.play();
        }
    }, [wordsOneRef.current, wordsTwoRef.current, wordsThreeRef.current]);

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

            {/* Cubes */}

            {/* front */}
            <mesh position={[-0.5, 5, 1]} castShadow ref={boxOneRef} receiveShadow>
                <boxGeometry args={[4, 1, 1]} />
                <meshStandardMaterial {...woodenTexture} displacementScale={0.3} />
            </mesh>

            {/* middle */}
            <mesh position={[-0.5, 5, -0]} castShadow ref={boxTwoRef} receiveShadow>
                <boxGeometry args={[4, 1, 1]} />
                <meshStandardMaterial {...woodenTexture} displacementScale={0.3} />
            </mesh>

            {/* back */}
            <mesh position={[-0.5, 5, -1]} castShadow ref={boxThreeRef} receiveShadow>
                <boxGeometry args={[4, 1, 1]} />
                <meshStandardMaterial {...woodenTexture} displacementScale={0.2} />
            </mesh>

            {/* Text Geometry */}
            <mesh
                receiveShadow
                castShadow
                position={[-1.9, -5, 1.1]}
                ref={wordsOneRef}
            >
                <textGeometry
                    args={[
                        "Web Developer",
                        {
                            font: font,
                            size: 0.4,
                            height: 0.15,
                            curveSegments: 10,
                            bevelEnabled: true,
                            bevelThickness: 0.03,
                            bevelSize: 0.02,
                            bevelOffset: 0,
                            bevelSegments: 5,
                        },
                    ]}
                />
                <meshLambertMaterial attach="material" color="#73959B" />
                {/* <shaderMaterial /> */}
            </mesh>
            <mesh
                receiveShadow
                castShadow
                position={[-1.15, -5, 0.3]}
                ref={wordsTwoRef}
            >
                <textGeometry
                    args={[
                        "G i o r g i",
                        {
                            font: font,
                            size: 0.4,
                            height: 0.15,
                            curveSegments: 10,
                            bevelEnabled: true,
                            bevelThickness: 0.03,
                            bevelSize: 0.02,
                            bevelOffset: 0,
                            bevelSegments: 5,
                        },
                    ]}
                />
                <meshBasicMaterial color="cyan" scale={0.009} toneMapped={false} />
            </mesh>
            <mesh
                receiveShadow
                castShadow
                position={[-1.15, -5, -1]}
                ref={wordsThreeRef}
            >
                <textGeometry
                    args={[
                        "Hi, I'm",
                        {
                            font: font,
                            size: 0.4,
                            height: 0.15,
                            curveSegments: 10,
                            bevelEnabled: true,
                            bevelThickness: 0.03,
                            bevelSize: 0.02,
                            bevelOffset: 0,
                            bevelSegments: 5,
                        },
                    ]}
                />
                <meshLambertMaterial attach="material" color="#73959B" />
            </mesh>

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
