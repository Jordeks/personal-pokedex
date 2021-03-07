const URL = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemon = (pokeId) => {
  return fetch(`${URL}/${pokeId}`).then((response) => response.json());
};
