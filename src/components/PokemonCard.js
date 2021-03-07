import React from 'react';
import { getPokemon } from '../services/pokemon';
import { NavLink } from 'react-router-dom';

const PokemonCard = (props) => {
  const fetchPokemon = () => {
    getPokemon(props.id).then((data) => {
      console.log(data);
    });
  };

  return (
    <NavLink className='card' to='/show'>
      <h3 className='card__title'>{props.name}</h3>
      <img
        className='card__img'
        src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`}
      />
    </NavLink>
  );
};

export default PokemonCard;
