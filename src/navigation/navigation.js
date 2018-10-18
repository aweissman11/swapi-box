import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import './navigation.css';

class Navigation extends Component {


  render() {
    const { totalFavorites } = this.props;
    // const themeSong = new Audio('./theme-song.mp3')
    return (
      <div className='navigation'>
        <ul>
          <li  className='nav-btn'> 
            <NavLink to='/'>Home</NavLink>
          </li>
          <li  className='nav-btn'> 
            <NavLink to='/people'>People</NavLink>
          </li>
          <li  className='nav-btn'> 
            <NavLink to='/planets'>Planets</NavLink>
          </li>
          <li  className='nav-btn'>
            <NavLink to='/vehicles'>Vehicles</NavLink>
          </li>
          <li  className='nav-btn'> 
            <NavLink to='/favorites'>Favorites [{totalFavorites}]</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

Navigation.propTypes = {
  changePage: PropTypes.func.isRequired,
  pages: PropTypes.array.isRequired,
  currentPage: PropTypes.string.isRequired,
  totalFavorites: PropTypes.number.isRequired
};

export default Navigation;
