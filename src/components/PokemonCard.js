import React from 'react';
import { getPokemon } from '../services/pokemon';

const PokemonCard = (props) => {
  const fetchPokemon = () => {
    getPokemon(props.id).then((data) => {
      console.log(data);
    });
  };

  return (
    <div className='card' onClick={fetchPokemon}>
      <h3 className='card__title'>{props.name}</h3>
      <img
        className='card__img'
        src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`}
      />
    </div>
  );
};

export default PokemonCard;
