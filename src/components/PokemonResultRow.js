import "./PokemonResultRow.css";
import EvolutionChain from "./EvolutionChain";
import PropTypes from "prop-types";

function PokemonResultRow(props) {
  return (
    <div className="result-row">
        <h3 className="heading text-center text-sm-left mb-4">Are you looking for: <b className="capitalize">{props.name}</b>?</h3>
        <EvolutionChain name={props.name} allPokemon={props.allPokemon}/>
    </div>
  );
}

PokemonResultRow.propTypes = {
  name: PropTypes.string,
  allPokemon: PropTypes.array,
}

export default PokemonResultRow;
