import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import './navigation.css';

class Navigation extends Component {

  render() {
    const { changePage, pages, currentPage } = this.props;
    // const themeSong = new Audio('./theme-song.mp3')
    return (
      <div className='navigation'>
        <ul>
          <li> 
            <NavLink to='/' className='nav-btn' >Home</NavLink>
          </li>
          <li> 
            <NavLink to='/people' className='nav-btn' >People</NavLink>
          </li>
          <li> 
            <NavLink to='/planets' className='nav-btn' >Planets</NavLink>
          </li>
          <li> 
            <NavLink to='/vehicles' className='nav-btn' >Vehicles</NavLink>
          </li>
          <li> 
            <NavLink to='/favorites' className='nav-btn' >Favorites</NavLink>
          </li>
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

// {
//             pages.map( page => {
//               if (page.toLowerCase() === currentPage) {
//                 return (
//                   <li
//                     key={page}
//                     onClick={() => changePage(page.toLowerCase())}
//                     className='current-nav-btn'
//                   >
//                     {page}
//                   </li>
//                 );
//               } else {
//                 return (
//                   <li
//                     key={page}
//                     onClick={() => changePage(page.toLowerCase())}
//                     className='nav-btn'
//                   >
//                     {page}
//                   </li>
//                 );
//               }
//             })
//           // }