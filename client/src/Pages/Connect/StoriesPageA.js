import React from "react";
import VideoPlayer from "../../components/PageContent/VideoPlayer/VideoPlayer";
import stories from "../../Models/stories";
import "./Connect.css";

const StoriesPageA = () => {
  console.log(stories[0].videoMono);

  return (
    <div className="section-color">
      <div className="home-container-video2">
        <div>
          <h2 className="subtitle1">Stories</h2>
        </div>
        <div className="video-container-parent">
          <div className="video-container-child">
            <VideoPlayer url={stories[0].videoMono} height={"150px"} />
          </div>
          <div className="video-container-child">
            <VideoPlayer url={stories[0].videoMono} height={"150px"} />
          </div>
          <div className="video-container-child">
            <VideoPlayer url={stories[0].videoMono} height={"150px"} />
          </div>
          <div className="video-container-child">
            <VideoPlayer url={stories[0].videoMono} height={"150px"} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default StoriesPageA;
