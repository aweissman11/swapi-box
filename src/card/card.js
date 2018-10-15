import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

const Card = (props) => {
  let allFavorites = JSON.parse(localStorage.getItem('favorites'));
  let isFavorited = (allFavorites.find( favorite => favorite.Name === props.stats.Name)); 
  return (
    <div className='card' >
      {
        Object.keys(props.stats).map( (stat, i) => {
          if (stat === 'Name') {
            return (
              <h4 key={stat} className='name'>{props.stats[stat].toUpperCase()}</h4>
            );
          } else {
            return (
              <p key={stat} className='stat'>{stat}: {props.stats[stat]}</p>
            );
          }
        })
      }
      <button 
        className='favorite'
        onClick={() => props.handleFavorites(props.stats)}
      >
        {
          (isFavorited) ?
            <span className='star'>☆</span> :
            <span className='star'>★</span>
        }
      Favorite</button>
    </div>
  );
};

Card.propTypes = {
  stats: PropTypes.array.isRequired,
  handleFavorites: PropTypes.func.isRequired
}

export default Card;