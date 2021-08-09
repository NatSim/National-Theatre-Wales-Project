import React, { useState, useRef, useEffect } from "react";
import "./AudioPlayer.css";
import * as FaIcons from "react-icons/fa";

function AudioPlayer(props) {
  // play/pause tracker

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  //references
  const audioPlayer = useRef(); //for audio component
  const progressBar = useRef(); //ref to progress bar
  const animationRef = useRef(); //ref for animation

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

  const play = () => {
    audioPlayer.current.play();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const togglePlayPause = () => {
    //Play/Pause function
    const prevValue = isPlaying;

    setIsPlaying(!prevValue);
    if (!prevValue) {
      play();
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    //abstracted function

    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value) - 30;
    changeRange();
  };

  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value) + 30;
    changeRange();
  };

  return (
    <div className="default-button audio-style-control">
      <audio
        ref={audioPlayer}
        type="audio"
        src={props.trackAudio}
        preload="metadata"
        style={{ backgroundColor: "blue" }}
      >
        Your browser does not support the audio element.
      </audio>
      <section className="audio-track-title-container">
        <span>{props.trackTitle}</span>
      </section>
      {/*CUSTOM CONTROLS START */}
      <section className="audio-track-title-container">
        <button
          className="audio-icons-control forward-back"
          onClick={backThirty}
        >
          <FaIcons.FaBackward /> 30
        </button>
        <button
          onClick={togglePlayPause}
          className="audio-icons-control play-pause"
        >
          {isPlaying ? <FaIcons.FaPause /> : <FaIcons.FaPlay />}
        </button>
        <button
          className="audio-icons-control forward-back"
          onClick={forwardThirty}
        >
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
        <div>
          {isNaN ? !isNaN(duration) && calculateTime(duration) : "0:00"}
        </div>
        {/*CUSTOM CONTROLS START */}
      </section>
    </div>
  );
}
export default AudioPlayer;
