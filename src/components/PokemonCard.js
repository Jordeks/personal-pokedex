import React from 'react';

const PokemonCard = (props) => {
  return (
    <div className='card'>
      <h3 className='card__title'>{props.name}</h3>
      <img
        className='card__img'
        src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`}
      />
    </div>
  );
};

export default PokemonCard;
