import axios from "axios";

const pokedex = axios.create({
  baseURL: "https://pokeapi.glitch.me/v1/",
});

export default pokedex;

export const getById = async (id) => {
  try {
    const response = await pokedex.get(`pokemon/${id}`);
    const data = response.data;
    return data;
  } 
  
  catch (error) {
    return error;
  }
  
};
