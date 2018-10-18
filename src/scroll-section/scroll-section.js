import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './scroll-section.css';
import MyCrawlComponent from '../crawl-component/crawl-component';

class ScrollSection extends Component {
  render() {
    return (
      <div className="ScrollSection">
        <MyCrawlComponent movie={this.props.movie}/>
      </div>
    );
  }
}

ScrollSection.propTypes = {
  movie: PropTypes.object.isRequired
};

export default ScrollSection;