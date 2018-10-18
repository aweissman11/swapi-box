import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './navigation.css';

class Navigation extends Component {

  render() {
    const { changePage, pages, currentPage } = this.props;
    // const themeSong = new Audio('./theme-song.mp3')
    return (
      <div className='navigation'>
        <ul>
          {
            pages.map( page => {
              if (page.toLowerCase() === currentPage) {
                return (
                  <li
                    key={page}
                    onClick={() => changePage(page.toLowerCase())}
                    className='current-nav-btn'
                  >
                    {page}
                  </li>
                );
              } else {
                return (
                  <li
                    key={page}
                    onClick={() => changePage(page.toLowerCase())}
                    className='nav-btn'
                  >
                    {page}
                  </li>
                );
              }
            })
          }

        </ul>
      </div>
    );
  }
}

Navigation.propTypes = {
  changePage: PropTypes.func.isRequired,
  pages: PropTypes.array.isRequired,
  currentPage: PropTypes.string.isRequired
};

export default Navigation;

// <li onClick={() => changePage('scroll')}>Home</li>
// <li onClick={() => changePage('people')}>People</li>
// <li onClick={() => changePage('planets')}>Planets</li>
// <li onClick={() => changePage('vehicles')}>Vehicles</li>
// <li onClick={() => changePage('favorites')}>Favorites</li>
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