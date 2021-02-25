import React, {useState} from "react"
import "./PokemonResultRow.css";
import AllEvolutionChains from "./AllEvolutionChains";
import PropTypes from "prop-types";
function PokemonResultRow(props) {
  return (
    <div className="result-row">
      <h3 className="heading text-center text-sm-left mb-4">
        Are you looking for: <b className="capitalize">{props.name}</b>?
      </h3>
      <AllEvolutionChains
        shownEvoLines={props.shownEvoLines}
        setCurrentEvoLine={props.setCurrentEvoLine}
        name={props.name}
        allPokemon={props.allPokemon}
      />

    </div>
  );
}

PokemonResultRow.propTypes = {
  name: PropTypes.string,
  allPokemon: PropTypes.array,
};

export default PokemonResultRow;
