import Header from "./Header"
import PokemonResults from "./PokemonResults"
import filterPokemonBySearch from "./filterPokemonBySearch"
import './App.css'
import React, {useState, useEffect} from "react"

export default function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [generation, setGeneration] = useState(1);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [input, setInput] = useState("");
  const [evolutionChainData, setEvolutionChainData] = useState([]);

  useEffect(() => {
    handleSearchChange(setFilteredPokemon,allPokemon,input)
   },[allPokemon,input]);

 useEffect(() => {
   fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
   .then(response => response.json())
   .then((data) => setAllPokemon(data.results));
 },[generation]);

 console.log(allPokemon)

  return (
    <div>
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
function handleSearchChange(setFilteredPokemon,allPokemon,input) {
  setFilteredPokemon(filterPokemonBySearch(allPokemon,input));
}
