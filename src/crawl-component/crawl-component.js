import React from 'react';
import Crawl from 'react-star-wars-crawl';
import 'react-star-wars-crawl/lib/index.css';
import PropTypes from 'prop-types';

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

MyCrawlComponent.propTypes = {
  movie: PropTypes.object.isRequired
}

export default MyCrawlComponent