import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <div className='navigation'>
        <a>People</a>
        <a>Planets</a>
        <a>Vehicles</a>
        <a>Favorites</a>
      </div>
    )
  }
}

export default Navigation;