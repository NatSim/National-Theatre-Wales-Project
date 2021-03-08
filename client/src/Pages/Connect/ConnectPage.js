import React from "react";
import SideNav from "../../components/Nav/SideNav";
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
      <div className="home-container-video4">
        <h2 className="subtitle1">Podcasts</h2>
        <section className="audio-container-parent">
          <div className="video-container-child">
            <VideoPlayer url={videoMono} height={"150px"} />
          </div>
          <div className="video-container-child">
            <VideoPlayer url={videoMono} height={"150px"} />
          </div>
          <div className="video-container-child">
            <VideoPlayer url={videoMono} height={"150px"} />
          </div>
          <div className="video-container-child">
            <VideoPlayer url={videoMono} height={"150px"} />
          </div>
        </section>
      </div>
    </>
  );
};

export default ConnectPage;
