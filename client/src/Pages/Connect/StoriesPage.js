import React from "react";
import Header from "../../components/Header/Header";
import SideNav from "../../components/Nav/SideNav";
import VideoPlayer from "../../components/PageContent/VideoPlayer/VideoPlayer";

const StoriesPageA = (props) => {
  return (
    <>
      <SideNav />
      <Header />
      <main className="section-color">
        <div className="home-container-video2">
          <span>
            <h2 className="subtitle1">Stories</h2>
          </span>
          <section className="video-container-parent">
            <div className="video-container-child">
              <VideoPlayer
                url={props.videoMono1}
                width={"246px"}
                height={"150px"}
              />
            </div>
            <div className="video-container-child">
              <VideoPlayer
                url={props.videoMono2}
                width={"246px"}
                height={"150px"}
              />
            </div>
            <div className="video-container-child">
              <VideoPlayer
                url={props.videoMono1}
                width={"246px"}
                height={"150px"}
              />
            </div>
            <div className="video-container-child">
              <VideoPlayer
                url={props.videoMono2}
                width={"246px"}
                height={"150px"}
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
export default StoriesPageA;
