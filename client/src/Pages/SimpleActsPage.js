import React, { Component } from "react";
import YouTube from "react-youtube";

//Simple Acts Page - Features Simple Act buttons route to pages
//https://www.youtube.com/watch?v=qxB3-sw2HAQ&feature=emb_imp_woyt
//https://youtu.be/qxB3-sw2HAQ

class SimpleActVideo extends Component {
  videoOnReady(event) {
    //access to player in all event handlers via event.target
    event.target.pauseVideo();
    console.log(event.target);
  }
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const { videoId } = this.props;
    return <YouTube videoId={videoId} opts={opts} onReady={this._onReady} />;
  }

  videoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
export default SimpleActVideo;
