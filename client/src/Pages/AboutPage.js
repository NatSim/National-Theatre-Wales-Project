import React, { useState } from "react";
import AboutInfo from "../Components/AboutInfo";
import SimpleActVideo from "../Components/SimpleActVideo";
import { Link } from "react-router-dom";
import "../Components/MainButton.css";
import "./AboutPage.css";
import HomePage from "./HomePage";

//About Page
const About = () => {
  return (
    <div className="aboutpage">
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
