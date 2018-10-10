import React, { Component } from 'react';
import Crawl from 'react-star-wars-crawl';
import 'react-star-wars-crawl/lib/index.css';

// import * as SWRepository from '../helper';
import './scroll-section.css';







const MyCrawlComponent = (props) => (
    <Crawl
      title='STAR WARS'
      subTitle={props.movie.title}
      text={
        <div>
          <p>{props.movie.opening}</p>
          <br />
          <p>Released: {props.movie.date}</p>
        </div>
      }
    >
    </Crawl>
)







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