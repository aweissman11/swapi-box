import React from 'react';
import Crawl from 'react-star-wars-crawl';
import 'react-star-wars-crawl/lib/index.css';

const MyCrawlComponent = (props) => (
  <Crawl
    title='STAR WARS'
    subTitle={props.movie.title}
    text={
      <span>
        <span>{props.movie.opening}</span>
        <br />
        <span>Released: {props.movie.date}</span>
      </span>
    }
  >
  </Crawl>
);

export default MyCrawlComponent;