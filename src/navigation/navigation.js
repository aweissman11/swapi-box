import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import './navigation.css';

class Navigation extends Component {


  render() {
    const { totalFavorites, currentPage, changePage } = this.props;
    // const themeSong = new Audio('./theme-song.mp3')
    return (
      <div className='navigation'>
        <ul>
          <NavLink to='/' onClick={() => changePage('navigation')}>
            <li 
              className={currentPage === 'home' ? 'current-nav-btn' : 'nav-btn'}
            >
              Home
            </li>
          </NavLink>
          <NavLink to='/people' onClick={() => changePage('people')}>
            <li 
              className={currentPage === 'people' ? 'current-nav-btn' : 'nav-btn'}
            >
              People
            </li>
          </NavLink>
          <NavLink to='/planets' onClick={() => changePage('planets')}>
            <li 
              className={currentPage === 'planets' ? 'current-nav-btn' : 'nav-btn'}
            >
              Planets
            </li>          
          </NavLink>
          <NavLink to='/vehicles' onClick={() => changePage('vehicles')}>
            <li 
              className={currentPage === 'vehicles' ? 'current-nav-btn' : 'nav-btn'}
            >
              Vehicles
            </li>
          </NavLink>
          <NavLink to='/favorites' onClick={() => changePage('favorites')}>
            <li 
              className={currentPage === 'favorites' ? 'current-nav-btn' : 'nav-btn'}
            >
              Favorites [{totalFavorites}]
            </li>
          </NavLink>
        </ul>
      </div>
    );
  }
}

Navigation.propTypes = {
  changePage: PropTypes.func.isRequired,
  currentPage: PropTypes.string.isRequired,
  totalFavorites: PropTypes.number.isRequired
};

export default Navigation;
