const URL = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemons = () => {
  return fetch(URL).then((response) => response.json());
};
