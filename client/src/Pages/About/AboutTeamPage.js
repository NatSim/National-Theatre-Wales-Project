import React from "react";
import "./AboutTeamPage.css";
import AboutTeam from "../../components/PageContent/AboutInfo/AboutTeam";
import SideNav from "../../components/Nav/SideNav";
import VideoPlayer from "../../components/PageContent/VideoPlayer/VideoPlayer";
import Header from "../../components/Header/Header";
import * as CgIcons from "react-icons/cg";

function AboutTeamPage() {
  const videoTeam = "https://www.youtube.com/watch?v=xV2FF-YUy94";

  //Header Profile icon/path
  const Item = "/profile";
  const itemIcon = <CgIcons.CgProfile className="profile-svg" />;

  return (
    <>
      <SideNav />
      <Header Link={Item} Icon={itemIcon} />
      <div className="section-color">
        <div className="home-container-video2">
          <h2 className="subtitle1">Team</h2>
          <VideoPlayer url={videoTeam} className="video" />
        </div>
        <div className="background-outer">
          <article>
            <div className="info-container">
              <AboutTeam />
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default AboutTeamPage;
