import React from 'react';
import YouTube from 'react-youtube';

export default class Video extends React.Component {
  constructor(props) {
    super(props);
      this.state = {

    };
  }
  render() {
    const opts = {
      height: '400',
      width: '600',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
    };

    return (
      <YouTube
        videoId="UHpM0OjfbHY"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}