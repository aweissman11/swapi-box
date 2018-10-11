import React from 'react';

const Card = (props) => {
  return (
    <div className='card' >
      {
        Object.keys(props.stats).map( (stat, i) => {
          return (
            <p>{stat.toUpperCase()}: {props.stats[stat]}</p>
          )
        })
      }
    </div>
  )
}

export default Card;