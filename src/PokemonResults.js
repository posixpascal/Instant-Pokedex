import "./PokemonResults.css";
import PokemonResultRow from "./PokemonResultRow";
import Pokemon from "./Pokemon";
import PropTypes from "prop-types";
import React, {useState} from "react";

function PokemonResults(props) {
  const [shownEvoLines, setShownEvoLines] = useState([])
    return (

      <div className="row align-items-center">
      {props.input.length === 0 ?
        <h1 className="placeholder text-center">Your selected Pokemon's evolution tree will be shown here</h1>
        : props.pokemonData.length > 0 ?
            props.pokemonData.map(data => (
              <div className="row my-3">
              <PokemonResultRow
                shownEvoLines={shownEvoLines}
                name={data.name}
                />
              </div>
            ))
        :
        <h1 className="text-center">No matching pokemon found</h1>}
      </div>
    )
}

PokemonResults.propTypes = {
  input: PropTypes.string,
  pokemonData: PropTypes.func
}

export default PokemonResults;
