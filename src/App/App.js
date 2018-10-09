import React, { Component } from 'react';

import ScrollSection from '../scroll-section/scroll-section';
import Navigation from '../navigation/navigation';
import './App.css';

class App extends Component {
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
