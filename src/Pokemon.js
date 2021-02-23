import React, {useState, useEffect} from "react"
import "./Pokemon.css"
import PropTypes from "prop-types";

function Pokemon(props) {
  const[types,setTypes] = useState(["Type","Type2"])
  const[id,setId] = useState(1)
  const[isBusy, setBusy] = useState(true);

  useEffect(() => {
    setBusy(true)
    fetch("https://pokeapi.co/api/v2/pokemon/" + props.name)
    .then(response => response.json())
    .then((data) =>  {setId(data.id);setTypes(data.types);setBusy(false)})
  },[props.name]);

  return (
    <div className="container mt-3">
        <div className="row">
        <div className="col-4 align-self-center d-inline-block justify-content-center">
        <p className="trigger">{props.evoTrigger}</p>
        </div>
        <div className="col-8">
        <div className="row justify-content-center">
        <p className="id text-center mb-n1">#{id}</p>
        </div>
        <div className="row justify-content-center">
        <h3 className="name capitalize text-center">{props.name}</h3>
        </div>
        <div className="row justify-content-center">
        <img className="artwork img-responsive" src={"https://img.pokemondb.net/artwork/" + props.name +".jpg"} alt={props.name}/>
        </div>
        <div className="row mt-2 justify-content-center">
        {isBusy || types == undefined ? (
              <div class="spinner-border justify-content-center align-self-center" role="status">
              <span class="sr-only">Loading...</span>
              </div>) : (
          <p className="types">{types.map(type => (<span className={type.type.name} >{type.type.name} </span>))}</p>)
        }
          </div>
          </div>
          </div>
        </div>
      )
    }

Pokemon.propTypes = {
  name: PropTypes.string,
  evoTrigger: PropTypes.string
}

export default Pokemon;
