import React from "react";
import VideoPlayer from "../../components/PageContent/VideoPlayer/VideoPlayer";
import stories from "../../Models/stories";

const StoriesPageA = () => {
  const videoMono = "https://www.youtube.com/watch?v=xV2FF-YUy94";
  console.log(stories[0].videoMono);
  console.log(videoMono);
  return (
    <div>
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
  );
};
export default StoriesPageA;
