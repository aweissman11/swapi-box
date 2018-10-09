import React, { Component } from 'react';

class Navigation extends Component {

  render() {
    const themeSong = new Audio('./theme-song.mp3')
    return (
      <div className='navigation'>
        <a>People</a>
        <a>Planets</a>
        <a>Vehicles</a>
        <a>Favorites</a>
        <p>
          <audio 
            controls
            autoplay 
            id='swars-theme'
          >
          <source
            type='audio/mp3'
            src={themeSong}
            />
          </audio>
        </p>
      </div>
    )
  }
}

export default Navigation;