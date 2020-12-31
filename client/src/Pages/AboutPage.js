import React from "react";
import AboutInfo from "../Components/AboutInfo";
import SimpleActVideo from "../Components/SimpleActVideo";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../Components/MainButton.css";
import "./AboutPage.css";

//About Page
const About = () => {
  return (
    <div className="home-container">
      <Link to="/home">
        <Button className="button">Home</Button>
      </Link>
      <div className="video-container">
        <SimpleActVideo videoId={"xV2FF-YUy94"} />
        <AboutInfo />
      </div>
    </div>
  );
};

export default About;
