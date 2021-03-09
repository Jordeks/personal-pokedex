import React, { useState, useEffect } from 'react';
import PokemonCard from '../components/PokemonCard';
import { getPokemons, getMorePokemons } from '../services/pokemons';

const AllPokemon = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data);
    });
  }, []);

  const morePokemon = () => {
    getMorePokemons().then((data) => {
      setPokemons(data);
    });
  };
  console.log(pokemons);
  return (
    <div className='cards'>
      {Object.entries(pokemons)[3] &&
        Object.entries(pokemons)[3][1].map((pokemon, index) => {
          return <PokemonCard key={index} {...pokemon} id={index + 1} />;
        })}
      <button onClick={morePokemon}>Next</button>
    </div>
  );
};

export default AllPokemon;
