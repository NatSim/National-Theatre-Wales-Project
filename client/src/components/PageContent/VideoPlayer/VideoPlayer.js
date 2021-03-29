import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = (props) => {
  return (
    <>
      <ReactPlayer
        width={props.width}
        height={props.height}
        controls
        url={props.url}
        alt="Video"
        style={props.style}
      >
        Sorry, your browser doesn't support embedded videos.
      </ReactPlayer>
    </>
  );
};

export default VideoPlayer;
