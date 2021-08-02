import React from "react";
import "./AudioPlayer.css";

function AudioPlayer() {
  return (
    <div>
      <audio
        className="default-button audio-style-control"
        src="https://soundcloud.com/user-526412140/animal-kingdom-expressive-arts"
        controls
        style={{ color: " #00c1a2" }}
      >
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
export default AudioPlayer;
