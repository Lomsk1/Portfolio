import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import './style/main.scss'
import NormalPage from "./pages/normal";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/normal_page" element={<NormalPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;