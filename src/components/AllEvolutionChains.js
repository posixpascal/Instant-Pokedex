import React, { useState, useEffect } from "react";
import EvolutionChain from "./EvolutionChain";
import getEvoTrigger from "../helpers/getEvoTrigger";
import createEvolutionChains, {createPokemonWithoutEvolution,createShortEvolutionChain,createLongEvolutionChain} from "../helpers/createEvolutionChains"

function AllEvolutionChains(props) {
  const [firstForm, setFirstForm] = useState("");
  const [firstEvolutions, setFirstEvolutions] = useState([]);
  const [secondEvolutions, setSecondEvolutions] = useState([]);

  useEffect(() => {
     fetchData(
       props.setCurrentEvoLine,
       props.allPokemon,
       setFirstForm,
       props.setShownEvoLines,
       props.shownEvoLines,
       setFirstEvolutions,
       setSecondEvolutions,
       props.name,
       pokemonInGeneration
     );
  }, [props.name,props.allPokemon]);

  return (
    <div>
      {firstEvolutions.length > 0 ? (
        secondEvolutions.length > 0 ? (
          firstEvolutions.map((firstEvolution) =>
            firstEvolution.evolves_to.map((secondEvolution) => (
              createLongEvolutionChain(
                props.allPokemon,
                firstForm,
                getEvoTrigger(firstEvolution),
                firstEvolution.species.name,
                getEvoTrigger(secondEvolution),
                secondEvolution.species.name)
            ))
          )
        ) : (
          firstEvolutions.map((firstEvolution) => (
            createShortEvolutionChain(props.allPokemon,firstForm,getEvoTrigger(firstEvolution),firstEvolution.species.name)
          ))
        )
      ) :
        createPokemonWithoutEvolution(props.allPokemon,firstForm)
      }
    </div>
  );
}

function fetchData(
  setCurrentEvoLine,
  allPokemon,
  setFirstForm,
  setShownEvoLines,
  shownEvoLines,
  setFirstEvolutions,
  setSecondEvolutions,
  name,
  pokemonInGeneration,
) {
  fetch("https://pokeapi.co/api/v2/pokemon-species/" + name)
    .then((response) => response.json())
    .then((data) => {
      fetch(data.evolution_chain.url)
        .then((response) => response.json())
        .then((data) => {
          setFirstForm(data.chain.species.name);
          setFirstEvolutions(data.chain.evolves_to);
          data.chain.evolves_to.map((firstEvo) =>
            setSecondEvolutions(firstEvo.evolves_to)
          );
        });
    });
}



const pokemonInGeneration = (allPokemon, name) => {
  return allPokemon.map((p) => p.name).includes(name);
};

export default AllEvolutionChains;
