import { Canvas } from "@react-three/fiber";
import { Fragment, Suspense, useEffect, useRef } from "react";
import CircleAnimation from "../../components/circleAnimation";
import SphereAnimation from "../../components/spereAnimation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Observer from "gsap/Observer";
import { experimental_use as use } from 'react'

gsap.registerPlugin(ScrollTrigger, Observer);

function NormalPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to("#hi", {
        xPercent: 50,
        rotation: 360,
        ease: "none",
        scrollTrigger: {
          trigger: "#hi",
          start: "top center",
          end: "top 100px",
          scrub: true,
          pin: true,
          markers: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);


  

  return (
    <>
      <div ref={containerRef}>
        <section className="section_normal-1">
          <div className="hello_div">
            <h1>
              Hello Stranger <br /> It's Okay, You Can <br /> Scroll Down
            </h1>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Canvas
              id="canvas_sphere_animation"
              shadows
              gl={{
                alpha: true,
                stencil: false,
                depth: false,
                antialias: false,
              }}
              camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
              onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
            >
              <SphereAnimation />
            </Canvas>
          </Suspense>
        </section>

        <section className="section_normal-2">
          <div className="introduce" id="hi">
            {/* <h2>
            I am George, a Freelance <br /> Full-Stack Web Developer <br />{" "}
            Living & Working in <span> Georgia</span>, <span> Tbilisi</span>
          </h2> */}
          </div>
        </section>
        <section className="section_normal-3"></section>
      </div>
    </>
  );
}

export default NormalPage;
