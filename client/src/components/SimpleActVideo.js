import React from "react";
import YouTube from "react-youtube";

//Simple Acts Page - Features Simple Act buttons route to pages
//https://www.youtube.com/watch?v=qxB3-sw2HAQ&feature=emb_imp_woyt
//https://youtu.be/qxB3-sw2HAQ

class SimpleActVideo extends React.Component {
  videoOnReady(event) {
    //access to player in all event handlers via event.target
    // event.target.pauseVideo();
    event.target.playVideoAt();
    console.log(event.target);
  }

  render() {
    const opts = {
      height: "123",
      width: "246",

      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const { videoId } = this.props;
    return (
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={this.videoOnReady}
        //onPlay={this.videoOnPlay}
      />
    );
  }
}

export default SimpleActVideo;
