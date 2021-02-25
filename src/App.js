import Header from "./components/Header";
import PokemonResults from "./components/PokemonResults";
import filterPokemonBySearch from "./helpers/filterPokemonBySearch";
import getGenerationQuery from "./helpers/getGenerationQuery"
import './App.css';
import React, {useState, useEffect} from "react";

//TODO: evolutionChain.js aufspalten
//TODO: nach Generationen filtern
//TODO: mobile


export default function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [generation, setGeneration] = useState(1);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [input, setInput] = useState("");
  console.log(allPokemon)
  useEffect(() => {
    handleSearchChange(setFilteredPokemon,allPokemon,input)
  },[allPokemon,input]);

  useEffect(() => {
    fetchAllPokemon(getGenerationQuery(generation),setAllPokemon)
  },[generation]);

  return (
    <div className="container">
      <Header
        searchChangeHandler={handleSearchChange}
        inputHandler={setInput}
        generationHandler={setGeneration}
      />
      <PokemonResults
        filteredPokemon={filteredPokemon}
        allPokemon={allPokemon}
        input={input}
      />
    </div>
  );
}

function fetchAllPokemon(query,setAllPokemon) {
  fetch('https://pokeapi.co/api/v2/pokemon/' + query)
  .then(response => response.json())
  .then((data) => setAllPokemon(data.results));
}

const handleSearchChange = ((setFilteredPokemon,allPokemon,input) => {
  setFilteredPokemon(filterPokemonBySearch(allPokemon,input));
});
