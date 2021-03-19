import React from "react";
import Header from "../../components/Header/Header";
import VideoPlayer from "../../components/PageContent/VideoPlayer/VideoPlayer";
import "./MusicPage.css";
import SideNav from "../../components/Nav/SideNav";

const MusicPage = () => {
  const videoMusic = "https://www.youtube.com/watch?v=K37qZvu5zio";
  const soundCloudExample = "https://soundcloud.com/liltjay/calling-my-phone";

  return (
    <>
      <Header />
      <SideNav />
      <div className="home-container-video4">
        <h2 className="subtitle1">Music</h2>
        <section className="audio-container-parent">
          <div className="video-container-child">
            <VideoPlayer url={videoMusic} height={"150px"} />
            {/* <span className="title-text">
              Carys Eleri - Go Tell The Bees/Dod nôl at fy nghoed
            </span> */}
          </div>
        </section>
        <section className="audio-container-parent">
          <div className="video-container-child">
            <VideoPlayer url={soundCloudExample} height={"100px"} />
          </div>
          <div className="video-container-child">
            <VideoPlayer url={soundCloudExample} height={"100px"} />
          </div>
          <div className="video-container-child">
            <VideoPlayer url={soundCloudExample} height={"100px"} />
          </div>
          <div className="video-container-child">
            <VideoPlayer url={soundCloudExample} height={"100px"} />
          </div>
        </section>
      </div>
    </>
  );
};

export default MusicPage;
