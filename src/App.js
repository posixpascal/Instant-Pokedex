import Header from "./components/Header";
import PokemonResults from "./components/PokemonResults";
import filterPokemonBySearch from "./helpers/filterPokemonBySearch";
import './App.css';
import React, {useState, useEffect} from "react";

//TODO: semicolons
//TODO: EvoTrigger aus Pokemon rausziehen?
//TODO: freien Platz links entfernen
//TODO: evolutionChain.js aufspalten
//TODO: andere evoTrigger
//TODO: EvoTrigger Golem

//TODO: nach Generationen filtern
//TODO: mobile


export default function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [generation, setGeneration] = useState(1);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [input, setInput] = useState("");
  const handleSearchChange = ((setFilteredPokemon,allPokemon,input) => {
    setFilteredPokemon(filterPokemonBySearch(allPokemon,input));
  });

  useEffect(() => {
    handleSearchChange(setFilteredPokemon,allPokemon,input)
   },[allPokemon,input]);

 useEffect(() => {
   fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
   .then(response => response.json())
   .then((data) => setAllPokemon(data.results));
 },[generation]);

  return (
    <div className="container">
      <Header
        textChange={handleSearchChange}
        inputHandler={setInput}
        generationHandler={setGeneration}
      />
      <PokemonResults
        pokemonData={filteredPokemon}
        input={input}
      />
    </div>
  );
}
