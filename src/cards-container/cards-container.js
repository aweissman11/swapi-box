import React, { Component } from 'react';

import './cards-container.css';

class CardsContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='cards-container'>
        <div className='container'>
          <h1>STAR WARS</h1>
          <h2>The Return of the Semi</h2>
          <h2>{this.props.currentPage}</h2>
          <div className='cards'>
            <div className='card'>
              <h4>title</h4>
              <p>cards</p>
              <p>cards</p>
              <p>cards</p>
              <p>cards</p>
              <p>cards</p>
            </div>
            <div className='card'>
              <h4>title</h4>
              <p>cards</p>
              <p>cards</p>
              <p>cards</p>
              <p>cards</p>
              <p>cards</p>
            </div>
            <div className='card'>
              <h4>title</h4>
              <p>cards</p>
              <p>cards</p>
              <p>cards</p>
              <p>cards</p>
              <p>cards</p>
            </div>
            <div className='card'>
              <h4>title</h4>
              <p>cards</p>
              <p>cards</p>
              <p>cards</p>
              <p>cards</p>
              <p>cards</p>
            </div>
            <div className='card'>
              <h4>title</h4>
              <p>cards</p>
              <p>cards</p>
              <p>cards</p>
              <p>cards</p>
              <p>cards</p>
            </div>
            <div className='card'>
              <h4>title</h4>
              <p>cards</p>
              <p>cards</p>
              <p>cards</p>
              <p>cards</p>
              <p>cards</p>
            </div>
            <div className='card'>
              <h4>title</h4>
              <p>cards</p>
              <p>cards</p>
              <p>cards</p>
              <p>cards</p>
              <p>cards</p>
            </div>
            <div className='card'>
              <h4>title</h4>
              <p>cards</p>
              <p>cards</p>
              <p>cards</p>
              <p>cards</p>
              <p>cards</p>
            </div>
            <div className='card'>
              <h4>title</h4>
              <p>cards</p>
              <p>cards</p>
              <p>cards</p>
              <p>cards</p>
              <p>cards</p>
            </div>
            <div className='card'>
              <h4>title</h4>
              <p>cards</p>
              <p>cards</p>
              <p>cards</p>
              <p>cards</p>
              <p>cards</p>
            </div>
            <div className='card'>
              <h4>title</h4>
              <p>cards</p>
              <p>cards</p>
              <p>cards</p>
              <p>cards</p>
              <p>cards</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CardsContainer;