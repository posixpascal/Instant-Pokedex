import React, { useState, useEffect } from "react";
import EvolutionChain from "./EvolutionChain";
import getEvoTrigger from "../helpers/getEvoTrigger";
import createEvolutionChains, {
  createPokemonWithoutEvolution,
  createShortEvolutionChain,
  createLongEvolutionChain,
} from "../helpers/createEvolutionChains";
import PropTypes from "prop-types";

// fetches all evolution chains of a single pokemon and creates evolution chains
// depending on the length of the chain
// (either a single pokemon or 1 -2 levels of evolution)

function AllEvolutionChains(props) {
  const [firstForm, setFirstForm] = useState("");
  const [firstEvolutions, setFirstEvolutions] = useState([]);
  const [secondEvolutions, setSecondEvolutions] = useState([]);
  var i = 1;
  if (firstEvolutions.length > 0)
    for (i; i < firstEvolutions.length; i++)
      console.log(getEvoTrigger(firstEvolutions[i]));

  useEffect(() => {
    let mounted = true;
    fetchData(
      setFirstForm,
      setFirstEvolutions,
      setSecondEvolutions,
      props.name,
      mounted
    );
    return () => (mounted = false);
  }, [props.name, props.allPokemon]);

  return (
    <div>
      {firstEvolutions.length > 0
        ? secondEvolutions.length > 0
          ? firstEvolutions.map((firstEvolution) =>
              firstEvolution.evolves_to.map((secondEvolution) =>
                createLongEvolutionChain(
                  props.allPokemon,
                  firstForm,
                  getEvoTrigger(firstEvolution),
                  firstEvolution.species.name,
                  getEvoTrigger(secondEvolution),
                  secondEvolution.species.name
                )
              )
            )
          : firstEvolutions.map((firstEvolution) =>
              createShortEvolutionChain(
                props.allPokemon,
                firstForm,
                getEvoTrigger(firstEvolution),
                firstEvolution.species.name
              )
            )
        : createPokemonWithoutEvolution(props.allPokemon, firstForm)}
    </div>
  );
}

function fetchData(
  setFirstForm,
  setFirstEvolutions,
  setSecondEvolutions,
  name,
  mounted
) {
  fetch("https://pokeapi.co/api/v2/pokemon-species/" + name)
    .then((response) => response.json())
    .then((data) => {
      fetch(data.evolution_chain.url)
        .then((response) => response.json())
        .then((data) => {
          if (mounted) {
            setFirstForm(data.chain.species.name);
            setFirstEvolutions(data.chain.evolves_to);
            data.chain.evolves_to.map((firstEvo) =>
              setSecondEvolutions(firstEvo.evolves_to)
            );
          }
        });
    });
}

AllEvolutionChains.propTypes = {
  allPokemon: PropTypes.array,
  name: PropTypes.string,
};

export default AllEvolutionChains;
