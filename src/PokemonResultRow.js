import "./PokemonResultRow.css"
import Pokemon from "./Pokemon"
import EvolutionChain from "./EvolutionChain"
import PropTypes from "prop-types";

function PokemonRow(props) {
  console.log(props.name)
  return (
    <div className="container">
      <div className="row">
        <h3 className="heading">Are you looking for: <b className="capitalize">
          {props.name}</b>?</h3>
      </div>
      <div className="row">
        <EvolutionChain
          name={props.name}
          />
      </div>
      <hr></hr>
    </div>
  )
}

PokemonRow.propTypes = {
  name: PropTypes.string,
}

export default PokemonRow;
