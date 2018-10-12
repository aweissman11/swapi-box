import React from 'react';

const Card = (props) => {
  return (
    <div className='card' >
      {
        Object.keys(props.stats).map( (stat, i) => {
          if (stat === 'Name') {
            return (
              <h4>{props.stats[stat].toUpperCase()}</h4>
            )
          } else {
            return (
              <p>{stat}: {props.stats[stat]}</p>
            )
          }
        })
      }
    </div>
  )
}

export default Card;