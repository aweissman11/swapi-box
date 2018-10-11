import React, { Component } from 'react';

import ScrollSection from '../scroll-section/scroll-section';
import CardsContainer from '../cards-container/cards-container';
import Navigation from '../navigation/navigation';
import './App.css';

import { getMovieText, randomNumber, cleanMovieText, getItemList, cleanItemList, cleanPeople, fetchCall } from '../helper.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      // fetchMethods: new SWRepository(),
      movie: {},
      people: [],
      vehicles: [],
      currentPage: 'scroll',
      pageRepo: []
    }
  }

  changePage = async (currentPage) => {
    const pageRepo = await getItemList(currentPage);

    console.log('pageRepo:', pageRepo)

    this.setState({
      currentPage,
      pageRepo
    })
  }

  async componentDidMount() {
    const movie = await getMovieText();
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
