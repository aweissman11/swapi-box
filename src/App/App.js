import React, { Component } from 'react';

import ScrollSection from '../scroll-section/scroll-section';
import CardsContainer from '../cards-container/cards-container';
import Navigation from '../navigation/navigation';
import './App.css';

import SWRepository from '../helper.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      fetchMethods: new SWRepository(),
      movie: {},
      people: [],
      vehicles: [],
      currentPage: 'scroll',
      pageRepo: []
    }
  }

  changePage = async (currentPage) => {

    const pageRepo = await this.state.fetchMethods.getItemList(currentPage);


    this.setState({
      currentPage,
      pageRepo
    })
  }

  async componentDidMount() {
    const movie = await this.state.fetchMethods.getMovieText();
    this.setState({ movie })
  }

  render() {
    const { currentPage, movie } = this.state

    return (
      <div className="App">
        <Navigation
          changePage={this.changePage}
        />
        {
          (currentPage === 'scroll') ? 
          <ScrollSection 
            movie={movie}
          /> : 
          <CardsContainer 
            currentPage={currentPage}
          />
        }
      </div>
    );
  }
}

export default App;
