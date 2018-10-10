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
      movies: [],
      people: [],
      vehicles: [],
      currentPage: 'scroll'
    }
  }

  changePage = (page) => this.setState({currentPage: page})

  async componentDidMount() {
    const movies = await this.state.fetchMethods.getMovieText();
    this.setState({ movies })
  }

// on the display add logic that generates a random numberand then display that index of the movies array.


  render() {
    const { currentPage } = this.state

    return (
      <div className="App">
        <Navigation
          changePage={this.changePage}
        />
        {
          (currentPage === 'scroll') ? 
          <ScrollSection /> : <CardsContainer 
                                currentPage={currentPage}
                                />
        }
      </div>
    );
  }
}

export default App;
