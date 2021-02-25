import PokemonResultRow from "./PokemonResultRow";
import Pokemon from "./Pokemon";
import PropTypes from "prop-types";
import React, {useState} from "react";

function PokemonResults(props) {
  return (
    <div className="align-items-center">
      {props.input.length === 0 ?
        <h2 className="placeholder text-center">Your selected Pokemon's evolution tree will be shown here</h2>
        : props.filteredPokemon.length > 0 ?
        props.filteredPokemon.map(data => (
          <div className="row mx-2 mt-3">
            <PokemonResultRow
              name={data.name}
              allPokemon={props.allPokemon}
              />
          </div>
        ))
        :
        <h2 className="text-center">No matching pokemon found</h2>}
        </div>
      );
    }

PokemonResults.propTypes = {
  input: PropTypes.string,
  filteredPokemon: PropTypes.array,
  allPokemon: PropTypes.array,
}

export default PokemonResults;
