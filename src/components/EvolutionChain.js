import Pokemon from "./Pokemon";
import React, {useState, useEffect} from "react";
import "./EvolutionChain.css";
import PropTypes from "prop-types";
import getEvoTrigger from "../helpers/getEvoTrigger"

function EvolutionChain(props) {
  const [firstForm, setFirstForm] = useState("");
  const [firstEvolutions, setFirstEvolutions] = useState([]);
  const [firstFormInGeneration,setFirstFormInGeneration] = useState(false)
  const [firstFormShown, setFirstFormShown] = useState(false)

  useEffect(() => {
    fetchData(setFirstForm,setFirstEvolutions,props.name);
  },[props.name]);

  return(
    <div className="flex-sm-row flex-column d-flex">
      {evoInGeneration(props.allPokemon,firstForm) ?
      <div className="col-sm-3 align-self-center">
        <Pokemon name={firstForm}/>
      </div> : null
    }
      <div className ="col-sm-4 align-self-center">
        {firstEvolutions.map(evo =>
          (evoInGeneration(props.allPokemon,evo.species.name)) ?
          <div className="row">
            <div className="col-sm-3 align-self-center text-center">
              <p className="trigger pb-0 mb-0">{getEvoTrigger(evo)}</p>
            </div>
            <div className="col-sm-9">
              <Pokemon name={evo.species.name}/>
            </div>
          </div>: null)}
        </div>
        <div className="col-sm-4 ">
          {firstEvolutions.map(firstEvo =>
            (firstEvo.evolves_to.map(secondEvo => (evoInGeneration(props.allPokemon,secondEvo.species.name)) ?
            <div className="row">
              <div className="col-sm-3 align-self-center text-center">
                <p className="trigger pb-0 mb-0">{getEvoTrigger(secondEvo)}</p>
              </div>
              <div className="col-sm-9">
                <Pokemon name={secondEvo.species.name}/>
              </div>
            </div> : null)))}
          </div>
          <div className="col-1"><span></span></div>
        </div>
        );
      }

function fetchData(setFirstForm,setFirstEvolutions,name) {
  fetch('https://pokeapi.co/api/v2/pokemon-species/' + name)
  .then(response => response.json())
  .then((data) => { fetch(data.evolution_chain.url)
    .then(response => response.json())
    .then((data) => {setFirstForm(data.chain.species.name);setFirstEvolutions(data.chain.evolves_to)})});
}


const evoInGeneration = (allPokemon,evoName) => {
  return allPokemon.map((p) => p.name).includes(evoName);
}

EvolutionChain.propTypes = {
  name : PropTypes.string,
  allPokemon: PropTypes.array,
}

export default EvolutionChain;
