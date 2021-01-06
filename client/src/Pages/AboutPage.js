import React from "react";
import AboutInfo from "../Components/PageContent/AboutInfo";
import SimpleActVideo from "../Components/SimpleActVideo";
import "../Components/Buttons/MainButton.css";
import "./AboutPage.css";
import SideNav from "../Components/Nav/SideNav";

//About Page
const About = () => {
  return (
    <>
      <SideNav />
      <div className="section-color">
        <div className="home-container-video">
          <SimpleActVideo videoId={"xV2FF-YUy94"} />
        </div>
        <div className="background-outer">
          <article>
            <div className="info-container">
              <AboutInfo />
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default About;
