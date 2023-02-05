import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import { useRef, useState } from "react";
import { useEffect } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import projects from "../../website.json";
import { faGamepad, faQrcode } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();
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
  }, []);

  const [game, setGame] = useState(false);

  return (
    <>
      <Header />
      <section className="project_section-1">
        <div className="left">
          <h1>Projects</h1>
          <hr />
          <p>
            In this page u can see my several Website projects, with demo
            version. <br /> <br /> Please, Click on the Gamepad on the right to see
            some little games which are made by Javascript.
          </p>
        </div>
        <div className="right">
          <FontAwesomeIcon
            icon={faGamepad}
            color="#CA111185"
            onClick={() => {
              setGame(!game);
            }}
          />
        </div>
      </section>

      {game && (
        <section className="game_section">
          {projects.games
            ? projects.games.map((data) => (
                <a
                  href={data.url}
                  target={"_blank"}
                  key={data.id}
                  className="box"
                >
                  <p>{data.title}</p>
                  <div className="image">
                    <img src={data.thumbnail} alt="" />
                  </div>
                </a>
              ))
            : "Loading..."}
        </section>
      )}

      <div ref={containerRef}>
        <section className="project_section-2">
          {projects.projects
            ? projects.projects.map((project) => (
                <div key={project.id} className="project_container">
                  <div className="left">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <a href={project.url} target="_blank">
                      View Project
                    </a>
                  </div>
                  <div className="right">
                    <img src={project.thumbnail} alt="" />
                  </div>
                </div>
              ))
            : "Loading ..."}
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Projects;
