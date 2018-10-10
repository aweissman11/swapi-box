import React, { Component } from 'react';

import ScrollSection from '../scroll-section/scroll-section';
import CardsContainer from '../cards-container/cards-container';
import Navigation from '../navigation/navigation';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentPage: 'scroll'
    }
  }

  changePage = (page) => this.setState({currentPage: page})

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
