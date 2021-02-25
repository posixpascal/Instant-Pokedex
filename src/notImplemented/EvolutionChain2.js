import Pokemon from "./Pokemon";
import React, { useState, useEffect } from "react";
import "./EvolutionChain.css";
import PropTypes from "prop-types";
import getEvoTrigger from "../helpers/getEvoTrigger";

function EvolutionChain(props) {
  const[show, setShow] = useState(false)
  return (
    <div className="row">
    {pokemonInGeneration(props.allPokemon,props.firstForm) && props.getFirstEvolution === undefined ?
    <div className="col-3">
      <Pokemon name={props.firstForm} />
    </div>
    : null}
    {pokemonInGeneration(props.allPokemon,props.firstForm)
    //  && pokemonInGeneration(props.allPokemon,props.firstEvolution)
    ?
    <div className="col-4">
        <div className="row">
          <div className="col-3 align-self-center">
            <p className="trigger">{props.firstEvoTrigger}</p>
          </div>
          <div className="col-9">
            <Pokemon name={props.firstEvolution} />
          </div>
        </div>
    </div> : pokemonInGeneration(props.allPokemon,props.firstEvolution) ?
    <div className="col-3"><Pokemon name={props.firstEvolution}/></div> : null
    }
    <div className="col-4">
      {pokemonInGeneration(props.allPokemon,props.firstEvolution) &&
        pokemonInGeneration(props.allPokemon,props.secondEvolution) ? (
        <div className="row">
          <div className="col-3 align-self-center">
            <p className="trigger">{props.secondEvoTrigger}</p>
          </div>
          <div className="col-9">
            <Pokemon name={props.secondEvolution} />
          </div>
        </div>
      ) : pokemonInGeneration(props.allPokemon,props.secondEvolution) ?
        <div className="col-3"><Pokemon name={props.secondEvolution}/></div> : null}
    </div>
    </div>
  );
}

const pokemonInGeneration = (allPokemon, name) => {
  return allPokemon.map((p) => p.name).includes(name);
};

const evolutionInGeneration = (allPokemon, firstName, secondName) => {
  const all = allPokemon.map((p) => p.name);
  return all.includes(firstName) && all.includes(secondName);
}

EvolutionChain.propTypes = {
  name: PropTypes.string,
  allPokemon: PropTypes.array,
};

export default EvolutionChain;
