import { faSmileWink } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import { useRef, useState } from "react";
import { useEffect } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import projects from "../../website.json";
import ImageZoom from "react-image-zooom";
import SiteLoader from "../../hooks/loader";

function Projects() {
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
      gsap.to(".left", {
        xPercent: 5,
        scrollTrigger: {
          trigger: ".left",
          start: "top 95%",
          end: "bottom 60%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [timeWait]);

  return (
    <>
      {loading ? (
        <SiteLoader />
      ) : (
        <>
          <Header />
          <section className="project_section-1">
            <div className="left">
              <h1>Projects</h1>
              <hr />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ducimus culpa eos sequi. Ipsum harum tenetur obcaecati eum
                consequuntur ipsam! Debitis possimus quibusdam nostrum dolore
                iusto repellendus praesentium. Magnam, iure? Sequi.
              </p>
            </div>
            <div className="right">
              <FontAwesomeIcon icon={faSmileWink} color="#CA111185" />
            </div>
          </section>

          <div ref={containerRef}>
            <section className="project_section-2">
              {projects.projects
                ? projects.projects.map((project) => (
                    <div key={project.id} className="project_container">
                      <div className="left">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <button>View Project</button>
                      </div>
                      <div className="right">
                        <ImageZoom src={project.thumbnail} alt="" />
                      </div>
                    </div>
                  ))
                : "Loading ..."}
            </section>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default Projects;
