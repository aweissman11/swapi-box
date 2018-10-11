import React, { Component } from 'react';

import Card from '../card/card';
import './cards-container.css';

class CardsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pageRepo: []
    }
  }

  async componentDidMount() {
    const { fetchMethods, currentPage } = this.props
    let pageRepo

    switch(currentPage) {
      case('people') :
        pageRepo = await fetchMethods.getItemList(currentPage)

    }

    this.setState({ pageRepo })
  }

  listCards = () => {
    return this.state.pageRepo.map( stats => <Card stats={stats} />)
  }

  render() {
    const { pageRepo } = this.state;
    return (
      <div>
    {
      (pageRepo.length < 1) ?
          <div>
            <h1> No Repo </h1>
          </div> : 
          <div className='cards-container'>
            <div className='container'>
              <h1>STAR WARS</h1>
              <h2>The Return of the Semi</h2>
              <h2>{this.props.currentPage}</h2>
              <div className='cards'>
                { this.listCards() }
              </div>
            </div>
          </div>
      
    }
    </div>
    )
  }
}

export default CardsContainer;