import React from 'react';
import { NavLink } from 'react-router-dom';

const PokemonCard = (props) => {
  return (
    <NavLink className='card' to={{ pathname: `/pokemon/${props.name}` }}>
      <h3 className='card__title'>{props.name}</h3>
      <img
        className='card__img'
        src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`}
        alt='pokemon-pic'
      />
    </NavLink>
  );
};

export default PokemonCard;
