import React, { useState, useEffect } from 'react';
import PokemonCard from '../components/PokemonCard';
import { getPokemons, getMorePokemons } from '../services/pokemons';

const AllPokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data);
    });
  }, []);

  const morePokemon = () => {
    getMorePokemons(count + 19).then((data) => {
      setPokemons(data);
      setCount((prevCount) => {
        return prevCount + 20;
      });
    });
  };

  return (
    <div className='cards'>
      {pokemons['results'] &&
        pokemons['results'].map((pokemon, index) => {
          return <PokemonCard key={index} {...pokemon} id={count + index} />;
        })}
      <button onClick={morePokemon}>Next</button>
    </div>
  );
};

export default AllPokemon;
