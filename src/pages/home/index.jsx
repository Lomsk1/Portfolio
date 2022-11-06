import { Fragment, Suspense, useState } from "react";

import { Canvas } from "@react-three/fiber";
import HomeCanvas from "../../components/homeCanvas";

function Home() {
  const [letterClass, setLetterClass] = useState("text-animate");

  const helloArray = ["H", "I", ",", "I'", "m"];
  const nameArray = ["G", "I", "O", "R", "G", "I"];
  const jobArray = [
    "W",
    "E",
    "B",
    " ",
    " ",
    " ",
    "D",
    "E",
    "V",
    "E",
    "L",
    "O",
    "P",
    "E",
    "R",
    ".",
  ];

  return (
    <Fragment>
      <section className="home_section-1">
        {/* <div className="hello-div">
          <div>
            {helloArray &&
              helloArray.map((l, index) => <h1 key={index}>{l}</h1>)}
          </div>
          <br />
          <div>
            {nameArray && nameArray.map((l, index) => <h1 key={index}>{l}</h1>)}
          </div>
          <br />
          <div>
            {jobArray && jobArray.map((l, index) => <h1 key={index}>{l}</h1>)}
          </div>
        </div> */}

        {/* Canvas */}
        <Suspense fallback={<div>Loading...</div>}>
          <Canvas className=".canvas-home" shadows>
            <HomeCanvas />
          </Canvas>
        </Suspense>
      </section>
    </Fragment>
  );
}

export default Home;
