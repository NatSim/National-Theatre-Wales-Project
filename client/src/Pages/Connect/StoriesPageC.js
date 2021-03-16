import React from "react";
import VideoPlayer from "../../components/PageContent/VideoPlayer/VideoPlayer";
import stories from "../../Models/stories";

const StoriesPageA = ({ stories }) => {
  return (
    <div>
      <div className="video-container-child">
        <VideoPlayer url={stories[0]} height={"150px"} />
      </div>
      <div className="video-container-child">
        <VideoPlayer url={stories[1]} height={"150px"} />
      </div>
      <div className="video-container-child">
        <VideoPlayer url={stories[2]} height={"150px"} />
      </div>
      <div className="video-container-child">
        <VideoPlayer url={stories[3]} height={"150px"} />
      </div>
    </div>
  );
};
export default StoriesPageA;
