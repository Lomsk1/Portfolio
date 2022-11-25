import { Fragment, Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import HomeCanvas from "../../components/homeCanvas";
import { useNavigate } from "react-router-dom";
import SiteLoader from "../../hooks/loader";

function Home() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const navigateHandler = () => {
    navigate("/normal_page");
  };

  return (
    <Fragment>
      {/* {loading ? (
        <SiteLoader />
      ) : ( */}
      <>
        <section className="home_section-1">
          <div className="middle">
            {/* Canvas */}

            <div className="div">
              <Suspense fallback={<SiteLoader />}>
                <Canvas className="canvas-home" shadows>
                  <HomeCanvas />
                </Canvas>
              </Suspense>
            </div>

            {/* Text Animation */}

            <div className="txt">
              <h1 className="h1">
                For more experience, please
                <span> CLICK </span>
                button below
              </h1>
              <button className="green" onClick={navigateHandler}>
                Click Me
              </button>
            </div>
          </div>
        </section>

        {/* <section className="home_section-2">
          <Link to={"/normal_page"}> Click me</Link>
        </section> */}
      </>
      {/* )} */}
    </Fragment>
  );
}

export default Home;
