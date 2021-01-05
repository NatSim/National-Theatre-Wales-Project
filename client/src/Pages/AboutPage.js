import React from "react";
import AboutInfo from "../Components/AboutInfo";
import SimpleActVideo from "../Components/SimpleActVideo";
import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
import "../Components/MainButton.css";
import "./AboutPage.css";
import SideNav from "../Components/SideNav";

//About Page
const About = () => {
  return (
    <>
      <SideNav />
      <div className="home-container-video">
        {/* <Link to="/home">
          <Button className="button">Home</Button>
        </Link> */}
        <SimpleActVideo videoId={"xV2FF-YUy94"} />
      </div>
      <div className="background-outer">
        <article>
          <div className="info-container">
            <AboutInfo />
          </div>
        </article>
      </div>
    </>
  );
};

export default About;
