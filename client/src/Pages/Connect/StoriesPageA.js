import React from "react";
import VideoPlayer from "../../components/PageContent/VideoPlayer/VideoPlayer";

const StoriesPageA = () => {
  const videoMono = "https://soundcloud.com/liltjay/calling-my-phone";

  return (
    <div>
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
    </div>
  );
};
export default StoriesPageA;
