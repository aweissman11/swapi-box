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
      currentPage: 'home',
      pageRepo: [],
      pages: ['Home', 'People', 'Planets', 'Vehicles', 'Favorites']
    }
  }

  changePage = async (currentPage) => {
    this.setState({
      currentPage
    })

    if (currentPage === 'home') {
      const movie = await getMovieText();
      this.setState({ movie }) 
    }
  }

  async componentDidMount() {
    const movie = await getMovieText();
    this.setState({ movie })
  }

  handleFavorites = (stats) => {

    if (localStorage.getItem('favorites')) {
      const jStored = localStorage.getItem('favorites')
      let stored = JSON.parse(jStored)
      if (!stored.find( item => item.Name === stats.Name)) {
        console.log('find')
        stored.push(stats)
      } else {
        console.log('filter')
        stored = stored.filter( item => item.Name !== stats.Name)
      }
      localStorage.setItem('favorites', JSON.stringify(stored));
    } else {
      const storageStats = JSON.stringify([stats]);
      localStorage.setItem('favorites', storageStats)
    }
  }

  render() {
    const { currentPage, movie, fetchMethods, pages } = this.state

    return (
      <div className="App">
        <Navigation
          changePage={this.changePage}
          currentPage={currentPage}
          pages={pages}
        />
        {
          (currentPage === 'home') ? 
          <ScrollSection 
            movie={movie}
          /> : 
          <CardsContainer
            currentPage={currentPage}
            getItemList={getItemList}
            handleFavorites={this.handleFavorites}
          />
        }
      </div>
    );
  }
}

export default App;
