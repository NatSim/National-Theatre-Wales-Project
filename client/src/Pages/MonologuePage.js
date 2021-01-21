import React from "react";
import SideNav from "../Components/Nav/SideNav";
import "./MonologuePage.css";
import VideoPlayer from "../Components/VideoPlayer";

const MeditationPage = () => {
  const videoMedi = "https://www.youtube.com/watch?v=fcWiJQW5GwQ";

  return (
    <>
      <SideNav />
      <div>
        <h1 className="title">Meditation</h1>
        <div>
          <VideoPlayer url={videoMedi} />
        </div>
      </div>
    </>
  );
};

export default MeditationPage;
