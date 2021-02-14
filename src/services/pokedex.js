import axios from "axios";

const pokedex = axios.create({
  baseURL: "https://pokeapi.glitch.me/v1/",
});

export default pokedex;

