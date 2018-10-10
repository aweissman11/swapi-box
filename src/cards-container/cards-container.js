import React, { Component } from 'react';

class CardsContainer extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return(
      <div>
        <h1>STAR</h1>
        <h2>The Return of the Semi</h2>
        <h1>WARS</h1>
        <h2>{this.props.currentPage}</h2>
        <div className='cards'>
          <p>cards</p>
          <p>cards</p>
          <p>cards</p>
          <p>cards</p>
          <p>cards</p>
          <p>cards</p>
          <p>cards</p>
          <p>cards</p>
          <p>cards</p>
          <p>cards</p>
          <p>cards</p>
        </div>
      </div>
    )
  }
}

export default CardsContainer;