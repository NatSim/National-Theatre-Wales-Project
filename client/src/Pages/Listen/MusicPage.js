import React from "react";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/Nav/SideNav";
import VideoPlayer from "../../Components/PageContent/VideoPlayer/VideoPlayer";
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
