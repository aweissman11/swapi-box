import React from 'react';

import './card.css';

const Card = (props) => {
  return (
    <div className='card' >
      {
        Object.keys(props.stats).map( (stat, i) => {
          if (stat === 'Name') {
            return (
              <h4 className='name'>{props.stats[stat].toUpperCase()}</h4>
            )
          } else {
            return (
              <p className='stat'>{stat}: {props.stats[stat]}</p>
            )
          }
        })
      }
    <button className='favorite'>
      <span className='star'>☆</span>
      <span className='star'>★</span>
      Favorite</button>
    </div>
  )
}

export default Card;