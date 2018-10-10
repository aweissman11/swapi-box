import React, { Component } from 'react';

import ScrollSection from '../scroll-section/scroll-section';
import Navigation from '../navigation/navigation';
import './App.css';
import SWRepository from '../helper.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      fetchMethods: new SWRepository,
      movies: [],
      people: [],
      vehicles: []
    }

  }

  async componentDidMount() {
    const movies = await this.state.fetchMethods.getMovieText();
    this.setState({ movies })
  }

// on the display add logic that generates a random numberand then display that index of the movies array.


  render() {

    return (
      <div className="App">
        <ScrollSection />
        <Navigation />
        <h1>STAR</h1>
        <h2>The Return of the Semi</h2>
        <h1>WARS</h1>
      </div>
    );
  }
}

export default App;
