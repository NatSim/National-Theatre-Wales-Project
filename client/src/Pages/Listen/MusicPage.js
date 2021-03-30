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
      <main className="home-container-video4">
        <h2 className="subtitle1">Music</h2>
        <div className="intro-text-container">
          <span>
            *Music can help improve your mood and overall outlook.Listen and
            enjoy the playlsit below*
          </span>
        </div>
        {/* Featured Item START HERE */}
        <section className="audio-container-parent">
          <div className="video-container-child">
            <VideoPlayer url={videoMusic} width={"246px"} height={"150px"} />
            <div className="title-text-container">
              <span className="title-text">
                Carys Eleri - Go Tell The Bees/Dod nôl at fy nghoed
              </span>
            </div>
          </div>
        </section>
        {/* Featured Item END HERE */}

        {/* List Section START HERE */}
        <section>
          <ol className="audio-container-parent">
            <li className="video-container-child">
              <VideoPlayer
                url={soundCloudExample}
                width={"246px"}
                height={"100px"}
              />
            </li>
            <li className="video-container-child">
              <VideoPlayer
                url={soundCloudExample}
                width={"246px"}
                height={"100px"}
              />
            </li>
            <li className="video-container-child">
              <VideoPlayer
                url={soundCloudExample}
                width={"246px"}
                height={"100px"}
              />
            </li>
            <li className="video-container-child">
              <VideoPlayer
                url={soundCloudExample}
                width={"246px"}
                height={"100px"}
              />
            </li>
            <li className="video-container-child">
              <VideoPlayer
                url={soundCloudExample}
                width={"246px"}
                height={"100px"}
              />
            </li>
            <li className="video-container-child">
              <VideoPlayer
                url={soundCloudExample}
                width={"246px"}
                height={"100px"}
              />
            </li>
          </ol>
        </section>
        {/* List Section END HERE */}
      </main>
    </>
  );
};

export default MusicPage;
