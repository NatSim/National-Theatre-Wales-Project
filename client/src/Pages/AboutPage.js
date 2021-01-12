import React from "react";
import AboutInfo from "../Components/PageContent/AboutInfo";
import "../Components/Buttons/MainButton.css";
import "./AboutPage.css";
import SideNav from "../Components/Nav/SideNav";
import VideoPlayer from "../Components/VideoPlayer";

//About Page
const About = () => {
  const videoTeam = "https://www.youtube.com/watch?v=xV2FF-YUy94";
  return (
    <>
      <SideNav />
      <div className="section-color">
        <div className="home-container-video">
          <VideoPlayer url={videoTeam} />
        </div>
        <div className="background-outer">
          <article>
            <div className="info-container">
              <AboutInfo />
            </div>
          </article>
        </div>
        <footer id="footer-banner" className="copyright-footer">
          Copyright © National Theatre Wales. Website developed by Natasha
          Simone. Registered Company No. 6693227 Charity Registration No.
          1127952
        </footer>
      </div>
    </>
  );
};

export default About;
