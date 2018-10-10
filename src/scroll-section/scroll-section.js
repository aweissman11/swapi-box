import React, { Component } from 'react';

// import * as SWRepository from '../helper';
import './scroll-section.css';
import MyCrawlComponent from '../crawl-component/crawl-component';


class ScrollSection extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className="ScrollSection">
        <MyCrawlComponent movie={this.props.movie}/>
      </div>
    );
  }
}

export default ScrollSection;