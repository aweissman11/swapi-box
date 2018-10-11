import React, { Component } from 'react';

import './navigation.css';

class Navigation extends Component {

  render() {
    const { changePage } = this.props
    // const themeSong = new Audio('./theme-song.mp3')
    return (
      <div className='navigation'>
        <ul>
          <li onClick={() => changePage('scroll')}>Home</li>
          <li onClick={() => changePage('people')}>People</li>
          <li onClick={() => changePage('planets')}>Planets</li>
          <li onClick={() => changePage('vehicles')}>Vehicles</li>
          <li onClick={() => changePage('favorites')}>Favorites</li>
        </ul>
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