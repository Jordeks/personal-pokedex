import React, { useState, useEffect } from 'react';
import { getPokemon } from '../services/pokemon';
import { useLocation } from 'react-router-dom';

const Pokemon = () => {
  const location = useLocation();

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getPokemon(location.pathname).then((data) => {
      setPokemon(data);
    });
  }, [location.pathname]);

  const { id, name, height, weight, base_experience } = pokemon;

  console.log(pokemon.types && pokemon.types[0].type['name']);

  return (
    <div className='pokeCard'>
      <div className='pokeCard__header'>
        <h2 className='pokeCard__name'>{name}</h2>
        <div className='pokeCard__stats'>
          {pokemon.stats &&
            pokemon.stats.map((stat, index) => {
              return (
                <p key={index}>
                  {stat['stat']['name']}:
                  <span className='pokeCard__item'>
                    <strong>{stat.base_stat}</strong>
                  </span>
                </p>
              );
            })}
        </div>
      </div>
      <div className='pokeCard__imgContainer'>
        <img
          className='pokeCard__img'
          src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
          alt='pokemon-pic'
        />
      </div>
      <div>
        <span>Height: {height}</span>
        <span>Weight: {weight}</span>
        <span>Base XP:{base_experience}</span>
      </div>

      <ul>
        Abilities:
        {pokemon.abilities &&
          pokemon.abilities.map((ability, index) => {
            return <li key={index}>{ability['ability']['name']}</li>;
          })}
      </ul>
      <ul>
        Types:
        {pokemon.types &&
          pokemon.types.map((type, index) => {
            return <li key={index}>{type['type']['name']}</li>;
          })}
      </ul>
    </div>
  );
};

export default Pokemon;
