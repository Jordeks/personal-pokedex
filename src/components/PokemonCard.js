import React, { useState, useEffect } from 'react';
import { getPokemon } from '../services/pokemon';
import { NavLink } from 'react-router-dom';

const PokemonCard = (props) => {
  return (
    <NavLink
      className='card'
      to={{ pathname: `/pokemon/${props.id}`, id: props.id }}
    >
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
