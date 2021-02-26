import Header from "./Header";
import PokemonResults from "./PokemonResults";
import filterPokemonBySearch from "../helpers/filterPokemonBySearch";
import "./App.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [generation, setGeneration] = useState(1);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    handleSearchChange(setFilteredPokemon, allPokemon, input);
  }, [allPokemon, input]);

  useEffect(() => {
    fetchAllPokemon("?limit=900", setAllPokemon);
  }, [generation]);

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

// get all pokemon of the currently selected generation as json objects {"name":...,"url":...}
function fetchAllPokemon(generationQuery, setAllPokemon) {
  fetch("https://pokeapi.co/api/v2/pokemon/" + generationQuery)
    .then((response) => response.json())
    .then((data) => setAllPokemon(data.results));
}

const handleSearchChange = (setFilteredPokemon, allPokemon, input) => {
  setFilteredPokemon(filterPokemonBySearch(allPokemon, input));
};
