import React from "react";
import Header from "../../components/Header/Header";
// import SideNav from "../../components/Nav/SideNav";
import VideoPlayer from "../../components/PageContent/VideoPlayer/VideoPlayer";
import "./MusicPage.css";
import * as CgIcons from "react-icons/cg";
import SideNav from "../../components/Nav/SideNav";

const MusicPage = () => {
  const videoMusic = "https://www.youtube.com/watch?v=K37qZvu5zio";

  //Header Profile icon/path
  const profileLink2 = "/profile";
  const profileIcon2 = <CgIcons.CgProfile className="profile-svg" />;

  return (
    <>
      <Header Link={profileLink2} Icon={profileIcon2} />
      <SideNav />
      <div className="home-container-video4">
        <h2 className="subtitle1">Music</h2>
        <div className="video-container-child">
          <VideoPlayer url={videoMusic} />
        </div>
        <span className="title-text">
          Carys Eleri - Go Tell The Bees/Dod nôl at fy nghoed
        </span>
      </div>
    </>
  );
};

export default MusicPage;
