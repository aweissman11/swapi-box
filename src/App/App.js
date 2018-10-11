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

  // Old changePage method. 
  // changePage = async (currentPage) => {
  //   const pageRepo = await this.state.fetchMethods.getItemList(currentPage);

  //   console.log('pageRepo:', pageRepo)

  //   this.setState({
  //     currentPage,
  //     pageRepo
  //   })
  // }

  changePage = (currentPage) => {
    this.setState({
      currentPage
    })
  }

  async componentDidMount() {
    const movie = await this.state.fetchMethods.getMovieText();
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
            fetchMethods={fetchMethods} 
            currentPage={currentPage}
          />
        }
      </div>
    );
  }
}

export default App;
