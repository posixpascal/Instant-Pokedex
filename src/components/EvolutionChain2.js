import Pokemon from "./Pokemon";
import React, {useState, useEffect} from "react";
import "./EvolutionChain.css";
import PropTypes from "prop-types";
import getEvoTrigger from "../helpers/getEvoTrigger"

function EvolutionChain(props) {
  const [firstForm, setFirstForm] = useState("");
  const [firstEvolution,setFirstEvolution] = useState("")
  const [secondEvolution,setSecondEvolution] = useState("")
  return (
    <div className="row">
      <div className="col-3">
        <Pokemon name="firstForm"/>
      </div>
      <div className="col-4">
        <div className="row">
          <div className="col-3">
            <p>{firstEvoTrigger}</p>
          </div>
          <div className="col-9"
            <Pokemon name="firstEvolution"/>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="row">
          <div className="col-3">
            <p>{secondEvoTrigger}</p>
          </div>
          <div className="col-9"
            <Pokemon name="secondEvolution"/>
          </div>
        </div>
      </div>
    </div>
  )

}

const evoInGeneration = (allPokemon,evoName) => {
  return allPokemon.map((p) => p.name).includes(evoName);
}

EvolutionChain.propTypes = {
  name : PropTypes.string,
  allPokemon: PropTypes.array,
}

export default EvolutionChain;
