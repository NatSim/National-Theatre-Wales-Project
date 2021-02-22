import React from "react";
import AboutInfo from "../../components/PageContent/AboutInfo/AboutInfo";
import "../../components/Buttons/MainButton.css";
import "./AboutPage.css";
import SideNav from "../../components/Nav/SideNav";
import VideoPlayer from "../../components/PageContent/VideoPlayer/VideoPlayer";
import Header from "../../components/Header/Header";
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
          <h2 className="subtitle1">About</h2>

          <VideoPlayer url={videoTeam} className="video" />
        </div>
        <div className="background-outer">
          <article>
            <div className="info-container">
              <AboutInfo />
            </div>
            <div>
              <p></p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default About;
