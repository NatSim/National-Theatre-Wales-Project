import React from "react";
import SideNav from "../../components/Nav/SideNav";
import "./MonologuePage.css";
import VideoPlayer from "../../components/PageContent/VideoPlayer/VideoPlayer";
import Header from "../../components/Header/Header";
import * as CgIcons from "react-icons/cg";

const MonologuePage = () => {
  const videoMono = "https://www.youtube.com/watch?v=fcWiJQW5GwQ";

  //Header Profile icon/path
  const profileLink8 = "/profile";
  const profileIcon8 = [<CgIcons.CgProfile className="profile-svg" />];

  return (
    <>
      <SideNav />
      <Header Link={profileLink8} Icon={profileIcon8} />
      <div>
        <h1 className="title">Monologues</h1>
        <div>
          <VideoPlayer url={videoMono} />
        </div>
      </div>
    </>
  );
};

export default MonologuePage;
