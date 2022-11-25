import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import SphereAnimation from "../../components/spereAnimation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Observer from "gsap/Observer";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3,
  faGitAlt,
  faHtml5,
  faJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import websites from "../../website.json";
import { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import SiteLoader from "../../hooks/loader";

gsap.registerPlugin(ScrollTrigger, Observer, MotionPathPlugin);

function NormalPage() {
  const [loading, setLoading] = useState(false);
  const [timeWait, setTimeWait] = useState(false)


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setTimeWait(true)
    }, 2000);
  }, []);

  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Pin
      gsap.to(
        "#hi",
        {
          scrollTrigger: {
            trigger: "#hi",
            start: "top 50%",
            end: "+=100%",
            scrub: 1,
            pin: true,
            pinSpacing: false,
            toggleClass: "active",
            ease: "power2",
          },
        },
        ">"
      );

      // About Section

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about_me",
          start: "top 80%",
          end: "bottom 100px",
          scrub: 1,
        },
      });
      tl.to(".about_me", { xPercent: 100 });
      tl.to(".about_me", { yPercent: 350 });

      gsap.to(".txt_one", {
        xPercent: 19,
        scrollTrigger: {
          trigger: ".txt_one",
          start: "top 95%",
          end: "bottom 60%",
          scrub: 1,
          toggleActions: "restart, pause reverse pause",
        },
      });

      gsap.to(".txt_two", {
        xPercent: 19,
        scrollTrigger: {
          trigger: ".txt_two",
          start: "top 95%",
          end: "bottom 60%",
          scrub: 1,
          toggleActions: "restart, pause reverse pause",
        },
      });

      gsap.to(".txt_three", {
        xPercent: 19,
        scrollTrigger: {
          trigger: ".txt_three",
          start: "top 95%",
          end: "bottom 60%",
          scrub: 1,
          toggleActions: "restart, pause reverse pause",
        },
      });

      gsap.to(".txt_four", {
        xPercent: 19,
        scrollTrigger: {
          trigger: ".txt_four",
          start: "top 95%",
          end: "bottom 70%",
          scrub: 1,
          toggleActions: "restart, pause reverse pause",
        },
      });

      // Vertical Scroll

      let sections = gsap.utils.toArray(".image_container");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".section_normal-4",
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () =>
            "+=" + document.querySelector(".section_normal-4").offsetWidth,
        },
      });

      const tlSkill = gsap.timeline({
        scrollTrigger: {
          trigger: ".skills_title",
          start: "top 80%",
          end: "bottom 100px",
          scrub: 1,
        },
      });
      tlSkill.to(".skills_title", { xPercent: 100 });
      tlSkill.to(".skills_title", { yPercent: 350 });
    }, containerRef);

    return () => ctx.revert();
  }, [timeWait]);

  const [reduxColor, setReduxColor] = useState("");
  const [figmaColor, setFigmaColor] = useState("");
  const [postmanColor, setPostmanColor] = useState("");
  const [threeJsColor, setThreeJsColor] = useState("");
  const [greenSockColor, setGreenSockColor] = useState("");
  const [djangoColor, setDjangoColor] = useState("");
  const [postgreSQL, setPostgreSQL] = useState("");

  useEffect(() => {
    let subscribe = true;

    if (subscribe) {
      setReduxColor(Math.random().toString(16).substr(-6));
      setFigmaColor(Math.random().toString(16).substr(-6));
      setPostmanColor(Math.random().toString(16).substr(-6));
      setThreeJsColor(Math.random().toString(16).substr(-6));
      setGreenSockColor(Math.random().toString(16).substr(-6));
      setDjangoColor(Math.random().toString(16).substr(-6));
      setPostgreSQL(Math.random().toString(16).substr(-6));
    }

    return () => {
      subscribe = false;
    };
  }, []);

  return (
    // <>
    //   {loading ? (
    //     <SiteLoader />
    //   ) : (
        <>
          <Header normal />
          <div ref={containerRef}>
            <section className="section_normal-1">
              <div className="hello_div">
                <h1>
                  Hello Stranger <br /> It's Okay, You Can <br /> Scroll Down
                </h1>
              </div>
              <Suspense fallback={<SiteLoader />}>
                <Canvas
                  id="canvas_sphere_animation"
                  shadows
                  gl={{
                    alpha: true,
                    stencil: false,
                    depth: false,
                    antialias: false,
                  }}
                  camera={{
                    position: [0, 0, 20],
                    fov: 32.5,
                    near: 1,
                    far: 100,
                  }}
                  onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
                >
                  <SphereAnimation />
                </Canvas>
              </Suspense>
            </section>

            <section className="section_normal-2">
              <div className="introduce" id="hi">
                <h2>
                  I am George, a Freelance <br /> Full-Stack Web Developer{" "}
                  <br /> Living & Working in <span> Georgia</span>,{" "}
                  <span> Tbilisi</span>
                </h2>
              </div>
            </section>

            <section className="section_normal-3">
              <div className="about_box">
                <h2 className="about_me">About Me</h2>
              </div>
              <hr />

              <div className="about_container">
                <div className="about_text">
                  <p className="txt_one">
                    I caught fire coding. For most people, coding doesn't sound
                    very interesting. For me, it's <span>passion</span>.
                  </p>
                  <p className="txt_two">
                    My specialties include quickly learning new skills and
                    programming languages, team working, problem solving.
                  </p>
                  <p className="txt_three">
                    I'm very ambitious <span>Full-Stack</span> Wev Developer.
                    Looking for a role in established IT company with the
                    opportunity to work with the latest technologies on
                    challenging and diverse projects
                  </p>
                  <p className="txt_four">
                    If I were To define myself in one sentence that would be
                    innovative, creative, adaptable to change, a fast
                    learner,supportive of other people, and someone who is
                    prepared to go above and beyond what is required to ensure
                    that my employer always stays one step ahead of its
                    competitors
                  </p>
                </div>
                <hr />

                <div className="about_animation">
                  <div className="cubeSpinner">
                    <div className="face1">
                      <FontAwesomeIcon icon={faReact} color="#DD0031" />
                    </div>

                    <div className="face2">
                      <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>

                    <div className="face3">
                      <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>

                    <div className="face4">
                      <FontAwesomeIcon icon={faPython} color="#5ED4F4" />
                    </div>

                    <div className="face5">
                      <FontAwesomeIcon icon={faJs} color="#EFD81D" />
                    </div>

                    <div className="face6">
                      <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="section_normal-4">
              {websites &&
                websites.imageURLs.map((urls) => (
                  <div key={urls.id} className="image_container">
                    <img src={urls.url} alt="" />
                  </div>
                ))}
              {/* </div> */}
            </section>

            <section className="section_normal-5">
              <div className="skills_title_box">
                <h2 className="skills_title">Skills & Experience</h2>
              </div>
              <hr />

              <div className="skills_container">
                <div className="skills_text_start">
                  <p className="">
                    At this moment I have the below skills under my belt:
                  </p>
                  <hr />
                </div>

                <div className="skills_text_middle">
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </li>
                    <li>
                      {" "}
                      <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </li>
                    <li>
                      {" "}
                      <FontAwesomeIcon icon={faJs} color="#EFD81D" />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faBootstrap} color="#8112F4" />
                    </li>
                    <li>
                      {" "}
                      <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faReact} color="#DD0031" />
                    </li>
                    <li>
                      {" "}
                      <FontAwesomeIcon icon={faPython} color="#5ED4F4" />
                    </li>
                    <li>
                      <div style={{ backgroundColor: `#${postgreSQL}` }}>
                        PostgreSQL
                      </div>
                    </li>
                    <li>
                      <div style={{ backgroundColor: `#${reduxColor}` }}>
                        Redux/Redux-toolkit
                      </div>
                    </li>
                    <li>
                      {" "}
                      <div style={{ backgroundColor: `#${threeJsColor}` }}>
                        THREE JS
                      </div>
                    </li>
                    <li>
                      <div style={{ backgroundColor: `#${greenSockColor}` }}>
                        GreenSock
                      </div>
                    </li>
                    <li>
                      <div style={{ backgroundColor: `#${figmaColor}` }}>
                        Figma
                      </div>
                    </li>
                    <li>
                      {" "}
                      <div style={{ backgroundColor: `#${postmanColor}` }}>
                        Postman
                      </div>
                    </li>
                    <li>
                      {" "}
                      <div style={{ backgroundColor: `#${djangoColor}` }}>
                        Django
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <Footer />
        </>
    //   )}
    // </>
  );
}

export default NormalPage;
