import { useState } from "react";
import axios from "axios";

function PokemonButton() {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemon = async () => {
    try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=807");
        const names = response.data.results.map((pokemon) => pokemon.name);
        setPokemonList(names);
    }   catch(err){
        console.log(err);
    }
    
  }; 

  return (
    <div className="d-flex flex-column align-items-center">
      <button type="button" className="btn btn-primary mt-3 mb-3" onClick={fetchPokemon}>
        Fetch Pokemon
      </button>
        <ul>
          {pokemonList.map((pokemon, index) => (
            <li key={index}>{pokemon}</li>
          ))}
        </ul>
      </div>
  );
}

export default PokemonButton;
