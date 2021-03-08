import React from 'react';

const Pokemon = (props) => {
  console.log(props.location.pokemon.name);
  return <div>I am a pokemon</div>;
};

export default Pokemon;
