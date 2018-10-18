import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import ScrollSection from '../scroll-section/scroll-section';
import CardsContainer from '../cards-container/cards-container';
import Navigation from '../navigation/navigation';
import './App.css';

import { getMovieText, getItemList } from '../helper.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      currentPage: 'home',
      pageRepo: [],
      pages: ['Home', 'People', 'Planets', 'Vehicles', 'Favorites'],
      totalFavorites: this.getTotalFavorites()
    };
  }

  getTotalFavorites = () => {
    if (localStorage.getItem('favorites')) {
      return JSON.parse(localStorage.getItem('favorites')).length;
    } else {
      return 0;
    }
  }

  changePage = async (currentPage) => {
    this.setState({
      currentPage
    });

    if (currentPage === 'home') {
      const movie = await getMovieText();
      this.setState({ movie }); 
    }
  }

  async componentDidMount() {
    try {
      const movie = await getMovieText();
      this.setState({ movie });
    } catch (error){
      throw new Error('These are not the data you are looking for...  Are you connected to the internet?  If so, please wait, the API is likely down.');
    }
  }

  handleFavorites = (stats) => {

    if (localStorage.getItem('favorites')) {
      const jStored = localStorage.getItem('favorites');
      let stored = JSON.parse(jStored);

      if (!stored.find( item => item.Name === stats.Name)) {
        stored.push(stats);
      } else {
        stored = stored.filter( item => item.Name !== stats.Name);
      }
      localStorage.setItem('favorites', JSON.stringify(stored));
      
    } else {
      const storageStats = JSON.stringify([stats]);
      localStorage.setItem('favorites', storageStats);
    }
    this.setState({totalFavorites: this.getTotalFavorites()});
  }

  render() {
    const { currentPage, movie, pages, totalFavorites } = this.state;

    return (
      <div className="App">
        <Navigation
          changePage={this.changePage}
          currentPage={currentPage}
          pages={pages}
          totalFavorites={totalFavorites}
        />
        <Route exact path='/' render={({ match }) => {
          return <ScrollSection
            movie={movie} />;
        }} />
        <Route exact path='/people' render={({ match }) => {
          return <CardsContainer
            currentPage='people'
            getItemList={getItemList}
            handleFavorites={this.handleFavorites}
          />;
        }} />
        <Route exact path='/planets' render={({ match }) => {
          return <CardsContainer
            currentPage='planets'
            getItemList={getItemList}
            handleFavorites={this.handleFavorites}
          />;
        }} />
        <Route exact path='/vehicles' render={({ match }) => {
          return <CardsContainer
            currentPage='vehicles'
            getItemList={getItemList}
            handleFavorites={this.handleFavorites}
          />;
        }} />
        <Route exact path='/favorites' render={({ match }) => {
          return <CardsContainer
            currentPage='favorites'
            getItemList={getItemList}
            handleFavorites={this.handleFavorites}
          />;
        }} />
      </div>
    );
  }
}

export default App;
// {
//   (currentPage === 'home') ? 
//     <ScrollSection 
//       movie={ movie }
//     /> : 
//     <CardsContainer
//       currentPage={currentPage}
//       getItemList={getItemList}
//       handleFavorites={this.handleFavorites}
//     />
// }
