import React, { useState, useRef } from "react";
import "./AudioPlayer.css";
import * as FaIcons from "react-icons/fa";

function AudioPlayer() {
  // play/pause tracker

  const [isPlaying, setIsPlaying] = useState(false);

  //references
  const audioPlayer = useRef(); //for audio component

  const togglePlayPause = () => {
    const prevValue = isPlaying;

    setIsPlaying(!prevValue);
    if (prevValue) {
      audioPlayer.current.play();
      console.log("Play");
    } else {
      audioPlayer.current.pause();
      console.log("Pause");
    }
  };

  return (
    <div className="default-button audio-style-control">
      <audio
        ref={audioPlayer}
        type="audio"
        src="https://soundcloud.com/user-526412140/dawn"
        preload="none"
      >
        Your browser does not support the audio element.
      </audio>
      <section className="audio-track-title-container">
        <span>Track Title</span>
      </section>
      {/*CUSTOM CONTROLS START */}
      <section className="audio-track-title-container">
        <button className="audio-icons-control forward-back">
          <FaIcons.FaBackward /> 30
        </button>
        <button
          onClick={togglePlayPause}
          className="audio-icons-control play-pause"
        >
          {isPlaying ? <FaIcons.FaPause /> : <FaIcons.FaPlay />}
        </button>
        <button className="audio-icons-control forward-back">
          30
          <FaIcons.FaFastForward />
        </button>
      </section>
      <section className="audio-track-title-container">
        {/* current time */}
        <div>0:00</div>

        {/* progress bar */}
        <div>
          <input type="range" />
        </div>
        {/* duration */}
        <div>Duration</div>
        {/*CUSTOM CONTROLS START */}
      </section>
    </div>
  );
}
export default AudioPlayer;
