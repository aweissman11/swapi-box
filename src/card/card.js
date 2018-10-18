import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './card.css';


class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFavorited: false,
      nowRemoved: ''
    };
  }

  componentDidMount() {
    this.setState({ isFavorited: this.isFavorited()});
  }
  
  isFavorited = () => {
    if (localStorage.getItem('favorites')) {
      let allFavorites = JSON.parse(localStorage.getItem('favorites'));
      if (allFavorites.find( favorite => (
        favorite.Name === this.props.stats.Name)
      )) {
        return true;
      } 
    } else {
      return false;
    }
  }

  favoriteThis = (stats) => {
    this.props.handleFavorites(stats);
    if (this.state.isFavorited === true) {
      this.setState({
        nowRemoved: 'This card will be removed on refresh',
        isFavorited: !this.state.isFavorited
      });
    } else {
      this.setState({
        nowRemoved: '',
        isFavorited: !this.state.isFavorited
      });
    }
  }

  render() {
    return (
      <div className='card' >
        {
          Object.keys(this.props.stats).map( (stat) => {
            if (stat === 'Name') {
              return (
                <h4 key={stat} className='name'>{this.props.stats[stat].toUpperCase()}</h4>
              );
            } else {
              return (
                <p key={stat} className='stat'>{stat}: {this.props.stats[stat]}</p>
              );
            }
          })
        }
        <div>
          {
            (this.props.currentPage == 'favorites') ? 
              <p>{this.state.nowRemoved}</p> :
              <p></p>
          }
        </div>
        <button 
          className='favorite'
          onClick={() => this.favoriteThis(this.props.stats)}
        >
          {
            (this.state.isFavorited) ?
              <span className='star'>★</span> :
              <span className='star'>☆</span>
          }
        Favorite</button>
      </div>
    );
  }
}

Card.propTypes = {
  stats: PropTypes.object.isRequired,
  handleFavorites: PropTypes.func.isRequired,
  currentPage: PropTypes.string.isRequired,
};

export default Card;