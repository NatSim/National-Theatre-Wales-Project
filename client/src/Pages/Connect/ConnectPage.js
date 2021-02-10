import React from "react";
import SideNav from "../../components/Nav/SideNav";
import "./ConnectPage.css";
import VideoPlayer from "../../components/PageContent/VideoPlayer/VideoPlayer";
import Header from "../../components/Header/Header";
import * as CgIcons from "react-icons/cg";

const ConnectPage = () => {
  const videoMono = "https://www.youtube.com/watch?v=fcWiJQW5GwQ";

  //Header Profile icon/path
  const profileLink8 = "/profile";
  const profileIcon8 = <CgIcons.CgProfile className="profile-svg" />;

  return (
    <>
      <SideNav />
      <Header Link={profileLink8} Icon={profileIcon8} />
      <div>
        <h2 className="subtitle">Podcasts</h2>
        <div>
          <VideoPlayer url={videoMono} />
        </div>
      </div>
    </>
  );
};

export default ConnectPage;
