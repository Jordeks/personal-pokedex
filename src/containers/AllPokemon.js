import React, { useState, useEffect } from 'react';
import { getPokemons } from '../services/pokemons';

const AllPokemon = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data);
    });
  }, []);

  const renderPokemonCards = () => {
    Object.entries(pokemons)[3].map((pokemon) => {});
  };

  return (
    <div>
      <div></div>I will hold allllllll of the PokemonCard's!!
    </div>
  );
};

export default AllPokemon;

// Object.entries(pokemons)[3]
