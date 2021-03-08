import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = (props) => {
  return (
    <>
      <ReactPlayer
        width="246px"
        height={props.height}
        controls
        url={props.url}
        alt="Video"
      >
        Sorry, your browser doesn't support embedded videos.
      </ReactPlayer>
    </>
  );
};

export default VideoPlayer;
