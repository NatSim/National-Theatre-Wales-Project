import React from "react";
import AboutInfo from "../Components/AboutInfo";
import SimpleActVideo from "../Components/SimpleActVideo";
import { Link } from "react-router-dom";
import "../Components/MainButton.css";

//About Page
const About = () => {
  return (
    <div>
      <button className="button">
        <Link to="/home">Home</Link>
      </button>
      <div>
        <SimpleActVideo videoId={"xV2FF-YUy94"} />
        <AboutInfo />
      </div>
    </div>
  );
};

export default About;
