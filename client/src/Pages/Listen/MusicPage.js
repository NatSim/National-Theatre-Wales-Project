import React from "react";
import Header from "../../components/Header/Header";
import SideNav from "../../components/Nav/SideNav";
import VideoPlayer from "../../components/PageContent/VideoPlayer/VideoPlayer";
import "./MusicPage.css";
import * as CgIcons from "react-icons/cg";

const MusicPage = () => {
  const videoMusic = "https://www.youtube.com/watch?v=K37qZvu5zio";

  //Header Profile icon/path
  const profileLink2 = "/profile";
  const profileIcon2 = [<CgIcons.CgProfile className="profile-svg" />];

  return (
    <>
      <SideNav />
      <Header Link={profileLink2} Icon={profileIcon2} />
      <div>
        <h1 className="title">Music</h1>
        <div>
          <VideoPlayer url={videoMusic} />
          <span className="title-text">
            Carys Eleri - Go Tell The Bees/Dod nôl at fy nghoed
          </span>
        </div>
      </div>
    </>
  );
};

export default MusicPage;
