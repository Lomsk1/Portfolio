import { Fragment } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import "./style/main.scss";
import NormalPage from "./pages/normal";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Fragment>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/normal_page" element={<NormalPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Fragment>
  );
}

export default App;
