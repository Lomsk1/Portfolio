import { Fragment, Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import HomeCanvas from "../../components/homeCanvas";
import SiteLoader from "../../hooks/loader";
import { Link } from "react-router-dom";

function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <Fragment>
      {loading ? (
        <SiteLoader />
      ) : (
        <section className="home_section-1">
          {/* Canvas */}
          {/* <Suspense fallback={<div>Loading...</div>}>
            <Canvas className=".canvas-home" shadows>
              <HomeCanvas />
            </Canvas>
          </Suspense> */}
          <Link to={'/normal_page'} > Click me</Link>
        </section>
      )}
    </Fragment>
  );
}

export default Home;
