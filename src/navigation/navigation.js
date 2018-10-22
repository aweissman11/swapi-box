import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import './navigation.css';

class Navigation extends Component {


  render() {
    const { totalFavorites, currentPage, changePage } = this.props;
    return (
      <div className='navigation'>
        <ul className='nav-ul'>
          <NavLink 
            className='nav-link-home'
            to='/' 
            onClick={() => changePage('home')}>
            <li 
              className={currentPage === 'home' ? 
                'current-nav-btn' : 'nav-btn'}
            >
              Home
            </li>
          </NavLink>
          <NavLink 
            className='nav-link-people'
            to='/people' 
            onClick={() => changePage('people')}>
            <li 
              className={currentPage === 'people' ? 
                'current-nav-btn' : 'nav-btn'}
            >
              People
            </li>
          </NavLink>
          <NavLink 
            className='nav-link-planets'
            to='/planets' 
            onClick={() => changePage('planets')}>
            <li 
              className={currentPage === 'planets' ? 
                'current-nav-btn' : 'nav-btn'}
            >
              Planets
            </li>          
          </NavLink>
          <NavLink 
            className='nav-link-vehicles'
            to='/vehicles' 
            onClick={() => changePage('vehicles')}>
            <li 
              className={currentPage === 'vehicles' ? 
                'current-nav-btn' : 'nav-btn'}
            >
              Vehicles
            </li>
          </NavLink>
          <NavLink 
            className='nav-link-favorites'
            to='/favorites' 
            onClick={() => changePage('favorites')}>
            <li 
              className={currentPage === 'favorites' ? 
                'current-nav-btn' : 'nav-btn'}
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
