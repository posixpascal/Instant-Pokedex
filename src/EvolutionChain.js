import Pokemon from "./Pokemon"
import React, {useState, useEffect} from "react"
import "./EvolutionChain.css"
import PropTypes from "prop-types";

function EvolutionChain(props) {
  const [firstForm, setFirstForm] = useState("");
  const [firstEvolutions, setFirstEvolutions] = useState([]);

  useEffect(() => {
    fetchData(setFirstForm,setFirstEvolutions,props.name);
  },[props.name]);

      return(
        <div className="container">
          <div className="flex-column d-flex flex-sm-row align-items-center">
            <div className="col-4 align-self-center justify-content-center">
              <Pokemon name={firstForm}/>
            </div>
            <div className ="col-4 col-xs-12 align-self-center">
            {firstEvolutions.map(evo =>
              (evo.species.url.split("/")[6] <= 151) ?
                (
                  <div id="firstEvo">
                  <Pokemon evoTrigger={getEvoTrigger(evo)} name={evo.species.name}/>
                  </div>
                )
                : (null)
            )}
            </div>
            <div className="col-4">
            {firstEvolutions.map(firstEvo =>
              (firstEvo.evolves_to.map(secondEvo => <Pokemon evoTrigger={getEvoTrigger(secondEvo)} name={secondEvo.species.name}/>)))}
            </div>
            <connection from="firstForm" to="firstEvo" tail></connection>
        </div>
      </div>
      )
    }

function fetchData(setFirstForm,setFirstEvolutions,name) {
  fetch('https://pokeapi.co/api/v2/pokemon-species/' + name)
  .then(response => response.json())
  .then((data) => { fetch(data.evolution_chain.url)
    .then(response => response.json())
    .then((data) => {setFirstForm(data.chain.species.name);setFirstEvolutions(data.chain.evolves_to)})})
}

function getEvoTrigger(evo) {
  const triggerName = evo.evolution_details[0].trigger.name
  let triggers = Object.entries(evo.evolution_details[0])
  .filter(([k, v]) => v != null && v != "" && k != "trigger");
  switch (triggerName) {
    case "level-up":
    return triggers.map(t => (t[0].replace("_"," ") + " " + t[1]));
    case "use-item":
    return  triggers.map(t => (triggerName.replace("-"," ") + " " + t[1].name.replace("-"," ")))
    case "trade":
    return triggers.map(t => (triggerName.replace("-"," ") + " while holding " + t[1].name.replace("-"," ")))
  }
  return "Evolution trigger not handled yet";
}
export default EvolutionChain;
