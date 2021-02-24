import Header from "./Header";
import PokemonResults from "./PokemonResults";
import filterPokemonBySearch from "./filterPokemonBySearch";
import './App.css';
import React, {useState, useEffect} from "react";

//TODO: semicolons
//TODO: EvolutionLinesfiltern
//TODO: nach Generationen filtern
//TODO: mobile
//TODO: freien Platz links entfernen

export default function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [generation, setGeneration] = useState(1);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [input, setInput] = useState("");

  //const [evolutionChainUrls, setEvolutionChainUrls] = useState([])

  useEffect(() => {
    handleSearchChange(setFilteredPokemon,allPokemon,input)
   },[allPokemon,input]);

 useEffect(() => {
   fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
   .then(response => response.json())
   .then((data) => setAllPokemon(data.results));
 },[generation]);

 // useEffect(() => {
 //   fetchEvolutionChainURLs(setEvolutionChainUrls,generation)
 // },[generation]);

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

function handleSearchChange(setFilteredPokemon,allPokemon,input) {
  setFilteredPokemon(filterPokemonBySearch(allPokemon,input));
}

// function fetchEvolutionChainURLs(setEvolutionLineUrls,generation) {
//   var i = 1;
//     for (i; i <= 151; i+=1) {
//       fetch("https://pokeapi.co/api/v2/pokemon-species/"+i)
//       .then(response => response.json())
//       .then((data) => setEvolutionLineUrls(data.evolution_chain.url));
//   }}

// function getPokemonInEvolutionChain(evolutionLineUrls,generation) {
//   fetch(data.evolution_chain.url)
//   .then(response => response.json())
//   .then((data) => {setFirstForm(data.chain.species.name);setFirstEvolutions(data.chain.evolves_to)})
// }
