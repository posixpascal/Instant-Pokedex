import PokemonResultRow from "./PokemonResultRow";
import Pokemon from "./Pokemon";
import PropTypes from "prop-types";
import React, { useState } from "react";

function PokemonResults(props) {
  return (
    <div className="align-items-center">
      {props.input.length === 0 ? (
        <h2 className="placeholder text-center">
          Your selected Pokemon's evolution tree will be shown here
        </h2>
      ) : props.filteredPokemon.length > 0 ?
      createRowsFromFilteredPokemon(props.allPokemon,props.filteredPokemon)
      :
      <h2 className="text-center">No matching pokemon found</h2>
    }
  </div>
);
}

PokemonResults.propTypes = {
  input: PropTypes.string,
  filteredPokemon: PropTypes.array,
  allPokemon: PropTypes.array,
};

// create a row that will show all evolution lines of the filtered pokemon
const createRowsFromFilteredPokemon = (allPokemon,filteredPokemon) =>
    filteredPokemon.map((p) => (
      <div className="row mx-2 mt-3">
        <PokemonResultRow
          name={p.name}
          allPokemon={allPokemon}
        />
    </div>
    )
  )


export default PokemonResults;
