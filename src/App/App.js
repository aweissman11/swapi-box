import React, { Component } from 'react';

import ScrollSection from '../scroll-section/scroll-section';
import CardsContainer from '../cards-container/cards-container';
import Navigation from '../navigation/navigation';
import './App.css';

import { getMovieText, getItemList } from '../helper.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movie: {},
      people: [],
      vehicles: [],
      currentPage: 'scroll',
      pageRepo: []
    }
  }

  changePage = (currentPage) => {
    this.setState({
      currentPage
    })
  }

  async componentDidMount() {
    const movie = await getMovieText();
    this.setState({ movie })
  }

  render() {
    const { currentPage, movie, fetchMethods } = this.state

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
            getItemList={getItemList}
          />
        }
      </div>
    );
  }
}

export default App;
