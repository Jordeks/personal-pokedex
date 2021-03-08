import React from 'react';

const Pokemon = (props) => {
  // console.log(props.location.pokemon && props.location.pokemon);

  const {
    id,
    name,
    height,
    base_experience,
    weight,
    abilities,
    stats,
    types,
  } = props.location.pokemon;

  console.log(types);

  return (
    <div>
      <h2>{name}</h2>
      <img
        className='card__img'
        src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
        alt='pokemon-pic'
      />
      <ul>
        <li>{height}</li>
        <li>{weight}</li>
        <li>{base_experience}</li>
      </ul>
      {abilities.map((ability) => {
        return (
          <ul>
            <li>{ability['ability']['name']}</li>
          </ul>
        );
      })}
      {stats.map((stat) => {
        return (
          <ul>
            <li>
              {stat['stat']['name']}:<span>{stat.base_stat}</span>
            </li>
          </ul>
        );
      })}
      {types.map((type) => {
        return (
          <ul>
            <li>{type['type']['name']}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Pokemon;
