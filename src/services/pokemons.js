const URL = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemons = () => {
  return fetch(URL).then((response) => response.json());
};

export const getMorePokemons = () => {
  return fetch(
    'https://pokeapi.co/api/v2/pokemon?offset=40&limit=20'
  ).then((response) => response.json());
};
