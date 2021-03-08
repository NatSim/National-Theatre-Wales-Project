import React from "react";
import "./AboutTeamPage.css";
import SideNav from "../../components/Nav/SideNav";
import VideoPlayer from "../../components/PageContent/VideoPlayer/VideoPlayer";
import Header from "../../components/Header/Header";
import * as CgIcons from "react-icons/cg";
import aboutText from "../../Models/aboutText";
import "../About/AboutPage.css";
// import WhatIsTeam from "../../components/PageContent/AboutInfo/WhatIsTeam";
// import JoinTeam from "../../components/PageContent/AboutInfo/JoinTeam";

//Header Profile icon/path
const Item = "/profile";
const itemIcon = <CgIcons.CgProfile className="profile-svg" />;
//Aiming to use one page component and render different info using props
const videoTeam = "https://www.youtube.com/watch?v=xV2FF-YUy94";

console.log(aboutText);

const AboutArticlesPage = (props) => {
  return (
    <>
      <SideNav />
      <Header Link={Item} Icon={itemIcon} />
      <div className="section-color">
        <div className="home-container-video2">
          <div>
            <h2 className="subtitle1">{props.title}</h2>
          </div>
          <div className="video-about-text-control">
            <VideoPlayer url={videoTeam} className="video" />
            <div>{props.subtitle}</div>
          </div>
        </div>
        <div className="background-outer">
          <article>
            <div className="info-container">{props.mainText1}</div>
          </article>
        </div>
      </div>
    </>
  );
};

export default AboutArticlesPage;
