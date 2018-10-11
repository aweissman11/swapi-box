import React from 'react';

const Card = (props) => {
  return (
    <div className='card' >
      <p>{props.stats.name}</p>
      {
        Object.keys(props.stats).map( (stat, i) => {
          return (
            <p>{stat}: {props.stats[stat]}</p>
          )
        })
      }
    </div>
  )
}

export default Card;