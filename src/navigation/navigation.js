import React, { Component } from 'react';

import './navigation.css';

class Navigation extends Component {

  render() {
    const { changePage } = this.props
    // const themeSong = new Audio('./theme-song.mp3')
    return (
      <div className='navigation'>
        <nav>
          <a onClick={() => changePage('scroll')}>Home</a>
          <a onClick={() => changePage('people')}>People</a>
          <a onClick={() => changePage('planets')}>Planets</a>
          <a onClick={() => changePage('vehicles')}>Vehicles</a>
          <a onClick={() => changePage('favorites')}>Favorites</a>
        </nav>
      </div>
    )
  }
}

export default Navigation;
        // <div className='audio-controls'>
        //   <p>
        //     <audio 
        //       controls
        //       autoPlay 
        //       id='swars-theme'
        //     >
        //     <source
        //       type='audio/mp3'
        //       href='./theme-song.mp3'
        //       src={themeSong}
        //       />
        //     </audio>
        //   </p>
        // </div>