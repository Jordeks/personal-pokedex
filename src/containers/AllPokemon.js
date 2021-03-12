import React, { useState, useEffect } from 'react';
import PokemonCard from '../components/PokemonCard';
import { getPokemons, getMorePokemons } from '../services/pokemons';
import Pokeball from '../images/pokeball.png';

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

  const lessPokemon = () => {
    getMorePokemons(count - 21).then((data) => {
      setPokemons(data);
      setCount((prevCount) => {
        return prevCount - 20;
      });
    });
  };

  return (
    <>
      <div className='cards'>
        {pokemons['results'] &&
          pokemons['results'].map((pokemon, index) => {
            return <PokemonCard key={index} {...pokemon} id={count + index} />;
          })}
      </div>
      <div className='footer'>
        <div className='footer__btn' onClick={lessPokemon}>
          <img className='footer__btn-img' src={Pokeball} alt='pokeball' />
          <span className='footer__btn-text'>Back</span>
        </div>
        <div className='footer__btn' onClick={morePokemon}>
          Next
        </div>
      </div>
    </>
  );
};

export default AllPokemon;
