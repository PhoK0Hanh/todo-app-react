import axios from "axios";

export function getPokemon(id) {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
}
