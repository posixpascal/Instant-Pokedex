import Pokemon from "./Pokemon";
import React, {useState, useEffect} from "react";
import "./EvolutionChain.css";
import PropTypes from "prop-types";
import getEvoTrigger from "../helpers/getEvoTrigger"

function EvolutionChain(props) {
  const [firstForm, setFirstForm] = useState("");
  const [firstEvolutions, setFirstEvolutions] = useState([]);

  useEffect(() => {
    fetchData(setFirstForm,setFirstEvolutions,props.name);
  },[props.name]);

//Test
// <div className="col-4">
// {firstEvolutions.map(firstEvo =>
//   (firstEvo.evolves_to.map(secondEvo => (secondEvo.species.url.split("/")[6] <= 151) ?
//    (
//     <Pokemon evoTrigger={getEvoTrigger(secondEvo)} name={secondEvo.species.name}/>
//   ) : null)))}
// </div> flex-column d-flex flex-sm-row align-items-center
      return(
          <div className="flex-sm-row flex-column d-flex align-bottom align-items-center">
            <div className="col-1"><span></span></div>
            <div className="col-3 align-self-center">
              <Pokemon name={firstForm}/>
            </div>
            <div className ="col-4 align-self-center">
              {firstEvolutions.map(evo =>
                (evo.species.url.split("/")[6] <= 151) ?
                  <div className="row">
                    <div className="col-3 align-self-center text-center">
                      <p className="trigger pb-0 mb-0">{getEvoTrigger(evo)}</p>
                      <hr className="pt-0 mt-0"></hr>
                    </div>
                  <div className="col-9">
                      <Pokemon name={evo.species.name}/>
                </div>
              </div>: null)}
            </div>
            <div className="col-4 h-100 align-self-center ">
              {firstEvolutions.map(firstEvo =>
                (firstEvo.evolves_to.map(secondEvo => (secondEvo.species.url.split("/")[6] <= 151) ?
                   <div className="row">
                     <div className="col-3 align-self-center text-center">
                       <p className="trigger pb-0 mb-0">{getEvoTrigger(secondEvo)}</p>
                       <hr className="pt-0 mt-0"></hr>
                     </div>
                     <div className="col-9">
                       <Pokemon name={secondEvo.species.name}/>
                    </div>
                   </div> : null)))}
            </div>
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

EvolutionChain.propTypes = {
  name : PropTypes.string,
}

export default EvolutionChain;
