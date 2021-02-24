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
    <div>
      <p className="id text-center mb-n1">#{id}</p>
      <h3 className="name capitalize text-center">{props.name}</h3>
      <div className="artwork">
        <img className="img-fluid h-100 w-100"src={"https://img.pokemondb.net/artwork/" + props.name +".jpg"} alt={props.name}/>
      </div>
      <div className="mt-2 justify-content-center">
      {!isBusy && types !== undefined ?
      <p className="types">{types.map(type => (<span className={type.type.name}>{capitalize(type.type.name)}</span>))}</p>
      :
      <div className="spinner-border justify-content-center align-self-center" role="status">
      <span className="sr-only">Loading...</span>
      </div>}
      </div>
    </div>
    )
  }

Pokemon.propTypes = {
  name: PropTypes.string,
  evoTrigger: PropTypes.array,
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default Pokemon;