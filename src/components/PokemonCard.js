import React from 'react';

const PokemonCard = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <img
        src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`}
      />
    </div>
  );
};

export default PokemonCard;
