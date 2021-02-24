import "./PokemonResultRow.css";
import EvolutionChain from "./EvolutionChain";
import PropTypes from "prop-types";

function PokemonResultRow(props) {
  return (
    <div className="result-row">
        <h3 className="heading mb-4">Are you looking for: <b className="capitalize">{props.name}</b>?</h3>
        <EvolutionChain name={props.name}/>
    </div>
  );
}

PokemonResultRow.propTypes = {
  name: PropTypes.string,
}

export default PokemonResultRow;
