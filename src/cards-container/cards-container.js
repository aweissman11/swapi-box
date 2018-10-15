import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { getItemList, currentPage } = this.props
    let pageRepo;

    switch(currentPage) {
      case('people') :
        pageRepo = await getItemList(currentPage)
        this.setState({ pageRepo })
        break;
      case('planets') :
        pageRepo = await getItemList(currentPage)
        this.setState({ pageRepo })
        break;
      case('vehicles') :
        pageRepo = await getItemList(currentPage)
        this.setState({ pageRepo })
        break;
      case('favorites') :
        pageRepo = JSON.parse(localStorage.getItem('favorites'))
        this.setState({ pageRepo })
        break;
    }
  }

  async componentDidUpdate(prevProps) {
    const { getItemList, currentPage } = this.props
    let pageRepo;

    if (currentPage !== prevProps.currentPage) {
      switch(currentPage) {
        case('people') :
          pageRepo = await getItemList(currentPage)
          this.setState({ pageRepo })
          break;
        case('planets') :
          pageRepo = await getItemList(currentPage)
          this.setState({ pageRepo })
          break;
        case('vehicles') :
          pageRepo = await getItemList(
            currentPage)
          this.setState({ pageRepo })
          break;
        case('favorites') :
          pageRepo = JSON.parse(localStorage.getItem('favorites'))
          this.setState({ pageRepo })
          break;
      }
    }
  }

  listCards = () => {
    return this.state.pageRepo.map( stats => (
      <Card
        stats={stats}
        handleFavorites={this.props.handleFavorites}
      />
    ))
  }

  render() {
    const { pageRepo } = this.state;
    return (
      <div>
    {
      (pageRepo.length < 1) ?
          <div className='cards-container'>
            <div className='container'>
              <div>
                <div className='cards'>
                  <h1> Repo Loading... </h1>
                </div>
              </div> 
            </div>
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
};

CardsContainer.propTypes = {
  getItemList: PropTypes.func.isRequired,
  currentPage: PropTypes.string.isRequired,
  handleFavorites: PropTypes.func.isRequired
}

export default CardsContainer;