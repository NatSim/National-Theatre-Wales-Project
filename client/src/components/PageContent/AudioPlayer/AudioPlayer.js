import React, { useState, useRef, useEffect } from "react";
import "./AudioPlayer.css";
import * as FaIcons from "react-icons/fa";
import Dawn from "./tracks/dawn.wav";

function AudioPlayer() {
  // play/pause tracker

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  //references
  const audioPlayer = useRef(); //for audio component
  const progressBar = useRef(); //ref to progress bar

  useEffect(() => {
    //calculate the duration to seconds
    const seconds = Math.floor(audioPlayer.current.duration);

    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);

    const returnMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

    const seconds = Math.floor(secs % 60);

    const returnSeconds = secs < 10 ? `0${seconds}` : `${seconds}`;

    return `${returnMinutes} :${returnSeconds}`;
  };

  //Play/Pause function
  const togglePlayPause = () => {
    const prevValue = isPlaying;

    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      console.log("Play");
    } else {
      audioPlayer.current.pause();
      console.log("Pause");
    }
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    progressBar.current.style.setProperty("--seek-before-width");
  };

  return (
    <div className="default-button audio-style-control">
      <audio ref={audioPlayer} type="audio" src={Dawn} preload="metadata">
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
        <div>{calculateTime(currentTime)}</div>

        {/* progress bar */}
        <div>
          <input
            type="range"
            defaultValue="0"
            ref={progressBar}
            onChange={changeRange}
          />
        </div>
        {/* duration */}
        <div>{duration && !isNaN(duration) && calculateTime(duration)}</div>
        {/*CUSTOM CONTROLS START */}
      </section>
    </div>
  );
}
export default AudioPlayer;
