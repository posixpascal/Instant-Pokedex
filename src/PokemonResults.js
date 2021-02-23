import "./PokemonResults.css"
import PokemonResultRow from "./PokemonResultRow"
import Pokemon from "./Pokemon"
import PropTypes from "prop-types";

function PokemonResults(props) {
    return (
      <div className="container mt-5">
        {props.input.length === 0 ?
          <h1 className="placeholder text-center">Your selected Pokemon's evolution tree will be shown here</h1>
          : props.pokemonData.length > 0 ?
          props.pokemonData.map(data => (
            <div className="row my-3">
              <PokemonResultRow
                name={data.name}
                />
            </div>
          ))
          :
          <h1 className="text-center">No matching pokemon found</h1>
        }
      </div>
    )
}

PokemonResults.propTypes = {
  input: PropTypes.string,
  pokemonData: PropTypes.func
}

export default PokemonResults;
