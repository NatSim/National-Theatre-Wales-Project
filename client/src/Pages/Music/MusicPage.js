import React from "react";
import SideNav from "../../Components/Nav/SideNav";
import VideoPlayer from "../../Components/PageContent/VideoPlayer/VideoPlayer";
import "./MusicPage.css";

const MusicPage = () => {
  const videoMusic = "https://www.youtube.com/watch?v=K37qZvu5zio";

  return (
    <>
      <SideNav />
      <div>
        <h1 className="title">Music</h1>
        <div>
          <VideoPlayer url={videoMusic} />
          <span className="title-text">
            Carys Eleri - Go Tell The Bees/Dod nôl at fy nghoed
          </span>
        </div>
      </div>
    </>
  );
};

export default MusicPage;
