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

  return (
    <div>
      <h2>{name}</h2>
      <img
        className='card__img'
        src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
        alt='pokemon-pic'
      />
      <ul>
        <li>Height: {height}</li>
        <li>Weight: {weight}</li>
        <li>Base XP:{base_experience}</li>
      </ul>

      <ul>
        Abilities:
        {pokemon.abilities &&
          pokemon.abilities.map((ability, index) => {
            return <li key={index}>{ability['ability']['name']}</li>;
          })}
      </ul>
      <ul>
        Stats:
        {pokemon.stats &&
          pokemon.stats.map((stat, index) => {
            return (
              <li key={index}>
                {stat['stat']['name']}:<span>{stat.base_stat}</span>
              </li>
            );
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
