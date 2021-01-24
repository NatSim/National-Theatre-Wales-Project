import React from "react";
import ReactPlayer from "react-player";
import "../VideoPlayer/VideoPlayer.css";

const VideoPlayer = (props) => {
  return (
    <>
      <div className="video-container">
        <ReactPlayer
          width="246px"
          height="123"
          controls
          url={props.url}
          alt="Video"
        >
          Sorry, your browser doesn't support embedded videos.
        </ReactPlayer>
      </div>
    </>
  );
};

export default VideoPlayer;
