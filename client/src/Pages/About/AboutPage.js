import React from "react";
import AboutInfo from "../../Components/PageContent/AboutInfo/AboutInfo";
import "../../Components/Buttons/MainButton.css";
import "./AboutPage.css";
import SideNav from "../../Components/Nav/SideNav";
import VideoPlayer from "../../Components/PageContent/VideoPlayer/VideoPlayer";
import Header from "../../Components/Header/Header";
import * as CgIcons from "react-icons/cg";

//About Page
const About = () => {
  //Intro Video
  const videoTeam = "https://www.youtube.com/watch?v=xV2FF-YUy94";

  //Header Profile icon/path
  const Item = "/profile";
  const itemIcon = <CgIcons.CgProfile className="profile-svg" />;
  return (
    <>
      <SideNav />
      <Header Link={Item} Icon={itemIcon} />
      <div className="section-color">
        <div className="home-container-video">
          <VideoPlayer url={videoTeam} className="video" />
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
