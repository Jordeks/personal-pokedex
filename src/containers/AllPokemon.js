import React, { useState, useEffect } from 'react';
import { getPokemons } from '../services/pokemons';

const AllPokemon = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons().then((data) => {
      console.log(data);
    }, []);
  });

  return (
    <div>
      <div></div>I will hold allllllll of the PokemonCard's!!
    </div>
  );
};

export default AllPokemon;
