import React, { useState } from "react";
import AboutInfo from "../Components/AboutInfo";
import SimpleActVideo from "../Components/SimpleActVideo";
import { Link } from "react-router-dom";
import "../Components/MainButton.css";
import "./App.css";

//About Page
const About = () => {
  const [color, changeColor] = useState("#82D121");
  return (
    <div style={{ background: color }} id="aboutpage">
      <button className="button">
        <Link to="/home" onClick={() => changeColor("#82D121")}>
          Home
        </Link>
      </button>
      <div>
        <SimpleActVideo videoId={"xV2FF-YUy94"} />
        <AboutInfo />
      </div>
    </div>
  );
};

export default About;
